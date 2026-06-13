import { SectionHeading } from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. Our team will contact you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="w-full">
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Visit our campus, give us a call, or send us a message to start your child's journey with us.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info & Map */}
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-6"
              >
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground text-sm">Zenda Chowk, Mahal,<br/>Nagpur, Maharashtra</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2">Call Us</h3>
                  <p className="text-muted-foreground text-sm mb-1"><a href="tel:+919823978442" className="hover:text-primary">+91 98239 78442</a></p>
                  <p className="text-muted-foreground text-sm"><a href="tel:+919423445442" className="hover:text-primary">+91 94234 45442</a></p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-4">
                    <FaWhatsapp className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground text-sm">
                    <a href="https://wa.me/919823978442" target="_blank" rel="noopener noreferrer" className="hover:text-primary">+91 98239 78442</a>
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold mb-2">Office Hours</h3>
                  <p className="text-muted-foreground text-sm">Mon - Sat<br/>8:30 AM - 3:00 PM</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden h-[300px] shadow-sm border border-gray-100 relative"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.6!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNagpur!5e0!3m2!1sen!2sin!4v1234567890" 
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100"
            >
              <h2 className="text-3xl font-display font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="parent-name">Parent Name <span className="text-destructive">*</span></Label>
                    <Input id="parent-name" required placeholder="John Doe" className="bg-soft-bg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Number <span className="text-destructive">*</span></Label>
                    <Input id="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className="bg-soft-bg" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="child-age">Child's Age <span className="text-destructive">*</span></Label>
                    <Input id="child-age" type="number" step="0.1" required placeholder="e.g. 3.5" className="bg-soft-bg" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="program">Program Interested In <span className="text-destructive">*</span></Label>
                    <Select required>
                      <SelectTrigger id="program" className="bg-soft-bg">
                        <SelectValue placeholder="Select Program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="playgroup">Playgroup</SelectItem>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="lkg">LKG</SelectItem>
                        <SelectItem value="ukg">UKG</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" placeholder="Any specific questions or requirements?" rows={4} className="bg-soft-bg" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14 text-lg">
                  Submit Inquiry <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
