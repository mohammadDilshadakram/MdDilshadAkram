import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import TiltCard from '../ui/TiltCard';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const InputGroup = ({ label, name, type = 'text', required = false }) => (
    <div className="relative z-0 w-full mb-8 group">
        <input
            type={type}
            name={name}
            id={name}
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-electric-blue peer"
            placeholder=" "
            required={required}
        />
        <label
            htmlFor={name}
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-electric-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
            {label}
        </label>
    </div>
);

export default function Contact() {
    return (
        <Section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-4xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Contact Info */}
                <div className="space-y-8">
                    <h2 className="text-5xl md:text-7xl font-display font-bold">
                        LET'S <br /> WORK <br />
                        <span className="text-electric-blue">TOGETHER</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Have a project in mind? I'm always looking for new challenges and collaborations.
                    </p>

                    <div className="space-y-4">
                        <a href="mailto:mdddilshadakram123@gmail.com" className="flex items-center gap-4 text-xl hover:text-electric-blue transition-colors group">
                            <div className="p-3 bg-white/5 rounded-full group-hover:bg-electric-blue group-hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            mdddilshadakram123@gmail.com
                        </a>
                        <div className="flex items-center gap-4 text-xl hover:text-electric-blue transition-colors group">
                            <div className="p-3 bg-white/5 rounded-full group-hover:bg-electric-blue group-hover:text-white transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            +91 6291198856
                        </div>
                        <a href="https://www.linkedin.com/in/md-dilshad-akram-4b6660254/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl hover:text-electric-blue transition-colors group">
                            <div className="p-3 bg-white/5 rounded-full group-hover:bg-electric-blue group-hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            LinkedIn Profile
                        </a>
                        <a href="https://github.com/mohammadDilshadakram" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl hover:text-electric-blue transition-colors group">
                            <div className="p-3 bg-white/5 rounded-full group-hover:bg-electric-blue group-hover:text-white transition-colors">
                                <Github className="w-6 h-6" />
                            </div>
                            GitHub Profile
                        </a>
                    </div>
                </div>

                {/* Form */}
                <TiltCard className="glass-panel p-8 md:p-10 rounded-3xl relative">
                    <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                    <form action="https://formspree.io/f/xaygvlwj" method="POST">
                        <InputGroup label="Your Name" name="Name" required={true} />
                        <InputGroup label="Email Address" name="email" type="email" />
                        <InputGroup label="Subject" name="Subject" />

                        <div className="relative z-0 w-full mb-8 group">
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-electric-blue peer resize-none"
                                placeholder=" "
                                required
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-electric-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Your Message
                            </label>
                        </div>

                        <Button type="submit" variant="primary" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </TiltCard>

            </div>

            <div className="absolute bottom-4 left-0 w-full text-center text-gray-600 text-sm">
                © Catalyst1 Dilshad. All rights reserved.
            </div>
        </Section>
    );
}
