// app/support/page.tsx

import React from 'react';

const SupportPage = () => {
  const faqs = [
    {
      question: 'How do I create a new chatbot?',
      answer:
        'To create a new chatbot, navigate to the Bot Builder page and follow the step-by-step wizard.',
    },
    {
      question: 'How can I integrate with Salesforce?',
      answer:
        'Go to the Integrations page and click on Connect next to Salesforce to initiate the integration.',
    },
    // Add more FAQs
  ];

  return (
    <main className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Support</h1>
      <h2 className="text-2xl font-semibold mb-4">Knowledge Base</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
      {/* Contact Form */}
      <h2 className="text-2xl font-semibold mb-4 mt-8">Contact Us</h2>
      <form>
        <label className="block mb-2">Your Email</label>
        <input
          type="email"
          className="border rounded w-full p-2 mb-4"
          required
        />
        <label className="block mb-2">Subject</label>
        <input
          type="text"
          className="border rounded w-full p-2 mb-4"
          required
        />
        <label className="block mb-2">Message</label>
        <textarea
          className="border rounded w-full p-2 mb-4"
          rows={5}
          required
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default SupportPage;
