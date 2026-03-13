'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, MapPin, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const event = {
  id: '01',
  title: 'HackShivalik 1.0',
  type: 'Hackathon',
  date: 'To Be Announced',
  time: '12 Hours',
  venue: 'Main Auditorium, SCE',
  status: 'upcoming' as const,
  desc: "ACM Chapter Shivalik's flagship 12-hour hackathon. Build fast, think big, and ship something real. Open to all students — solo or team.",
  tags: ['Open Theme', '12hrs', 'Prizes', 'Team / Solo'],
  highlights: [
    { label: 'Duration', value: '12 Hours' },
    { label: 'Team Size', value: '1 – 4' },
    { label: 'Prizes', value: 'TBA' },
    { label: 'Seats', value: 'Limited' },
  ],
};

export default function Events() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 82%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative w-full bg-black py-16 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[800px] h-[500px] bg-blue-600/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[90%] sm:w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="mb-6">
          <span className="text-[9px] tracking-[0.35em] text-blue-500 uppercase font-medium">
            02 — Events
          </span>
        </div>

        <div ref={headingRef} style={{ opacity: 0 }}>
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-tight leading-none text-white">
            Where we
            <br />
            <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              show up.
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base max-w-lg leading-relaxed">
            Our first event is live. One hackathon. Twelve hours. Let's build.
          </p>
        </div>

        <div className="mt-8 mb-14 h-px bg-white/5 overflow-hidden">
          <div
            ref={lineRef}
            style={{ width: '0%' }}
            className="h-full bg-linear-to-r from-blue-500/60 via-blue-400/30 to-transparent"
          />
        </div>

        <div
          ref={cardRef}
          style={{ opacity: 0 }}
          className="group relative border border-white/5 hover:border-blue-500/30 bg-white/1 hover:bg-white/3 rounded-sm overflow-hidden transition-all duration-500"
        >
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-blue-500 via-blue-400 to-transparent" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0">
            <div className="p-8 md:p-12 border-r border-white/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[9px] tracking-[0.3em] uppercase text-gray-600">
                  {event.type}
                </span>
                <span className="w-px h-3 bg-white/10" />
                <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 rounded-sm">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  Upcoming
                </span>
              </div>

              <h3 className="text-white text-[clamp(1.8rem,4vw,3.5rem)] font-bold tracking-tight leading-none mb-4">
                {event.title}
              </h3>

              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mb-8">
                {event.desc}
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar size={13} className="text-blue-500/60" />
                  <span className="text-xs tracking-wide">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock size={13} className="text-blue-500/60" />
                  <span className="text-xs tracking-wide">{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin size={13} className="text-blue-500/60" />
                  <span className="text-xs tracking-wide">{event.venue}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.15em] uppercase px-3 py-1 border border-white/5 group-hover:border-blue-500/20 text-gray-600 group-hover:text-blue-400/60 rounded-sm transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="group/btn inline-flex items-center gap-2 text-sm text-white bg-blue-500 hover:bg-blue-400 px-7 py-3 rounded-sm tracking-widest uppercase transition-all duration-300"
              >
                Register Now
                <ArrowUpRight
                  size={14}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                />
              </a>
            </div>

            <div className="lg:w-64 xl:w-72 p-8 md:p-10 flex flex-col justify-center gap-6">
              <p className="text-[9px] tracking-[0.3em] uppercase text-gray-600 mb-2">
                Event Highlights
              </p>
              {event.highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex flex-col gap-1 border-b border-white/5 pb-5 last:border-none last:pb-0"
                >
                  <span className="text-white text-xl font-bold tracking-tight">
                    {h.value}
                  </span>
                  <span className="text-[9px] text-gray-600 tracking-[0.2em] uppercase">
                    {h.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
