import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <div
      className={cn(
        "contact card-base-xl p-12 mx-auto bg-background-black text-center text-foreground-invert",
        "md:max-w-[75%] md:px-24 md:py-16",
      )}
    >
      <h2>Let&apos;s turn a messy problem into a useful product.</h2>
      <p className="mt-3">Open to remote frontend, full-stack, part-time, and contract opportunities.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3 [&_a]:flex-[1_1_auto] [&_a]:w-auto">
        <a href="mailto:jhay.alcorcon@gmail.com" className={buttonVariants({ variant: "invert" })}>
          Email me
        </a>
        <a
          href="https://linkedin.com/in/jdalcoron"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: "outline-invert" })}
        >
          LinkedIn ↗
        </a>
      </div>
    </div>
  );
}
