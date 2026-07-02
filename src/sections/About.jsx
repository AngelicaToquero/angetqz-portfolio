import { Lightbulb, Rocket } from "lucide-react";
const highlights = [
    {
    icon: Lightbulb,
    title: "Innovation",
    description: "Hello ka"
    },
    {
    icon: Lightbulb,
    title: "Innovation",
    description: "Hello ka"
    },
    {
    icon: Lightbulb,
    title: "Innovation",
    description: "Hello ka"
    },
    {
    icon: Rocket,
    title: "Innovation",
    description: "Hello ka" 
    }
]


export const About = () => {
    return <section id ="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center"> 
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm uppercase font-medium tracking-wider">About Me</span>
                    </div>

                    <h2 className="text-primary text-4xl md:text-5xl font-bold leading-tight animate-fade-in glow-text">Building the future 
                        <span className=" font-serif italic font-normal text-secondary-foreground"> one at a time.</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in">
                        <p>Hi. I am Angelica, an enthusiastic coder who wants to be rich and full of money
                            very big amount of money that i will give back to God and spend for my family 
                            love ones. Thank you!
                        </p>
                        <p>I  believe that everyone of us have our own timeline, so I should not be pressure 
                            to my friends that is having so called-success for them but not focusing on what really
                            the success is. Help me God.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in">
                        <p className="text-lg font-medium italic text-foreground ">My mission is to be rich - yeah yeah frfr</p>
                    </div>
                    </div>

                    {/* Right Column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div key = {idx} className="glass rounded-2xl p-6 animate-fade-in"
                                style = {{animationDelay : `$((idx + 1) * 100)ms`}}>
                                <div className="h-12 w-12 mb-4 hover:bg-primary/30 rounded-xl bg-primary/10 flex justify-center items-center ">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground ">{item.description}</p>
                            </div>
                        ))}
                    
                </div>
            </div>
        </div>
    </section>
};