import { Button } from '@/components/Button';
import { ArrowRight, Download } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useState, useEffect, useMemo } from "react";

// 🚀 Structured Object to show off your specialized categories 
const techStackData = {
    designUi: ["Figma", "TailwindCSS", "Bootstrap"],
    frontend: ["JavaScript", "TypeScript", "React", "Next.js"],
    backend: ["Node.js", "Java", "PHP", "SQL"],
    cms: ["WordPress", "Git & GitHub"]
};

// Flattened array created automatically from the object above for your marquee animation
const skill = Object.values(techStackData).flat();

// Isolated Background Component to prevent star-jittering on text updates
const CosmicBackground = () => {
    const stars = useMemo(() => {
        return [...Array(60)].map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * -20}s`,
            duration: `${10 + Math.random() * 20}s`,
            driftX: `${(Math.random() - 0.5) * 80}px`,
            driftY: `${(Math.random() - 0.5) * 80}px`,
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute w-1.5 h-1.5 rounded-full bg-primary star-glow animate-cosmic"
                    style={{
                        left: star.left,
                        top: star.top,
                        animationDelay: star.delay,
                        animationDuration: star.duration,
                        '--drift-x': star.driftX,
                        '--drift-y': star.driftY,
                    }}
                />
            ))}
        </div>
    );
};

export const Hero = () => {
    // 💡 Typing Effect State Logic
    const roles = ["Front-End Developer", "UI/UX Designer", "Web Developer"];
    const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;
        const fullText = roles[currentRoleIdx];
        const typingSpeed = isDeleting ? 50 : 90;

        if (!isDeleting && currentText === fullText) {
            timer = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
        } else {
            timer = setTimeout(() => {
                setCurrentText(
                    isDeleting
                        ? fullText.substring(0, currentText.length - 1)
                        : fullText.substring(0, currentText.length + 1)
                );
            }, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentRoleIdx]);

    // CTA to Contact Section
    const scrollToContact = (e) => {
        e.preventDefault(); 
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            
            {/* Render our isolated cosmic background here */}
            <CosmicBackground />

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content  */}
                    <div className="space-y-8">
                        
                        {/* Dynamic Typing Badge - Follows text dynamically */}
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary border border-primary/20 w-fit transition-all duration-300">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                <span>
                                    {currentText}
                                    <span className="animate-blink font-light ml-0.5">|</span>
                                </span>
                            </span>
                        </div>

                        {/* Headline  */}
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight animate-fade-in delay-100">
                                Crafting <span className="text-primary font-normal glow-text">beautiful interfaces </span>
                                <br />
                                Shaping <span className="font-serif italic font-normal text-slate-200">seamless interactions.</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in delay-300">
                                Hi, I’m Angelica Toquero - a UI/UX designer. I shape digital experiences through high-fidelity interactive prototypes, 
                                aligning user goals with business needs through thoughtful, intentional design.
                            </p>   
                        </div>

                        {/* CTA */}
                        <div className='flex flex-wrap gap-4 animate-fade-in delay-500'>
                            <Button className="lg" onClick={scrollToContact}>Contact Me <ArrowRight className='w-5 h-5'/></Button>
                            
                            <a
                                href="ResumeTest_AST.pdf"
                                download="ResumeTest_AST.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AnimatedBorderButton>
                                    <Download className="w-5 h-5"/>
                                    Download CV
                                </AnimatedBorderButton>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className='flex items-center gap-4 animate-fade-in animation-delay-300 '>
                            <span className='text-sm text-muted-foreground'>Follow me: </span> 
                            {[
                                { icon: FaGithub, href: "https://github.com/AngelicaToquero"},
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/angelica-toquero-620604376"},
                                { icon: FaFacebook, href: "https://www.facebook.com/angetqz"},
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" rel="noreferrer" className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300' >
                                    <social.icon className='w-5 h-5'/>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Picture Column */}
                    <div className='relative animate-fade-in animation-delay-300'>
                        <div className='relative max-w-md mx-auto'>
                            <div className='absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse' />
                            <div className='relative glass rounded-3xl p-2 glow-border'>
                                <img src="/dp.jpg" alt="Angelica Toquero" className='w-full aspect-4/5 object-cover rounded-2xl'/>
                                
                                {/* Floating Badge */}
                                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float '>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                                        <span className='text-sm font-medium'>Available for Work</span>
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                                    <div className='text-xs text-muted-foreground'>You can call me,</div>
                                    <div className='text-2xl font-bold text-white'>ANGE!</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Skills Marquee Section */}
                <div className='mt-20 animate-fade-in animate-delay-500'>
                    <p  className='"text-secondary-foreground text-sm font-medium tracking-wider mb-6 text-center uppercase'>My Tech Stack</p>
                    <div  className='relative overflow-hidden mask-gradient'> {/* Added a subtle tip here if you want edge fading */}
                        <div className='flex animate-marquee'>
                            {[...skill, ...skill].map((item, idx) => (
                                <div key={idx} className='flex-shrink-0 px-8 py-4'>
                                    <span className='text-xl font-semibold text-muted-foreground/40 hover:text-primary transition-colors cursor-default whitespace-nowrap'>
                                        {item}
                                    </span> 
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};