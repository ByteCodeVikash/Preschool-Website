import { SectionHeading } from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, MapPin, Users, BookOpen } from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Playgroup",
      age: "1.5 - 2.5 Years",
      color: "primary",
      hex: "#4F46E5",
      description: "A gentle introduction to a structured environment. Focuses on socialization, sensory exploration, and motor skills.",
      features: ["Sensory Play", "Rhymes & Music", "Gross Motor Activities", "Basic Social Skills"],
      schedule: "9:00 AM - 11:30 AM"
    },
    {
      title: "Nursery",
      age: "2.5 - 3.5 Years",
      color: "secondary",
      hex: "#F97316",
      description: "Building independence and curiosity. Introduces pre-writing, pre-reading, and basic concepts through play.",
      features: ["Alphabet & Numbers Intro", "Fine Motor Skills", "Creative Art", "Storytelling"],
      schedule: "9:00 AM - 12:30 PM"
    },
    {
      title: "LKG",
      age: "3.5 - 4.5 Years",
      color: "accent",
      hex: "#22C55E",
      description: "Structured learning approach. Development of reading, writing, math concepts, and environmental awareness.",
      features: ["Phonics & Reading", "Writing Practice", "Basic Math", "Environmental Science"],
      schedule: "8:30 AM - 12:30 PM"
    },
    {
      title: "UKG",
      age: "4.5 - 5.5 Years",
      color: "blue-500",
      hex: "#3B82F6",
      description: "School readiness program. Advanced concepts in language, math, and general knowledge to prepare for primary school.",
      features: ["Advanced Reading/Writing", "Addition & Subtraction", "Logical Reasoning", "Public Speaking Prep"],
      schedule: "8:30 AM - 1:00 PM"
    }
  ];

  return (
    <div className="w-full">
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Our Programs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive, age-appropriate learning programs designed to nurture your child at every stage of their early development.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {programs.map((prog, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className={`w-48 h-48 rounded-full bg-${prog.color}/10 flex items-center justify-center border-8 border-white shadow-xl`}>
                    <div className="text-center">
                      <h3 className={`text-2xl font-display font-bold text-${prog.color}`}>{prog.title}</h3>
                      <p className="text-sm text-muted-foreground font-medium">{prog.age}</p>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className={`h-6 w-6 text-${prog.color}`} />
                    <h2 className="text-3xl font-display font-bold">{prog.title} Curriculum</h2>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">{prog.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {prog.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className={`h-5 w-5 text-${prog.color}`} />
                        <span className="font-medium text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 bg-soft-bg p-3 rounded-xl inline-flex">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Timing: {prog.schedule}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
