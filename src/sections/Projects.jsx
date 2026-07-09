import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

// 🎨 FIGMA PROJECTS (4-5 per row grid)
const figmaProjects = [
    {
      title: "KidoPass",
      description: "A digital hub designed with engaging, creative, and vibrant interfaces tailored for children.",
      image: "hero.jpg",
      tags: ["UI/UX Design", "Layouts", "Prototyping"],
      link: "#",
      github: "#",
      hasPopup: false
    },
    {
      title: "Pastry Hub",
      description: "A high-end gourmet baking interface showcasing clean custom typography grids.",
      image: "/projects/dp.jpg",
      tags: ["Visual Design", "Component System"],
      link: "#",
      github: "#",
      hasPopup: false
    },
    {
      title: "Tech Tumbler",
      description: "Sleek landing page focused on minimal aesthetics and premium product rendering assets.",
      image: "hero.jpg",
      tags: ["Product Layout", "Assets"],
      link: "#",
      github: "#",
      hasPopup: false
    },
    {
      title: "Project Holder 4",
      description: "Description of your amazing craft, layout structures, and intuitive workflows.",
      image: "hero.jpg",
      tags: ["UI/UX Design", "Wireframing"],
      link: "#",
      github: "#",
      hasPopup: false
    },
    {
      title: "Project Holder 5",
      description: "Description of your amazing craft, layout structures, and intuitive workflows.",
      image: "hero.jpg",
      tags: ["UI/UX Design", "Prototypes"],
      link: "#",
      github: "#",
      hasPopup: false
    },
    {
      title: "Project Holder 6",
      description: "Description of your amazing craft, layout structures, and intuitive workflows.",
      image: "hero.jpg",
      tags: ["UI/UX Design", "Design Language"],
      link: "#",
      github: "#",
      hasPopup: false
    },
    {
      title: "Website Rebrand Showcase",
      description: "Complete UI modernization, custom layout overhaul, and structural design system updates.",
      image: "hero.jpg", // Looks exactly like a normal project image holder
      tags: ["Rebranding", "UI/UX Design", "Layout System"],
      link: "#",
      github: "#",
      hasPopup: true, // ✨ Triggers the popup modal seamlessly
      modalContent: {
        title: "Website Rebrand Case Study",
        role: "Product Designer",
        timeline: "3 Months",
        problem: "The original layout layout lacked consistent spacing hierarchies, causing user confusion during navigation. The interface required a structured aesthetic overhaul to present content cleanly.",
        solution: "I created custom grid structures, re-scaled the typography for fluid mobile responsiveness, and established a modular component system to elevate overall usability."
      }
    }
];

// 🌐 WEB DEVELOPMENT PROJECTS 
const webProjects = [
    {
      title: "Portfolio Terminal",
      description: "An interactive code playground layout built using clean semantic components.",
      image: "hero.jpg",
      tags: ["React", "TailwindCSS", "Vite"],
      link: "#",
      github: "#",
      hasPopup: false
    },
    {
      title: "E-Commerce Pipeline",
      description: "Full stack marketplace database logic built with dynamic state handling variables.",
      image: "hero.jpg",
      tags: ["Node.js", "SQL", "JavaScript"],
      link: "#",
      github: "#",
      hasPopup: false
    }
];

export const Projects = () => {
    const [activeProjectPopup, setActiveProjectPopup] = useState(null);

    const handleProjectClick = (e, project) => {
        if (project.hasPopup) {
            e.preventDefault();
            setActiveProjectPopup(project); // Mount modal popup view
        }
    };

    // Reusable Functional Grid Component 
    const ProjectGrid = ({ items }) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {items.map((project, idx) => (
                <a 
                    key={idx}
                    href={project.hasPopup ? undefined : project.link}
                    onClick={(e) => handleProjectClick(e, project)}
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
                
                {/* Your Original Preferred Section Header */}
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
                            Web Projects
                        </h3>
                    </div>
                    <ProjectGrid items={webProjects} />
                </div>

            </div>

            {/* 🌌 MODAL POPUP (Clean mobile-first design system layout) */}
            {activeProjectPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
                    <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-3xl p-6 md:p-8 glow-border shadow-2xl space-y-6">
                        
                        {/* Mobile Accessible Top Exit Button */}
                        <button 
                            onClick={() => setActiveProjectPopup(null)}
                            className="absolute top-6 right-6 p-2 rounded-xl bg-muted/20 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Showcase Context Image Inside the Popup */}
                        <div className="w-full aspect-video rounded-xl overflow-hidden bg-muted/20 border border-border/40">
                            <img 
                                src={activeProjectPopup.image} 
                                alt={activeProjectPopup.title} 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Title Header */}
                        <div className="border-b border-border/50 pb-4 pr-10">
                            <h3 className="text-2xl font-bold text-white leading-tight">
                                {activeProjectPopup.modalContent.title}
                            </h3>
                        </div>

                        {/* Metadata Row */}
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

                        {/* Case Study Summary Details */}
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