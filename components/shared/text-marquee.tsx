export default function TextMarquee({ contents }: { contents: string[] }) {
  return (
    <div className="overflow-hidden border-y bg-card" aria-label="Technology stack">
      <div className="marquee-track flex w-max py-4">
        {contents.map((text, i) => (
          <span key={i} className="px-10 text-sm font-extrabold tracking-wider text-muted uppercase">
            {text}
          </span>
        ))}
        {contents.map((text, i) => (
          <span key={i} className="px-10 text-sm font-extrabold tracking-wider text-muted uppercase">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
