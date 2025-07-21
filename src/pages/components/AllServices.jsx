import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Consulting",
    description:
      "Expert guidance for business growth. Our consulting services help you navigate challenges and identify opportunities for sustainable growth.",
    points: [
      "Strategic planning and execution",
      "Business process optimization",
      "Change management support",
      "Performance improvement strategies",
    ],
    image: "https://source.unsplash.com/featured/?business,meeting",
  },
  {
    title: "Technology Solutions",
    description:
      "Custom software and IT services tailored to your unique business needs and challenges, delivering scalable and efficient digital experiences.",
    points: [
      "Custom software development",
      "Cloud infrastructure solutions",
      "Digital transformation services",
      "Technology integration & support",
    ],
    image: "https://source.unsplash.com/featured/?technology,software",
  },
  {
    title: "Strategic Growth",
    description:
      "Comprehensive plans to scale your business efficiently and sustainably in competitive markets, with a focus on long-term success.",
    points: [
      "Market expansion strategies",
      "Investment & funding guidance",
      "Partnership & acquisition support",
      "Growth-focused business modeling",
    ],
    image: "https://source.unsplash.com/featured/?strategy,growth",
  },
  {
    title: "AI Solutions",
    description:
      "Cutting-edge artificial intelligence solutions designed to optimize processes, enhance decision-making, and drive innovation across your organization.",
    points: [
      "Machine learning implementation",
      "Natural language processing",
      "Predictive analytics systems",
      "AI strategy consulting",
    ],
    image: "https://source.unsplash.com/featured/?ai,technology",
  },
];

export default function AllServices() {
  return (
    <section className="w-full min-h-screen bg-background text-foreground mt-20">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto py-20 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Services We Provide
        </h1>
        <p className="mt-4 text-muted-foreground">
          Helping businesses grow, adapt, and scale with modern technology and
          strategy.
        </p>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col gap-16 max-w-6xl mx-auto px-6 pb-20">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={service.title}
              className={`flex flex-col lg:flex-row ${
                !isEven ? "lg:flex-row-reverse" : ""
              } items-center gap-10 bg-muted/40 p-6 sm:p-10 rounded-xl shadow-sm border border-border`}
            >
              {/* Image */}
              <div className="lg:w-1/2 w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg w-full h-[250px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 w-full space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  {service.title}
                </h2>
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <Button className="mt-4">Learn More</Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
