import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Contact } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
          Join us
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
          Welcome to Tejstambh
          Building the Future
        </h1><p className="mt-6 text-[20px] md:text-xl">
          AI Solutions and Dynamic Applications
        </p>
        <p className="mt-6 text-[17px] md:text-lg">
          Tejstambh is transforming industries with innovative, strategic solutions that drive growth and efficiency.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <NavLink to='/about'>
            <Button size="lg" className="rounded-full text-base">
              Learn More <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </NavLink>
          <NavLink to="/contact">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <Contact className="!h-5 !w-5" /> Contact Us
            </Button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
