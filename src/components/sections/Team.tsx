"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Linkedin, Github } from "lucide-react";
import { teamMembers, facultyMembers } from "../../lib/data";

gsap.registerPlugin(ScrollTrigger);

function MemberCard({
  name, role, year, branch, image,
}: {
  name: string; role: string; year?: string; branch?: string; image: string;
}) {
  return (
    <div className="member-card group relative flex flex-row border border-white/10 hover:border-blue-500/30 bg-[#0a0a0a] hover:bg-white/[0.03] transition-all duration-300 overflow-hidden cursor-default h-[200px]">

      {/* Corner + signs */}
      {/* <span className="absolute top-2 left-2 z-20 text-white/20 text-sm font-mono leading-none">+</span>
      <span className="absolute top-2 right-2 z-20 text-white/20 text-sm font-mono leading-none">+</span>
      <span className="absolute bottom-2 left-2 z-20 text-white/20 text-sm font-mono leading-none">+</span>
      <span className="absolute bottom-2 right-2 z-20 text-white/20 text-sm font-mono leading-none">+</span> */}

      {/* LEFT — Photo */}
      <div className="relative w-2/5 h-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
        />
        {/* Right edge fade */}
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-[#0a0a0a] group-hover:to-[#0d0d0d]" />
      </div>

      {/* RIGHT — Content */}
      <div className="flex flex-col justify-between flex-1 px-5 py-4 overflow-hidden">

        {/* Top — Name + Role + Social */}
        <div>
          <h3 className="text-white font-bold text-base tracking-wide leading-tight font-mono">
            {name}
          </h3>
          <p className="text-blue-400 text-xs mt-1 tracking-wide">{role}</p>
          {year && branch && (
            <p className="text-gray-700 text-[10px] mt-0.5 tracking-wide">
              {year} &middot; {branch}
            </p>
          )}

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-3">
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors duration-300" aria-label="GitHub">
              <Github size={16} />
            </a>
          </div>
        </div>

        {/* Bottom — Decorative Strip */}
        <div className="flex items-center justify-between border-t border-white/5 pt-3">

          {/* Left decorations */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full border border-white/20" />
            <span className="w-2 h-2 rounded-full border border-white/10" />
            <span className="w-2 h-2 border border-white/10" />
            <span className="w-8 h-px bg-white/10" />
          </div>

          {/* ACM Badge — center */}
          <div className="w-8 h-8 bg-blue-500/10 border border-blue-500/30 rotate-45 flex items-center justify-center shrink-0">
            <span className="text-blue-400 text-[7px] font-bold tracking-tight -rotate-45">ACM</span>
          </div>

          {/* Right decorations */}
          <div className="flex items-center gap-1.5">
            <span className="w-8 h-px bg-white/10" />
            <span className="w-2 h-2 border border-white/10" />
            <span className="w-2 h-2 rounded-full border border-white/10" />
            <span className="w-3 h-3 rounded-full border border-white/20" />
          </div>

        </div>
      </div>

    </div>
  );
}

const topMembers = teamMembers.filter((m) =>
  m.role === "Chairperson" || m.role.includes("Technical Head")
);

const restMembers = teamMembers.filter((m) =>
  m.role !== "Chairperson" && !m.role.includes("Technical Head")
);

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" } }
      );

      gsap.fromTo(lineRef.current,
        { width: "0%" },
        { width: "100%", duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: lineRef.current, start: "top 85%" } }
      );

      gsap.fromTo(".member-card",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power3.out",
          scrollTrigger: { trigger: ".members-grid", start: "top 80%" } }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative w-full bg-black py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

        {/* Section Label */}
        <div className="mb-6">
          <span className="text-[9px] tracking-[0.35em] text-blue-500 uppercase font-medium">
            04 — Team
          </span>
        </div>

        {/* Heading */}
        <div ref={headingRef} style={{ opacity: 0 }}>
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-tight leading-[1.0] text-white">
            The people
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              behind it.
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base max-w-lg leading-relaxed">
            18 students from Shivalik College of Engineering — building,
            organizing, and leading ACM Shivalik forward.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-8 mb-14 h-px bg-white/5 overflow-hidden">
          <div
            ref={lineRef}
            style={{ width: "0%" }}
            className="h-full bg-gradient-to-r from-blue-500/60 via-blue-400/30 to-transparent"
          />
        </div>

        {/* Faculty Coordinator */}
        <div className="mb-14">
          <p className="text-[9px] tracking-[0.3em] text-gray-600 uppercase mb-6 border-b border-white/5 pb-3">
            Faculty Coordinator
          </p>
          <div className="max-w-md mx-auto">
            {facultyMembers.map((f) => (
              <MemberCard key={f.id} name={f.name} role={f.role} image={f.image} />
            ))}
          </div>
        </div>

        {/* Student Members */}
        <div className="members-grid">
          <p className="text-[9px] tracking-[0.3em] text-gray-600 uppercase mb-6 border-b border-white/5 pb-3">
            Student Members
          </p>

          {/* Top row — Chairperson + Technical Head */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 max-w-3xl mx-auto">
            {topMembers.map((m) => (
              <MemberCard
                key={m.id}
                name={m.name}
                role={m.role}
                year={m.year}
                branch={m.branch}
                image={m.image}
              />
            ))}
          </div>

          {/* Everyone else — 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {restMembers.map((m) => (
              <MemberCard
                key={m.id}
                name={m.name}
                role={m.role}
                year={m.year}
                branch={m.branch}
                image={m.image}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
