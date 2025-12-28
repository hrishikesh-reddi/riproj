
import React from 'react';
import { BLOGS } from '../constants';

export const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 pt-40 pb-40">
      <div className="max-w-4xl">
        <span className="mono text-cyan-500 text-xs tracking-widest uppercase mb-4 block">Journal & Thinking</span>
        <h1 className="text-7xl font-black tracking-tighter mb-12 leading-[0.9]">Notes on Hardware <br/>& Intelligence.</h1>
      </div>

      <div className="grid grid-cols-1 gap-32 mt-24">
        {BLOGS.map(blog => (
          <article key={blog.id} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 aspect-square rounded-[3rem] bg-white/5 border border-white/10 overflow-hidden relative">
              <img 
                src={`https://picsum.photos/seed/${blog.id + 10}/1000/1000`} 
                alt={blog.title}
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            
            <div className="lg:col-span-7 pt-4">
              <div className="flex items-center gap-6 mb-8">
                <div className="px-4 py-1 rounded-full border border-white/10 text-[10px] mono uppercase tracking-widest text-white/40">
                  {blog.category}
                </div>
                <div className="w-12 h-[1px] bg-white/10" />
                <div className="text-[10px] mono text-white/20 uppercase tracking-widest">{blog.date}</div>
              </div>
              
              <h2 className="text-5xl font-bold mb-8 tracking-tighter group-hover:text-cyan-400 transition-colors duration-500">
                {blog.title}
              </h2>
              
              <p className="text-xl text-white/50 font-light leading-relaxed mb-10">
                {blog.summary}
              </p>
              
              <button className="text-sm font-bold tracking-widest uppercase border-b border-cyan-500 pb-2 hover:text-cyan-400 transition-colors">
                Read Narrative
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
