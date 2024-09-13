import { Document, Schema, model, models } from "mongoose";

// Define the Bot interface extending from Document
export interface Bot extends Document {
  name: string;
  model: string;  // Model being used for the bot, e.g., "llama2-70b-4096"
  knowledgeBase: Array<{ content: string }>;  // Array of knowledge base contents
  settings: {
    language: string;
    tone: string;
  };
  integrations?: {
    hubspot?: string;
    mailchimp?: string;
    salesforce?: string;
  };
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the schema for the Bot model
const BotSchema = new Schema({
  name: { type: String, required: true },  // Name of the chatbot
  model: { type: String, required: true },  // Model used for the chatbot
  knowledgeBase: [
    {
      content: { type: String, required: true },  // Content for the knowledge base
    },
  ],
  settings: {
    language: { type: String, required: true },  // Language configuration
    tone: { type: String, required: true },  // Tone configuration (e.g., friendly, professional)
  },
  integrations: {
    hubspot: { type: String },
    mailchimp: { type: String },
    salesforce: { type: String },
  },
  author: { type: Schema.Types.ObjectId, ref: 'User' },  // Reference to the user who created the bot
  createdAt: { type: Date, default: Date.now },  // Creation date
  updatedAt: { type: Date, default: Date.now }  // Last updated date
});

// Create the Bot model using the schema, or retrieve an existing one
const Bot = models?.Bot || model('Bot', BotSchema);

export default Bot;
