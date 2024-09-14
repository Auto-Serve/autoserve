// app/page.tsx

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils'; // Utility function for class names

const HomePage = () => {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-purple-gradient text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Create Intelligent Chatbots in Minutes
          </h1>
          <p className="text-xl mb-8">
            Empower your business with AI-driven chatbots. No coding required.
          </p>
          <Link href="/sign-up">
            <a className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold">
              Get Started for Free
            </a>
          </Link>
        </div>
      </section>

      {/* Features Overview */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center">
            <img
              src="/assets/icons/ai-model.svg"
              alt="AI Model Selection"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">AI Model Selection</h3>
            <p>
              Choose from top AI models like GPT-4, Llama2, and more to power
              your chatbot.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="text-center">
            <img
              src="/assets/icons/multilingual.svg"
              alt="Multilingual Support"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Multilingual Support</h3>
            <p>
              Communicate with customers globally with support for multiple
              languages.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="text-center">
            <img
              src="/assets/icons/integrations.svg"
              alt="Business Integrations"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Business Integrations</h3>
            <p>
              Seamlessly integrate with CRM tools, analytics platforms, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 w-full py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          {/* Add testimonials here */}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map through your plans from constants */}
          {plans.map((plan) => (
            <div
              key={plan._id}
              className="border rounded-lg p-6 text-center flex flex-col"
            >
              <img
                src={plan.icon}
                alt={plan.name}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">${plan.price}</p>
              <ul className="flex-1 mb-4">
                {plan.inclusions.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item.isIncluded ? '✅' : '❌'} {item.label}
                  </li>
                ))}
              </ul>
              <Link href="/sign-up">
                <a className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold">
                  Choose Plan
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-dark-700 text-white py-8">
        <div className="container mx-auto text-center">
          {/* Add footer content here */}
          <p>&copy; {new Date().getFullYear()} Your Company Name</p>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
