import { useState } from "react";
import { ArrowUpRight, ChevronDown, Github, Instagram, Mail, Menu, X } from "lucide-react";

const roles = [
  { years: "2022—Present", role: "Director of Product Design", company: "Northline Studio", note: "Leading a small, stubbornly curious team shaping tools for public life." },
  { years: "2018—22", role: "Senior Product Designer", company: "Atelier Systems", note: "Built the first design practice around a growing civic technology company." },
  { years: "2015—18", role: "Designer & Researcher", company: "Common Practice", note: "A studio devoted to the useful, the durable, and the human-scale." },
];

const articles = [
  { number: "01", type: "Essay", title: "The shape of a useful question", excerpt: "On curiosity as a design material, and why the questions we carry into a room matter more than the tools we bring.", date: "Jun 06, 2024 · 8 min read" },
  { number: "02", type: "Field notes", title: "Against the frictionless life", excerpt: "Some resistance is not a problem to solve. A short meditation on thresholds, rituals, and the value of a deliberate pace.", date: "Mar 18, 2024 · 6 min read" },
  { number: "03", type: "Conversation", title: "What we owe the ordinary", excerpt: "A conversation with urbanist Mara Chen about public spaces, quiet signals, and designing for people who are not in the room.", date: "Nov 02, 2023 · 11 min read" },
];

