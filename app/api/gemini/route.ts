// Initialize Google's Generative AI with API key
import { streamText, Message } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { initialMessage } from '@/lib/data';

// Configure Google AI client
const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY || '',
});

// Enable edge runtime for better performance
export const runtime = 'edge';

// Utility function to generate random IDs for messages
const generateId = () => Math.random().toString(36).slice(2, 15);

// Format messages for Google's AI model
// Includes initial context message plus conversation history
const buildGoogleGenAIPromt = (messages: Message[]): Message[] => [
  // Initial context message
  {
    id: generateId(),
    role: 'user',
    content: initialMessage.content,
  },
  // Map existing conversation messages
  ...messages.map((message) => ({
    id: message.id || generateId(),
    role: message.role,
    content: message.content,
  })),
];

// API route handler for chat requests
export async function POST(req: Request) {
  const { messages } = await req.json();
  // Stream response from AI model
  const stream = await streamText({
    model: google('gemini-pro'),
    messages: buildGoogleGenAIPromt(messages),
    temperature: 0.7, // Controls response randomness
  });
  return stream?.toDataStreamResponse();
}
