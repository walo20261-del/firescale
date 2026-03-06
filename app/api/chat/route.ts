import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, data } = await req.json();
  const specialty = data?.specialty || 'General Marketing';

  const result = await streamText({
    model: google('gemini-1.5-flash'),
    system: `You are the Cazeus Growth Architect specializing in ${specialty}. 
    - If Meta Ads: Focus on high-energy hooks, psychological triggers, and CAPI strategy.
    - If Email: Focus on behavioral flows, retention logic, and subject line CTR.
    Always use a technical, 'engineered' tone. Use Markdown for structure.`,
    messages,
  });

return result.toTextStreamResponse();
}