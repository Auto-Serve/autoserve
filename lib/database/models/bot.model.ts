// lib/database/models/bot.model.js

import { Schema, model, models } from "mongoose";

// Subschema for Question-Answer pairs
const QASchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const BotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  leads: {
    type: Number,
    default: 0,
  },
  links: [
    {
      type: String,
    },
  ],
  content: {
    type: String,
  },
  qas: [QASchema],
  instruction_prompt: {
    type: String,
  },
  title: {
    type: String,
  },
  welcome_message: {
    type: String,
  },
  wordpress_connection: {
    type: Boolean,
    default: false,
  },
  whatsapp_connection: {
    type: Boolean,
    default: false,
  },
  facebook_connection: {
    type: Boolean,
    default: false,
  },
  slack_connection: {
    type: Boolean,
    default: false,
  },
  zapier_connection: {
    type: Boolean,
    default: false,
  },
  make_connection: {
    type: Boolean,
    default: false,
  },
  hubspot_connection: {
    type: Boolean,
    default: false,
  },
});

const Bot = models?.Bot || model("Bot", BotSchema);

export default Bot;
