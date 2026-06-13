import { Link, useLocation } from "wouter";
import { Crown, Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-primary p-2 rounded-xl">
              <Crown className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-foreground">Kiddie Kingdom</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${location === link.href ? "text-primary" : "text-muted-foreground"}`}>
                {link.name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="text-secondary border-secondary/20 hover:bg-secondary/10" asChild>
            <a href="tel:+919823978442"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">Admissions Open</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span 
                className={`block py-2 text-base font-medium cursor-pointer ${location === link.href ? "text-primary" : "text-foreground"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
            <Button variant="outline" className="w-full justify-center" asChild>
              <a href="tel:+919823978442"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
            </Button>
            <Button className="w-full justify-center bg-primary text-white">Admissions Open</Button>
          </div>
        </div>
      )}
    </header>
  );
}
