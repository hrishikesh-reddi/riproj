
import React from 'react';
import { Hero } from '../components/Hero';
import { ParallaxBackground } from '../components/ParallaxBackground';
import { HACKATHONS, CERTIFICATIONS, PROJECTS } from '../constants';

const HackathonCard: React.FC<{ hack: typeof HACKATHONS[0] }> = ({ hack }) => (
  <div className="group relative glass p-10 rounded-[3rem] overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:bg-white/[0.04]">
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
    <div className="flex justify-between items-start mb-10">
      <div className="px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 mono text-[9px] font-bold uppercase tracking-[0.2em]">
        {hack.result}
      </div>
      <div className="text-white/10 mono text-[10px] italic">{hack.year}</div>
    </div>
    <h3 className="text-3xl font-black mb-4 tracking-tighter group-hover:text-cyan-400 transition-colors">
      {hack.title}
    </h3>
    <p className="text-white/40 text-sm mb-10 leading-relaxed font-light italic">
      {hack.description}
    </p>
    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
      {hack.tags.map(tag => (
        <span key={tag} className="text-[9px] mono text-white/20 uppercase tracking-widest">#{tag}</span>
      ))}
    </div>
  </div>
);

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => (
  <div className="group relative bg-[#050505] border border-white/5 rounded-[3.5rem] overflow-hidden transition-all duration-700 hover:border-cyan-500/30">
    <div className="aspect-[16/10] overflow-hidden relative">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      <div className="absolute top-8 left-8 flex gap-2">
        <span className="mono text-[8px] uppercase tracking-widest px-3 py-1 bg-black/80 text-white/40 rounded-full border border-white/10">
          Build_00{project.id}
        </span>
      </div>
    </div>
    
    <div className="p-10 -mt-20 relative z-10">
      <span className="mono text-cyan-400 text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">
        {project.category}
      </span>
      <h3 className="text-4xl font-black tracking-tighter mb-6 group-hover:text-white transition-colors italic">
        {project.title.toUpperCase()}.
      </h3>
      <p className="text-white/30 text-sm font-light leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
        {project.description}
      </p>
      
      <div className="flex flex-col gap-6 pt-6 border-t border-white/5">
        <div className="flex items-center justify-between">
          <span className="mono text-[9px] text-white/20 uppercase tracking-widest">Stack Architecture</span>
          <div className="flex gap-3">
            {project.stack.map(s => (
              <span key={s} className="text-[9px] mono text-white/60">{s}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="mono text-[9px] text-white/20 uppercase tracking-widest">Product Focus</span>
          <span className="text-[10px] italic text-cyan-500/70">{project.productFocus}</span>
        </div>
      </div>
    </div>
  </div>
);

export const Home: React.FC = () => {
  return (
    <div className="relative">
      <ParallaxBackground />
      <Hero />

      {/* The Motive & Intro Section */}
      <section className="container mx-auto px-6 py-56">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
          <div className="lg:col-span-5">
            <div className="sticky top-40">
              <span className="mono text-cyan-500 text-xs tracking-[0.5em] uppercase mb-10 block font-bold italic">Archive // Introduction</span>
              <h2 className="text-8xl font-black tracking-tighter leading-[0.8] mb-12">
                BUILDING<br/>
                <span className="text-white/5 italic">FOR USE.</span>
              </h2>
              <div className="w-24 h-[1px] bg-white/20" />
              <div className="mt-16 space-y-4 mono text-[10px] text-white/30 uppercase tracking-[0.4em]">
                <div className="flex gap-4"><span className="text-cyan-500">→</span> Passionate Builder</div>
                <div className="flex gap-4"><span className="text-cyan-500">→</span> 3rd Year CS Student</div>
                <div className="flex gap-4"><span className="text-cyan-500">→</span> Linux Enthusiast</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-24">
            <div className="space-y-12">
              <h3 className="text-4xl font-black italic tracking-tight text-white/90">The Core Motive.</h3>
              <p className="text-2xl text-white/50 font-light leading-snug">
                I am a passionate builder exploring emerging technologies to architect practical, real-world projects. 
                My motive is simple: <span className="text-white underline decoration-cyan-500/30 underline-offset-8">to build things people love.</span>
              </p>
              <p className="text-xl text-white/30 font-light leading-relaxed">
                Before every hackathon, my session starts with a question: <span className="italic font-medium text-white/60">"How will this change a user's workflow?"</span> 
                I don't just solve prompts; I build products. Currently mastering the synergy between LLMs, agentic systems, and heterogeneous compute synthesis.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 group hover:border-cyan-500/20 transition-all">
                <div className="text-cyan-500 mb-8 font-black mono text-xs uppercase tracking-widest">Philosophy</div>
                <p className="text-lg font-light text-white/60 leading-relaxed italic">
                  "Efficiency is beauty. I strive to understand the bare metal—from the Linux kernel to GPU cores—to make high-level AI feel seamless."
                </p>
              </div>
              <div className="p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 group hover:border-purple-500/20 transition-all">
                <div className="text-purple-500 mb-8 font-black mono text-xs uppercase tracking-widest">Trajectory</div>
                <p className="text-lg font-light text-white/60 leading-relaxed italic">
                  "Moving from academic concepts to engineering reality. Building multimodal AI tools that integrate into daily life."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Featured Projects Section */}
      <section className="container mx-auto px-6 py-40 border-t border-white/5 bg-[#020202]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-4xl">
            <span className="mono text-purple-500 text-xs tracking-[0.6em] uppercase mb-6 block font-bold">DEPLOYMENTS // 2024-2025</span>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter italic">PRODUCT FORGE.</h2>
          </div>
          <p className="max-w-xs text-white/20 text-xs mono leading-relaxed uppercase tracking-widest">
            Selected architectures where I've bridged raw AI potential with practical product utility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block px-10 py-5 rounded-full border border-white/10 hover:border-cyan-500/40 transition-all group cursor-pointer">
            <span className="mono text-[10px] tracking-[0.5em] text-white/30 group-hover:text-cyan-400">EXPLORE FULL ARCHIVE ON GITHUB</span>
          </div>
        </div>
      </section>

      {/* Hackathons Archive */}
      <section className="container mx-auto px-6 py-40 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-3xl">
            <span className="mono text-cyan-400 text-xs tracking-[0.6em] uppercase mb-6 block font-bold">COMPETITIVE LOG // 001</span>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter italic">HACKATHONS.</h2>
          </div>
          <p className="max-w-xs text-white/20 text-xs mono leading-relaxed uppercase tracking-widest">
            The battlefield where I prove product utility under pressure. 48 hours to ship or fail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {HACKATHONS.map(hack => (
            <HackathonCard key={hack.id} hack={hack} />
          ))}
        </div>
      </section>

      {/* Academic Terminal Section */}
      <section className="container mx-auto px-6 py-40">
        <div className="glass rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          <div className="bg-white/5 px-10 py-5 flex items-center justify-between border-b border-white/10">
            <div className="flex gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/30" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
              <div className="w-3 h-3 rounded-full bg-green-500/30" />
            </div>
            <span className="mono text-[9px] text-white/20 tracking-[0.5em] uppercase">hrishikesh-redi@mec_terminal</span>
          </div>
          <div className="p-20 grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h2 className="text-6xl font-black mb-20 tracking-tighter italic">EDUCATION.</h2>
              <div className="space-y-20">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-transparent" />
                  <div className="text-cyan-400 mono text-xs mb-4 font-black tracking-[0.4em]">2021 — 2027</div>
                  <h4 className="text-3xl font-bold">Mahindra École Centrale</h4>
                  <p className="text-white/40 text-xl mt-3 font-light">B.Tech Computer Science <span className="text-white font-medium italic">(GPA: 7.0)</span></p>
                </div>
                <div className="relative pl-12 opacity-40">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10" />
                  <div className="text-white/30 mono text-xs mb-4">GRADUATED 2023</div>
                  <h4 className="text-3xl font-bold">Narayana Junior College</h4>
                  <p className="text-white/40 text-xl mt-3 font-light">Intermediate (MPC) <span className="font-medium">9.36 CGPA</span></p>
                </div>
              </div>
            </div>
            
            <div className="bg-black/40 p-12 rounded-[3rem] border border-white/5">
              <div className="mono text-sm text-green-400/80 mb-12 flex items-center gap-4">
                <span className="text-white/20">$</span>
                <span>ls certifications/ --all</span>
              </div>
              <div className="space-y-8">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="flex gap-8 group">
                    <span className="text-white/10 font-black mono">{i+1}</span>
                    <a href={cert.link} target="_blank" className="relative group-hover:text-white transition-colors">
                      <span className="text-lg font-bold block">{cert.name}</span>
                      <span className="text-[10px] mono text-white/20 uppercase tracking-widest mt-2 block italic">{cert.issuer} // CRED_FETCHED</span>
                    </a>
                  </div>
                ))}
              </div>
              <div className="mt-16 flex items-center gap-4">
                <span className="text-white/20">$</span>
                <span className="w-3 h-6 bg-cyan-500/50 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Knowledge Matrix */}
      <section className="py-32 border-y border-white/5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap text-[9rem] font-black opacity-5 uppercase tracking-tighter italic">
          <span>HETEROGENEOUS COMPUTE • AGENTIC SYSTEMS • LINUX KERNEL • CUDA CORES • PROTOTYPING • LLM ARCHITECTURES • </span>
          <span>HETEROGENEOUS COMPUTE • AGENTIC SYSTEMS • LINUX KERNEL • CUDA CORES • PROTOTYPING • LLM ARCHITECTURES • </span>
        </div>
      </section>
    </div>
  );
};
