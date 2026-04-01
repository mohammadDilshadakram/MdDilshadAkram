import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Section from '../ui/Section';
import ScrambleText from '../ui/ScrambleText';
import TypewriterText from '../ui/TypewriterText';
import ParticleBackground from '../ui/ParticleBackground';
import Button from '../ui/Button';
import Magnetic from '../ui/Magnetic';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Initial Reveal Sequence
            tl.from(".hero-text-reveal", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.5
            });

            // Bounce animation for arrow
            gsap.to(".scroll-indicator", {
                y: 20,
                opacity: 0.5,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
                ease: "power1.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <Section id="home" className="p-0 overflow-hidden relative" ref={containerRef}>
            {/* 1. Depth Background */}
            <div
                className="absolute inset-0 z-0 w-full h-full bg-dark-bg"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(8, 52, 156, 1) 0%, #061a52ff 25%, #020d1dff 60%, #020617 100%)',
                    backgroundColor: '#0a192f'
                }}
            />
            <ParticleBackground />

            <div className="relative z-10 max-w-7xl px-6 md:px-20 h-screen flex flex-col justify-center" ref={textRef}>

                {/* Top Label */}
                <h3 className="hero-text-reveal text-electric-blue text-sm md:text-base font-mono mb-2 tracking-widest">
                    <ScrambleText text=">> SYSTEM_ONLINE" />
                </h3>

                {/* Intro */}
                <h2 className="hero-text-reveal text-xl md:text-3xl font-light text-gray-300 mb-2">
                    Hi, I'm
                </h2>

                {/* Name - Kinetic */}
                <h1 className="hero-text-reveal text-6xl md:text-8xl font-display font-bold leading-none mb-6 text-white cursor-default group">
                    <ScrambleText text="MD DILSHAD" className="text-white" />
                    <br />
                    <span className="text-stroke text-transparent block mt-2 group-hover:text-white transition-all duration-500">AKRAM</span>
                </h1>

                {/* Typewriter Tagline */}
                <div className="hero-text-reveal max-w-2xl text-lg md:text-xl text-gray-400 mb-12 font-light min-h-[90px]">
                    <span className="text-electric-blue mr-2">A</span>
                    <TypewriterText
                        texts={[
                            "Java Engineer",
                            "MERN Stack Developer",
                            "Data Analyst",
                            "Creative Developer"
                        ]}
                        className="text-white font-semibold"
                    />
                    <br />
                    crafting immersive digital experiences.
                </div>

                {/* Magnetic Buttons */}
                <div className="hero-text-reveal flex flex-wrap gap-6 items-center">
                    <Magnetic>
                        <Button href="#projects" variant="primary" className="shadow-[0_0_20px_rgba(0,112,243,0.5)] animate-pulse">
                            View Projects
                        </Button>
                    </Magnetic>

                    <Magnetic strength={30}>
                        <Button href="#contact" variant="secondary">
                            Contact Me
                        </Button>
                    </Magnetic>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href="#about"
                className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 cursor-none p-4"
            >
                <ArrowDown className="text-electric-blue w-8 h-8" />
            </a>
        </Section>
    );
}
