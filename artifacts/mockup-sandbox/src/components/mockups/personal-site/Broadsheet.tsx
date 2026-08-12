import { useState } from "react";

const roles = [
  { year: "2022—NOW", title: "Editorial Director", company: "Field Notes Studio", text: "Leading a small editorial practice for companies building a more considered internet." },
  { year: "2018—22", title: "Senior Writer & Strategist", company: "The Future Laboratory", text: "Turned cultural research into sharp points of view for global brands and founders." },
  { year: "2014—18", title: "Associate Editor", company: "Monocle", text: "Reported on cities, design, and the people quietly changing how we live." },
];

const posts = [
  { date: "MAY 14, 2024", title: "The case for a slower homepage", copy: "Most homepages are built to answer every question at once. The better ones leave a little room for the reader to arrive.", stat: "1,248 reactions" },
  { date: "APR 02, 2024", title: "Notes from 10 years of interviewing", copy: "The strongest conversations rarely begin with the clever question. They begin with enough silence for a real one to appear.", stat: "684 reactions" },
  { date: "FEB 19, 2024", title: "What a good brief actually does", copy: "A brief should narrow the field without shrinking the ambition. That distinction is where most useful work starts.", stat: "532 reactions" },
];

const articles = [
  { section: "ESSAY", title: "The useful friction of making things by hand", dek: "On tools, patience, and why a little resistance can improve the work.", read: "8 min read" },
  { section: "FIELD NOTES", title: "A city is a collection of small permissions", dek: "Three walks through Copenhagen, looking for the details that make a place feel lived in.", read: "6 min read" },
  { section: "WORKING NOTES", title: "Against the tyranny of the blank page", dek: "A practical argument for constraints, rituals, and starting before you feel ready.", read: "5 min read" },
];

