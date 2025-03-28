import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const techLogos = {
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "MongoDB": "https://www.svgrepo.com/show/331488/mongodb.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Chakra UI": "https://img.icons8.com/color/512/chakra-ui.png",
  "MDX": "https://avatars1.githubusercontent.com/u/74457950?s=256&v=4",
  "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
   "TypeScript": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
};

// Sample project data
const featuredProjects = [
  {
    id: 1,
    title: "ecommerce_mern_stack",
    description: "An e-commerce website project built using ReactJS, NodeJS, and MongoDB, inspired by Hoang Ha Mobile.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    siteUrl: "https://ecommerce-mern-stack-iota.vercel.app/",
    codeUrl: "https://github.com/TranChinh2901/ecommerce_mern_stack",
  },
  {
    id: 2,
    title: "e-portfolio",
    description: "A portfolio website built with Next.js, TypeScript, and Chakra UI.",
    technologies: ["Next.js", "TypeScript","Chakra UI", "MDX"],
    codeUrl: "https://github.com/TranChinh2901/IamChinhs",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="container flex flex-col pt-20 pb-16 md:min-h-[calc(100vh-4rem)] md:pb-0">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Hi, I'm Tran Viet Chinh.
              </h1>
              <h2 className="text-muted-foreground max-w-[600px] text-lg">
              Welcome to my digital space, where creativity meets technology. Here, youll find my projects, thoughts, and passions—crafted with a blend of curiosity and innovation.
              </h2>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Who am I?</h3>
                <p className="text-muted-foreground">
                  I'm a curiosity-driven, design-focused developer, building rich, user-centric, inclusive experiences on the web.
                </p>
                <p className="text-muted-foreground">
                  Feel free to have a look around, and learn more about myself and what I like to work on.
                </p>
                <Button asChild className="mt-4">
                  <Link href="/about#contact">Get in touch</Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative grid grid-cols-2 gap-6">
                <div className="h-24 w-24 animate-float-slow">
                  <div className="h-full w-full relative">
                    <Image
                      src="/headphones.svg"
                      alt="Headphones illustration"
                      fill
                      className="text-foreground"
                    />
                  </div>
                </div>
                <div className="h-24 w-24 animate-float">
                  <div className="h-full w-full relative">
                    <Image
                      src="/thought-bubble.svg"
                      alt="Thought bubble illustration"
                      fill
                      className="text-foreground"
                    />
                  </div>
                </div>
                <div className="h-24 w-24 animate-float-slow">
                  <div className="h-full w-full relative">
                    <Image
                      src="/feather.svg"
                      alt="Feather illustration"
                      fill
                      className="text-foreground"
                    />
                  </div>
                </div>
                <div className="h-24 w-24 animate-float">
                  <div className="h-full w-full relative">
                    <Image
                      src="/code.svg"
                      alt="Code illustration"
                      fill
                      className="text-foreground"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center md:block hidden">
              <div className="flex flex-col items-center space-y-2">
                <span>Scroll</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 12L2 6L3.4 4.6L8 9.2L12.6 4.6L14 6L8 12Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="container py-20">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all">
                {/* Project Header */}
                <div className="flex h-32 items-center justify-center bg-primary/90 p-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>

                {/* Project Content */}
                <div className="flex flex-col space-y-4 p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>

                  {/* Technologies */}
                  <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                      <li key={tech} className="flex items-center">
                        <img src={techLogos[tech]} alt={tech} className="h-8 w-8 object-contain transition-transform hover:scale-110" />
                      </li>
                    ))}
                  </ul>

                  {/* Action Links */}
                  <div className="flex gap-3">
                    {project.siteUrl && (
                      <Button asChild size="sm" variant="secondary">
                        <Link href={project.siteUrl} target="_blank" rel="noopener noreferrer">
                          Visit Site
                        </Link>
                      </Button>
                    )}

                   

                    {project.codeUrl && (
                      <Button asChild size="sm" variant="outline">
                        <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          View Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild variant="secondary" className="bg-accent text-white hover:bg-accent/90">
              <Link href="/projects">See All Projects</Link>
            </Button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="container py-16">
          <div className="mx-auto max-w-2xl rounded-lg border bg-card p-8">
            <h2 className="mb-2 text-xl font-bold">Subscribe to my newsletter</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Get emails from me about web development, design, accessibility and early access to content.
            </p>

            <div className="flex w-full gap-2">
              <input
                type="email"
                placeholder="john@example.com"
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button type="submit" className="bg-accent text-white hover:bg-accent/90">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
