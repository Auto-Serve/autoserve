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

// ====== BOT PARAMS
declare type AddBotParams = {
  bot: {
    name: string;
    botModel: string;
    settings: {
      language: string;
      tone: string;
    };
    knowledgeBase: KnowledgeBaseEntry[];
  };
  userId: string;
  path: string;
};

declare type UpdateBotParams = {
  bot: {
    _id: string;
    name: string;
    botModel: string;
    settings: {
      language: string;
      tone: string;
    };
    knowledgeBase: KnowledgeBaseEntry[];
  };
  userId: string;
  path: string;
};

declare type KnowledgeBaseEntry = {
  content: string;
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
declare type FormUrlQueryParams = {
  searchParams: string;
  key: string;
  value: string | number | null;
};

declare type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

declare type RemoveUrlQueryParams = {
  searchParams: string;
  keysToRemove: string[];
};

declare type SearchParamProps = {
  params: { id: string; type: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
