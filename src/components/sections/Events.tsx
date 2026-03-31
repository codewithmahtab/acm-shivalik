'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, MapPin, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { events } from '../../lib/data';

gsap.registerPlugin(ScrollTrigger);

// All events shown directly in the slider
const sliderEvents = events;
const totalSlides = sliderEvents.length;

function EventCard({ event }: { event: (typeof events)[0] }) {
  return (
    <div className="group relative border border-white/5 hover:border-blue-500/30 bg-white/2 hover:bg-white/4 rounded-sm overflow-hidden transition-all duration-500 h-full">
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-blue-500 via-blue-400 to-transparent" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] h-full">
        {/* Main content */}
        <div className="p-8 md:p-12 lg:border-r border-white/5 flex flex-col">
          {/* Type + Status badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] tracking-[0.3em] uppercase text-gray-600">
              {event.type}
            </span>
            <span className="w-px h-3 bg-white/10" />
            {event.status === 'upcoming' ? (
              <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 rounded-sm">
                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                Upcoming
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 border border-gray-500/30 bg-gray-500/5 text-gray-400 rounded-sm">
                Past Event
              </span>
            )}
          </div>

          <h3 className="text-white text-[clamp(1.6rem,3.5vw,3rem)] font-bold tracking-tight leading-none mb-4">
            {event.title}
          </h3>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl mb-8 flex-1">
            {event.desc}
          </p>

          {/* Meta */}
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

          {/* Tags */}
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

          {/* CTA */}
          {event.registerUrl ? (
            <a
              href={event.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn self-start inline-flex items-center gap-2 text-sm text-white bg-blue-500 hover:bg-blue-400 px-7 py-3 rounded-sm tracking-widest uppercase transition-all duration-300"
            >
              Register Now
              <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            </a>
          ) : (
            <span className="self-start inline-flex items-center gap-2 text-sm text-gray-600 border border-white/5 px-7 py-3 rounded-sm tracking-widest uppercase">
              Event Concluded
            </span>
          )}
        </div>

        {/* Highlights sidebar */}
        <div className="lg:w-64 xl:w-72 p-8 md:p-10 flex flex-col justify-center gap-6">
          <p className="text-[9px] tracking-[0.3em] uppercase text-gray-600 mb-2">
            Event Highlights
          </p>
          {event.highlights.map((h) => (
            <div
              key={h.label}
              className="flex flex-col gap-1 border-b border-white/5 pb-5 last:border-none last:pb-0"
            >
              <span className="text-white text-xl font-bold tracking-tight">{h.value}</span>
              <span className="text-[9px] text-gray-600 tracking-[0.2em] uppercase">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default function Events() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(
        lineRef.current,
        { width: '0%' },
        { width: '100%', duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: lineRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: sliderRef.current, start: 'top 82%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const goTo = useCallback((next: number) => {
    if (isAnimating.current) return;
    const clamped = Math.max(0, Math.min(next, totalSlides - 1));
    if (clamped === current) return;

    isAnimating.current = true;
    const dir = clamped > current ? -1 : 1;
    const slides = sliderRef.current?.querySelectorAll<HTMLElement>('[data-slide]');
    const currentSlide = slides?.[current];
    const nextSlide = slides?.[clamped];

    if (!currentSlide || !nextSlide) { isAnimating.current = false; return; }

    // Set next slide starting position
    gsap.set(nextSlide, { x: `${-dir * 60}px`, opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
        setCurrent(clamped);
      },
    });

    tl.to(currentSlide, { x: `${dir * 60}px`, opacity: 0, duration: 0.38, ease: 'power2.in' }, 0);
    tl.to(nextSlide, { x: '0px', opacity: 1, duration: 0.42, ease: 'power2.out' }, 0.18);
  }, [current]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative w-full bg-black py-16 md:py-20 overflow-hidden"
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

        {/* Heading + nav buttons row */}
        <div ref={headingRef} style={{ opacity: 0 }} className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-tight leading-none text-white">
              Where we
              <br />
              <span className="bg-linear-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                show up.
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-sm md:text-base max-w-lg leading-relaxed">
              Our upcoming flagship event is live. Gather your team and build solutions for real-world impact.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3 shrink-0 pb-1">
            {/* Slide counter */}
            <span className="text-[9px] tracking-[0.2em] text-gray-600 uppercase tabular-nums hidden sm:block">
              {String(current + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>

            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous event"
              className="group w-10 h-10 flex items-center justify-center border border-white/10 hover:border-blue-500/50 bg-white/2 hover:bg-blue-500/10 rounded-sm transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:border-white/10 disabled:hover:bg-transparent"
            >
              <ChevronLeft size={16} className="text-gray-400 group-hover:text-white group-disabled:group-hover:text-gray-400 transition-colors duration-300" />
            </button>

            <button
              onClick={next}
              disabled={current === totalSlides - 1}
              aria-label="Next event"
              className="group w-10 h-10 flex items-center justify-center border border-white/10 hover:border-blue-500/50 bg-white/2 hover:bg-blue-500/10 rounded-sm transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:border-white/10 disabled:hover:bg-transparent"
            >
              <ChevronRight size={16} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </button>
          </div>
        </div>

        <div className="mt-8 mb-10 h-px bg-white/5 overflow-hidden">
          <div
            ref={lineRef}
            style={{ width: '0%' }}
            className="h-full bg-linear-to-r from-blue-500/60 via-blue-400/30 to-transparent"
          />
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mb-6">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-px transition-all duration-300 ${
                i === current
                  ? 'w-8 bg-blue-500'
                  : 'w-4 bg-white/15 hover:bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Slider viewport */}
        <div
          ref={sliderRef}
          style={{ opacity: 0 }}
          className="relative overflow-hidden"
        >
          {/* 
            Height anchor: invisible clone of slide 0 keeps the container tall enough.
            All real slides are absolute on top of it.
          */}
          <div className="invisible pointer-events-none" aria-hidden="true">
            <EventCard event={sliderEvents[0]} />
          </div>

          {/* Real slides — all absolute, animated in/out by GSAP */}
          <div className="absolute inset-0">
            {sliderEvents.map((ev, i) => (
              <div
                key={ev.id}
                data-slide
                className="absolute inset-0"
                style={{
                  opacity: i === current ? 1 : 0,
                  pointerEvents: i === current ? 'auto' : 'none',
                }}
              >
                <EventCard event={ev} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
