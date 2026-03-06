// lib/agents/marketing-agent.ts
import { ToolLoopAgent } from 'ai';

export const marketingAgent = new ToolLoopAgent({
  // By default, AI SDK 6 uses Vercel AI Gateway
  model: 'google/gemini-3-flash', 
  instructions: `
    You are the Cazeus Prime Agent.
    Specialty: Meta Ads Creative & Behavioral Email Campaigns.
    Goal: Provide high-conversion hooks for ads and high-retention email flows.
    Tone: Professional, direct-response focused, high-energy.
  `,
});