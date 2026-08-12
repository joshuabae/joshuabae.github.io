import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  colorClass?: string;
}

export function SectionLabel({ children, colorClass = "bg-sun text-foreground" }: SectionLabelProps) {
  return (
    <h3 className="mb-8 flex items-center gap-4" data-testid="section-label">
      <span className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase ${colorClass}`}>
        {children}
      </span>
      <div className="h-[2px] flex-1 bg-border/60 rounded-full" />
    </h3>
  );
}
