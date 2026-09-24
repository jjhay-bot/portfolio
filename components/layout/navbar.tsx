import { buttonVariants } from "../ui/button";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-10 border-b border-coffee/10 bg-background/75 backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="container-screen min-h-18 mx-auto flex items-center justify-between gap-6 px-layout-responsive py-4">
        <a className="text-lg font-extrabold [&_span]:text-coffee" href="#top">
          JHAY<span>.</span>
        </a>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-8 text-sm max-md:hidden">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#about">Skills</a>
          </div>
          <a href="#contact" className={buttonVariants({ variant: "default", size: "sm" })}>
            Let&apos;s talk
          </a>
        </div>
      </div>
    </nav>
  );
}
