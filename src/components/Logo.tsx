export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0 font-bold text-2xl md:text-3xl tracking-tight ${className}`} style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif', letterSpacing: '-0.02em' }}>
      <span className="text-brand">Nexa</span>
      <span className="text-secondary">Tax</span>
    </div>
  );
}
