import React, { useRef, useState, useCallback } from 'react';
import Section from '../ui/Section';
import { Github, ChevronLeft, ChevronRight, ArrowUpRight, Zap, AlertCircle, Wrench } from 'lucide-react';

/* ─────────────────────────────────────────────
   PROJECT DATA  — Engineered Narrative Format
───────────────────────────────────────────── */
const projects = [
    {
        id: "01",
        title: "AiCademy",
        headline: "Engineered an AI-Powered LMS to Automate Personalised Course & Quiz Generation",
        problem: "Traditional learning platforms fail to adapt to different student learning patterns, resulting in low engagement and inefficient curriculum delivery.",
        execution: [
            "Developed a full-stack AI-powered LMS that generates personalised courses, quizzes, and learning roadmaps using Gemini AI",
            "Engineered scalable backend services and REST APIs to manage AI-driven content generation, authentication, and structured data workflows",
            "Integrated Gemini API for real-time curriculum generation and adaptive learning recommendations",
            "Implemented secure database connectivity and optimised frontend-backend communication for seamless user experience",
            "Automated course generation workflows, significantly reducing manual content preparation effort",
        ],
        stack: ["Java", "Spring Boot", "React", "Gemini API", "REST APIs", "SQL"],
        media: "p1img.png",
        type: "image",
        link: "https://github.com/mohammadDilshadakram/onlineLearningPlatform",
        liveLink: "https://online-learning-platform-gamma-ashen.vercel.app/",
        accent: "#0070f3",
    },

    {
        id: "02",
        title: "FitBook",
        headline: "Built a Smart Healthcare & Appointment Analytics Platform with Intelligent Scheduling",
        problem: "Traditional appointment systems lack intelligent scheduling, operational analytics, and real-time patient management capabilities.",
        execution: [
            "Developed a full-stack healthcare platform with role-based dashboards for patients, doctors, and administrators",
            "Engineered intelligent appointment scheduling and wait-time prediction systems using greedy algorithms, interval scheduling, and weighted scoring techniques",
            "Built analytics dashboards for revenue trends, patient retention, diagnosis trends, operational KPIs, and no-show prediction analysis",
            "Implemented recommendation systems for doctor suggestions using ranking, filtering, and behavioural analytics",
            "Applied Data Structures & Algorithms concepts including interval overlap detection, merge-k sorted lists, priority scheduling, and sorting pipelines",
            "Designed interactive business intelligence dashboards and data visualisation modules for healthcare insights and performance monitoring",
        ],
        stack: ["MERN Stack", "JWT", "REST APIs", "Power BI", "Recharts"],
        media: "p2img.png",
        type: "image",
        link: "https://github.com/mohammadDilshadakram/DocAppointment",
        liveLink: "https://docappointment-frontend.onrender.com/",
        accent: "#22c55e",
    },

    {
        id: "03",
        title: "Bureaucrat AI",
        headline: "Developed an AI-Powered Document Automation & Workflow Processing System",
        problem: "Manual document handling and administrative workflows consume significant time and increase operational inefficiencies.",
        execution: [
            "Developed an intelligent document automation platform to streamline extraction, organisation, and processing of official documents",
            "Engineered backend automation scripts and APIs to extract structured information from PDFs and administrative records",
            "Designed modular processing workflows for automated validation, classification, and storage of extracted data",
            "Optimised document processing pipelines to reduce manual effort and improve workflow efficiency",
            "Implemented scalable backend architecture for secure handling and structured organisation of large document datasets",
        ],
        stack: ["Python", "REST APIs", "PDF Processing", "Automation"],
        media: "p3img.png",
        type: "image",
        link: "https://github.com/mohammadDilshadakram/bureaucrat-main",
        liveLink: "https://bureaucrat-ai.vercel.app/",
        accent: "#a855f7",
    },

    {
        id: "04",
        title: "Coffee Shop Analysis",
        headline: "Designed a Business Intelligence Dashboard for Coffee Shop Sales & Customer Analytics",
        problem: "Businesses often struggle to identify customer purchasing patterns and optimise sales strategies from raw transactional data.",
        execution: [
            "Analysed coffee shop sales and customer datasets to identify revenue trends, customer behaviour, and product performance insights",
            "Performed data cleaning, transformation, and exploratory data analysis (EDA) using SQL and Python",
            "Designed interactive Power BI dashboards to visualise KPIs including sales trends, peak order timings, and top-performing products",
            "Generated business insights through trend analysis, aggregation, and customer behaviour analysis techniques",
            "Supported data-driven operational decision-making through analytical reporting and visualisation",
        ],
        stack: ["SQL", "Python", "Power BI", "Excel", "Data Analytics"],
        media: "coffee-analysis.png",
        type: "image",
        link: "https://github.com/mohammadDilshadakram/Coffee-shop-analysis",
        accent: "#06b6d4",
    },

    {
        id: "05",
        title: "Loan Risk Minimization",
        headline: "Developed a Financial Analytics System for Loan Risk Assessment & Decision Support",
        problem: "Financial institutions face challenges in identifying high-risk applicants and analysing large-scale loan datasets efficiently.",
        execution: [
            "Analysed financial datasets related to loans and deposits to support loan risk assessment and banking decision-making processes",
            "Performed data cleaning, preprocessing, validation, and exploratory data analysis (EDA) using SQL and Python",
            "Conducted correlation analysis to identify relationships between customer attributes, loan amounts, repayment behaviour, and default risk",
            "Developed interactive Power BI dashboards featuring executive summaries, loan analysis, deposit analysis, and financial KPIs",
            "Generated analytical insights and trend-based reports to minimise lending risks and improve financial decision-making",
            "Applied statistical analysis, aggregation techniques, and data visualisation methods for risk monitoring and forecasting",
        ],
        stack: ["Python", "SQL", "Power BI", "MySQL", "Data Analytics"],
        media: "image8.png",
        type: "image",
        link: "https://github.com/mohammadDilshadakram",
        accent: "#f59e0b",
    },
];

