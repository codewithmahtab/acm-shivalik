'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Code2, Layers, BarChart2, FlaskConical, MessageCircle, Mic2, Presentation, Rocket } from 'lucide-react';

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
  {
    id: '06',
    icon: MessageCircle,
    title: 'Community',
    tags: ['WhatsApp', 'Outreach', 'Networking', 'Discord'],
    desc: 'The heart of ACM. Managing our internal communication groups and building a hyper-active community of engineers through WhatsApp and Discord.',
    accent: 'cyan',
    border: 'group-hover:border-cyan-500/40',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    iconColor: 'text-cyan-400',
    glow: 'from-cyan-500/10 to-transparent',
    tagStyle: 'group-hover:border-cyan-500/20 group-hover:text-cyan-400/60',
  },
  {
    id: '07',
    icon: Mic2,
    title: 'Seminars',
    tags: ['Workshops', 'Expert Talks', 'Q&A', 'Skill-up'],
    desc: 'Knowledge at scale. Hosting industry experts and faculty for hands-on sessions that bridge the gap between classroom and career.',
    accent: 'fuchsia',
    border: 'group-hover:border-fuchsia-500/40',
    iconBg: 'bg-fuchsia-500/10 border-fuchsia-500/20',
    iconColor: 'text-fuchsia-400',
    glow: 'from-fuchsia-500/10 to-transparent',
    tagStyle: 'group-hover:border-fuchsia-500/20 group-hover:text-fuchsia-400/60',
  },
  {
    id: '08',
    icon: Presentation,
    title: 'Conference',
    tags: ['Academic', 'Papers', 'International', 'Summits'],
    desc: 'Global exposure. Organizing and participating in computing conferences to represent Shivalik at a worldwide level.',
    accent: 'teal',
    border: 'group-hover:border-teal-500/40',
    iconBg: 'bg-teal-500/10 border-teal-500/20',
    iconColor: 'text-teal-400',
    glow: 'from-teal-500/10 to-transparent',
    tagStyle: 'group-hover:border-teal-500/20 group-hover:text-teal-400/60',
  },
  {
    id: '09',
    icon: Rocket,
    title: 'Startups',
    tags: ['Incubation', 'Pitching', 'Ideation', 'SaaS'],
    desc: 'From code to product. Supporting student entrepreneurs with the resources and tech guidance needed to ship their first startup.',
    accent: 'rose',
    border: 'group-hover:border-rose-500/40',
    iconBg: 'bg-rose-500/10 border-rose-500/20',
    iconColor: 'text-rose-400',
    glow: 'from-rose-500/10 to-transparent',
    tagStyle: 'group-hover:border-rose-500/20 group-hover:text-rose-400/60',
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
      className="relative w-full bg-black py-16 md:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[800px] h-[500px] bg-blue-600/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="mb-0">
          <span className="text-[11px] tracking-[0.4em] text-blue-500 uppercase font-semibold">
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
          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed font-light">
            Nine specialized domains. One chapter. Together forming the full 
            picture of technical excellence at ACM Shivalik.
          </p>
        </div>

        <div className="mt-8 mb-14 h-px bg-white/5 overflow-hidden">
          <div
            ref={lineRef}
            style={{ width: '0%' }}
            className="h-full bg-linear-to-r from-blue-500/60 via-blue-400/30 to-transparent"
          />
        </div>

        <div className="domain-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map((domain) => (
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

      <h3 className="relative z-10 text-white text-lg font-bold tracking-tight mb-3">
        {domain.title}
      </h3>

      <p className="relative z-10 text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6">
        {domain.desc}
      </p>

      <div className="relative z-10 flex flex-wrap gap-2">
        {domain.tags.map((tag) => (
          <span
            key={tag}
            className={`text-[10px] tracking-widest uppercase px-2.5 py-1 border border-white/10 text-gray-400 rounded-sm transition-all duration-300 ${domain.tagStyle}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
