type BulletListProps = {
  items: string[];
  className?: string;
};

/** List with a short hairline dash as the marker. */
export function BulletList({ items, className = "" }: BulletListProps) {
  return (
    <ul className={`space-y-2 text-[15px] leading-relaxed text-muted ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-[0.75em] h-px w-3 shrink-0 bg-subtle" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
