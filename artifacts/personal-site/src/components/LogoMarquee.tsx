import { fullTimeExperienceData, internshipsData } from "@/content/experience";

export function LogoMarquee() {
  const companies = [
    ...fullTimeExperienceData.map(exp => ({ name: exp.company, logo: exp.logo })),
    ...internshipsData.map(exp => ({ name: exp.company, logo: exp.logo }))
  ];
  
  // We duplicate the items to make the seamless infinite loop possible
  // We need enough items to fill the screen width twice so it loops smoothly
  const repeatedCompanies = [...companies, ...companies, ...companies, ...companies];
  const items = [...repeatedCompanies, ...repeatedCompanies];

  return (
    <section className="mb-24 w-full overflow-hidden flex flex-col items-center">
      <div className="mb-8 flex flex-col items-center gap-4 w-full px-6 max-w-4xl mx-auto">
        <h3 className="px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase bg-azure/10 text-azure inline-flex">
          Places I've Built At
        </h3>
      </div>
      
      <div className="relative w-full overflow-hidden py-8 flex">
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* The scrolling container */}
        <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none group cursor-default">
          {items.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center justify-center px-8 sm:px-12 mx-4 whitespace-nowrap min-w-max"
            >
              <img 
                src={`${import.meta.env.BASE_URL}${company.logo}`}
                alt={`${company.name} logo`}
                className="max-h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
