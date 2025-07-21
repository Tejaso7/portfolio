"use client";

const AboutContentSection = () => {
  return (
    <>
        <section className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 flex flex-col md:flex-row gap-16 py-10 rounded-2xl bg-muted border border-border shadow-sm">
        {/* Image */}
        <div className="flex md:flex-1">
          <img
            src="/images/heroImg.webp"
            alt="Working on housing"
            width={1300}
            className="w-full md:h-full object-cover rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 space-y-8">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Tejas Sawant, CEO & Founder
          </h1>

          <p className="text-muted-foreground">
            Tejas Sawant, CEO of Tejstambh, brings over a decade of experience in driving innovation and growth. His visionary leadership has established Tejstambh as a leader in providing strategic solutions across industries.
          </p>

          <ul className="space-y-4">
            {["Excellence", "Integrity", "Client-focused"].map((item, i) => (
              <li key={i} className="flex items-center gap-x-4">
                <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-600 text-white">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div>
            <a
              href="#"
              className="inline-flex items-center px-6 h-11 rounded-md bg-primary text-primary-foreground border border-primary hover:bg-primary/90 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 flex flex-col md:flex-row gap-16 py-10 rounded-2xl bg-muted border border-border shadow-sm">
        <div className="md:w-1/2 space-y-8">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Tushar Sawant, Founder & Visionary
          </h1>

          <p className="text-muted-foreground">
            Tushar Sawant, the visionary founder of Tejstambh, laid the foundation for a company dedicated to excellence and innovation. His forward-thinking approach has shaped our core values and mission.
          </p>

          <ul className="space-y-4">
            {["Continuous innovation", "Integrity", "Leadership"].map((item, i) => (
              <li key={i} className="flex items-center gap-x-4">
                <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-emerald-600 text-white">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div>
            <a
              href="#"
              className="inline-flex items-center px-6 h-11 rounded-md bg-primary text-primary-foreground border border-primary hover:bg-primary/90 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="flex md:flex-1">
          <img
            src="/images/heroImg.webp"
            alt="Working on housing"
            width={1300}
            className="w-full md:h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutContentSection;
