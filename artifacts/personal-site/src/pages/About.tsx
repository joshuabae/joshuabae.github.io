export default function About() {
  return (
    <main
      className="mx-auto max-w-3xl px-6 sm:px-12 py-16 sm:py-24"
      data-testid="page-about"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-12 text-foreground">
        About <span className="text-mint">Josh</span>.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 items-start">
        <section className="space-y-6 text-lg leading-relaxed text-foreground/80 font-medium">
          <p>
            Hi, I'm <strong className="text-foreground font-bold">Josh Bae</strong> — a Delivery Solutions Architect
            at Databricks based in the Dallas-Fort Worth area. My goal is to architect
            innovative solutions to real-world problems by incorporating data-driven decisions.
          </p>
          <p>
            I work in Field Engineering, partnering with enterprise customers on data
            lakehouse adoption, AI/BI tooling, and large-scale governance migrations.
            I care about making a lasting impact with every customer I work with.
          </p>
          <p>
            Outside of work I write occasionally about data engineering, prediction markets,
            and the ideas I'm currently working through.
          </p>
        </section>

        <aside className="bg-mint/10 border border-mint/20 rounded-3xl p-8 flex flex-col gap-6">
          <div>
            <h3 className="text-sm font-bold text-mint uppercase tracking-widest mb-2">Currently</h3>
            <p className="text-foreground/90 font-medium">
              Delivery Solutions Architect at Databricks — Field Engineering.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-mint uppercase tracking-widest mb-2">Location</h3>
            <p className="text-foreground/90 font-medium">
              Dallas-Fort Worth, TX
            </p>
          </div>
          <div className="pt-6 border-t border-mint/20">
            <h3 className="text-sm font-bold text-mint uppercase tracking-widest mb-3">Get in touch</h3>
            <a
              href="mailto:joshuabae0@gmail.com"
              className="inline-flex items-center gap-2 text-lg font-bold text-foreground hover:text-mint transition-colors group"
              data-testid="link-email-about"
            >
              joshuabae0@gmail.com
              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-mint" aria-hidden="true">→</span>
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
