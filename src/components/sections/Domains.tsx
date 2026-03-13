'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Code2, Layers, BarChart2, FlaskConical } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const domains = [
  {
    id: '01',
    icon: Cpu,
    title: 'Tech',
    tags: ['Web Dev', 'App Dev', 'AI/ML', 'Open Source'],
    desc: 'The engineering core. We build real products — full-stack apps, AI integrations, browser extensions, and anything that runs on a machine.',
    accent: 'blue',
    border: 'group-hover:border-blue-500/40',
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    iconColor: 'text-blue-400',
    glow: 'from-blue-500/10 to-transparent',
    tagStyle: 'group-hover:border-blue-500/20 group-hover:text-blue-400/60',
  },
  {
    id: '02',
    icon: Code2,
    title: 'Competitive Coding',
    tags: ['DSA', 'LeetCode', 'Codeforces', 'ICPC'],
    desc: 'Train hard, compete harder. Weekly contests, ICPC prep, and a culture of problem-solving that sharpens every engineer.',
    accent: 'violet',
    border: 'group-hover:border-violet-500/40',
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    iconColor: 'text-violet-400',
    glow: 'from-violet-500/10 to-transparent',
    tagStyle: 'group-hover:border-violet-500/20 group-hover:text-violet-400/60',
  },
  {
    id: '03',
    icon: Layers,
    title: 'Design',
    tags: ['UI/UX', 'Figma', 'Branding', 'Motion'],
    desc: 'Where aesthetics meet function. Crafting interfaces, brand identities, and design systems that make tech beautiful.',
    accent: 'pink',
    border: 'group-hover:border-pink-500/40',
    iconBg: 'bg-pink-500/10 border-pink-500/20',
    iconColor: 'text-pink-400',
    glow: 'from-pink-500/10 to-transparent',
    tagStyle: 'group-hover:border-pink-500/20 group-hover:text-pink-400/60',
  },
  {
    id: '04',
    icon: BarChart2,
    title: 'Management',
    tags: ['Events', 'Operations', 'PR', 'Outreach'],
    desc: 'The backbone of every event. Managing logistics, partnerships, social media, and the human side of a student chapter.',
    accent: 'emerald',
    border: 'group-hover:border-emerald-500/40',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconColor: 'text-emerald-400',
    glow: 'from-emerald-500/10 to-transparent',
    tagStyle:
      'group-hover:border-emerald-500/20 group-hover:text-emerald-400/60',
  },
  {
    id: '05',
    icon: FlaskConical,
    title: 'Research',
    tags: ['Papers', 'IEEE', 'Data Science', 'Innovation'],
    desc: 'Pushing knowledge forward. Writing papers, exploring datasets, and contributing to the academic computing community.',
    accent: 'orange',
    border: 'group-hover:border-orange-500/40',
    iconBg: 'bg-orange-500/10 border-orange-500/20',
    iconColor: 'text-orange-400',
    glow: 'from-orange-500/10 to-transparent',
    tagStyle: 'group-hover:border-orange-500/20 group-hover:text-orange-400/60',
  },
];

export default function Domains() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { width: '0%' },
        {
          width: '100%',
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: lineRef.current, start: 'top 85%' },
        }
      );

      gsap.fromTo(
        '.domain-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.domain-grid', start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="domains"
      ref={sectionRef}
      className="relative w-full bg-black py-16 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[800px] h-[500px] bg-blue-600/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="mb-6">
          <span className="text-[9px] tracking-[0.35em] text-blue-500 uppercase font-medium">
            03 — Domains
          </span>
        </div>

        <div ref={headingRef} style={{ opacity: 0 }}>
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-tight leading-none text-white">
            What we
            <br />
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              work on.
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base max-w-lg leading-relaxed">
            Five domains. One chapter. Each a distinct mindset — together they
            form the full picture of what ACM Shivalik does.
          </p>
        </div>

        <div className="mt-8 mb-14 h-px bg-white/5 overflow-hidden">
          <div
            ref={lineRef}
            style={{ width: '0%' }}
            className="h-full bg-linear-to-r from-blue-500/60 via-blue-400/30 to-transparent"
          />
        </div>

        <div className="domain-grid space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.slice(0, 3).map((domain) => (
              <DomainCard
                key={domain.id}
                domain={domain}
                isActive={activeId === domain.id}
                onEnter={() => setActiveId(domain.id)}
                onLeave={() => setActiveId(null)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:w-2/3 lg:mx-auto">
            {domains.slice(3).map((domain) => (
              <DomainCard
                key={domain.id}
                domain={domain}
                isActive={activeId === domain.id}
                onEnter={() => setActiveId(domain.id)}
                onLeave={() => setActiveId(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DomainCard({
  domain,
  isActive,
  onEnter,
  onLeave,
}: {
  domain: (typeof domains)[0];
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = domain.icon;

  return (
    <div
      className={`domain-card group relative border rounded-sm p-7 cursor-default
                  transition-all duration-300 overflow-hidden
                  ${isActive ? 'border-white/10 bg-white/4' : 'border-white/5 bg-white/1'}
                  ${domain.border}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${domain.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      <span className="absolute top-5 right-6 text-[10px] text-white/10 font-mono tracking-widest">
        {domain.id}
      </span>

      <div
        className={`relative z-10 mb-5 w-10 h-10 flex items-center justify-center border rounded-sm transition-all duration-300 ${domain.iconBg}`}
      >
        <Icon size={17} className={domain.iconColor} />
      </div>

      <h3 className="relative z-10 text-white text-base font-semibold tracking-tight mb-2">
        {domain.title}
      </h3>

      <p className="relative z-10 text-gray-600 text-xs leading-relaxed group-hover:text-gray-500 transition-colors duration-300 mb-5">
        {domain.desc}
      </p>

      <div className="relative z-10 flex flex-wrap gap-1.5">
        {domain.tags.map((tag) => (
          <span
            key={tag}
            className={`text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 border border-white/5 text-gray-600 rounded-sm transition-all duration-300 ${domain.tagStyle}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
