export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full max-w-4xl mx-auto py-12 px-6 sm:px-12 border-t border-border mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-sm font-bold text-foreground">
        <div className="w-2.5 h-2.5 bg-coral rounded-full" />
        Josh Bae
      </div>
      <p className="text-sm font-medium text-muted-foreground" data-testid="footer-copyright">
        © {currentYear}
      </p>
    </footer>
  );
}
