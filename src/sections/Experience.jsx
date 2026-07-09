const experiences = [
    {
        period: "November 2025 - December 2025",
        role: "UI UX & WordPress Intern",
        company: "Ayahtek",
        description: "Crafted high-fidelity interfaces, created responsive design layouts, and customized intuitive WordPress components.",
        technologies: ["Figma", "Canva", "WordPress"],
        current: true
    },
    {
        period: "June 2025 - August 2025",
        role: "Junior Data Analyst",
        company: "Droplets Inc",
        description: "Extracted and manipulated structural data models using advanced mechanisms and built analytical dashboards.",
        technologies: ["Excel", "PowerBI"],
        current: false
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            {/* Ambient Background Glow Accent */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            
            <div className="container mx-auto relative px-6 z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span className="text-sm uppercase font-medium tracking-wider text-secondary-foreground">My Path</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6 leading-tight animate-fade-in glow-text">
                        Learning <span className="font-serif font-normal text-secondary-foreground">by Doing.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-100">
                        A quick summary of my roles, the skills I have picked up, and the hands-on experiences that keep me moving forward.
                    </p>
                </div>

                {/* Timeline Component Wrapper */}
                <div className="relative">
                    {/* FIXED: Shifted mobile to left-4 and corrected the empty alpha channel value in shadow */}
                    <div className="timeline-glow absolute left-4 md:left-1/2 top-0 bottom-0 
                    w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent 
                    md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.5)]" />
                
                    {/* Experience items */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}>

                                {/* Timeline Dot - FIXED mobile tracking to left-4 */}
                                <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 bg-primary 
                                rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping" />} 
                                </div>

                                {/* Content Cards Container */}
                                <div className={`pl-12 md:pl-0 ${idx % 2 === 0 
                                    ? "md:pr-16 md:text-right" 
                                    : "md:col-start-2 md:pl-16"
                                }`}>
                                    <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                                        <span className="text-sm font-medium text-primary">{exp.period}</span>
                                        <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                        
                                        {/* Technology Tags */}
                                        <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                            {exp.technologies.map((tech, techIdx) => (
                                                <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/40">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};