'use client';
import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Zap, ShieldCheck, BarChart3, ChevronRight, Cpu, Layers, Globe } from 'lucide-react';

export default function CazeusWholeProject() {
  const [activeTab, setActiveTab] = useState('meta');
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    body: { data: { specialty: activeTab === 'meta' ? 'Meta Ads' : 'Email Retention' } },
  });

  return (
    <div className="min-h-screen bg-[#020202] text-zinc-400 font-mono selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[120px] rounded-full" />
      </div>

      {/* NAV */}
      <nav className="relative z-50 border-b border-zinc-900/50 bg-black/50 backdrop-blur-md p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <span className="text-white font-bold tracking-[0.3em] text-sm uppercase">Cazeus // Prime</span>
          </div>
          <div className="hidden md:flex gap-8 text-[9px] uppercase tracking-[0.25em] font-medium">
            <a href="#lab" className="hover:text-white transition-colors">The_Lab</a>
            <a href="#" className="hover:text-white transition-colors">Frameworks</a>
            <span className="text-zinc-700">|</span>
            <span className="text-blue-500">REV_2.0.6</span>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        
        {/* HERO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 mb-8">
            <Globe size={12} className="text-blue-500" />
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Global Growth Architecture</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            SCALE WITH<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
              SYSTEMATIC CREATIVE.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-500 text-sm md:text-base leading-relaxed font-sans mb-12">
            "Logic over luck. Formulas over feelings." We build high-energy video ads that stop the scroll and behavioral email logic that keeps customers forever.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all">
              Start Project
            </button>
            <button className="border border-zinc-800 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-zinc-900 transition-all">
              View Lab
            </button>
          </div>
        </motion.div>

        {/* THE LAB (AI TERMINAL) */}
        <section id="lab" className="mb-32">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-white tracking-tighter uppercase italic">The Performance Lab</h2>
              <div className="h-[1px] w-24 bg-zinc-800" />
            </div>
            <div className="flex bg-zinc-900/50 p-1 rounded-lg border border-zinc-800">
              <button 
                onClick={() => setActiveTab('meta')}
                className={`px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-md transition-all ${activeTab === 'meta' ? 'bg-zinc-800 text-white shadow-xl' : 'text-zinc-600 hover:text-zinc-400'}`}
              >
                Meta Specialist
              </button>
              <button 
                onClick={() => setActiveTab('email')}
                className={`px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-md transition-all ${activeTab === 'email' ? 'bg-zinc-800 text-white shadow-xl' : 'text-zinc-600 hover:text-zinc-400'}`}
              >
                Retention Expert
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* TERMINAL CONTAINER */}
            <div className="lg:col-span-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-[#080808] border border-zinc-800/50 rounded-2xl overflow-hidden min-h-[500px] flex flex-col">
                  {/* TERMINAL HEADER */}
                  <div className="bg-zinc-900/30 px-6 py-4 border-b border-zinc-800/50 flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    </div>
                    <span className="text-[9px] text-zinc-500 uppercase tracking-[0.3em]">Module: {activeTab === 'meta' ? 'Ad_Architecture' : 'LTV_Retention'}</span>
                  </div>

                  {/* MESSAGES */}
                  <div className="flex-1 p-8 overflow-y-auto space-y-8">
                    {messages.length === 0 && (
                      <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                        <Cpu className="text-zinc-800 animate-spin-slow" size={40} />
                        <p className="text-zinc-700 text-xs italic tracking-widest uppercase">System Standby // Waiting for Project Parameters</p>
                      </div>
                    )}
                    {messages.map((m) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        key={m.id} 
                        className="space-y-2"
                      >
                        <span className={`text-[8px] font-black tracking-[0.4em] uppercase ${m.role === 'user' ? 'text-zinc-600' : 'text-blue-500'}`}>
                          {m.role === 'user' ? '► USER_INPUT' : '► CAZEUS_CORE'}
                        </span>
                        <div className={`text-sm leading-relaxed p-4 rounded-lg border ${m.role === 'user' ? 'bg-zinc-900/30 border-zinc-800/50' : 'bg-blue-500/5 border-blue-500/10 text-zinc-300'}`}>
                          {m.content}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* INPUT AREA */}
                  <form onSubmit={handleSubmit} className="p-6 bg-black border-t border-zinc-800/50">
                    <div className="relative flex items-center">
                      <input 
                        value={input}
                        onChange={handleInputChange}
                        placeholder={`Describe your ${activeTab === 'meta' ? 'product and target audience' : 'customer lifecycle'}...`}
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-5 px-6 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/50 transition-all"
                      />
                      <button className="absolute right-3 bg-white text-black h-10 px-6 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all">
                        Deploy
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* SIDEBAR STATS */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-zinc-900 bg-gradient-to-br from-zinc-900/50 to-transparent">
                <Layers className="text-blue-500 mb-4" size={18} />
                <h4 className="text-[10px] text-white font-bold uppercase tracking-widest mb-3">Core Framework</h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-[9px] uppercase tracking-tighter">
                    <span className="text-zinc-600">Precision</span>
                    <span className="text-blue-400">99.8%</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="w-[99%] h-full bg-blue-500" />
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl border border-zinc-800 bg-black">
                <BarChart3 className="text-cyan-500 mb-4" size={18} />
                <h4 className="text-[10px] text-white font-bold uppercase tracking-widest mb-1">Scale Metrics</h4>
                <p className="text-[10px] text-zinc-600 leading-loose uppercase tracking-tighter italic">"Formulas over feelings."</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 p-12 text-center">
        <p className="text-[9px] uppercase tracking-[0.5em] text-zinc-700">© 2026 Cazeus Engineering // Powered by Gemini 3 Flash</p>
      </footer>
    </div>
  );
}