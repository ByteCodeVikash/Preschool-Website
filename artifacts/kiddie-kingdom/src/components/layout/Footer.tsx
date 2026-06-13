import { Link } from "wouter";
import { Crown, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-card border-t pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-xl">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-foreground">Kiddie Kingdom</span>
            </div>
            <p className="text-muted-foreground">
              Sparking Joy in Every Child. A premium preschool nurturing curiosity, confidence, creativity and joyful learning.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Home</span></Link></li>
              <li><Link href="/about"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">About Us</span></Link></li>
              <li><Link href="/programs"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Programs</span></Link></li>
              <li><Link href="/gallery"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Gallery</span></Link></li>
              <li><Link href="/contact"><span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Programs</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Playgroup (1.5 - 2.5 Yrs)</li>
              <li className="text-muted-foreground">Nursery (2.5 - 3.5 Yrs)</li>
              <li className="text-muted-foreground">LKG (3.5 - 4.5 Yrs)</li>
              <li className="text-muted-foreground">UKG (4.5 - 5.5 Yrs)</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">Zenda Chowk, Mahal, Nagpur, Maharashtra</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919823978442" className="text-muted-foreground hover:text-primary">+91 98239 78442</a>
                  <a href="tel:+919423445442" className="text-muted-foreground hover:text-primary">+91 94234 45442</a>
                </div>
              </li>
              <li className="flex gap-3">
                <FaWhatsapp className="h-5 w-5 text-primary shrink-0" />
                <a href="https://wa.me/919823978442" className="text-muted-foreground hover:text-primary">+91 98239 78442</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kiddie Kingdom Preschool. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="cursor-pointer hover:text-primary">Privacy Policy</span>
            <span className="cursor-pointer hover:text-primary">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
