import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import MagneticCursor from './components/ui/MagneticCursor';
import Hero from './components/sections/Hero';
import BentoGrid from './components/sections/BentoGrid';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureDirection: 'vertical',
            smoothWheel: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <main className="bg-dark-bg min-h-screen text-neo-white selection:bg-electric-blue selection:text-white">
            <MagneticCursor />

            {/* Navigation / Header (Simple) */}
            <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
                <div className="font-display font-bold text-2xl tracking-widest text-white">
                    DILSHAD<span className="text-electric-blue">.</span>
                </div>
                <nav className="hidden md:flex gap-8 font-mono text-sm text-gray-300">
                    <a href="#about" className="hover:text-electric-blue transition-colors">ABOUT</a>
                    <a href="#projects" className="hover:text-electric-blue transition-colors">WORK</a>
                    <a href="#contact" className="hover:text-electric-blue transition-colors">CONTACT</a>
                </nav>
            </header>

            <Hero />
            <BentoGrid />
            <Projects />
            <Contact />

        </main>
    );
}

export default App;