export function Broadsheet() {
  const [copied, setCopied] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const email = "hello@alexmorgan.work";
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(email); } catch { /* clipboard unavailable in preview */ }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="min-h-[100dvh] bg-[#f3f0e9] text-[#202221] selection:bg-[#d75a3d] selection:text-[#f8f5ee]">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Libre+Baskerville:wght@400;700&family=Manrope:wght@400;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        .broadsheet * { box-sizing:border-box }
        .broadsheet { font-family:Manrope,sans-serif }
        .broadsheet-serif { font-family:"Libre Baskerville",serif }
        .broadsheet-mono { font-family:"DM Mono",monospace }
        .rule { border-color:rgba(32,34,33,.22) }
        .reveal { animation: rise .7s cubic-bezier(.2,.7,.2,1) both }
        .reveal-2 { animation-delay:.1s } .reveal-3 { animation-delay:.18s }
        @keyframes rise { from { opacity:0; transform:translateY(14px) } to { opacity:1; transform:translateY(0) } }
        @media (prefers-reduced-motion:reduce) { .reveal { animation:none } }
      `}</style>
      <div className="broadsheet mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="reveal border-b rule">
          <div className="flex items-center justify-between py-5 broadsheet-mono text-[10px] tracking-[.18em] uppercase">
            <span>AM / Personal Dispatch</span><span className="hidden sm:block">Brooklyn · New York · 2024</span>
            <span className="text-[#d75a3d]">Issue No. 07</span>
          </div>
          <div className="flex flex-col gap-5 border-t rule py-7 sm:flex-row sm:items-end sm:justify-between">
            <a href="#top" className="broadsheet-serif text-[clamp(3.4rem,9vw,8.4rem)] leading-[.82] tracking-[-.08em]">Alex<br className="sm:hidden" /> Morgan<span className="text-[#d75a3d]">.</span></a>
            <nav className="flex gap-5 broadsheet-mono text-[10px] uppercase tracking-[.14em]">
              <a className="transition-colors hover:text-[#d75a3d]" href="#work">01 / Work</a><a className="transition-colors hover:text-[#d75a3d]" href="#writing">02 / Writing</a><a className="transition-colors hover:text-[#d75a3d]" href="#contact">03 / Contact</a>
            </nav>
          </div>
        </header>

        <section id="top" className="grid border-b rule lg:grid-cols-[1.7fr_1fr]">
          <div className="reveal reveal-2 border-b rule py-12 pr-0 lg:border-b-0 lg:border-r lg:pr-12 lg:py-20">
            <p className="broadsheet-mono mb-8 text-[10px] uppercase tracking-[.2em] text-[#d75a3d]">Independent writer / editor</p>
            <h1 className="broadsheet-serif max-w-4xl text-[clamp(2.8rem,6.8vw,7rem)] leading-[.98] tracking-[-.065em]">I write about the <em className="text-[#d75a3d]">ideas</em> shaping everyday life.</h1>
            <p className="mt-9 max-w-xl text-base leading-7 text-[#595b55] sm:text-lg">Alex Morgan is an editorial director and writer working at the intersection of culture, technology, and the choices we make at human scale.</p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a href="#writing" className="border border-[#202221] bg-[#202221] px-5 py-3 broadsheet-mono text-[10px] uppercase tracking-[.15em] text-[#f3f0e9] transition-all hover:bg-[#d75a3d] hover:border-[#d75a3d]">Read the latest <span className="ml-3">↗</span></a>
              <button onClick={copyEmail} className="broadsheet-mono text-[10px] uppercase tracking-[.15em] underline decoration-[#d75a3d] underline-offset-4">{copied ? "Address copied" : "Copy email address"}</button>
            </div>
          </div>
          <aside className="reveal reveal-3 flex flex-col justify-between py-10 lg:pl-12 lg:py-20">
            <div>
              <div className="mb-5 flex items-center justify-between border-b rule pb-3 broadsheet-mono text-[10px] uppercase tracking-[.16em]"><span>At a glance</span><span>01</span></div>
              <dl className="space-y-5 text-sm">
                <div className="flex justify-between gap-4"><dt className="text-[#77776f]">Currently</dt><dd className="text-right font-semibold">Editorial Director<br />Field Notes Studio</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-[#77776f]">Based</dt><dd className="text-right font-semibold">Brooklyn, NY<br />Available worldwide</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-[#77776f]">Focus</dt><dd className="max-w-[180px] text-right font-semibold">Narrative, strategy,<br />the long view</dd></div>
              </dl>
            </div>
            <p className="mt-16 broadsheet-serif text-xl leading-7">“The work gets better when the question gets more specific.”</p>
          </aside>
        </section>

        <section id="work" className="border-b rule py-14 sm:py-20">
          <div className="mb-10 flex items-end justify-between"><div><p className="broadsheet-mono mb-3 text-[10px] uppercase tracking-[.2em] text-[#d75a3d]">By the years</p><h2 className="broadsheet-serif text-4xl tracking-[-.05em] sm:text-6xl">A brief history</h2></div><span className="broadsheet-mono text-[10px] uppercase tracking-[.15em] text-[#77776f]">Selected work / 2014—24</span></div>
          <div className="grid border-t rule md:grid-cols-3">
            {roles.map((role, i) => <article key={role.year} className={`border-b rule py-7 md:border-b-0 md:pr-8 ${i > 0 ? "md:border-l md:pl-8" : ""}`}><p className="broadsheet-mono mb-8 text-[10px] tracking-[.16em] text-[#d75a3d]">{role.year}</p><h3 className="broadsheet-serif text-2xl leading-tight">{role.title}</h3><p className="mt-1 text-sm font-bold">{role.company}</p><p className="mt-5 text-sm leading-6 text-[#65665f]">{role.text}</p><a href="#contact" className="mt-7 inline-block broadsheet-mono text-[10px] uppercase tracking-[.14em] underline decoration-[#d75a3d] underline-offset-4">More context →</a></article>)}
          </div>
        </section>

        <section className="border-b rule py-14 sm:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="broadsheet-mono mb-3 text-[10px] uppercase tracking-[.2em] text-[#d75a3d]">From the professional network</p><h2 className="broadsheet-serif text-4xl tracking-[-.05em] sm:text-6xl">LinkedIn highlights</h2></div><a href="#contact" className="broadsheet-mono text-[10px] uppercase tracking-[.14em] underline decoration-[#d75a3d] underline-offset-4">Follow along ↗</a></div>
          <div className="grid gap-0 border-t rule md:grid-cols-3">
            {posts.map((post, i) => <article key={post.date} className={`py-7 md:pr-7 ${i > 0 ? "border-t rule md:border-l md:border-t-0 md:pl-7" : ""}`}><p className="broadsheet-mono text-[10px] tracking-[.14em] text-[#77776f]">{post.date}</p><h3 className="broadsheet-serif mt-5 text-2xl leading-tight">{post.title}</h3><p className="mt-4 text-sm leading-6 text-[#595b55]">{post.copy}</p><p className="mt-8 broadsheet-mono text-[10px] uppercase tracking-[.12em] text-[#d75a3d]">{post.stat}</p></article>)}
          </div>
        </section>

        <section id="writing" className="py-14 sm:py-20">
          <div className="mb-10 flex items-end justify-between border-b rule pb-5"><div><p className="broadsheet-mono mb-3 text-[10px] uppercase tracking-[.2em] text-[#d75a3d]">The notebook</p><h2 className="broadsheet-serif text-4xl tracking-[-.05em] sm:text-6xl">Recent writing</h2></div><span className="hidden broadsheet-mono text-[10px] uppercase tracking-[.15em] text-[#77776f] sm:block">Dispatches & observations</span></div>
          <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr_1fr]">
            {articles.map((article, i) => <article key={article.title} className={`group border-b rule pb-8 pt-2 lg:pb-2 lg:pr-8 ${i > 0 ? "lg:border-l lg:pl-8" : ""}`}><p className="broadsheet-mono text-[10px] tracking-[.17em] text-[#d75a3d]">{article.section}</p><h3 className="broadsheet-serif mt-5 text-2xl leading-[1.14] transition-colors group-hover:text-[#d75a3d] sm:text-3xl">{article.title}</h3><p className="mt-4 text-sm leading-6 text-[#65665f]">{article.dek}</p><div className="mt-8 flex justify-between broadsheet-mono text-[10px] uppercase tracking-[.13em] text-[#77776f]"><span>{article.read}</span><span>Read ↗</span></div></article>)}
          </div>
          <div className="mt-10 text-center"><button onClick={() => setShowAll(!showAll)} className="border-b border-[#d75a3d] pb-1 broadsheet-mono text-[10px] uppercase tracking-[.16em]">{showAll ? "Showing all dispatches" : "View the archive →"}</button></div>
        </section>

        <footer id="contact" className="border-t-2 border-[#202221] py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]"><div><p className="broadsheet-mono mb-5 text-[10px] uppercase tracking-[.2em] text-[#d75a3d]">The last word</p><h2 className="broadsheet-serif max-w-xl text-4xl leading-tight tracking-[-.05em] sm:text-6xl">Have a good question?<br /><em>Start there.</em></h2></div><div><p className="broadsheet-mono mb-4 text-[10px] uppercase tracking-[.16em]">Write to Alex</p><button onClick={copyEmail} className="text-left text-sm underline decoration-[#d75a3d] underline-offset-4">{copied ? "Address copied" : email}</button></div><div><p className="broadsheet-mono mb-4 text-[10px] uppercase tracking-[.16em]">Elsewhere</p><div className="flex flex-col items-start gap-2 text-sm"><a className="hover:text-[#d75a3d]" href="#top">LinkedIn ↗</a><a className="hover:text-[#d75a3d]" href="#writing">Are.na ↗</a><a className="hover:text-[#d75a3d]" href="#work">Read.cv ↗</a></div></div></div>
          <div className="mt-16 flex justify-between border-t rule pt-5 broadsheet-mono text-[9px] uppercase tracking-[.15em] text-[#77776f]"><span>Alex Morgan / Independent practice</span><span>© 2024</span></div>
        </footer>
      </div>
    </main>
  );
}