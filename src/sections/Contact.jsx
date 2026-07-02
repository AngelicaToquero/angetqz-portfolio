import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from '@/components/Button'; 
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "angelicatoquero33@gmail.com",
        href: "mailto:angelicatoquero33@gmail.com",
    },
    {
        icon: Phone,
        label: "Contact Number",
        value: "+63 9205443024",
        href: "tel:+639205443024",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Manila, Philippines",
        href: "#",
    },
];

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });
        
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;   
            
            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables."
                );
            }
            
            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, publicKey);
            
            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });
            
            // Clear form on success
            setFormData({ name: "", email: "", message: "" });

        } catch (err) { // <-- Kept as err
            console.error("EmailJS error:", err); // FIXED: changed from error to err
            setSubmitStatus({
                type: "error",
                // FIXED: changed from error.text to err.text (or err.message)
                message: err.text || err.message || "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sm uppercase font-medium tracking-wider text-secondary-foreground">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6 leading-tight animate-fade-in glow-text">
                        Let's Build <span className="font-serif italic font-normal text-secondary-foreground">something great</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-100">
                        Have a question, an idea, or a project you'd like to collaborate on? Drop a message below!
                    </p>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input id="name" type="text" required placeholder="Your name..."
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input id="email" type="email" required placeholder="your@email.com..." 
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea id="message" rows={5} required placeholder="Your message..." 
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" 
                                />
                            </div>

                            <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                                {isLoading ? (
                                    <>Sending...</>
                                ) : (
                                    <div className="flex items-center justify-center gap-2 w-full">
                                        Send Message  
                                        <Send className="w-5 h-5" /> 
                                    </div>
                                )}
                            </Button>

                            {submitStatus.type && (
                                <div className={`flex items-center gap-3 p-4 rounded-xl ${
                                    submitStatus.type === "success"
                                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                                }`}>
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    )}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};