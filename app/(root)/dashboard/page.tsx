// app/dashboard/page.tsx

import React, { useEffect, useState } from 'react';
import { getUserBots } from '@/lib/actions/bot.actions';
import { useAuth } from '@clerk/nextjs'; // Assuming you're using Clerk for authentication
import { Bot } from '@/lib/database/models/bot.model';
import Link from 'next/link';

const DashboardPage = () => {
  const { userId } = useAuth();
  const [bots, setBots] = useState<Bot[]>([]);

  useEffect(() => {
    const fetchBots = async () => {
      if (userId) {
        const response = await getUserBots({ userId });
        setBots(response.data);
      }
    };
    fetchBots();
  }, [userId]);

  return (
    <main className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">Your Bots</h2>
        <Link href="/bot-builder">
          <a className="bg-purple-600 text-white px-4 py-2 rounded">
            Create New Bot
          </a>
        </Link>
      </div>
      {/* Bots List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bots.map((bot) => (
          <div key={bot._id} className="border p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">{bot.name}</h3>
            <p className="mb-2">Model: {bot.botModel}</p>
            <p className="mb-4">Language: {bot.settings.language}</p>
            <Link href={`/bot-builder/${bot._id}`}>
              <a className="text-purple-600">Manage Bot</a>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DashboardPage;
