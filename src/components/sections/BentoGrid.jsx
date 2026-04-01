import React from 'react';
import Section from '../ui/Section';
import TiltCard from '../ui/TiltCard';
import { cn } from '../../utils/cn';
import {
    Code2, Database, Layout, Server, Cpu,
    Brain, Lightbulb, Users, Download,
    Sparkles, TrendingUp, Terminal
} from 'lucide-react';

const SkillGroup = ({ title, skills, color }) => (
    <div className="mb-6 last:mb-0">
        <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></span>
            {title}
        </h4>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-md text-sm border border-white/5 transition-colors">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const ProficiencyItem = ({ icon: Icon, title, desc, color }) => (
    <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white/5 transition-colors group w-full">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`} style={{ backgroundColor: `${color}20` }}>
            <Icon className="w-6 h-6" style={{ color }} />
        </div>
        <div className="font-bold text-base mb-1">{title}</div>
        <div className="text-xs text-gray-400 leading-tight max-w-[140px]">{desc}</div>
    </div>
);

export default function BentoGrid() {
    return (
        <Section id="about" className="py-24">
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-4xl md:text-6xl mb-12 text-center md:text-left">
                    <span className="text-electric-blue">/</span> ABOUT & SKILLS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* 1. Main About Card - Outcome Focused */}
                    <TiltCard className="md:col-span-2 glass-panel p-8 rounded-2xl relative overflow-hidden group min-h-[300px] flex flex-col justify-between shadow-neo bg-noise">
                        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Cpu className="text-electric-blue w-6 h-6" />
                                <span className="tracking-wide">ARCHITECTING IMPACT</span>
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                I design <strong className="text-white">scalable backend systems</strong> and <strong className="text-white">AI-powered platforms</strong> using Java, Node.js, and modern web technologies.
                                <br className="hidden md:block" />
                                From building robust REST APIs to developing data-driven dashboards, I focus on performance, clean architecture, and real-world results.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-4">
                                <div className="px-4 py-2 bg-electric-blue/10 rounded-full border border-electric-blue/20 text-electric-blue text-sm font-medium flex items-center gap-2">
                                    <Database className="w-4 h-4" /> AI LMS Core
                                </div>
                                <div className="px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 text-green-400 text-sm font-medium flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" /> Loan Risk Analytics
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                            <span className="text-sm text-gray-500 font-mono">Based in India • Open to Remote</span>
                            <a href="/resume.pdf" download className="group/btn flex items-center gap-2 px-5 py-2.5 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all active:scale-95">
                                <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                                <span>RESUME</span>
                            </a>
                        </div>
                    </TiltCard>

                    {/* 2. Technical Skills - Grouped & Smart */}
                    <TiltCard className="md:row-span-2 glass-panel p-6 rounded-2xl flex flex-col shadow-neo bg-noise">
                        <h3 className="text-xl font-bold mb-6 pb-4 border-b border-white/10 flex items-center gap-2">
                            <Terminal className="text-gray-400 w-5 h-5" /> TECHNICAL ARSENAL
                        </h3>

                        <div className="flex-1 flex flex-col justify-center gap-2">
                            <SkillGroup
                                title="Backend & Architecture"
                                color="#c95d2e"
                                skills={['Java', 'Node.js', 'Express', 'Microservices', 'REST APIs', 'System Design']}
                            />
                            <SkillGroup
                                title="Frontend Ecosystem"
                                color="#0070f3"
                                skills={['React', 'Next.js', 'Tailwind', 'Redux', 'Framer Motion']}
                            />
                            <SkillGroup
                                title="Data & Analytics"
                                color="#b0bc1e"
                                skills={['MongoDB', 'SQL', 'Python', 'Power BI', 'EDA']}
                            />
                        </div>
                    </TiltCard>

                    {/* 3. Proficiency - Metrics Driven */}
                    <TiltCard className="md:col-span-2 glass-panel p-6 rounded-2xl shadow-neo bg-noise">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 h-full">
                            <ProficiencyItem
                                icon={Brain}
                                title="Problem Solving"
                                desc="Solved 300+ DSA problems across LeetCode & GFG"
                                color="#0070f3"
                            />
                            <div className="w-full md:w-px h-px md:h-12 bg-white/10"></div>
                            <ProficiencyItem
                                icon={Lightbulb}
                                title="Creativity"
                                desc="Built AI LMS Course Generator from scratch"
                                color="#a855f7"
                            />
                            <div className="w-full md:w-px h-px md:h-12 bg-white/10"></div>
                            <ProficiencyItem
                                icon={Users}
                                title="Leadership"
                                desc="Hackathon First Runner-Up (AIvolution – IIT Kharagpur)"
                                color="#22c55e"
                            />
                        </div>
                    </TiltCard>

                    {/* 4. Currently Exploring - Growth Mindset */}
                    <TiltCard className="md:col-span-2 glass-panel p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden shadow-neo bg-noise">
                        <div className="absolute top-0 right-0 p-3 opacity-20">
                            <Sparkles className="w-24 h-24 text-yellow-500" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-300 mb-4 uppercase tracking-wider">Currently Exploring</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                            <div className="flex items-center gap-3 text-gray-200">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                Advanced System Design
                            </div>
                            <div className="flex items-center gap-3 text-gray-200">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                Scalable Distributed Systems
                            </div>
                            <div className="flex items-center gap-3 text-gray-200">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                AI-powered SaaS Architectures
                            </div>
                        </div>
                    </TiltCard>

                    {/* 5. Social / Connect - Small */}
                    <TiltCard className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:bg-electric-blue/20 transition-colors cursor-pointer shadow-neo bg-noise group" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        <h3 className="font-bold text-2xl mb-1 group-hover:scale-110 transition-transform">Let's Talk</h3>
                        <p className="text-xs text-gray-400 group-hover:text-white transition-colors">Build something great?</p>
                    </TiltCard>
                </div>
            </div>
        </Section>
    );
}
