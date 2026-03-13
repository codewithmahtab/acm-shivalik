'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Users, Lightbulb, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: Code2,
    title: 'Build',
    desc: 'Hands-on projects, hackathons, and real-world engineering challenges.',
  },
  {
    icon: Users,
    title: 'Collaborate',
    desc: 'A tight-knit community of developers, designers, and innovators.',
  },
  {
    icon: Lightbulb,
    title: 'Innovate',
    desc: 'Pushing boundaries across AI, Web, Cybersecurity, and more.',
  },
  {
    icon: Trophy,
    title: 'Compete',
    desc: 'Representing Shivalik at national-level coding competitions and CTFs.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { width: '0%' },
        {
          width: '100%',
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.pillar-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pillarsRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-black py-16 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[700px] h-[400px] bg-blue-600/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[9px] tracking-[0.35em] text-blue-500 uppercase font-medium">
            01 — About
          </span>
        </div>

        <div ref={headingRef} style={{ opacity: 0 }}>
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-tight leading-none text-white">
            More than a club.
            <br />
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              A movement.
            </span>
          </h2>
        </div>

        <div className="mt-8 mb-10 h-px bg-white/5 overflow-hidden">
          <div
            ref={lineRef}
            style={{ width: '0%' }}
            className="h-full bg-linear-to-r from-blue-500/60 via-blue-400/30 to-transparent"
          />
        </div>

        <div
          ref={textRef}
          style={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-20 items-start"
        >
          <div className="space-y-5">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              <span className="text-white font-medium">
                ACM Chapter Shivalik
              </span>{' '}
              is the official student chapter of the Association for Computing
              Machinery at Shivalik College of Engineering, Dehradun.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We are a community of students passionate about computing —
              building projects that matter, competing at national platforms,
              and learning from each other. From first-year coders to final-year
              engineers, everyone has a place here.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              ACM is the world's largest educational and scientific computing
              society. Our chapter brings that global vision to campus — with
              local energy, real mentorship, and a culture of shipping.
            </p>

            <div className="pt-2">
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-xs text-blue-400 hover:text-white tracking-widest uppercase transition-colors duration-300 border-b border-blue-500/30 hover:border-blue-500 pb-0.5"
              >
                Become a member
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="border border-white/5 bg-white/2 p-6 rounded-sm">
              <p className="text-xs tracking-[0.2em] text-blue-500 uppercase mb-3">
                Our Mission
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                "To advance computing as a science and profession — and to
                empower the next generation of engineers at Shivalik."
              </p>
            </div>

            <div className="border border-white/5 bg-white/2 p-6 rounded-sm">
              <p className="text-xs tracking-[0.2em] text-blue-500 uppercase mb-3">
                Founded
              </p>
              <p className="text-white text-2xl font-bold tracking-tight">
                2023
              </p>
              <p className="text-gray-600 text-xs tracking-wide mt-1">
                Shivalik College of Engineering, Dehradun
              </p>
            </div>
          </div>
        </div>

        <div
          ref={pillarsRef}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="pillar-card group border border-white/5 bg-white/2 hover:bg-white/4 hover:border-blue-500/20 p-6 rounded-sm transition-all duration-300 cursor-default"
            >
              <div className="mb-4 w-9 h-9 flex items-center justify-center border border-blue-500/20 bg-blue-500/5 group-hover:bg-blue-500/10 rounded-sm transition-all duration-300">
                <Icon size={16} className="text-blue-400" />
              </div>
              <h3 className="text-white text-sm font-semibold tracking-wide mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
