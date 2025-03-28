import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Sample project data (expanded with more projects)
const projects = [
  {
    id: 1,
    title: "ecommerce_mern_stack",
    description: "An e-commerce website project of mine, built using ReactJS, NodeJS, and MongoDB, inspired by Hoang Ha Mobile.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    siteUrl: "https://ecommerce-mern-stack-iota.vercel.app/",
    codeUrl: "https://github.com/TranChinh2901/ecommerce_mern_stack",
  },
  {
    id: 2,
    title: "e-portfolio",
    description: "A website to introduce myself, my profession, and my future career direction. Built with Next.js, TypeScript, and Chakra UI.",
    technologies: ["Next.js", "Chakra UI", "MDX"],
    codeUrl: "https://github.com/TranChinh2901/IamChinhs",
  },
  {
    id: 3,
    title: "my-netflix",
    description: "Develop a user-friendly movie streaming website using React.js and Redux, designed for seamless performance and full responsiveness across all devices.",
    technologies: ["React.js", "Redux"],
    siteUrl: "",
    codeUrl: "https://github.com/TranChinh2901/my-netflix",
  },
  {
    id: 4,
    title: "education",
    description: "Develop a user-friendly educational website using HTML, CSS, and JavaScript, designed for smooth performance and full responsiveness across all devices.",
    technologies: ["HTML", "CSS", "JavaScript"],
    siteUrl: "",
    codeUrl: "https://github.com/TranChinh2901/education",
  }
];

export const metadata = {
  title: "Projects | DEV Personal 👨‍💻",
  description: "My projects and works",
};

export default function Projects() {
  return (
    <>
      <SiteHeader />

      <main className="container py-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
            Projects
          </h1>
          <p className="text-muted-foreground mb-12 text-lg">
         
          A collection of projects I have built over the years. This is my passion. I love to build things that are useful and fun. I am always looking for new projects to work on. If you have an idea, let me know. I would love to help you bring it to life.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
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
                      <li key={tech} className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                        <span className="sr-only">{tech}</span>
                        <div className="h-4 w-4 rounded-full bg-secondary-foreground/20"></div>
                      </li>
                    ))}
                  </ul>

                  {/* Action Links */}
                  <div className="flex gap-3">
                    {project.siteUrl && (
                      <Button asChild size="sm" variant="secondary">
                        <Link href={project.siteUrl} target="_blank" rel="noopener noreferrer">
                          Demo
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
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