export function Literary() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-[100dvh] bg-[#f3efe7] text-[#272520] selection:bg-[#b6c5b2] selection:text-[#272520]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        .literary-mono { font-family: 'DM Mono', monospace; }
        .literary-rule { border-color: rgba(39,37,32,.24); }
        .literary-fade { animation: literaryFade .8s ease both; }
        .literary-delay { animation-delay: .16s; }
        .literary-delay2 { animation-delay: .3s; }
        @keyframes literaryFade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .literary-link { position: relative; }
        .literary-link:after { content: ''; position:absolute; left:0; right:100%; bottom:-3px; height:1px; background:#272520; transition:right .25s ease; }
        .literary-link:hover:after { right:0; }
      `}</style>
      <header className="mx-auto flex max-w-[1240px] items-center justify-between border-b literary-rule px-6 py-6 md:px-12">
        <a href="#top" className="text-[23px] font-semibold tracking-[-.03em]">AM<span className="text-[#71816f]">.</span></a>
        <nav className="hidden items-center gap-8 text-[14px] md:flex" style={{ fontFamily: "'DM Mono', monospace" }}>
          <a className="literary-link" href="#about">About</a><a className="literary-link" href="#work">Work</a><a className="literary-link" href="#writing">Writing</a>
          <a href="mailto:hello@alexmorgan.studio" className="rounded-full border border-[#272520] px-4 py-2 transition hover:bg-[#272520] hover:text-[#f3efe7]">Say hello</a>
        </nav>
        <button aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
        {menuOpen && <div className="absolute left-0 right-0 top-[76px] z-20 border-b bg-[#f3efe7] px-6 py-5 md:hidden"><div className="flex flex-col gap-4 text-lg"><a onClick={() => setMenuOpen(false)} href="#about">About</a><a onClick={() => setMenuOpen(false)} href="#work">Work</a><a onClick={() => setMenuOpen(false)} href="#writing">Writing</a></div></div>}
      </header>

      <section id="top" className="mx-auto max-w-[1240px] px-6 pb-24 pt-20 md:px-12 md:pb-36 md:pt-32">
        <div className="grid gap-12 md:grid-cols-[1.45fr_.55fr] md:items-end">
          <div className="literary-fade">
            <p className="literary-mono mb-7 text-[11px] uppercase tracking-[.22em] text-[#71816f]">Designer · writer · listener</p>
            <h1 className="max-w-[850px] text-[clamp(4.3rem,10vw,9.4rem)] font-medium leading-[.78] tracking-[-.065em]">Making room<br/><span className="ml-[12%] italic text-[#71816f]">for better</span><br/>questions.</h1>
          </div>
          <div className="literary-fade literary-delay border-l literary-rule pl-6 md:mb-2">
            <p className="mb-6 text-[24px] leading-[1.05] md:text-[29px]">Alex Morgan is a product designer and writer thinking about technology, public life, and the things that hold us together.</p>
            <a href="#about" className="literary-mono literary-link text-[11px] uppercase tracking-[.16em]">Read the short version <ArrowUpRight className="ml-1 inline" size={14}/></a>
            <div className="mt-8 flex items-center gap-5 border-t literary-rule pt-5">
              <span className="literary-mono mr-1 text-[10px] uppercase tracking-[.16em] text-[#77736b]">Elsewhere</span>
              <a aria-label="Email Alex Morgan" href="mailto:alex@example.com" className="text-[#71816f] transition hover:-translate-y-1 hover:text-[#272520]"><Mail size={18}/></a>
              <a aria-label="Alex Morgan on GitHub" href="https://github.com/alexmorgan" target="_blank" rel="noreferrer" className="text-[#71816f] transition hover:-translate-y-1 hover:text-[#272520]"><Github size={18}/></a>
              <a aria-label="Alex Morgan on Instagram" href="https://instagram.com/alexmorgan" target="_blank" rel="noreferrer" className="text-[#71816f] transition hover:-translate-y-1 hover:text-[#272520]"><Instagram size={18}/></a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y literary-rule bg-[#e7e6dd]">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-20 md:grid-cols-[.55fr_1.45fr] md:px-12 md:py-28">
          <div><p className="literary-mono text-[11px] uppercase tracking-[.2em] text-[#71816f]">A small biography</p><div className="mt-20 hidden text-[100px] leading-none text-[#71816f] md:block">“</div></div>
          <div className="max-w-[700px]"><p className="text-[38px] leading-[.98] md:text-[55px]">I work at the intersection of <span className="italic">clarity</span> and possibility — helping teams make things that are useful, considered, and a little more humane.</p><p className="mt-10 max-w-[530px] text-[20px] leading-[1.25] text-[#5b5951]">Over the last decade I’ve partnered with founders, researchers, and public servants to turn complicated ideas into experiences people can actually use. I live in Brooklyn with a very patient old dog and too many books.</p></div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1240px] px-6 py-24 md:px-12 md:py-36">
        <div className="mb-14 flex items-end justify-between border-b literary-rule pb-5"><div><p className="literary-mono mb-3 text-[11px] uppercase tracking-[.2em] text-[#71816f]">A working life</p><h2 className="text-5xl tracking-[-.04em] md:text-7xl">In progress</h2></div><span className="literary-mono hidden text-[11px] text-[#77736b] md:block">01 — 03</span></div>
        <div>{roles.map((item, i) => <div key={item.company} className="grid gap-3 border-b literary-rule py-8 md:grid-cols-[.28fr_1fr_.9fr] md:gap-8"><span className="literary-mono text-[11px] text-[#71816f]">{item.years}</span><div><h3 className="text-[30px] leading-none">{item.role}</h3><p className="mt-2 text-[18px] italic text-[#6f6b61]">{item.company}</p></div><p className="max-w-[290px] text-[17px] leading-[1.15] text-[#5b5951] md:justify-self-end">{item.note}</p></div>)}</div>
      </section>

      <section id="writing" className="mx-auto max-w-[1240px] px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-14 md:grid-cols-[.6fr_1.4fr]"><div><p className="literary-mono mb-4 text-[11px] uppercase tracking-[.2em] text-[#71816f]">The notebook</p><h2 className="text-5xl leading-[.88] tracking-[-.04em] md:text-7xl">Things I’m<br/><span className="italic">thinking</span><br/>about.</h2><p className="mt-8 max-w-[220px] text-[18px] leading-[1.15] text-[#6f6b61]">Essays, field notes, and conversations on making things with care.</p></div><div>{articles.map(article => <a href="#article" key={article.number} className="group grid grid-cols-[44px_1fr] gap-5 border-t literary-rule py-8"><span className="literary-mono text-[11px] text-[#71816f]">{article.number}</span><div><p className="literary-mono mb-3 text-[10px] uppercase tracking-[.16em] text-[#71816f]">{article.type}</p><h3 className="text-[32px] leading-none transition group-hover:italic md:text-[42px]">{article.title}</h3><p className="mt-4 max-w-[600px] text-[18px] leading-[1.15] text-[#5b5951]">{article.excerpt}</p><p className="literary-mono mt-6 text-[10px] uppercase tracking-[.12em] text-[#77736b]">{article.date}</p></div><ChevronDown className="hidden rotate-[-90deg] self-center text-[#71816f] transition group-hover:translate-x-1 md:block" size={18}/></a>)}</div></div>
      </section>

      <footer className="border-t literary-rule bg-[#e7e6dd] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1240px]"><p className="literary-mono mb-10 text-[11px] uppercase tracking-[.2em] text-[#71816f]">A note to end on</p><div className="flex flex-col justify-between gap-12 md:flex-row md:items-end"><h2 className="max-w-[680px] text-[52px] leading-[.86] tracking-[-.04em] md:text-[82px]">Have a good<br/><span className="italic">question?</span></h2><div className="max-w-[280px]"><p className="mb-5 text-[20px] leading-[1.05]">I’m always interested in thoughtful problems and unlikely collaborations.</p><a href="mailto:alex@example.com" className="literary-mono literary-link text-[11px] uppercase tracking-[.16em]">alex@example.com <Mail className="ml-1 inline" size={13}/></a><div className="mt-7 flex gap-5 text-[#71816f]"><a aria-label="GitHub" href="https://github.com/alexmorgan" target="_blank" rel="noreferrer"><Github size={18}/></a><a aria-label="Instagram" href="https://instagram.com/alexmorgan" target="_blank" rel="noreferrer"><Instagram size={18}/></a></div></div></div><div className="mt-24 flex justify-between border-t literary-rule pt-5 literary-mono text-[10px] uppercase tracking-[.14em] text-[#77736b]"><span>Alex Morgan · New York</span><span>© 2024</span></div></div>
      </footer>
    </main>
  );
}