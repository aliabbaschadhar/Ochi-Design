import React, { useEffect } from 'react';
import { LandingPage, Navbar, Marquee, About, Eyes, Featured, Cards, Footer } from "./components";
import LocomotiveScroll from 'locomotive-scroll';

export default function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    return () => scroll.destroy();
  }, []);

  return (
    <main
      data-scroll-container
      className="w-full min-h-screen text-white bg-zinc-900"
    >
      {/* Static navbar without scroll effect */}
      <div data-scroll-section>
        <Navbar />
      </div>

      {/* Landing page with subtle scroll */}
      <div data-scroll-section>
        <div data-scroll data-scroll-speed="-.3" >
          <LandingPage />
        </div>
      </div>

      {/* Marquee with reverse scroll effect */}
      <div data-scroll-section>
        <div data-scroll data-scroll-speed='-.1' >
          <Marquee />
        </div>
      </div>

      {/* About section with forward scroll */}
      <div data-scroll-section>
        <div data-scroll data-scroll-speed='-.02'>
          <About />
        </div>
      </div>

      {/* Static sections without parallax */}
      <div data-scroll-section>
        <Eyes />
      </div>

      <div data-scroll-section>
        <Featured />
      </div>

      <div data-scroll-section>
        <Cards />
      </div>

      <div data-scroll-section>
        <Footer />
      </div>
    </main>
  );
}