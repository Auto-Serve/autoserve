// app/bot-builder/page.tsx

import React, { useState } from 'react';
import { addBot } from '@/lib/actions/bot.actions';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const BotBuilderPage = () => {
  const { userId } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState(1);

  // Form state
  const [botName, setBotName] = useState('');
  const [botModel, setBotModel] = useState('GPT-4');
  const [language, setLanguage] = useState('English');
  const [tone, setTone] = useState('Friendly');
  const [knowledgeBase, setKnowledgeBase] = useState<File[]>([]);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async () => {
    // Prepare bot data
    const botData = {
      name: botName,
      botModel,
      settings: { language, tone },
      knowledgeBase: knowledgeBase.map((file) => ({
        content: file.name, // In a real app, you'd upload the file and store its reference
      })),
    };

    await addBot({ bot: botData, userId, path: '/dashboard' });
    router.push('/dashboard');
  };

  return (
    <main className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Bot Builder</h1>
      {/* Step Indicator */}
      <div className="flex mb-8">
        <div className={`flex-1 text-center ${step >= 1 ? 'font-bold' : ''}`}>
          1. Bot Details
        </div>
        <div className={`flex-1 text-center ${step >= 2 ? 'font-bold' : ''}`}>
          2. Configure Bot
        </div>
        <div className={`flex-1 text-center ${step >= 3 ? 'font-bold' : ''}`}>
          3. Knowledge Base
        </div>
      </div>

      {/* Step Forms */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Bot Details</h2>
          <label className="block mb-2">Bot Name</label>
          <input
            type="text"
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            className="border rounded w-full p-2 mb-4"
          />
          <button
            onClick={handleNext}
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Configure Bot</h2>
          <label className="block mb-2">AI Model</label>
          <select
            value={botModel}
            onChange={(e) => setBotModel(e.target.value)}
            className="border rounded w-full p-2 mb-4"
          >
            <option>GPT-4</option>
            <option>Llama2</option>
            <option>Gemma2</option>
            <option>Mistral</option>
          </select>
          <label className="block mb-2">Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded w-full p-2 mb-4"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            {/* Add more languages */}
          </select>
          <label className="block mb-2">Tone</label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="border rounded w-full p-2 mb-4"
          >
            <option>Friendly</option>
            <option>Professional</option>
            <option>Formal</option>
            {/* Add more tones */}
          </select>
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="bg-gray-300 text-black px-4 py-2 rounded"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Knowledge Base</h2>
          <label className="block mb-2">Upload Files</label>
          <input
            type="file"
            multiple
            onChange={(e) =>
              setKnowledgeBase(Array.from(e.target.files || []))
            }
            className="border rounded w-full p-2 mb-4"
          />
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="bg-gray-300 text-black px-4 py-2 rounded"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Create Bot
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default BotBuilderPage;
