'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { ChevronDown } from 'lucide-react';
import { stats } from '../../lib/data';
import ParticlesBg from '../ui/ParticlesBg';
import dynamic from 'next/dynamic';

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((m) => m.DotLottieReact),
  { ssr: false }
);

gsap.registerPlugin(ScrambleTextPlugin);

export default function Hero() {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4 });

    tl.to(line1Ref.current, {
      duration: 1.0,
      scrambleText: {
        text: 'ACM',
        chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        revealDelay: 0.2,
      },
      ease: 'none',
    });

    tl.to(
      line2Ref.current,
      {
        duration: 1.2,
        scrambleText: {
          text: 'Chapter',
          chars: 'abcdefghijklmnopqrstuvwxyz',
          revealDelay: 0.2,
        },
        ease: 'none',
      },
      '-=0.6'
    );

    tl.to(
      line3Ref.current,
      {
        duration: 1.2,
        scrambleText: {
          text: 'Shivalik.',
          chars: 'abcdefghijklmnopqrstuvwxyz',
          revealDelay: 0.2,
        },
        ease: 'none',
      },
      '-=0.7'
    );

    tl.to(
      [
        badgeRef.current,
        subtextRef.current,
        statsRef.current,
        chevronRef.current,
      ],
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
      },
      '-=0.3'
    );

    tl.fromTo(
      lottieRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' },
      '-=0.8'
    );
  }, []);

  return (
    <section id='home' className="relative w-full h-screen bg-black overflow-hidden">
      <ParticlesBg />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-blue-800/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-[55%_45%] items-center">
        <div className="flex flex-col justify-center pr-6 lg:pr-12">
          <div
            ref={badgeRef}
            style={{ opacity: 0, transform: 'translateY(20px)' }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2 text-[9px] tracking-[0.25em] text-blue-400 uppercase border border-blue-500/30 px-3 py-1.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
              Association for Computing Machinery — Shivalik
            </span>
          </div>

          <h1 className="font-bold tracking-tight leading-none text-white overflow-hidden">
            <span
              ref={line1Ref}
              className="block text-[clamp(1.4rem,3vw,2.5rem)] text-blue-400 tracking-[0.15em] uppercase font-semibold whitespace-nowrap min-h-[1.2em]"
            >
              &nbsp;
            </span>

            <span
              ref={line2Ref}
              className="block text-[clamp(3rem,7vw,6rem)] font-bold text-white leading-[0.95] whitespace-nowrap min-h-[1em]"
            >
              &nbsp;
            </span>

            <span
              ref={line3Ref}
              className="block text-[clamp(2.4rem,5.5vw,5rem)] bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent leading-[1.05] whitespace-nowrap min-h-[1.2em] pb-1"
            >
              &nbsp;
            </span>
          </h1>

          <p
            ref={subtextRef}
            style={{ opacity: 0, transform: 'translateY(20px)' }}
            className="mt-5 text-gray-500 text-sm tracking-wide max-w-xs leading-relaxed"
          >
            Where engineers build, collaborate, and shape the future of
            technology.
          </p>


          <div
            ref={statsRef}
            style={{ opacity: 0, transform: 'translateY(20px)' }}
            className="mt-5 flex flex-wrap items-end gap-x-7 gap-y-4"
          >
            <div className="mt-6 h-px w-full bg-linear-to-r from-white/10 via-blue-500/20 to-transparent" />
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col group">
                <span className="text-xl font-bold text-white tabular-nums tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[9px] text-gray-600 group-hover:text-gray-400 tracking-[0.2em] uppercase mt-0.5 transition-colors duration-300">
                  {stat.label}
                </span>
              </div>
            ))}

            <a
              href="#about"
              className="group relative inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white 
                         px-5 py-2 tracking-widest uppercase transition-all duration-300 
                         border border-white/10 hover:border-blue-500/60 overflow-hidden ml-auto"
            >
              <span className="absolute inset-0 bg-blue-500/10 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative">Explore</span>
              <ChevronDown
                size={11}
                className="relative rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        <div
          ref={lottieRef}
          style={{ opacity: 0 }}
          className="hidden md:flex items-center justify-center w-full h-full"
        >
          <div className="w-full max-w-[500px] aspect-square">
            <DotLottieReact
              src="https://lottie.host/42adf74f-c554-44ae-869c-9b4ed10a673e/NHpinD7x9Z.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>

      <div
        ref={chevronRef}
        style={{ opacity: 0 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="text-[9px] tracking-[0.25em] text-gray-600 uppercase">
          Scroll
        </span>
        <ChevronDown size={14} className="text-gray-600 animate-bounce" />
      </div>
    </section>
  );
}
