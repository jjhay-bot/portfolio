import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { PROJECTS } from "./home";

export default function Projects() {
  return (
    <>
      <div className="reveal flex-column max-md:block mb-6 gap-2">
        <p className="text-caption text-foreground-secondary">Selected work</p>
        <h2>Ideas made tangible.</h2>
        <p className="text-muted">Products built to explore real problems—not just to fill a portfolio grid.</p>
      </div>

      <div className="reveal grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={i}
            featured={i < 3}
            featureNum={i + 1}
            icon={p.icon}
            title={p.title}
            description={p.description}
            tags={p.tags}
            href={p.link}
            className={cn(
              i === 0 && "bg-accent-lime min-h-96 row-span-2 col-span-2 xl:col-span-3",
              i === 1 && "bg-accent-sky",
              i === 2 && "bg-accent-peach",
              i > 0 && i < 3 && "min-h-60 xl:min-h-72 max-sm:col-span-2 xl:col-span-2",
              i % 2 && "hover:rotate-[0.5deg]",
            )}
          />
        ))}
      </div>
    </>
  );
}

function ProjectCard({
  className,
  href,
  icon,
  title,
  description,
  tags,
  featured,
  featureNum = 1,
  ...props
}: Omit<ComponentPropsWithoutRef<"a">, "target" | "rel"> & {
  icon?: string;
  title?: string;
  description?: string;
  tags?: string[];
  featured?: boolean;
  featureNum?: number;
}) {
  return (
    <a
      className={cn(
        "project-card card-base relative flex-column overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:rotate-[-0.5deg] hover:shadow-card-md",
        featured ? "md:p-6 justify-between" : "z-1",
        className,
      )}
      href={href}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {featured ? (
        <div className="flex justify-between gap-6">
          <span className="text-caption tracking-normal">
            {String(featureNum).padStart(2, "0")}
            {featureNum === 1 && " / FEATURED"}
          </span>
          <span>↗</span>
        </div>
      ) : (
        <div className="text-4xl">{icon}</div>
      )}

      <div className="mt-6">
        {featured && tags && <p className="text-caption text-muted mb-3">{tags.join(" · ")}</p>}
        {featured ? (
          <h3 className="mb-2">
            {title} {icon}
          </h3>
        ) : (
          <h6 className="mb-2">{title}</h6>
        )}
        <p className={cn("max-w-135 text-muted", !featured && "text-sm")}>{description}</p>
      </div>
    </a>
  );
}
