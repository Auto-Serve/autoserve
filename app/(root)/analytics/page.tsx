// app/analytics/page.tsx

import React, { useEffect, useState } from 'react';
import { getBotAnalytics } from '../../lib/actions/analytics.actions';
import { useAuth } from '@clerk/nextjs';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const AnalyticsPage = () => {
  const { userId } = useAuth();
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      if (userId) {
        const data = await getBotAnalytics({ userId });
        setAnalyticsData(data);
      }
    };
    fetchAnalytics();
  }, [userId]);

  return (
    <main className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>
      <h2 className="text-xl font-semibold mb-4">Conversations Over Time</h2>
      <LineChart width={800} height={400} data={analyticsData}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Line type="monotone" dataKey="conversations" stroke="#8884d8" />
      </LineChart>
      {/* Add more charts and metrics as needed */}
    </main>
  );
};

export default AnalyticsPage;
