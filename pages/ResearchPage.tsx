
import React from 'react';
import { RESEARCH } from '../constants';

export const ResearchPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 pt-32 pb-32">
      <header className="mb-24">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[2px] bg-purple-500" />
          <span className="mono text-purple-400 uppercase tracking-widest">Active Research</span>
        </div>
        <h1 className="text-6xl font-black tracking-tighter mb-8">Pioneering in LLMs <br />& AI Agents</h1>
        <p className="text-white/50 max-w-2xl">
          Exploring the frontiers of transformer architectures and autonomous reasoning systems. 
          Our current focus is on building robust feedback loops for multi-agent collaboration.
        </p>
      </header>

      <div className="space-y-12">
        {RESEARCH.map((paper, idx) => (
          <div 
            key={paper.id}
            className="p-12 rounded-[3rem] bg-white/[0.01] border border-white/5 flex flex-col md:flex-row gap-12 items-center hover:bg-white/[0.02] transition-colors"
          >
            <div className="w-full md:w-1/3 text-6xl font-black text-white/5 mono">
              0{idx + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">{paper.title}</h3>
              <p className="text-white/40 mb-8 italic">{paper.summary}</p>
              <div className="flex flex-wrap gap-3">
                {paper.highlights.map(h => (
                  <span key={h} className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-32 p-16 rounded-[4rem] bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20">
        <h2 className="text-4xl font-bold mb-8">Let's Collaborate</h2>
        <p className="text-xl text-white/60 mb-12 max-w-xl">
          Interested in LLM efficiency or Agentic workflows? I'm always looking for small-scale research projects to contribute to.
        </p>
        <button className="px-8 py-4 bg-purple-600 rounded-full font-bold hover:bg-purple-500 transition-colors">
          Download Full Whitepapers
        </button>
      </section>
    </div>
  );
};
