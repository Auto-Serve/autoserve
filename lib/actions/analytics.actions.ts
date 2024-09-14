// lib/actions/analytics.actions.ts

import { connectToDatabase } from '../database/mongoose';
import Bot from '../database/models/bot.model';
import Conversation from '../database/models/conversation.model';

interface AnalyticsData {
  date: string;
  conversations: number;
}

export const getBotAnalytics = async ({ userId }: { userId: string }) => {
  try {
    await connectToDatabase();

    // Fetch all bots for the user
    const bots = await Bot.find({ ownerId: userId });

    // Get bot IDs
    const botIds = bots.map((bot) => bot._id);

    // Fetch conversations for the bots
    const conversations = await Conversation.find({ botId: { $in: botIds } });

    // Process data to get analytics
    const analyticsData: AnalyticsData[] = [];

    // Aggregate conversations per day
    const conversationsByDate: { [key: string]: number } = {};

    conversations.forEach((conversation) => {
      const date = conversation.createdAt.toISOString().split('T')[0];
      if (conversationsByDate[date]) {
        conversationsByDate[date]++;
      } else {
        conversationsByDate[date] = 1;
      }
    });

    // Prepare analytics data
    for (const date in conversationsByDate) {
      analyticsData.push({
        date,
        conversations: conversationsByDate[date],
      });
    }

    // Sort data by date
    analyticsData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return analyticsData;
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    throw error;
  }
};
