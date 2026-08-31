export const Heading: React.FC<{ no: string; title: string }> = ({ no, title }) => (
  <div className="border-border flex items-baseline gap-4 border-b pb-3">
    <span className="text-primary text-xs font-medium tracking-widest">{no}</span>
    <h2 className="text-sm font-medium tracking-[0.14em] uppercase">{title}</h2>
  </div>
);
