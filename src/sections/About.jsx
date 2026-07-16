import { Layers, Code2, Sparkles, Heart } from "lucide-react";

// Focused UI/UX and Front-End Highlights
const highlights = [
    {
        icon: Layers,
        title: "Interface Architecture",
        description: "Crafting comprehensive design languages, smooth component states, and high-fidelity interactive prototypes."
    },
    {
        icon: Code2,
        title: "Frontend Engineering",
        description: "Translating static visual blueprints into production-ready, highly responsive, and modular modern code."
    },
    {
        icon: Sparkles,
        title: "User-Centric Motion",
        description: "Designing micro-interactions and transitional animations that guide users naturally through a product."
    },
    {
        icon: Heart,
        title: "Purpose-Driven Craft",
        description: "Dedication to sharpening both design and development skills to create meaningful, high-value outcomes."
    }
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center"> 
                    
                    {/* Left Column: Focused Two-Paragraph Story */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm uppercase font-medium tracking-wider">About Me</span>
                        </div>

                        <h2 className="text-primary text-4xl md:text-5xl font-bold leading-tight animate-fade-in glow-text">
                            Designing Intentions, 
                            <br/>    
                            <span className="font-serif italic font-normal text-secondary-foreground"> Building Experiences.</span>
                        </h2>

                        <div className="space-y-6 text-muted-foreground animate-fade-in leading-relaxed">
                            {/* Paragraph 1: Generalized UI/UX & Visual Structure Focus */}
                            <p>
                                Hi, I’m Angelica. My creative journey focuses heavily on digital product strategy and interface 
                                design. I love mapping out comprehensive user workflows, establishing balanced layout frameworks, 
                                and shaping polished user experiences. I look at system design with an eye for pixel-perfect intentionality, 
                                ensuring that typography hierarchies, component systems, and spatial logic align perfectly to create intuitive 
                                human interactions.
                            </p>
                            
                            {/* Paragraph 2: Generalized Frontend Development Focus */}
                            <p>
                                Alongside my creative side, I have a deep passion for website and mobile development. I truly love the logic, coding, and problem-solving involved in engineering modern web applications. Having a strong technical foundation allows me to write clean, semantic code that breathes real life into programmatic systems, builds responsive digital environments, and optimizes user interaction layer by layer inside the browser.
                            </p>
                        </div>

                        {/* Your personal mission re-styled explicitly as your Motto card */}
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in">
                            <p className="text-lg font-medium italic text-foreground ">
                                "Success isn't about rushing to catch up; it's about executing with intention on your own timeline."
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Balanced Design & Code Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="glass rounded-2xl p-6 animate-fade-in hover:translate-y-[-4px] transition-all duration-300"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="h-12 w-12 mb-4 rounded-xl bg-primary/10 flex justify-center items-center transition-colors duration-300 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </section>
    );
};