'use server';

import { revalidatePath } from 'next/cache';
import { connectToDatabase } from '../database/mongoose';
import { handleError } from '../utils';
import User from '../database/models/user.model';
import Bot from '../database/models/bot.model';
import { redirect } from 'next/navigation';

// ADD BOT
export async function addBot({ bot, userId, path }: AddBotParams) {
  try {
    await connectToDatabase();

    const author = await User.findById(userId);

    if (!author) {
      throw new Error('User not found');
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
      throw new Error('Unauthorized or bot not found');
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
    redirect('/');
  }
}
