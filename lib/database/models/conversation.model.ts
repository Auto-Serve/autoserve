// lib/database/models/conversation.model.ts

import mongoose, { Schema, Document, Model } from 'mongoose';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export interface ConversationDocument extends Document {
  botId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<Message>({
  sender: {
    type: String,
    enum: ['user', 'bot'],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const ConversationSchema = new Schema<ConversationDocument>(
  {
    botId: {
      type: Schema.Types.ObjectId,
      ref: 'Bot',
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    messages: {
      type: [MessageSchema],
      default: [],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Ensure that we don't recompile the model if it's already compiled
const Conversation: Model<ConversationDocument> =
  mongoose.models.Conversation ||
  mongoose.model<ConversationDocument>('Conversation', ConversationSchema);

export default Conversation;
