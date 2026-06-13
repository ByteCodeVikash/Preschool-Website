import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Heart, Shield, Star, Users, Music, Palette, Tent, Puzzle, Smile, CheckCircle, Lightbulb, Zap, Speech, Calculator, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    { icon: <Shield className="h-6 w-6" />, title: "Safe & Caring Environment", desc: "24/7 CCTV surveillance, child-safe infrastructure, and caring staff." },
    { icon: <Smile className="h-6 w-6" />, title: "Play-Based Learning", desc: "Learning made fun through interactive and engaging play activities." },
    { icon: <Users className="h-6 w-6" />, title: "Experienced Teachers", desc: "Trained and passionate educators who love working with children." },
    { icon: <Star className="h-6 w-6" />, title: "Holistic Development", desc: "Focus on physical, emotional, social, and cognitive growth." },
    { icon: <Heart className="h-6 w-6" />, title: "Parent Partnership", desc: "Regular updates and active involvement of parents in the learning journey." },
    { icon: <CheckCircle className="h-6 w-6" />, title: "Strong Foundation", desc: "Preparing children with the right skills for primary school and beyond." },
  ];

  const activities = [
    { icon: <Palette />, title: "Art & Craft", color: "text-pink-500", bg: "bg-pink-50" },
    { icon: <Music />, title: "Music & Dance", color: "text-purple-500", bg: "bg-purple-50" },
    { icon: <Speech />, title: "Story Telling", color: "text-orange-500", bg: "bg-orange-50" },
    { icon: <Puzzle />, title: "Indoor Games", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: <Tent />, title: "Outdoor Play", color: "text-green-500", bg: "bg-green-50" },
    { icon: <Lightbulb />, title: "Creative Learning", color: "text-yellow-500", bg: "bg-yellow-50" },
    { icon: <Zap />, title: "Phonics", color: "text-red-500", bg: "bg-red-50" },
    { icon: <Calculator />, title: "Numbers & Shapes", color: "text-indigo-500", bg: "bg-indigo-50" },
  ];

  const testimonials = [
    { name: "Priya Sharma", review: "The teachers at Kiddie Kingdom are so caring. My daughter loves going to school every day. The environment is extremely safe and engaging." },
    { name: "Rahul Mehta", review: "We saw a remarkable improvement in our son's communication skills within just 3 months. The play-based curriculum really works!" },
    { name: "Anjali Singh", review: "Best preschool in Mahal area! The facilities are top-notch and the staff treats every child with so much love." },
    { name: "Vikram Patel", review: "I appreciate the regular updates from teachers. As a working parent, it gives me peace of mind knowing my child is in safe hands." },
    { name: "Sunita Rao", review: "The balance between academics and extracurricular activities is perfect. Highly recommend Kiddie Kingdom to all parents." },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px]" />
          <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-secondary/5 rounded-tr-[100px]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary font-medium">
                <Star className="mr-2 h-4 w-4 fill-primary" />
                Admissions Open 2025-26
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-foreground">
                Where Little <br/>
                <span className="text-primary">Dreams Begin</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                At Kiddie Kingdom Preschool, we nurture curiosity, confidence, creativity and joyful learning in a safe and caring environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full text-base h-14 px-8 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25">
                  Enroll Now
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full text-base h-14 px-8 border-2">
                  <Link href="/contact">Book School Visit</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-gray-100">
                <img 
                  src="/images/hero.png" 
                  alt="Happy preschool children" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-6 top-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4"
              >
                <div className="bg-secondary/20 p-3 rounded-full text-secondary">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-xl text-foreground">100+</div>
                  <div className="text-sm text-muted-foreground">Happy Students</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -left-6 bottom-10 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4"
              >
                <div className="bg-accent/20 p-3 rounded-full text-accent">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-xl text-foreground">Safe</div>
                  <div className="text-sm text-muted-foreground">Environment</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Why Choose Us?" subtitle="We provide a nurturing environment where your child can thrive and build a strong foundation for lifelong learning." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-soft-bg p-8 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-soft-bg relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-200">
                <img src="/images/about.png" alt="Preschool classroom" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold">A Perfect Start For A Bright Future</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Kiddie Kingdom Preschool, a place where children discover the joy of learning. We believe every child is unique and deserves a nurturing environment that encourages exploration and growth.
              </p>
              <ul className="space-y-4 pb-4">
                {[
                  "Child-centric curriculum tailored for early years",
                  "Highly qualified and caring educators",
                  "State-of-the-art facilities and learning materials",
                  "Focus on holistic development (physical, emotional, cognitive)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-accent/10 p-1 rounded-full text-accent">
                      <Heart className="w-4 h-4" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/about">Know More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-6xl">
          <SectionHeading title="Our Learning Programs" subtitle="Age-appropriate programs designed to give your child the best foundation for their educational journey." />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Playgroup", age: "1.5 - 2.5 Years", color: "bg-primary", text: "text-primary", icon: <Tent className="h-8 w-8" /> },
              { title: "Nursery", age: "2.5 - 3.5 Years", color: "bg-secondary", text: "text-secondary", icon: <Palette className="h-8 w-8" /> },
              { title: "LKG", age: "3.5 - 4.5 Years", color: "bg-accent", text: "text-accent", icon: <Puzzle className="h-8 w-8" /> },
              { title: "UKG", age: "4.5 - 5.5 Years", color: "bg-blue-500", text: "text-blue-500", icon: <BookOpen className="h-8 w-8" /> }
            ].map((prog, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-soft-bg rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300"
              >
                <div className={`w-20 h-20 rounded-2xl ${prog.color}/10 ${prog.text} flex items-center justify-center mb-6`}>
                  {prog.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{prog.title}</h3>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${prog.color}/10 ${prog.text} mb-4`}>
                  {prog.age}
                </div>
                <p className="text-muted-foreground mb-6 flex-1">Focus on social, emotional, and cognitive development.</p>
                <Button asChild variant="ghost" className={`w-full hover:${prog.color} hover:text-white group`}>
                  <Link href="/programs">Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Activities */}
      <section className="py-24 bg-soft-bg">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Learning Activities" subtitle="We believe children learn best when they are actively engaged in fun, meaningful activities." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {activities.map((act, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-gray-100 hover:shadow-md transition-all cursor-default`}
              >
                <div className={`w-16 h-16 rounded-2xl ${act.bg} ${act.color} flex items-center justify-center mb-4`}>
                  <div className="w-8 h-8 [&>svg]:w-full [&>svg]:h-full">{act.icon}</div>
                </div>
                <h3 className="font-bold text-foreground">{act.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Glimpses of Joy</h2>
              <p className="text-lg text-muted-foreground">Take a peek into the vibrant and happy world of Kiddie Kingdom.</p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex rounded-full">
              <Link href="/gallery">View All Gallery <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 2].map((num, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer bg-gray-100"
                onClick={() => setSelectedImage(`/images/gallery-${num}.png`)}
              >
                <img src={`/images/gallery-${num}.png`} alt="Gallery image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline" className="rounded-full w-full">
              <Link href="/gallery">View All Gallery <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-soft-bg">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="What Parents Say" subtitle="Don't just take our word for it. Hear from the parents who have entrusted us with their child's early education." />
          
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar gap-6">
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
              >
                <Quote className="absolute top-8 right-8 h-12 w-12 text-primary/10" />
                <div className="flex gap-1 mb-6 text-[#FFB800]">
                  {[1,2,3,4,5].map(i => <Star key={i} className="fill-current w-5 h-5" />)}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed relative z-10 text-lg">"{test.review}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{test.name}</h4>
                    <p className="text-sm text-muted-foreground">Parent</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 font-medium text-sm mb-6 backdrop-blur-md border border-white/30 shadow-lg">
            Enroll Today - Limited Seats Available
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Admissions Open For Academic Session 2025-26</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full h-14 px-10 text-lg shadow-xl hover:scale-105 transition-transform">
              <Link href="/contact">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white rounded-full h-14 px-10 text-lg backdrop-blur-sm">
              <a href="tel:+919823978442">Call School</a>
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[90vw] p-1 bg-black/95 border-none shadow-2xl">
          {selectedImage && (
            <img src={selectedImage} alt="Enlarged view" className="w-full h-auto max-h-[85vh] object-contain rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
