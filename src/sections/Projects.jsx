import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

// FIGMA PROJECTS 
const figmaProjects = [
    {
      title: "Quick Bus",
      description: "A unified online ticket booking platform integrating major Philippine bus networks into a single, seamless reservation system.",
      image: "/projects/quickbus.png",
      tags: ["UI/UX Design", "Layouts", "Prototyping"],
      link: "https://www.figma.com/design/Kzo15o55JnXTcLZzUemtUg/Angelica-s-Projects?node-id=2-3&t=GEnHwh0gBVhivIrg-1",
      hasPopup: false
    },
    {
      title: "HideAway",
      description: "An elegant, premium booking experience designed for boutique rural escapes and secluded architectural cabin rentals.",
      image: "/projects/hideaway.png",
      tags: ["Visual Design", "Wireframing", "Component System"],
      link: "https://www.figma.com/design/Kzo15o55JnXTcLZzUemtUg/Angelica-s-Projects?node-id=169-5393&t=GEnHwh0gBVhivIrg-1",
      hasPopup: false
    },
    {
      title: "HydraVibe",
      description: "A vibrant, product-focused e-commerce landing page layout designed with dynamic color theme variants, striking typography, and minimal feature sections.",
      image: "/projects/hydravibe.png",
      tags: ["Product Design", "E-Commerce UI", "Layout System"],
      link: "https://www.figma.com/design/Kzo15o55JnXTcLZzUemtUg/Angelica-s-Projects?node-id=0-1&t=GEnHwh0gBVhivIrg-1",
      hasPopup: false
    },
    {
      title: "Cravery Spot",
      description: "An immersive, product-focused landing page layout engineered with color variations, bold typography systems, and dynamic brand assets.",
      image: "/projects/craveryspot.png",
      tags: ["Landing Page", "Visual Identity", "Interactive UI"],
      link: "https://www.figma.com/design/Kzo15o55JnXTcLZzUemtUg/Angelica-s-Projects?node-id=0-1&t=GEnHwh0gBVhivIrg-1",
      hasPopup: false
    },
    
    //Add projects
    // {
    //   title: "Project Holder 5",
    //   description: "Description of your amazing craft, layout structures, and intuitive workflows.",
    //   image: "hero.jpg",
    //   tags: ["UI/UX Design", "Prototypes"],
    //   link: "#",
    //   hasPopup: false
    // },
    
    // for nda
    // {
    //   title: "Website Rebrand Showcase",
    //   description: "Complete UI modernization, custom layout overhaul, and structural design system updates.",
    //   image: "hero.jpg", 
    //   tags: ["Rebranding", "UI/UX Design", "Layout System"],
    //   link: "", // Empty because it opens the popup below
    //   hasPopup: true, 
    //   modalContent: {
    //     title: "Website Rebrand Case Study",
    //     role: "Product Designer",
    //     timeline: "3 Months",
    //     problem: "The original layout layout lacked consistent spacing hierarchies, causing user confusion during navigation. The interface required a structured aesthetic overhaul to present content cleanly.",
    //     solution: "I created custom grid structures, re-scaled the typography for fluid mobile responsiveness, and established a modular component system to elevate overall usability."
    //   }
    // }
];

// WEB DEVELOPMENT PROJECTS 
const webProjects = [
    {
      title: "NEUVIS",
      description: "NEUVIS is a mobile-first visitor management system that helps security officers and administrators log, verify, and track visitor check-ins and check-outs—all in real time.",
      image: "/projects/neuvis.png",
      tags: ["React Native", "Expo", "Supabase", "TypeScript"],
      github: "https://github.com/PiaMacalanda/NEUVIS",
      hasPopup: false
    },
    {
      title: "CEREBRO",
      description: "An undergraduate thesis project exploring EEG-based focus classification in academic settings. Cerebro is a desktop app for live EEG acquisition, on-device deep-learning inference, and session analytics, built with Tauri v2, React 19, and TypeScript.",
      image: "/projects/cerebro.png",
      tags: ["Tauri v2", "React 19", "TypeScript"],
      github: "https://github.com/romnoelp/Cerebro",
      hasPopup: false
    }
];

