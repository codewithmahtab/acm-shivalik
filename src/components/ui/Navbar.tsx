'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import JoinModal from './JoinModal';


const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Domains', href: '#domains' },
  { label: 'Team', href: '#team' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md  shadow-[0_2px_20px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 xl:px-12 h-[68px] flex justify-between md:grid md:grid-cols-3 items-center">
        <a href="#home" className="flex items-center gap-3 w-fit group">
          <div className="relative">
            <img
              src="/ACM LOGO WHITE.png"
              alt="ACM Shivalik"
              className="h-9 w-auto object-contain filter brightness-125 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col border-l border-white/10 pl-3">
            <span className="text-white font-bold text-xl tracking-tighter leading-none">
              ACM
            </span>
            <span className="text-blue-500 font-bold text-[12px] tracking-[0.3em] uppercase leading-none mt-1.5">
              Shivalik
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center justify-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-gray-400 hover:text-white text-[15px] font-medium tracking-wide transition-colors duration-300 
                           after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px 
                           after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
            className="hidden md:inline-flex items-center justify-center 
                       h-10 px-8 rounded-sm text-sm tracking-widest uppercase
                       border-2 border-blue-500 text-blue-400 
                       hover:bg-blue-500 hover:text-white 
                       transition-all duration-300 font-bold shadow-lg shadow-blue-500/10"
          >
            Join Us
          </a>

          <button
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="flex flex-col bg-black/95 backdrop-blur-md border-t border-white/10 px-8 py-2">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="border-b border-white/5 last:border-none"
            >
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-4 text-gray-400 hover:text-white text-sm tracking-wide transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="py-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="inline-flex items-center justify-center h-9 px-6 rounded-sm text-sm tracking-widest uppercase border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Join Us
            </a>
          </li>
        </ul>
      </div>

      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}
