"use server";

import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import Bot from "../database/models/bot.model";
import { redirect } from "next/navigation";

const populateUser = (query: any) =>
  query.populate({
    path: "author",
    model: User,
    select: "_id firstName lastName clerkId",
  });

// ADD BOT
export async function addBot({ bot, userId, path }: AddBotParams) {
  try {
    await connectToDatabase();

    const author = await User.findById(userId);

    if (!author) {
      throw new Error("User not found");
    }

    const newBot = await Bot.create({
      ...bot,
      author: author._id,
    });

    revalidatePath(path);

    return JSON.parse(JSON.stringify(newBot));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE BOT
export async function updateBot({ bot, userId, path }: UpdateBotParams) {
  try {
    await connectToDatabase();

    const botToUpdate = await Bot.findById(bot._id);

    if (!botToUpdate || botToUpdate.author.toHexString() !== userId) {
      throw new Error("Unauthorized or bot not found");
    }

    const updatedBot = await Bot.findByIdAndUpdate(botToUpdate._id, bot, {
      new: true,
    });

    revalidatePath(path);

    return JSON.parse(JSON.stringify(updatedBot));
  } catch (error) {
    handleError(error);
  }
}

// DELETE BOT
export async function deleteBot(botId: string) {
  try {
    await connectToDatabase();

    await Bot.findByIdAndDelete(botId);
  } catch (error) {
    handleError(error);
  } finally {
    redirect("/");
  }
}

// GET BOT BY ID
export async function getBotById(botId: string) {
  try {
    await connectToDatabase();

    const bot = await populateUser(Bot.findById(botId));

    if (!bot) throw new Error("Bot not found");

    return JSON.parse(JSON.stringify(bot));
  } catch (error) {
    handleError(error);
  }
}

// GET ALL BOTS
export async function getAllBots({
  limit = 9,
  page = 1,
  searchQuery = "",
}: {
  limit?: number;
  page: number;
  searchQuery?: string;
}) {
  try {
    await connectToDatabase();

    let query = {};

    if (searchQuery) {
      query = {
        name: {
          $regex: searchQuery,
          $options: "i",
        },
      };
    }

    const skipAmount = (Number(page) - 1) * limit;

    const bots = await populateUser(Bot.find(query))
      .sort({ updatedAt: -1 })
      .skip(skipAmount)
      .limit(limit);

    const totalBots = await Bot.find(query).countDocuments();
    const savedBots = await Bot.find().countDocuments();

    return {
      data: JSON.parse(JSON.stringify(bots)),
      totalPage: Math.ceil(totalBots / limit),
      savedBots,
    };
  } catch (error) {
    handleError(error);
  }
}

// GET BOTS BY USER
export async function getUserBots({
  limit = 9,
  page = 1,
  userId,
}: {
  limit?: number;
  page: number;
  userId: string;
}) {
  try {
    await connectToDatabase();

    const skipAmount = (Number(page) - 1) * limit;

    const bots = await populateUser(Bot.find({ author: userId }))
      .sort({ updatedAt: -1 })
      .skip(skipAmount)
      .limit(limit);

    const totalBots = await Bot.find({ author: userId }).countDocuments();

    return {
      data: JSON.parse(JSON.stringify(bots)),
      totalPages: Math.ceil(totalBots / limit),
    };
  } catch (error) {
    handleError(error);
  }
}
