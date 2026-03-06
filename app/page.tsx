'use client';
import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

export default function CazeusDashboard() {
  const [specialty, setSpecialty] = useState('Meta Ads');
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    body: { data: { specialty } },
  });

  return (
    <div className="min-h-screen bg-black text-zinc-200 font-sans p-4 md:p-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto flex justify-between items-center border-b border-zinc-800 pb-6 mb-8">
        <div>
          <h1 className="text-xl font-bold tracking-tighter text-white">CAZEUS // PRIME</h1>
          <p className="text-xs text-zinc-500 uppercase tracking-widest">Growth Operating System v1.0</p>
        </div>
        <div className="flex gap-2">
          {['Meta Ads', 'Email Campaigns'].map((s) => (
            <button
              key={s}
              onClick={() => setSpecialty(s)}
              className={`px-4 py-1 text-xs rounded-full border transition-all ${
                specialty === s ? 'bg-white text-black border-white' : 'border-zinc-700 text-zinc-500 hover:border-zinc-500'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Main Terminal */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-6">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 min-h-[500px] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.length === 0 && (
              <div className="text-zinc-600 italic text-sm">
                System Ready. Enter product details to architect a {specialty} strategy...
              </div>
            )}
            {messages.map((m) => (
              <div key={m.id} className={`p-4 rounded-lg ${m.role === 'user' ? 'bg-zinc-800/50 ml-12' : 'bg-blue-900/10 mr-12 border border-blue-900/20'}`}>
                <span className="text-[10px] uppercase font-bold text-zinc-500 mb-1 block">
                  {m.role === 'user' ? 'Client_Input' : 'AI_Architect'}
                </span>
                <div className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</div>
              </div>
            ))}
            {isLoading && <div className="text-xs animate-pulse text-blue-400">ARCHITECTING STRATEGY...</div>}
          </div>

          <form onSubmit={handleSubmit} className="relative">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder={`Describe the product for your ${specialty} plan...`}
              className="w-full bg-black border border-zinc-800 rounded-lg py-4 px-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button type="submit" className="absolute right-2 top-2 bottom-2 bg-white text-black px-6 rounded-md text-xs font-bold hover:bg-zinc-200 transition-all">
              EXECUTE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}