/* ─────────────────────────────────────────────
   TECH BADGE
───────────────────────────────────────────── */
function TechBadge({ label, accent }) {
    return (
        <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold border transition-all duration-200"
            style={{
                color: accent,
                borderColor: `${accent}40`,
                background: `${accent}12`,
            }}
        >
            {label}
        </span>
    );
}

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
function ProjectCard({ project, index, total }) {
    return (
        <div
            className="project-card shrink-0 w-[90vw] md:w-[700px] rounded-3xl overflow-hidden relative flex flex-col"
            style={{
                scrollSnapAlign: 'start',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
            }}
        >
            {/* ── Media Banner (top half) ── */}
            <div className="relative h-[220px] md:h-[260px] overflow-hidden shrink-0">
                {project.type === 'video' ? (
                    <video
                        autoPlay loop muted playsInline
                        className="w-full h-full object-cover opacity-80"
                    >
                        <source src={project.media} type="video/mp4" />
                    </video>
                ) : (
                    <img
                        src={project.media}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                    />
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808]" />

                {/* Counter badge */}
                <div className="absolute top-5 left-5 font-mono text-xs px-3 py-1 rounded-full"
                    style={{ background: `${project.accent}22`, color: project.accent, border: `1px solid ${project.accent}40` }}>
                    {project.id} / {String(total).padStart(2, '0')}
                </div>

                {/* GitHub link */}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: `${project.accent}22`, border: `1px solid ${project.accent}40`, color: project.accent }}
                    onClick={e => e.stopPropagation()}
                >
                    <ArrowUpRight className="w-4 h-4" />
                </a>
            </div>

            {/* ── Content (bottom half) ── */}
            <div className="flex flex-col flex-1 p-6 md:p-8 gap-4 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>

                {/* Title + Headline */}
                <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold tracking-wide mb-1" style={{ color: '#fff' }}>
                        {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: project.accent }}>
                        {project.headline}
                    </p>
                </div>

                {/* Problem */}
                <div className="flex gap-3 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-400 opacity-80" />
                    <div>
                        <p className="text-xs font-mono text-red-400/70 uppercase tracking-widest mb-1">Problem</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                    </div>
                </div>

                {/* Execution bullets */}
                <div className="flex gap-3 p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Wrench className="w-4 h-4 mt-0.5 shrink-0 opacity-80" style={{ color: project.accent }} />
                    <div className="flex-1">
                        <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: `${project.accent}99` }}>How I Built It</p>
                        <ul className="flex flex-col gap-1.5">
                            {project.execution.map((point, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.accent }} />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tech Stack */}
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-3.5 h-3.5 text-gray-500" />
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Tech Stack</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, i) => (
                            <TechBadge key={i} label={tech} accent={project.accent} />
                        ))}
                    </div>
                </div>

                {/* CTA buttons */}
                <div className="mt-auto flex flex-wrap gap-3">
                    {/* Source Code */}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                        style={{
                            background: `${project.accent}15`,
                            border: `1px solid ${project.accent}40`,
                            color: project.accent,
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <Github className="w-4 h-4" />
                        Source Code
                    </a>

                    {/* Live Site — only shown when liveLink exists */}
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                            style={{
                                background: project.accent,
                                border: `1px solid ${project.accent}`,
                                color: '#000',
                            }}
                            onClick={e => e.stopPropagation()}
                        >
                            <ArrowUpRight className="w-4 h-4" />
                            Live Site
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────── */
export default function Projects() {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeftRef = useRef(0);

    const onMouseDown = useCallback((e) => {
        isDragging.current = true;
        startX.current = e.pageX - sliderRef.current.offsetLeft;
        scrollLeftRef.current = sliderRef.current.scrollLeft;
        sliderRef.current.style.cursor = 'grabbing';
    }, []);

    const onMouseMove = useCallback((e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        sliderRef.current.scrollLeft = scrollLeftRef.current - (x - startX.current) * 1.4;
        updateActiveIndex();
    }, []);

    const stopDrag = useCallback(() => {
        isDragging.current = false;
        if (sliderRef.current) sliderRef.current.style.cursor = 'grab';
    }, []);

    const updateActiveIndex = () => {
        if (!sliderRef.current) return;
        const card = sliderRef.current.querySelector('.project-card');
        if (!card) return;
        const cardWidth = card.offsetWidth + 32;
        const idx = Math.round(sliderRef.current.scrollLeft / cardWidth);
        setActiveIndex(Math.max(0, Math.min(idx, projects.length - 1)));
    };

    const scrollTo = (index) => {
        if (!sliderRef.current) return;
        const cards = sliderRef.current.querySelectorAll('.project-card');
        if (cards[index]) {
            cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            setActiveIndex(index);
        }
    };

    return (
        <Section id="projects" className="p-0 overflow-hidden bg-dark-bg">
            <div className="min-h-screen flex flex-col justify-center py-20">

                {/* ── Header ── */}
                <div className="px-8 md:px-20 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <p className="text-electric-blue font-mono text-sm tracking-widest mb-2 uppercase">03 — Portfolio</p>
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-transparent text-stroke leading-tight">
                            ENGINEERED<br />WORKS
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm max-w-xs md:text-right leading-relaxed">
                        Each project is documented with the <span className="text-white/60">problem</span>, <span className="text-white/60">engineering decisions</span>, and <span className="text-white/60">tech stack</span> — not just a screenshot.
                    </p>
                </div>

                {/* ── Slider + Side Arrows ── */}
                <div className="relative">

                    {/* Left arrow — extreme left, vertically centred */}
                    <button
                        onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
                        disabled={activeIndex === 0}
                        aria-label="Previous project"
                        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center border transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
                        style={{
                            background: 'rgba(10,10,10,0.7)',
                            borderColor: activeIndex === 0 ? 'rgba(255,255,255,0.1)' : `${projects[activeIndex].accent}60`,
                            color: activeIndex === 0 ? 'rgba(255,255,255,0.3)' : projects[activeIndex].accent,
                            backdropFilter: 'blur(8px)',
                        }}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Right arrow — extreme right, vertically centred */}
                    <button
                        onClick={() => scrollTo(Math.min(projects.length - 1, activeIndex + 1))}
                        disabled={activeIndex === projects.length - 1}
                        aria-label="Next project"
                        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center border transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
                        style={{
                            background: 'rgba(10,10,10,0.7)',
                            borderColor: activeIndex === projects.length - 1 ? 'rgba(255,255,255,0.1)' : `${projects[activeIndex].accent}60`,
                            color: activeIndex === projects.length - 1 ? 'rgba(255,255,255,0.3)' : projects[activeIndex].accent,
                            backdropFilter: 'blur(8px)',
                        }}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Slider */}
                    <div
                        ref={sliderRef}
                        className="hide-scrollbar flex gap-8 px-8 md:px-20 overflow-x-auto pb-2"
                        style={{ scrollSnapType: 'x mandatory', cursor: 'grab', WebkitOverflowScrolling: 'touch' }}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={stopDrag}
                        onMouseLeave={stopDrag}
                        onScroll={updateActiveIndex}
                    >
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} total={projects.length} />
                        ))}
                    </div>
                </div>

                {/* ── Dot Indicators (centred below) ── */}
                <div className="flex items-center justify-center gap-2 mt-6">
                    {/* Mobile arrows */}
                    <button
                        onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
                        disabled={activeIndex === 0}
                        className="md:hidden w-9 h-9 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>

                    {projects.map((p, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            className="rounded-full transition-all duration-300"
                            style={{
                                width: activeIndex === i ? '28px' : '8px',
                                height: '8px',
                                background: activeIndex === i ? projects[activeIndex].accent : 'rgba(255,255,255,0.15)',
                            }}
                            aria-label={`Go to project ${i + 1}`}
                        />
                    ))}

                    <button
                        onClick={() => scrollTo(Math.min(projects.length - 1, activeIndex + 1))}
                        disabled={activeIndex === projects.length - 1}
                        className="md:hidden w-9 h-9 rounded-full border border-white/10 flex items-center justify-center disabled:opacity-20"
                        aria-label="Next project"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>

                    <span className="ml-3 font-mono text-xs text-gray-600">
                        {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </span>
                </div>

            </div>
        </Section>
    );
}
