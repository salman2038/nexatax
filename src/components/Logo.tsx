export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src="/logo.png" alt="NexaTax Logo" className="h-8 md:h-10 w-auto" />
    </div>
  );
}
