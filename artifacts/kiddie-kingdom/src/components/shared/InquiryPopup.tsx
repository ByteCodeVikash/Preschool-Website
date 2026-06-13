import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user has already seen/closed it in this session (optional, but good UX)
      const hasSeen = sessionStorage.getItem("inquiryPopupSeen");
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      sessionStorage.setItem("inquiryPopupSeen", "true");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for your interest. Our admissions team will contact you shortly.",
    });
    setIsOpen(false);
    sessionStorage.setItem("inquiryPopupSeen", "true");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-primary">Admissions Open!</DialogTitle>
          <DialogDescription>
            Leave your details below and our team will get in touch with you about enrollment for 2025-26.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="popup-name">Parent Name</Label>
            <Input id="popup-name" required placeholder="Enter your full name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="popup-phone">Mobile Number</Label>
            <Input id="popup-phone" type="tel" required placeholder="+91 XXXXX XXXXX" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="popup-age">Child Age</Label>
              <Input id="popup-age" type="number" step="0.1" required placeholder="e.g. 3.5" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="popup-program">Program</Label>
              <Select required>
                <SelectTrigger id="popup-program">
                  <SelectValue placeholder="Select" />
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
          <div className="pt-2">
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
              Submit Inquiry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
