import React from "react";
import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const features = [
  {
    icon: Settings2,
    title: "Customizable Layouts",
    description:
      "Design your space with drag-and-drop simplicity—create grids, lists, or galleries in seconds.",
  },
  {
    icon: Bot,
    title: "AI-Powered Tools",
    description:
      "Generate summaries, auto-format content, or translate into multiple languages seamlessly.",
  },
  {
    icon: MessageCircle,
    title: "Seamless Collaboration",
    description:
      "Comment, tag, and assign tasks directly within your documents.",
  },
];

const Features = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Unleash Your Creativity
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="h-6 w-6" />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
              <NavLink
                to="/services"
                className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
              >
                Learn More →
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
