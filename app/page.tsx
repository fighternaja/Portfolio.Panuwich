"use client";

import { About } from "./conponents/About";
import { Contact } from "./conponents/Contact";
import { Experience } from "./conponents/Experience";
import { HomeSection } from "./conponents/HomeSection";
import { Navbar } from "./conponents/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      <Navbar />
      <main>
        <HomeSection />
        <About />
        <Experience />
        <Contact />
      </main>

    </div>
  );
}
