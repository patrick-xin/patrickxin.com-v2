import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.OPENAPI_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});
