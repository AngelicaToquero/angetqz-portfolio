import {Button} from '@/components/Button';
import { ArrowRight, Download } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* <div className="absolute inset-0">
            <img src="/hero.jpg" alt="Hero image" 
            className="w-full h-full object-cover opacity-40"/>
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
        </div> */}

     {/* Dots Container  */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(60)].map((_, i) => {
                const cosmicDuration = `${10 + Math.random() *20}s`;

                const driftX = `${(Math.random() - 0.5) * 80}px`;
                const driftY = `${(Math.random() - 0.5) * 80}px`;

                const randomDelay = `${Math.random() *-20}s`;

                return (

                 <div 
                     key = {i}
                     className=" absolute w-1.5 h-1.5 rounded-full bg-primary star-glow animate-cosmic"
                     style = {{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay : randomDelay,
                        animationDuration : cosmicDuration,

                        '--drift-x' : driftX,
                        '--drift-y' : driftY,
                     }}
                    />
                    );
                })}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content  */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                                Front-End Developer
                                </span>
                                
                        </div>
                        

                        {/* Headline  */}
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight animate-fade-in delay-100">
                                Crafting <span className="text-primary font-normal glow-text">beautiful interfaces </span>
                                <br />
                                Shaping <span className =" font-serif italic font-normal text-slate-200">seamless interactions.</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in delay-300">
                                Hi, I’m Angelica Toquero - a UI/UX designer. I shape digital experiences through high-fidelity interactive prototypes, 
                                aligning user goals with business needs through thoughtful, intentional design.
                            </p>   
                        </div>

                        {/* CTA */}
                        <div className='flex flex-wrap gap-4 animate-fade-in delay-500'>
                        <Button className="lg">Contact Me <ArrowRight className='w-5 h-5'/></Button>
                          <AnimatedBorderButton/>
                        </div>

                        {/* Social Links */}
                        <div className='flex items-center gap-4 animate-fade-in animation-delay-300 '>
                            <span className='text-sm text-muted-foreground'>Follow me: </span> 
                            {[
                                { icon: FaGithub, href: "#"},
                                { icon: FaLinkedin, href: "#"},
                                { icon: FaFacebook, href: "#"},
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300' >
                                    {<social.icon className='w-5 h-5'/>}
                                    </a>
                            ))}
                        </div>
                        
                    </div>

                    {/* Picture Column */}
                    <div className='relative animate-fade-in animation-delay-300'>
                    {/* Profile Image */}
                    <div className='relative max-w-md mx-auto'>
                        <div className='absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30
                        via-transparent to-primary/10 blur-2xl animate-pulse'>

                        </div>
                            <div className='relative glass rounded-3xl p-2 glow-border'>
                                <img src="/dp.jpg" alt="Angelica Toquero" 
                                className='w-full aspect-4/5 object-cover rounded-2xl'/>
                            {/* Floating Badge */}
                            <div className='absolute -bottom-4 -right-4 glass rounded-xl
                            px-4 py-3 animate-float '>
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
            </div>
    </section>
    );
};