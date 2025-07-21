import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button
} from "@/components/ui/button";
import {
  Input
} from "@/components/ui/input";
import {
  Separator
} from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon
} from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { title: "Overview", href: "#" },
      { title: "Features", href: "#" },
      { title: "Solutions", href: "#" },
      { title: "Tutorials", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Releases", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Blog", href: "#" },
      { title: "Newsletter", href: "#" },
      { title: "Events", href: "#" },
      { title: "Help centre", href: "#" },
      { title: "Tutorials", href: "#" },
      { title: "Support", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full xl:col-span-2">
              {/* Logo */}
              <svg
                id="logo-7"
                width="124"
                height="32"
                viewBox="0 0 124 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG paths... */}
                <path d="..." className="fill-foreground" />
              </svg>

              <p className="mt-4 text-muted-foreground">
                Design amazing digital experiences that create more happy in the world.
              </p>
            </div>

            {/* Footer Links */}
            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-semibold">{title}</h6>
                <ul className="mt-6 space-y-4">
                  {links.map(({ title: linkTitle, href }) => (
                    <li key={linkTitle}>
                      <NavLink
                        to={href}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {linkTitle}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="col-span-2">
              <h6 className="font-semibold">Stay up to date</h6>
              <form className="mt-6 flex items-center gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="grow max-w-64"
                />
                <Button>Subscribe</Button>
              </form>
            </div>
          </div>

          <Separator />

          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <NavLink to="/" className="hover:underline">
                Shadcn UI Blocks
              </NavLink>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <NavLink to="#" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="h-5 w-5" />
              </NavLink>
              <NavLink to="#" target="_blank" rel="noopener noreferrer">
                <DribbbleIcon className="h-5 w-5" />
              </NavLink>
              <NavLink to="#" target="_blank" rel="noopener noreferrer">
                <TwitchIcon className="h-5 w-5" />
              </NavLink>
              <NavLink to="#" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-5 w-5" />
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
