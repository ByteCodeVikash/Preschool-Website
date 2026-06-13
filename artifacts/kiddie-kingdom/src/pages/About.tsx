import { SectionHeading } from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import { Shield, Target, Heart, Star, Sparkles } from "lucide-react";

export default function About() {
  const teachers = [
    { name: "Mrs. Kavita Sharma", role: "Principal", image: "/images/teacher-1.png" },
    { name: "Ms. Priya Nair", role: "Nursery Teacher", image: "/images/teacher-2.png" },
    { name: "Mrs. Anita Desai", role: "LKG/UKG Coordinator", image: "/images/teacher-3.png" },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">About Kiddie Kingdom</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our journey, our values, and the passionate educators who make our preschool a second home for your child.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/images/about.png" alt="Our Story" className="rounded-3xl shadow-xl" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display font-bold">Our Journey</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to revolutionize early childhood education in Nagpur, Kiddie Kingdom Preschool started its journey with a simple promise: to spark joy in every child's learning process.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand that the first five years are crucial for a child's brain development. Our meticulously crafted spaces, international standard curriculum, and loving environment ensure that your child receives the best foundation possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-soft-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a safe, developmentally appropriate, and joyful learning environment that fosters a child's natural desire to explore, discover, create, and become a lifelong learner.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as a premier early childhood institution that builds a strong foundation for children, preparing them not just for school, but for life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Meet Our Educators" 
            subtitle="Our teachers are trained professionals who are passionate about early childhood education and dedicated to your child's success."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-md"
              >
                <img src={teacher.image} alt={teacher.name} className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-display text-2xl font-bold">{teacher.name}</h3>
                  <p className="text-white/80">{teacher.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
