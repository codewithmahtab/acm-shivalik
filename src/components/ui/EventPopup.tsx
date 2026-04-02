'use client';

import { useState, useEffect } from 'react';
import { events } from '../../lib/data';
import { ArrowUpRight, X } from 'lucide-react';

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Find the first upcoming event
  const liveEvent = events.find((e) => e.status === 'upcoming');

  useEffect(() => {
    // Wait until the initial hero animations are roughly done before pushing a popup
    if (liveEvent) {
      // The hero text animation finishes around 2.5s. 
      // Waiting an extra 1.5s to show the popup AFTER the text is fully readable (Total = 4000ms).
      const timer = setTimeout(() => setIsOpen(true), 4000);
      return () => clearTimeout(timer);
    }
  }, [liveEvent]);

  // Shadcn-like Scroll Lock & Escape Close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  if (!liveEvent || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500" 
        onClick={() => setIsOpen(false)} 
      />
      
      {/* Dialog box */}
      <div className="relative z-10 bg-[#0a0a0a] border border-white/10 rounded-sm shadow-2xl overflow-hidden max-w-2xl w-full flex flex-col sm:flex-row animate-in fade-in zoom-in-95 duration-500">
        
        {/* Absolute close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-sm bg-black/50 text-gray-400 hover:text-white hover:bg-black/80 transition-all border border-white/10 backdrop-blur-sm cursor-pointer"
        >
          <X size={16} />
        </button>

        {/* Poster Image Area */}
        <div className="relative w-full sm:w-1/2 aspect-4/3 sm:aspect-4/5 bg-linear-to-br from-blue-900/20 to-black sm:border-r border-white/5 border-b sm:border-b-0 flex flex-col items-center justify-center overflow-hidden">
          {liveEvent.poster && !imageError && (
            // Using standard img to easily handle the local path without demanding Next Image config, or unoptimized
            <img 
              src={liveEvent.poster} 
              alt={`${liveEvent.title} Poster`}
              className="absolute inset-0 w-full h-full object-cover z-10"
              onError={() => setImageError(true)}
            />
          )}
          
          {(!liveEvent.poster || imageError) && (
            <div className="relative z-0 flex flex-col items-center justify-center p-8 text-center fallback-content">
              <span className="text-blue-500 mb-2 font-semibold tracking-widest uppercase text-[9px]">Live Event</span>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">{liveEvent.title}</h3>
              <p className="text-gray-500 text-[10px] tracking-wide uppercase mt-4 border border-white/10 px-3 py-1 rounded-sm">
                Please drop your poster image here<br/><br/>
                <code className="text-blue-400">/public/images/poster.jpeg</code>
              </p>
            </div>
          )}
        </div>

        {/* Details Area */}
        <div className="w-full sm:w-1/2 p-8 sm:p-10 flex flex-col justify-center bg-white/1">
          <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.15em] uppercase px-2 py-1 border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 rounded-sm w-fit mb-5">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            Registration Live
          </span>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 leading-none">
            {liveEvent.title}
          </h2>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-10">
            {liveEvent.desc.length > 130 ? liveEvent.desc.substring(0, 130) + '...' : liveEvent.desc}
          </p>

          <div className="mt-auto flex flex-col gap-3">
            {liveEvent.registerUrl && (
              <a
                href={liveEvent.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group flex justify-center items-center gap-2 w-full py-3.5 bg-blue-500 hover:bg-blue-400 text-white rounded-sm text-xs font-semibold tracking-widest uppercase transition-all duration-300"
              >
                Register Now
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 border border-white/10 hover:border-white/20 hover:bg-white/5 text-gray-500 hover:text-white rounded-sm text-xs font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
