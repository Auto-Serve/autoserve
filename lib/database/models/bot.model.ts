import { Document, Schema, model, models } from 'mongoose';

export interface Bot extends Document {
  name: string;
  botModel: string;
  knowledgeBase: Array<{ content: string }>;
  settings: {
    language: string;
    tone: string;
  };
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const BotSchema = new Schema({
  name: { type: String, required: true },
  botModel: { type: String, required: true },
  knowledgeBase: [
    {
      content: { type: String, required: true },
    },
  ],
  settings: {
    language: { type: String, required: true },
    tone: { type: String, required: true },
  },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Bot = models?.Bot || model('Bot', BotSchema);

export default Bot;
