
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'INDEX', path: '/' },
    { name: 'JOURNAL', path: '/blog' },
    { name: 'RESEARCH', path: '/research' },
  ];

  return (
    <nav className="fixed top-10 left-10 z-50">
      <div className="flex flex-col gap-6">
        <Link to="/" className="text-xl font-black tracking-tighter mb-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black text-xs font-black">
            HR
          </div>
        </Link>
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mono text-[10px] font-bold tracking-[0.3em] py-1 transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-cyan-400 pl-4 border-l-2 border-cyan-400'
                  : 'text-white/30 hover:text-white hover:pl-2'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
