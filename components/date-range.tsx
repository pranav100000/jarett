type DateRangeProps = {
  start: string;
  end?: string;
};

/** "2021 — 2024", or just the start when no end is given. */
export function DateRange({ start, end }: DateRangeProps) {
  return (
    <p className="ml-auto shrink-0 text-sm tabular-nums text-subtle">
      {end ? `${start} — ${end}` : start}
    </p>
  );
}
