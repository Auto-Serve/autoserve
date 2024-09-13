import { Document, Schema, model, models } from "mongoose";

// Define the Bot interface extending from Document
export interface Bot extends Document {
  name: string;
  model: string;
  knowledgeBase: Array<{ content: string }>;
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
  name: { type: String, required: true },
  model: { type: String, required: true },
  knowledgeBase: [
    {
      content: { type: String, required: true },
    },
  ],
  settings: {
    language: { type: String, required: true },
    tone: { type: String, required: true },
  },
  integrations: {
    hubspot: { type: String },
    mailchimp: { type: String },
    salesforce: { type: String },
  },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Create the Bot model using the schema, or retrieve an existing one
const Bot = models?.Bot || model('Bot', BotSchema);

export default Bot;