export const Projects = () => {
    const [activeProjectPopup, setActiveProjectPopup] = useState(null);

    const handleProjectClick = (e, project) => {
        if (project.hasPopup) {
            e.preventDefault();
            setActiveProjectPopup(project); 
        }
    };

    // Reusable Functional Grid Component 
    const ProjectGrid = ({ items }) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((project, idx) => (
                <a 
                    key={idx}
                    href={project.hasPopup ? undefined : (project.link || project.github || "#")}
                    onClick={(e) => handleProjectClick(e, project)}
                    target={project.hasPopup ? undefined : "_blank"}
                    rel="noreferrer"
                    className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col justify-between h-full hover:translate-y-[-4px] transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                    <div>
                        {/* Image Frame Container */}
                        <div className="relative overflow-hidden aspect-video bg-muted/20">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            /> 
                        </div>

                        {/* Content Elements */}
                        <div className="space-y-3 p-5">
                            <div className="flex items-start justify-between gap-2">
                                <h4 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-1">
                                    {project.title}
                                </h4>
                                <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    {/* Tech Badges Footer */}
                    <div className="p-5 pt-0">
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag, tagIdx) => (
                                <span
                                    key={tagIdx} 
                                    className="px-2.5 py-1 rounded-md bg-surface text-[11px] font-medium border border-border/50 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-all duration-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );

    return ( 
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="container mx-auto relative px-6 z-10">
                
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Project Showcase</span>
                    <h2 className="text-primary text-4xl mt-4 mb-6 md:text-5xl font-bold leading-tight animate-fade-in glow-text">
                        Creative Ideas, 
                        <span className="font-normal text-secondary-foreground font-serif italic"> Real Solutions.</span>
                    </h2>
                    <p className="text-muted-foreground">A curated archive of systems and structures I have crafted to learn, iterate, and transform complex problems into clean, user-friendly realities.</p>
                </div>

                {/* 🎨 CATEGORY 1: FIGMA */}
                <div className="mb-20">
                    <div className="text-center mb-10 animate-fade-in">
                        <h3 className="text-2xl font-bold tracking-widest text-primary uppercase glow-text border-b border-primary/10 pb-4 max-w-xs mx-auto">
                            Figma
                        </h3>
                    </div>
                    <ProjectGrid items={figmaProjects} />
                </div>

                {/* 🌐 CATEGORY 2: WEB PROJECTS */}
                <div>
                    <div className="text-center mb-10 animate-fade-in">
                        <h3 className="text-2xl font-bold tracking-widest text-primary uppercase glow-text border-b border-primary/10 pb-4 max-w-xs mx-auto">
                            Development Projects
                        </h3>
                    </div>
                    <ProjectGrid items={webProjects} />
                </div>

            </div>

            {/* 🌌 MODAL POPUP */}
            {activeProjectPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
                    <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-3xl p-6 md:p-8 glow-border shadow-2xl space-y-6">
                        
                        <button 
                            onClick={() => setActiveProjectPopup(null)}
                            className="absolute top-6 right-6 p-2 rounded-xl bg-muted/20 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="w-full aspect-video rounded-xl overflow-hidden bg-muted/20 border border-border/40">
                            <img 
                                src={activeProjectPopup.image} 
                                alt={activeProjectPopup.title} 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="border-b border-border/50 pb-4 pr-10">
                            <h3 className="text-2xl font-bold text-white leading-tight">
                                {activeProjectPopup.modalContent.title}
                            </h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm border-b border-border/30 pb-4">
                            <div>
                                <span className="block text-xs uppercase text-muted-foreground font-medium mb-0.5">Role</span>
                                <span className="text-foreground font-medium">{activeProjectPopup.modalContent.role}</span>
                            </div>
                            <div>
                                <span className="block text-xs uppercase text-muted-foreground font-medium mb-0.5">Timeline</span>
                                <span className="text-foreground font-medium">{activeProjectPopup.modalContent.timeline}</span>
                            </div>
                        </div>

                        <div className="space-y-4 text-sm md:text-base leading-relaxed text-muted-foreground pb-2">
                            <div>
                                <strong className="text-white block font-semibold mb-1">The Problem:</strong>
                                <p>{activeProjectPopup.modalContent.problem}</p>
                            </div>
                            <div>
                                <strong className="text-white block font-semibold mb-1">The Solution:</strong>
                                <p>{activeProjectPopup.modalContent.solution}</p>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};