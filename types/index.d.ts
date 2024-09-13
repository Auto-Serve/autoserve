/* eslint-disable no-unused-vars */

// ====== USER PARAMS
declare type CreateUserParams = {
    clerkId: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    photo: string;
  };
  
  declare type UpdateUserParams = {
    firstName: string;
    lastName: string;
    username: string;
    photo: string;
  };
  
  // ====== Chatbot PARAMS
  declare type CreateChatbotParams = {
    bot: {
        botId: string;
        name: string;
        model: string;
        language: string;
        tone: string;
        knowledgeBase: KnowledgeBaseEntry[];
    };
    userId: string;
    path: string;
  };
  
  declare type UpdateBotParams = {
    image: {
        botId: string;
        name: string;
        model: string;
        language: string;
        tone: string;
        knowledgeBase: KnowledgeBaseEntry[];
    };
    userId: string;
    path: string;
  };
  
  declare type KnowledgeBaseEntry = {
    type: "file" | "url";
    content: string;
    title?: string;
  };

  // ====== INTERACTION
  declare type UserInteractionParams = {
    botId: string;
    userId: string;
    message: string;
    timestamp: Date;
  };
  
  declare type ChatbotResponse = {
    message: string;
    context: string;
    confidence: number;
    sources?: string[];
  };
  
  // ====== TRANSACTION PARAMS
  declare type CheckoutTransactionParams = {
    plan: string;
    credits: number;
    amount: number;
    buyerId: string;
  };
  
  declare type CreateTransactionParams = {
    stripeId: string;
    amount: number;
    credits: number;
    plan: string;
    buyerId: string;
    createdAt: Date;
  };
  
  // ====== URL QUERY PARAMS
  declare type UrlQueryParams = {
    params: string;
    key: string;
    value: string | null;
  };
  
  declare type SearchParamProps = {
    params: { id: string; type: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };