import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-background relative text-foreground overflow-hidden mt-14">
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-64 flex items-start -z-10">
        <div className="h-24 w-2/3 bg-gradient-to-br from-purple-500/20 blur-2xl dark:from-purple-700 invisible dark:visible" />
        <div className="h-20 w-3/5 bg-gradient-to-r from-blue-600/30 blur-2xl dark:from-purple-700" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-600 to-violet-400 opacity-40 blur-2xl -z-10" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-10 md:px-12 pt-32 pb-24 text-center space-y-10">
        <h1 className="mx-auto max-w-5xl font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
          At Tejstambh we create, we design, we develop.
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
A forward-thinking company dedicated to innovation and excellence. We believe that technology, when combined with strategic insight, can transform organizations and drive sustainable growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center flex-wrap gap-4">
          <NavLink
            to="/contact"
            className="inline-flex items-center h-12 px-6 rounded-full bg-primary text-primary-foreground border border-primary shadow-sm hover:bg-primary/90 transition"
          >
            Hire us Now
          </NavLink>
        </div>

        {/* Features */}
        <div className="text-left grid lg:grid-cols-3 p-6 rounded-2xl bg-muted border border-border max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-border">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={`flex items-start gap-6 ${
                  i === 0 ? "lg:pr-6 pb-6 lg:pb-0" : i === 1 ? "lg:px-6 py-6 lg:py-0" : "pt-6 lg:pt-0 lg:pl-6"
                }`}
              >
                <div className="w-10">
                  <span className="p-3 rounded-xl bg-secondary flex text-secondary-foreground">
                    {/* Example Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex-1 space-y-1">
                  <h2 className="font-semibold text-lg">High Quality</h2>
                  <p className="text-muted-foreground text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
