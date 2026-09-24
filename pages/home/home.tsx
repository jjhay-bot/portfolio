"use client";

import { About, Contact, Experience, Hero, Projects } from "@/features/home";

export default function Home() {
  return (
    <>
      <main id="top" className="grow">
        <Hero />
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="container-screen flex justify-between pb-8 text-sm text-muted max-md:block">
        <strong>Jhay Jhay Alcorcon</strong>
        <span className="max-md:block">Designed with intention · Built with curiosity · © 2026</span>
      </footer>
    </>
  );
}
