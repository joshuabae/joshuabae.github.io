import { useState } from "react";
import { Github, Instagram, Mail } from "lucide-react";

const articles = [
  ["01", "A case for slower strategy", "How making less room for noise makes more room for meaning.", "08 MIN READ"],
  ["02", "The useful friction of taste", "Why a strong opinion is often kinder to a team than consensus.", "06 MIN READ"],
  ["03", "Designing for the second look", "Some ideas are built to announce themselves. The best ones reward attention.", "11 MIN READ"],
];

export function ModernEditorial() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#f4f1ea] text-[#18211f] selection:bg-[#d6533b] selection:text-[#f4f1ea]" style={{ fontFamily: "'Arial', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap');
        .me-serif { font-family: 'Playfair Display', Georgia, serif; }
        .me-mono { font-family: 'DM Mono', monospace; }
        .me-reveal { animation: meReveal .8s cubic-bezier(.22,.8,.25,1) both; }
        @keyframes meReveal { from { opacity:0; transform:translateY(18px) } to { opacity:1; transform:translateY(0) } }
        .me-line { background: #18211f; height: 1px; transform-origin:left; animation: meLine .9s ease both; }
        @keyframes meLine { from { transform:scaleX(0) } to { transform:scaleX(1) } }
      `}</style>
      <header className="relative z-20 mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-12 lg:px-20">
        <a href="#top" className="me-serif text-xl font-semibold tracking-[-.04em]">AM<span className="text-[#d6533b]">.</span></a>
        <div className="hidden items-center gap-9 md:flex">
          <a href="#work" className="me-mono text-[10px] uppercase tracking-[.18em] transition-colors hover:text-[#d6533b]">Selected work</a>
          <a href="#writing" className="me-mono text-[10px] uppercase tracking-[.18em] transition-colors hover:text-[#d6533b]">Writing</a>
          <a href="#contact" className="me-mono text-[10px] uppercase tracking-[.18em] transition-colors hover:text-[#d6533b]">Contact</a>
        </div>
        <button aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)} className="me-mono text-[10px] uppercase tracking-[.18em] md:hidden">
          {menuOpen ? "Close" : "Menu"}
        </button>
        {menuOpen && <nav className="absolute right-6 top-16 flex w-44 flex-col gap-4 border border-[#18211f]/20 bg-[#f4f1ea] p-5 shadow-xl md:hidden">
          <a onClick={() => setMenuOpen(false)} href="#work" className="me-mono text-xs uppercase">Selected work</a>
          <a onClick={() => setMenuOpen(false)} href="#writing" className="me-mono text-xs uppercase">Writing</a>
          <a onClick={() => setMenuOpen(false)} href="#contact" className="me-mono text-xs uppercase">Contact</a>
        </nav>}
      </header>

      <section id="top" className="mx-auto max-w-[1440px] px-6 pb-24 pt-16 md:px-12 md:pb-36 md:pt-24 lg:px-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div className="me-reveal">
            <p className="me-mono mb-7 text-[10px] uppercase tracking-[.24em] text-[#d6533b]">Independent strategist · New York / Everywhere</p>
            <h1 className="me-serif max-w-4xl text-[clamp(4.5rem,12vw,11rem)] leading-[.82] tracking-[-.075em]">Make the<br /><em className="text-[#d6533b]">meaning</em><br />matter.</h1>
          </div>
          <div className="me-reveal max-w-sm pb-2 lg:ml-auto" style={{ animationDelay: ".15s" }}>
            <div className="me-line mb-7 w-20" />
            <p className="me-serif text-2xl leading-[1.2] tracking-[-.03em]">Alex Morgan is a brand strategist and writer helping ambitious teams find the words, ideas, and nerve to move culture forward.</p>
            <a href="#contact" className="me-mono mt-8 inline-flex items-center gap-3 border-b border-[#18211f] pb-2 text-[10px] uppercase tracking-[.15em] transition-colors hover:border-[#d6533b] hover:text-[#d6533b]">Start a conversation <span className="text-base">↗</span></a>
          </div>
        </div>
        <div className="mt-20 flex items-center justify-between border-t border-[#18211f]/30 pt-4">
          <span className="me-mono text-[9px] uppercase tracking-[.2em]">Scroll to explore</span>
          <span className="me-mono text-[9px] uppercase tracking-[.2em]">01 / 05</span>
        </div>
      </section>

      <section id="work" className="bg-[#1e2b29] px-6 py-20 text-[#f4f1ea] md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-20 flex items-start justify-between">
            <div><p className="me-mono mb-4 text-[10px] uppercase tracking-[.2em] text-[#d6533b]">01 — The long view</p><h2 className="me-serif max-w-xl text-5xl leading-[.95] tracking-[-.055em] md:text-7xl">A career in<br /><em>progress.</em></h2></div>
            <span className="me-mono hidden text-[10px] uppercase tracking-[.18em] text-[#f4f1ea]/50 md:block">2008 — Present</span>
          </div>
          <div className="border-t border-[#f4f1ea]/25">
            {[
              ["2021 — Now", "Partner, Northstar & Co.", "Building a small, sharp consultancy for brands with something to say."],
              ["2016 — 2021", "Executive Strategy Director, Collins", "Led global brand work for Spotify, Mailchimp, and the next generation of founders."],
              ["2011 — 2016", "Strategy Director, Mother New York", "Learned to make work people talk about, not just work people approve."],
              ["2008 — 2011", "Brand Planner, BBH London", "Started with a notebook, a train pass, and a fascination with human behavior."],
            ].map(([year, role, desc], i) => <div key={year} className="grid grid-cols-[1fr_2fr] gap-5 border-b border-[#f4f1ea]/25 py-7 md:grid-cols-[1fr_2fr_2fr] md:gap-8">
              <span className="me-mono text-[10px] text-[#d6533b]">{year}</span><h3 className="me-serif text-2xl leading-none md:text-3xl">{role}</h3><p className="col-start-2 mt-[-8px] text-sm leading-relaxed text-[#f4f1ea]/55 md:col-start-auto">{desc}</p>
            </div>)}
          </div>
          <p className="mt-8 text-right"><a href="#contact" className="me-mono text-[10px] uppercase tracking-[.18em] text-[#d6533b] hover:underline">Full experience ↗</a></p>
        </div>
      </section>

      <section id="writing" className="border-t border-[#18211f]/20 px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-[1440px]"><div className="flex items-end justify-between"><div><p className="me-mono mb-5 text-[10px] uppercase tracking-[.2em] text-[#d6533b]">02 — Dispatches</p><h2 className="me-serif text-5xl tracking-[-.05em] md:text-7xl">Recent writing</h2></div><a href="#contact" className="me-mono hidden text-[10px] uppercase tracking-[.15em] hover:text-[#d6533b] md:block">Read the archive ↗</a></div>
          <div className="mt-14 border-t border-[#18211f]">{articles.map(([num, title, desc, time]) => <article key={num} className="group grid grid-cols-[.35fr_1fr] gap-4 border-b border-[#18211f]/25 py-7 transition-colors hover:bg-[#e9e4da] md:grid-cols-[.25fr_1.5fr_1.5fr_.5fr] md:items-center md:px-3">
            <span className="me-mono text-[10px] text-[#d6533b]">{num}</span><h3 className="me-serif text-2xl leading-none md:text-3xl">{title}</h3><p className="col-start-2 text-sm text-[#18211f]/60 md:col-start-auto">{desc}</p><span className="me-mono col-start-2 text-[9px] uppercase text-[#18211f]/45 md:col-start-auto md:text-right">{time}</span>
          </article>)}</div>
        </div>
      </section>

      <footer id="contact" className="bg-[#d6533b] px-6 py-20 text-[#18211f] md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] gap-16 md:grid-cols-[1fr_.7fr]"><div><p className="me-mono mb-6 text-[10px] uppercase tracking-[.2em]">04 — Stay in touch</p><h2 className="me-serif max-w-2xl text-6xl leading-[.86] tracking-[-.06em] md:text-8xl">Good work<br /><em>starts here.</em></h2><a href="mailto:hello@alexmorgan.studio" className="me-mono mt-12 inline-block border-b border-[#18211f] pb-2 text-xs uppercase tracking-[.14em] hover:border-[#f4f1ea]">hello@alexmorgan.studio ↗</a></div>
          <div className="md:pt-12"><p className="me-serif text-2xl leading-tight">A monthly letter on ideas, language, and the work between the work.</p>{subscribed ? <p className="me-mono mt-8 text-xs uppercase tracking-widest">You're on the list. Thank you.</p> : <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="mt-8 flex border-b border-[#18211f] pb-3"><input required type="email" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#18211f]/60" /><button className="me-mono text-[10px] uppercase tracking-widest hover:text-[#f4f1ea]">Subscribe</button></form>}<div className="mt-14 flex items-center gap-3"><a aria-label="Email Alex" href="mailto:alex@example.com" className="group flex h-10 w-10 items-center justify-center border border-[#18211f]/50 transition-colors hover:border-[#f4f1ea] hover:bg-[#18211f] hover:text-[#f4f1ea]"><Mail size={16} strokeWidth={1.5} /></a><a aria-label="Alex on GitHub" href="https://github.com/alexmorgan" className="group flex h-10 w-10 items-center justify-center border border-[#18211f]/50 transition-colors hover:border-[#f4f1ea] hover:bg-[#18211f] hover:text-[#f4f1ea]"><Github size={16} strokeWidth={1.5} /></a><a aria-label="Alex on Instagram" href="https://instagram.com/alexmorgan" className="group flex h-10 w-10 items-center justify-center border border-[#18211f]/50 transition-colors hover:border-[#f4f1ea] hover:bg-[#18211f] hover:text-[#f4f1ea]"><Instagram size={16} strokeWidth={1.5} /></a></div><div className="me-mono mt-8 flex gap-6 text-[9px] uppercase tracking-[.15em]"><span>Find me elsewhere</span><span>© 2024 AM</span></div></div>
        </div>
      </footer>
    </main>
  );
}