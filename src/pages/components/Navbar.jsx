import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from '../../assets/TejStambh_logo.png'

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigate = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <header className="w-full fixed top-0 z-50 border-b border-border backdrop-blur bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-2xl font-bold cursor-pointer text-foreground flex gap-2 justify-center items-center" 
        >
          <img src={logo} alt="Tejstambh Logo" className="h-10 rounded-lg" />

          Tejstambh
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => handleNavigate(item.path)}
              className="text-foreground hover:text-primary"
            >
              {item.name}
            </Button>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground">
              <div className="mt-10 space-y-4">
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="w-full justify-start text-lg"
                    onClick={() => handleNavigate(item.path)}
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
