export const navLinks = [
    {
      label: "Home",
      route: "/",
      icon: "/assets/icons/home.svg",
    },
    {
      label: "Bot Builder",
      route: "/bot-builder",
      icon: "/assets/icons/bot.svg",
    },
    {
      label: "Dashboard",
      route: "/dashboard",
      icon: "/assets/icons/dashboard.svg",
    },
    {
      label: "Integrations",
      route: "/integrations",
      icon: "/assets/icons/integrations.svg",
    },
    {
      label: "Analytics",
      route: "/analytics",
      icon: "/assets/icons/analytics.svg",
    },
    {
      label: "Profile",
      route: "/profile",
      icon: "/assets/icons/profile.svg",
    },
    {
      label: "Buy Credits",
      route: "/credits",
      icon: "/assets/icons/bag.svg",
    },
    {
      label: "support",
      route: "/support",
      icon: "/assets/icons/support.svg",
    },
  ];
  
  export const plans = [
    {
      _id: 1,
      name: "Free Plan",
      icon: "/assets/icons/free-plan.svg",
      price: 0,
      credits: 100,  // E.g., API call credits
      inclusions: [
        {
          label: "100 API Credits",
          isIncluded: true,
        },
        {
          label: "Basic Bot Features",
          isIncluded: true,
        },
        {
          label: "Standard Customer Support",
          isIncluded: true,
        },
        {
          label: "Limited Integrations",
          isIncluded: false,
        },
      ],
    },
    {
      _id: 2,
      name: "Pro Plan",
      icon: "/assets/icons/pro-plan.svg",
      price: 50,
      credits: 10000,
      inclusions: [
        {
          label: "10000 API Credits",
          isIncluded: true,
        },
        {
          label: "Full Bot Features",
          isIncluded: true,
        },
        {
          label: "Priority Customer Support",
          isIncluded: true,
        },
        {
          label: "All Integrations Included",
          isIncluded: true,
        },
      ],
    },
    {
      _id: 3,
      name: "Enterprise Plan",
      icon: "/assets/icons/enterprise-plan.svg",
      price: 299,
      credits: 100000000,
      inclusions: [
        {
          label: "100000000 API Credits",
          isIncluded: true,
        },
        {
          label: "Advanced Bot Features",
          isIncluded: true,
        },
        {
          label: "24/7 Priority Support",
          isIncluded: true,
        },
        {
          label: "Custom Integrations",
          isIncluded: true,
        },
      ],
    },
  ];
  
  export const defaultValues = {
    botName: "",
    language: "English",
    tone: "Friendly",
    integrations: {},
    apiCredits: 100,
  };
  
  export const creditFee = -10;