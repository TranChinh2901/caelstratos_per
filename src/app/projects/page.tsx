import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Map công nghệ với logo tương ứng
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



const projects = [
  {
    id: 1,
    title: "caelstratos_ecommerce",
    description: "An e-commerce website project built using ReactJS, NodeJS, and MongoDB, inspired by Hoang Ha Mobile.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    siteUrl: "https://ecommerce-mern-stack-iota.vercel.app/",
    codeUrl: "https://github.com/TranChinh2901/caelstratos_ecommerce",
  },
  {
    id: 2,
    title: "e-portfolio",
    description: "A portfolio website built with Next.js, TypeScript, and Chakra UI.",
    technologies: ["Next.js", "TypeScript", "Chakra UI", "MDX"],
    siteUrl: "https://iam-chinhs.vercel.app/",
    codeUrl: "https://github.com/TranChinh2901/IamChinhs",
  },
  {
    id: 3,
    title: "my-netflix",
    description: "A user-friendly movie streaming website using React.js and Redux.",
    technologies: ["React.js", "Redux"],

    codeUrl: "https://github.com/TranChinh2901/my-netflix",
  },
  {
    id: 4,
    title: "education",
    description: "A responsive educational website using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
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
            A collection of projects I have built over the years. I love to build useful and fun things.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all">
                <div className="flex h-32 items-center justify-center bg-primary/90 p-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>

                <div className="flex flex-col space-y-4 p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>

                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="flex items-center">
                        <img src={techLogos[tech]} alt={tech} className="h-8 w-8 object-contain transition-transform hover:scale-110" />
                      </li>
                    ))}
                  </ul>

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
