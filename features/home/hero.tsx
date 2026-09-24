import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui";
import { TextMarquee } from "@/components/shared";

export default function Hero() {
  return (
    <div className="flex-column lg:[@media(min-aspect-ratio:4/3)]:min-h-[min(100dvh-72px,1080px)]">
      <div className="container-screen flex-column">
        <div
          className={cn(
            "flex flex-wrap h-fit relative isolate mx-auto w-full grow items-center gap-x-10",
            "lg:gap-x-16",
          )}
        >
          <div className={cn("flex-column flex-1 items-start gap-8 mt-8", "xl:my-10 2xl:my-16 xl:gap-12")}>
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-xs font-bold text-muted">
              <span className="availability-dot size-2 shrink-0 rounded-full bg-[#53a653]" /> Available for
              remote opportunities
            </div>
            <div>
              <h1 className="sm:min-w-[10ch] max-w-[16ch]">
                I make complex work <span className="text-outline">feel simple</span>
              </h1>
              <p className="mt-6 text-[clamp(16px,2vw,20px)] text-muted">
                Frontend Engineer turning operational problems into clear, dependable products—from logistics
                and warehouse tools to booking and marketplace experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className={buttonVariants({ variant: "default" })}>
                Explore my work ↓
              </a>
              <a href="#experience" className={buttonVariants({ variant: "outline" })}>
                View résumé
              </a>
            </div>
          </div>

          <div
            className={cn(
              "hero relative mx-auto",
              "w-[75dvw] max-w-104 h-[stretch] min-h-108 mt-8 mb-12 p-6",
              "md:mt-12 md:mb-20",
              "xl:mt-16 xl:mb-24",
              "2xl:max-w-124",
            )}
          >
            <div
              id="profile-card"
              className={cn(
                "relative h-full flex-column bg-card border rounded-3xl shadow-card-md rotate-2  p-6 gap-4",
                "sm:shadow-card-xl",
              )}
            >
              <div className="flex grow h-full items-center justify-center rounded-xl bg-accent-sky text-7xl font-black tracking-tight">
                JA
              </div>
              <div>
                <p className="font-bold">Jhay Jhay Alcorcon</p>
                <p className="text-xs text-muted">Frontend Engineer · Nueva Ecija, PH</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">MUI</Badge>
                <Badge variant="outline">Node</Badge>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-background-black p-4 text-xs">
                <span className="text-weak">CURRENTLY EXPLORING</span>
                <div className="flex gap-3 font-bold text-foreground-invert">
                  <span>Full-stack systems</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "reveal grid grid-cols-2 overflow-hidden w-full mb-8 mx-auto rounded-3xl border bg-card",
            "md:grid-cols-4",
          )}
        >
          <div className="proof">
            <strong>~5 yrs</strong>
            <span>Building web products</span>
          </div>
          <div className="proof">
            <strong>8</strong>
            <span>Featured side projects</span>
          </div>
          <div className="proof">
            <strong>2 squads</strong>
            <span>Frontend ownership</span>
          </div>
          <div className="proof">
            <strong>FE → FS</strong>
            <span>Expanding into backend</span>
          </div>
        </div>
      </div>

      <TextMarquee
        contents={[
          "React",
          "Next.js",
          "JavaScript",
          "MUI",
          "Redux",
          "Node.js",
          "Express",
          "Supabase",
          "GraphQL",
          "React",
          "Next.js",
          "JavaScript",
          "MUI",
          "Redux",
          "Node.js",
          "Express",
          "Supabase",
          "GraphQL",
        ]}
      />
    </div>
  );
}
