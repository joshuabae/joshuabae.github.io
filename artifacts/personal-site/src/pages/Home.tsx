import { SiGithub, SiInstagram } from "react-icons/si";
import { Mail } from "lucide-react";
import beliLogo from "@/assets/logos/beli.png";
import { galleryPhotos } from "@/content/gallery";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fullTimeExperienceData, internshipsData } from "@/content/experience";
import { postsData } from "@/content/posts";
import { Link } from "wouter";
import joshPhoto from "@/assets/josh-photo.jpg";

import { LogoMarquee } from "@/components/LogoMarquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-20 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* HERO SECTION */}
        <header className="py-16 sm:py-24 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 md:gap-12 items-center" id="intro">
          <div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight max-w-2xl" data-testid="hero-name">
            Hi, I'm Josh. <span className="text-mint">Software Architect & Writer.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground font-medium mb-12 max-w-xl leading-relaxed">
            Delivery Solutions Architect at Databricks. I architect solutions to real-world problems through data-driven decisions — and occasionally write about what I learn.
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <a 
              href="https://github.com/joshuabae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 bg-muted hover:bg-coral text-foreground hover:text-white rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-coral/20"
              aria-label="GitHub"
              data-testid="social-link-github"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/__joshbae__/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 bg-muted hover:bg-sun text-foreground hover:text-ink rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-sun/20"
              aria-label="Instagram"
              data-testid="social-link-instagram"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <a 
              href="https://beliapp.co/K0HV1K9sdFb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 bg-muted hover:bg-mint text-foreground hover:text-white rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-mint/20"
              aria-label="Beli"
              data-testid="social-link-beli"
            >
              <img src={beliLogo} alt="Beli" className="w-6 h-6 object-contain group-hover:brightness-0 group-hover:invert transition-all" />
            </a>
            <a 
              href="mailto:joshuabae0@gmail.com" 
              className="group flex items-center justify-center w-12 h-12 bg-muted hover:bg-azure text-foreground hover:text-white rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-azure/20"
              aria-label="Email"
              data-testid="social-link-email"
            >
              <Mail className="w-5 h-5" strokeWidth={2.5} />
            </a>
          </div>
          </div>

          <div className="relative order-first md:order-none max-w-[280px] md:max-w-none mx-auto md:mx-0">
            <div className="absolute -inset-3 bg-mint/20 rounded-[2rem] rotate-3" aria-hidden="true" />
            <img
              src={joshPhoto}
              alt="Josh Bae"
              className="relative w-full aspect-[3/4] object-cover object-[center_35%] rounded-[2rem] shadow-xl"
              data-testid="hero-photo"
            />
          </div>
        </header>

        {/* LOGO MARQUEE */}
        <LogoMarquee />

        {/* EXPERIENCE SECTION */}
        <section className="mb-24" id="experience">
          <SectionLabel colorClass="bg-sun text-foreground">Experience</SectionLabel>
          <div className="flex flex-col gap-8">
            {fullTimeExperienceData.map((company, idx) => (
              <div 
                key={idx} 
                className="flex gap-4 sm:gap-6" 
                data-testid={`experience-company-${idx}`}
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg border border-border shadow-sm flex items-center justify-center overflow-hidden">
                    <img 
                      src={`${import.meta.env.BASE_URL}${company.logo}`}
                      alt={`${company.company} logo`}
                      className="w-full h-full object-contain p-1.5"
                    />
                  </div>
                  {/* Vertical line connecting roles if there are more than 1 */}
                  {company.roles.length > 1 && (
                    <div className="w-[2px] bg-border mt-3 flex-1" />
                  )}
                </div>
                
                <div className="flex-1 pb-6">
                  <h4 className="text-xl font-bold text-foreground leading-tight">
                    {company.companyUrl ? (
                      <a href={company.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sun transition-colors">
                        {company.company}
                      </a>
                    ) : (
                      company.company
                    )}
                  </h4>
                  <div className="text-sm font-medium text-muted-foreground mb-4">
                    {company.location}
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    {company.roles.map((role, roleIdx) => (
                      <div key={roleIdx} className="relative">
                        {company.roles.length > 1 && (
                          <div className="absolute -left-[1.35rem] sm:-left-[1.85rem] top-1.5 w-1.5 h-1.5 rounded-full bg-border" />
                        )}
                        <h5 className="text-base font-bold text-foreground">
                          {role.title}
                        </h5>
                        <div className="text-sm font-medium text-muted-foreground">
                          {role.dateRange}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* INTERNSHIPS */}
            <div className="mt-4 pt-6 border-t border-border">
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">Internships</h4>
              <div className="flex flex-col gap-5">
                {internshipsData.map((internship, idx) => (
                  <div key={idx} className="flex gap-4 items-center group">
                    <div className="w-8 h-8 shrink-0 bg-white rounded-md border border-border shadow-sm flex items-center justify-center overflow-hidden">
                      <img 
                        src={`${import.meta.env.BASE_URL}${internship.logo}`}
                        alt={`${internship.company} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <span className="text-sm font-bold text-foreground">
                          {internship.role}
                        </span>
                        <span className="hidden sm:inline text-muted-foreground/50 font-bold">·</span>
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                          {internship.company}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider shrink-0">
                        {internship.dateRange}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WRITING SECTION */}
        <section id="writing">
          <SectionLabel colorClass="bg-lavender text-foreground">Writing</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-testid="posts-list">
            {postsData.map((post) =>
              post.externalUrl ? (
                <a
                  key={post.slug}
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-6 sm:p-8 rounded-3xl bg-muted/40 hover:bg-lavender/10 hover:border-lavender/30 border border-transparent transition-all hover:-translate-y-1"
                  data-testid={`post-link-${post.slug}`}
                >
                  <div className="text-sm font-bold text-lavender uppercase tracking-widest mb-3">
                    {post.date}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-lavender transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-base text-foreground/80 leading-relaxed flex-1">
                    {post.description}
                  </p>
                  <div className="mt-6 font-semibold text-lavender flex items-center gap-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Read on Medium <span aria-hidden="true">↗</span>
                  </div>
                </a>
              ) : (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col p-6 sm:p-8 rounded-3xl bg-muted/40 hover:bg-lavender/10 hover:border-lavender/30 border border-transparent transition-all hover:-translate-y-1"
                data-testid={`post-link-${post.slug}`}
              >
                <div className="text-sm font-bold text-lavender uppercase tracking-widest mb-3">
                  {post.date}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-lavender transition-colors">
                  {post.title}
                </h4>
                <p className="text-base text-foreground/80 leading-relaxed flex-1">
                  {post.description}
                </p>
                <div className="mt-6 font-semibold text-lavender flex items-center gap-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Read article <span aria-hidden="true">→</span>
                </div>
              </Link>
              )
            )}
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="mt-24" id="gallery">
          <SectionLabel colorClass="bg-coral text-white">Over the Years</SectionLabel>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[160px] sm:auto-rows-[200px] gap-4"
            data-testid="photo-gallery"
          >
            {galleryPhotos.map((photo, idx) => (
              <figure
                key={idx}
                className={`group relative overflow-hidden rounded-3xl ${
                  photo.span === "tall" ? "row-span-2" : photo.span === "wide" ? "col-span-2" : ""
                }`}
                data-testid={`gallery-photo-${idx}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {photo.caption && (
                  <figcaption className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
