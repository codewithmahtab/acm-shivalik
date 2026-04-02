'use client';

import { useEffect } from 'react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  // Shadcn-like Scroll Lock & Escape Close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-[#0a0a0a] border border-white/10 rounded-sm p-8 max-w-sm w-full relative animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Applications Opening Soon</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Registrations to join ACM Chapter Shivalik will open soon. Keep an eye out for updates!
        </p>
        <button
          onClick={onClose}
          className="mt-6 cursor-pointer w-full py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-sm text-sm tracking-widest uppercase transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
