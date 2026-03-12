"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Olympics from "@/public/olympics.png";
import Owner from "@/public/porkstridebust.png";

const GOLD = "#C9A84C";
const GOLD_HOVER = "#D4AF37";
const BRONZE = "#8B7355";

const EVENTS = [
  { id: "01", emoji: "⚔️", name: "Battle Royale", desc: "A custom-coded survival experience." },
  { id: "02", emoji: "🏃", name: "Elysium Run", desc: "The ultimate parkour endurance test." },
];

const NAV_LINKS = ["Home", "Games", "Scoring", "Creators", "Staff", "Rules & Info"];
const EVENT_DATE = new Date("2026-06-20T18:00:00Z");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 text-center border border-white/[0.07] bg-black/40 backdrop-blur-sm py-1.5">
        <span className="text-2xl font-black tabular-nums text-[#F0EDE8] leading-none">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[7px] uppercase tracking-widest font-bold text-[#333] mt-1">{label}</span>
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const countdown = useCountdown(EVENT_DATE);
  const donationCurrent = 8420;
  const donationGoal = 20000;
  const donationPct = Math.round((donationCurrent / donationGoal) * 100);

  return (
    <div className="min-h-screen text-[#F0EDE8] font-sans selection:bg-[#C9A84C]/20 overflow-x-hidden"
      style={{ backgroundColor: "#09090E" }}>

      <nav className="relative z-50 border-b border-white/[0.05] sticky top-0"
        style={{ background: "rgba(9,9,14,0.92)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-14 flex justify-between items-center">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-6 h-6 relative">
              <Image src={Olympics} alt="MCYT Olympics" fill className="object-contain" />
            </div>
            <span className="font-black tracking-[0.18em] uppercase text-xs" style={{ color: GOLD }}>
              MCYT Olympics
            </span>
          </div>

          <div className="hidden md:flex gap-7 text-[9px] uppercase font-bold tracking-widest text-[#333]">
            {NAV_LINKS.map((item) => (
              <a key={item} href="#" className="hover:text-[#F0EDE8] transition-colors duration-150 relative group">
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: GOLD }} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#"
              className="text-[9px] font-black uppercase tracking-widest px-3.5 py-1.5 transition-all duration-150"
              style={{ border: `1px solid ${GOLD}50`, color: GOLD }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = GOLD; el.style.color = "#09090E"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = GOLD; }}
            >
              Sign in
            </a>
            <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMobileOpen(!mobileOpen)}>
              <span className={`block w-5 h-px bg-[#F0EDE8] transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-px bg-[#F0EDE8] transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-[#F0EDE8] transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-white/[0.05]" style={{ background: "#09090E" }}>
            {NAV_LINKS.map((item) => (
              <a key={item} href="#" onClick={() => setMobileOpen(false)}
                className="block px-6 py-3.5 text-[9px] font-black uppercase tracking-widest text-[#333] hover:text-[#F0EDE8] border-b border-white/[0.03] transition-colors">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section className="relative z-10 min-h-[90vh] flex flex-col justify-end overflow-hidden">
        <Image src="https://media.craiyon.com/2025-09-25/FrBqQgTYQXqpDUsBL08ITw.webp" alt="" fill priority quality={90} className="object-cover object-center" />

        <div className="absolute inset-0" style={{ background: "rgba(9,9,14,0.5)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #09090E 0%, rgba(9,9,14,0.6) 45%, transparent 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(9,9,14,0.8) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 70% 100% at 25% 100%, ${GOLD}07, transparent)` }} />
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${GOLD}44 1px, transparent 1px), linear-gradient(90deg, ${GOLD}44 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
          }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pb-12 md:pb-16 w-full">
          <div className="grid md:grid-cols-[1fr_280px] gap-8 md:gap-12 items-end">

            <div>
              <div className="inline-flex items-center gap-2 text-[8px] font-black uppercase tracking-widest mb-5 border bg-black/50 backdrop-blur-sm px-3 py-1"
                style={{ color: GOLD, borderColor: `${GOLD}30` }}>
                <span className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: GOLD }} />
                Porkstride Production · Edition IV · June 2026
              </div>

              <h1 className="text-[clamp(56px,11vw,130px)] font-black leading-[0.82] tracking-tighter uppercase drop-shadow-2xl">
                MCYT<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "2px #F0EDE8" }}>OLYMPICS</span>
              </h1>

              <p className="mt-5 text-[#777] text-sm pl-4 max-w-xs leading-relaxed"
                style={{ borderLeft: `2px solid ${GOLD}` }}>
                Gaming for Charity. Every year. For the community.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <button className="px-8 py-3 text-[9px] font-black uppercase tracking-widest transition-all active:scale-95"
                  style={{ backgroundColor: GOLD, color: "#09090E" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = GOLD_HOVER)}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = GOLD)}>
                  Watch Live
                </button>
                <button className="border border-white/15 text-[#777] bg-black/30 backdrop-blur-sm px-8 py-3 text-[9px] font-black uppercase tracking-widest hover:text-[#F0EDE8] hover:border-white/30 transition-all">
                  Donate
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-[8px] uppercase font-bold tracking-[0.3em] text-[#252525] mb-3">Starts in</p>
                <div className="flex gap-2.5 items-start">
                  <CountdownUnit value={countdown.days} label="Days" />
                  <span className="text-[#1f1f1f] font-black text-xl mt-1">:</span>
                  <CountdownUnit value={countdown.hours} label="Hrs" />
                  <span className="text-[#1f1f1f] font-black text-xl mt-1">:</span>
                  <CountdownUnit value={countdown.minutes} label="Min" />
                  <span className="text-[#1f1f1f] font-black text-xl mt-1">:</span>
                  <CountdownUnit value={countdown.seconds} label="Sec" />
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="border border-white/[0.07] bg-black/60 backdrop-blur-md p-4 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px"
                  style={{ background: `linear-gradient(to right, transparent, ${GOLD}25, transparent)` }} />
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-green-400">Online</span>
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-widest border px-1.5 py-0.5"
                    style={{ color: GOLD, borderColor: `${GOLD}20` }}>● Live</span>
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-black tabular-nums">342</span>
                  <span className="text-xs text-[#252525] font-bold">/500 players</span>
                </div>
                <div className="w-full h-0.5 bg-white/[0.05] overflow-hidden mb-3">
                  <div className="h-full w-[68%]"
                    style={{ background: `linear-gradient(to right, ${GOLD}, ${GOLD_HOVER})` }} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[9px] text-[#1f1f1f]">mc.craftolympics.fr</span>
                  <button className="text-[8px] font-black uppercase tracking-widest transition-colors text-[#1f1f1f]"
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = GOLD)}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#1f1f1f")}>
                    Copy →
                  </button>
                </div>
              </div>

              <div className="border border-white/[0.07] bg-black/60 backdrop-blur-md p-4 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px"
                  style={{ background: `linear-gradient(to right, transparent, ${BRONZE}35, transparent)` }} />
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[8px] font-black uppercase tracking-widest" style={{ color: BRONZE }}>
                    Charity Goal
                  </span>
                  <span className="text-[8px] font-mono text-[#222]">
                    €{donationCurrent.toLocaleString()} / €{donationGoal.toLocaleString()}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.04] overflow-hidden rounded-full mb-1.5">
                  <div className="h-full rounded-full" style={{ width: `${donationPct}%`, background: "linear-gradient(to right, #3d6b4a, #5a9e6a)" }} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[8px] text-[#1a1a1a] font-bold">{donationPct}% of goal reached</span>
                  <button className="text-[8px] font-black uppercase tracking-widest text-[#3d6b4a] hover:text-[#5a9e6a] transition-colors">
                    Donate →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[0.04]" style={{ background: "#09090E" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-14">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-[9px] font-black uppercase tracking-[0.35em]" style={{ color: GOLD }}>
              // The Tournament
            </h2>
            <span className="text-[8px] uppercase font-bold tracking-widest text-[#1a1a1a]">
              {EVENTS.length} confirmed · more soon
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.03)" }}>
            {EVENTS.map(({ id, emoji, name, desc }) => (
              <div key={name}
                className="p-7 md:p-8 group cursor-pointer transition-colors relative overflow-hidden"
                style={{ background: "#09090E" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#0d0d14")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#09090E")}>
                <div className="absolute inset-x-0 top-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: GOLD }} />
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xl">{emoji}</span>
                  <span className="text-[8px] font-mono" style={{ color: BRONZE }}>{id}</span>
                </div>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight mb-1.5 transition-colors"
                  style={{} as React.CSSProperties}
                  onMouseEnter={() => { }}
                >
                  <span className="group-hover:text-[#C9A84C] transition-colors">{name}</span>
                </h3>
                <p className="text-[11px] text-[#2e2e2e] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[0.04]" style={{ background: "#07070C" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 grid md:grid-cols-[260px_1fr] gap-8 md:gap-14 items-center">

          <div className="relative order-2 md:order-1 shrink-0">
            <Image src={Owner} alt="Porkstride" width={260} height={320}
              className="object-cover w-full grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 right-0 h-24"
              style={{ background: "linear-gradient(to top, #07070C, transparent)" }} />
            <div className="absolute bottom-3 left-3">
              <Link href="https://youtube.com/@Porkstride" target="_blank"
                className="font-black uppercase tracking-widest text-xs transition-colors block"
                style={{ color: "#F0EDE8" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = GOLD)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#F0EDE8")}>
                Porkstride
              </Link>
              <p className="text-[7px] uppercase tracking-widest font-bold mt-0.5" style={{ color: BRONZE }}>
                Founder & Director
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-[8px] uppercase font-bold tracking-[0.3em] mb-3" style={{ color: GOLD }}>
              // Who we are
            </p>
            <h2 className="text-[clamp(26px,3.5vw,44px)] font-black uppercase leading-tight mb-4">
              Built for<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #222" }}>
                the community
              </span>
            </h2>
            <p className="text-[#2a2a2a] text-sm leading-relaxed mb-5">
              Founded by Porkstride, the MCYT Olympics is an annual charity tournament. Every edition brings together the biggest Minecraft creators for custom-coded games — and every donation goes directly to the cause chosen by the community.
            </p>

            <div className="flex gap-6">
              {[
                { v: "€42K+", l: "Raised" },
                { v: "120+", l: "Creators" },
                { v: "2M+", l: "Viewers" },
                { v: "3", l: "Editions" },
              ].map(({ v, l }) => (
                <div key={l}>
                  <div className="text-lg font-black" style={{ color: GOLD }}>{v}</div>
                  <div className="text-[7px] uppercase tracking-widest font-bold mt-0.5" style={{ color: BRONZE }}>{l}</div>
                </div>
              ))}
            </div>

            <p className="text-[8px] uppercase font-bold tracking-widest text-[#1a1a1a] mt-5">
              Developed by ItzBogged · Since 2023
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[0.04] overflow-hidden" style={{ background: "#09090E" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 60% 120% at 50% 100%, ${GOLD}06, transparent)` }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20 text-center">
          <p className="text-[8px] uppercase font-black tracking-[0.4em] mb-4" style={{ color: GOLD }}>
            // Edition IV · June 2026
          </p>
          <h2 className="text-[clamp(32px,6vw,76px)] font-black uppercase leading-tight mb-3">
            Tune in
            <span className="text-transparent ml-4" style={{ WebkitTextStroke: `2px ${BRONZE}50` }}>
              this summer
            </span>
          </h2>
          <p className="text-[8px] uppercase tracking-widest font-bold mb-8" style={{ color: BRONZE }}>
            Livestreamed · Charity · Community voted
          </p>
          <div className="flex justify-center gap-2.5 flex-wrap">
            <button className="px-10 py-3 text-[9px] font-black uppercase tracking-widest transition-all active:scale-95"
              style={{ backgroundColor: GOLD, color: "#09090E" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = GOLD_HOVER)}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = GOLD)}>
              Watch Live
            </button>
            <button className="border border-white/[0.07] text-[#2a2a2a] px-10 py-3 text-[9px] font-black uppercase tracking-widest hover:text-[#F0EDE8] hover:border-white/[0.12] transition-all">
              Donate
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.04]" style={{ background: "#050509" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 relative">
              <Image src={Olympics} alt="MCYT Olympics" fill className="object-contain" />
            </div>
            <span className="font-black uppercase tracking-widest text-[9px]" style={{ color: GOLD }}>
              MCYT Olympics
            </span>
          </div>
          <p className="text-[8px] text-[#181818] font-bold uppercase tracking-widest">
            © 2026 MCYT Olympics · All Rights Reserved
          </p>
          <p className="text-[8px] text-[#141414] font-bold uppercase tracking-widest">
            Developed by ItzBogged · A Porkstride Production
          </p>
        </div>
      </footer>

    </div>
  );
}
