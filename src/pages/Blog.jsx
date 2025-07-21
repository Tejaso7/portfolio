import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Blog = () => {
  const posts = [
    {
      id: 1,
      cover: "/images/working-on-housing-project.jpg",
      title: "How to Structure your ReactJS Application like a Legend",
      tags: ["ReactJs", "WebDesign", "Web Development"],
    },
    {
      id: 2,
      cover: "/images/working-on-housing-project.jpg",
      title: "Understanding State Management in React",
      tags: ["ReactJs", "State", "Hooks"],
    },
    {
      id: 3,
      cover: "/images/working-on-housing-project.jpg",
      title: "Tailwind CSS + Shadcn: Build Fast and Beautiful UI",
      tags: ["Tailwind", "Shadcn", "UI Design"],
    },
    {
      id: 4,
      cover: "/images/working-on-housing-project.jpg",
      title: "Optimizing React Performance for Production",
      tags: ["React", "Performance", "Optimization"],
    },
  ];

  const BlogCard = ({ cover, title, tags }) => (
    <div className="bg-background h-full border border-border duration-300 ease-linear hover:border-muted p-0.5 flex flex-col group rounded-lg overflow-hidden">
      <img
        alt="banner image"
        className="w-full aspect-video object-cover"
        src={cover}
        width={1263}
        height={1291}
      />
      <div className="px-4 lg:px-6 py-5 lg:py-8">
        <a className="text-foreground font-semibold text-2xl lg:text-3xl" href="#">
          {title}
        </a>
        <div className="flex flex-wrap gap-x-2 w-full gap-y-3 pt-5">
          {tags.map((tag, index) => (
            <span
              key={`tag${index}`}
              className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <section className="py-20 bg-background text-foreground mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-14">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="rounded-lg bg-muted px-2.5 py-1 text-xs font-semibold tracking-wide text-muted-foreground">
                Blog
              </span>
              <h2 className="text-3xl font-semibold md:text-4xl xl:text-5xl leading-tight">
                From our latest Blog Post
              </h2>
            </div>
            <div>
              <a
                href="#"
                className="px-6 py-3 border border-border text-primary hover:bg-muted flex items-center gap-x-3 rounded-md transition"
              >
                See More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 rounded-t-lg">
            {posts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
