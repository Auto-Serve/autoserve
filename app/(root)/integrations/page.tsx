// app/integrations/page.tsx

import React from 'react';

const IntegrationsPage = () => {
  const availableIntegrations = [
    {
      name: 'Salesforce',
      icon: '/assets/icons/salesforce.svg',
      connected: false,
    },
    {
      name: 'HubSpot',
      icon: '/assets/icons/hubspot.svg',
      connected: true,
    },
    {
      name: 'MailChimp',
      icon: '/assets/icons/mailchimp.svg',
      connected: false,
    },
  ];

  const handleConnect = (serviceName: string) => {
    // Initiate OAuth flow or API connection
    alert(`Connecting to ${serviceName}`);
  };

  return (
    <main className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Integrations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {availableIntegrations.map((integration) => (
          <div
            key={integration.name}
            className="border p-4 rounded text-center"
          >
            <img
              src={integration.icon}
              alt={integration.name}
              className="mx-auto mb-4 h-16"
            />
            <h3 className="text-xl font-semibold mb-2">
              {integration.name}
            </h3>
            {integration.connected ? (
              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                disabled
              >
                Connected
              </button>
            ) : (
              <button
                onClick={() => handleConnect(integration.name)}
                className="bg-purple-600 text-white px-4 py-2 rounded"
              >
                Connect
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default IntegrationsPage;
