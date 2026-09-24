import { cn } from "@/lib/utils";

const careerOverview = [
  { label: "Primary focus", value: "Frontend Engineering" },
  { label: "Working toward", value: "Full-stack" },
  { label: "Preferred setup", value: "Remote" },
];

const careerTimeline = [
  {
    label: "Present",
    title: "Software Engineer · Growsari",
    description:
      "Building and maintaining operational frontend systems for logistics and internal business workflows.",
  },
  {
    label: "Recent work",
    title: "Route Planning & Warehouse Tools",
    description:
      "Interactive mapping, route management, scanning workflows, complex state, and API-driven interfaces.",
  },
  {
    label: "Independent",
    title: "Product Prototypes",
    description: "Designing and developing practical SaaS, booking, education, and marketplace concepts.",
  },
];

export default function Experience() {
  return (
    <div>
      <p className="reveal text-caption text-foreground-secondary mb-2">Résumé</p>
      <div className="reveal flex flex-wrap justify-between gap-x-12 gap-y-6">
        <div className="flex-column flex-[999_1_20rem] min-w-[min(100%,20rem)]">
          <h2 className="max-w-[18ch]">Experience where software meets operations.</h2>
          <p className="text-muted mt-2 max-w-[60ch]">
            Nearly five years building production interfaces for logistics, identity, warehouse, and mobile
            workflows—where clarity and reliability matter.
          </p>
        </div>
        <div className="flex-column flex-[1_1_max-content] min-w-0 border-t">
          {careerOverview.map((item) => (
            <CareerOverview key={item.label} {...item} />
          ))}
        </div>
      </div>
      <div className="reveal max-w-fit mt-12">
        {careerTimeline.map((item) => (
          <CareerTimeline key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}

function CareerOverview({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-12 border-b text-sm py-4">
      <span className="text-muted">{label}</span>
      <strong className="text-right">{value}</strong>
    </div>
  );
}

function CareerTimeline({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <article
      className={cn(
        "role grid grid-cols-[132px_1fr] gap-12 border-b py-8 last:border-b-0",
        "max-md:grid-cols-1 max-md:gap-2",
      )}
    >
      <time className="text-sm text-muted">{label}</time>
      <div className="space-y-2">
        <h6>{title}</h6>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </article>
  );
}
