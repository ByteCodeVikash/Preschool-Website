import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Classroom", "Activities", "Outdoor"];

  // Using the 5 gallery images we generated, plus some repeated to make it look full
  const images = [
    { src: "/images/gallery-1.png", category: "Activities", alt: "Art activity" },
    { src: "/images/gallery-2.png", category: "Outdoor", alt: "Outdoor play" },
    { src: "/images/gallery-3.png", category: "Classroom", alt: "Story time" },
    { src: "/images/gallery-4.png", category: "Activities", alt: "Music dance" },
    { src: "/images/gallery-5.png", category: "Classroom", alt: "Block building" },
    { src: "/images/hero.png", category: "Classroom", alt: "Classroom overview" },
    { src: "/images/about.png", category: "Classroom", alt: "Learning time" },
    { src: "/images/gallery-1.png", category: "Activities", alt: "Painting" },
  ];

  const filteredImages = activeTab === "All" 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <div className="w-full pb-24">
      <section className="bg-primary/5 py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Our Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Glimpses of joyful learning, creative exploration, and everyday magic at Kiddie Kingdom.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === tab 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-soft-bg text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-4 py-2 border-2 border-white/50 rounded-full backdrop-blur-sm">View Image</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
