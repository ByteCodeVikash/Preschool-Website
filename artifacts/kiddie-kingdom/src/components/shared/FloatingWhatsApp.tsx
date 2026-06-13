import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919823978442"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
      <span className="absolute right-full mr-4 bg-white text-foreground text-sm px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
}
