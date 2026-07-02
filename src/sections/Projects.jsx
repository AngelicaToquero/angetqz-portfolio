import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
    {
      title: "KidoPass",
      description: "A website for kids",
      image: "hero.jpg",
      tags : ["ReactVite", "Supabase","Mobile"],
      link : "#",
      github : "#",
    },
    {
      title: "KidoPass",
      description: "A website for kids",
      image: "/projects/dp.jpg",
      tags : ["Html", "CSS","JS"],
      link : "#",
      github : "#",
    },
];

export const Projects = () => {
    return ( <section id= "projects" className="py-32 relative overflow-hidden">
        <div className="container mx-auto relative px-6 z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">Featured Works</span>
                <h2 className=" text-primary text-4xl mt-4 mb-6 md:text-5xl font-bold leading-tight animate-fade-in glow-text">Projects that 
                    <span className="font-normal text-secondary-foreground font-serif italic"> make an impact.
                    </span>
                </h2>
                <p className="text-muted-foreground">Things that i have done to learn and grow that solve real-world problems yeah yeah</p>
            </div>

            {/* Projects List */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((projects, idx) => (
                    <div key={idx}
                        className="group glass rounded-2xl overflow-hidden animate-fade-in"
                        sytle = {{animationDelay: `${(idx + 1) * 100}ms`}}
                        >
                        {/* Image */}
                        <div className="relative overflow-hidden aspect-video">
                           <img src={projects.image} 
                           alt={projects.titles}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           /> 
                           </div>

                           {/* Contents */}
                           <div className="space-y-4 p-6">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{projects.title}</h3>
                                <ArrowUpRight className="w-5 h-5 text-muted-foreground
                                group-hover:text-primary
                                group-hover:translate-x-1
                                group=hover: -translate-y-1 transition-all"/>
                            </div>
                            <p className="text-sm text-muted-foreground">{projects.description}</p>
                            <div className="flex flex-wrap gap-2">{projects.tags.map((tag, tagIdx) => (
                                <span
                                key={tagIdx} 
                                className="px-4 py-1.5 rounded-full bg-surface
                                text-sm font-medium border border-border/50 text-muted-foreground
                                hover:border-primary/50 hover:text-primary 
                                transition-all duration-300">{tag}</span>

                            ))}</div>
                           </div>
                        </div>

                ))}
            </div>
            {/* View All Projects Button */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton> 
                    View All Projects
                    <ArrowUpRight className="w-5 h-5"/>
                </AnimatedBorderButton>
            </div>
        </div>
    </section>
    )
};