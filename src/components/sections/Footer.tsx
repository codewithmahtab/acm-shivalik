'use client';

import { Github, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Domains', href: '#domains' },
  { label: 'Team', href: '#team' },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:acm@shivalik.edu.in', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-500 font-bold text-xl tracking-tight">
                ACM
              </span>
              <span className="text-white font-light text-xl tracking-widest uppercase">
                Shivalik
              </span>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed">
              ACM Student Chapter at Shivalik College of Engineering, Dehradun.
              Building the future of computing — one student at a time.
            </p>

            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.3em] text-gray-600 uppercase mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm tracking-wide transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.3em] text-gray-600 uppercase mb-5">
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-500 text-sm">acm@shivalik.edu.in</li>
              <li className="text-gray-500 text-sm">
                Shivalik College of Engineering
              </li>
              <li className="text-gray-500 text-sm">Dehradun, Uttarakhand</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} ACM Student Chapter — Shivalik
            College of Engineering. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs tracking-wide">
            Association for Computing Machinery
          </p>
        </div>
      </div>
    </footer>
  );
}
