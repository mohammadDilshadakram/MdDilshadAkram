import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../ui/Section';
import TiltCard from '../ui/TiltCard';
import Button from '../ui/Button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Doc Appointment",
        desc: "Full-stack doctor booking & admin dashboard.",
        media: "video4.mp4",
        type: "video",
        link: "https://github.com/mohammadDilshadakram/DocAppointment"
    },
    {
        title: "AiCademy",
        desc: "AI-powered learning platform using Gemini API.",
        media: "AiCademy demo video.mp4",
        type: "video",
        link: "https://github.com/mohammadDilshadakram/DocAppointment"
    },
    {
        title: "Career Counselling",
        desc: "Career guidance platform using Gemini API.",
        media: "image8.png",
        type: "image",
        link: "https://github.com/mohammadDilshadakram/career_councellor"
    },
    {
        title: "Quote Website",
        desc: "CRUD operations with REST APIs.",
        media: "quote.png",
        type: "image",
        link: "https://github.com/mohammadDilshadakram/quorapost"
    },
    {
        title: "Simon Game",
        desc: "Memory testing game with increasing difficulty.",
        media: "image4.jpeg",
        type: "image",
        link: "https://github.com/mohammadDilshadakram/simon-says-game.git"
    },
    {
        title: "Weather App",
        desc: "Real-time weather forecasting.",
        media: "image5.png",
        type: "image",
        link: "https://github.com/mohammadDilshadakram/weather-app.git"
    },
    {
        title: "Spotify Clone",
        desc: "Music player interface replica.",
        media: "image6.jpg",
        type: "image",
        link: "https://github.com/mohammadDilshadakram/clone.git"
    },
    {
        title: "Status App",
        desc: "Daily status posting platform.",
        media: "image7.png",
        type: "image",
        link: "https://github.com/mohammadDilshadakram/Status"
    }
];

export default function Projects() {
    const containerRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const totalWidth = sliderRef.current.scrollWidth;
            const windowWidth = window.innerWidth;
            const xMove = -(totalWidth - windowWidth);

            gsap.to(sliderRef.current, {
                x: xMove,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=" + totalWidth,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <Section id="projects" className="p-0 overflow-hidden bg-dark-bg" ref={containerRef}>
            <div className="h-screen flex items-center overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex gap-12 px-12 md:px-24 w-max"
                >
                    {/* Header Card */}
                    <div className="w-[30vw] md:w-[20vw] flex flex-col justify-center shrink-0">
                        <h2 className="text-6xl md:text-8xl font-display font-bold text-transparent text-stroke leading-tight">
                            SELECTED<br />WORKS
                        </h2>
                        <p className="mt-6 text-gray-400 max-w-xs">
                            A collection of web applications, experiments, and clones.
                            <br /><br />
                            <span className="text-electric-blue">>> Drag to explore</span>
                        </p>
                    </div>

                    {projects.map((project, index) => (
                        <TiltCard
                            key={index}
                            className="w-[85vw] md:w-[600px] h-[60vh] md:h-[70vh] glass-panel rounded-3xl overflow-hidden relative group shrink-0"
                        >
                            <div className="absolute inset-0 z-0">
                                {project.type === 'video' ? (
                                    <video
                                        autoPlay loop muted playsInline
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                    >
                                        <source src={project.media} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img
                                        src={project.media}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent" />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-4xl font-display font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-6 max-w-md">{project.desc}</p>
                                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    <Button
                                        href={project.link}
                                        target="_blank"
                                        variant="primary"
                                        className="flex items-center gap-2 text-sm py-2 px-4"
                                    >
                                        <Github className="w-4 h-4" /> Code
                                    </Button>
                                    {/* Placeholder for live demo if exists */}
                                    <button className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </Section>
    );
}
