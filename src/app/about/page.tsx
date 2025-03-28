import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About | DEV Personal 👨‍💻",
  description: "More about me and what I do",
};

export default function About() {
  return (
    <>
      <SiteHeader />

      <main className="container py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
            About Me
          </h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="lead">
            Hello! I'm Tran Viet Chinh, a Frontend developer passionate about creating intuitive and accessible web experiences. I enjoy designing user-friendly interfaces that are both visually appealing and highly functional. Continuously exploring new technologies, I strive to enhance my skills and stay updated with the latest web development trends. My focus is on building seamless digital experiences that improve usability for everyone. Beyond coding, I love collaborating, learning, and sharing knowledge with others. I'm always excited to take on new challenges and turn ideas into reality. Let's connect and create something amazing together! 🚀
            </p>

            <h2>My Journey</h2>
            <p>
              My journey into web development began with a curiosity about how websites work. What started as a hobby quickly turned into a passion, and I've been honing my skills ever since.
            </p>
            <p>
            I specialize in <b>Front-end</b> development. But I also enjoy working with the <b>Back-end</b> to create fully functional interfaces that are both visually appealing and functionally robust.
            </p>

            <h2>What I Do</h2>
            <p>
              Currently, I'm focused on building accessible, responsive web applications using modern technologies. I enjoy the challenge of translating designs into code and ensuring that the result is performant and accessible to all users.
            </p>
            <p>
            When not coding, you can find me experimenting with new technologies, and learning new skills.
            </p>

            <h2>My Tech Stack</h2>
           <div>
           <h3>Frontend:</h3>
            <ul>
              <li>HTML / CSS</li>
              <li>Javascript & TypeScript</li>
              <li>ReactJs, NextJs, VueJs</li>
              <li>Bootstrap / Tailwind CSS / CSS Module</li>
              <li>Ant Design</li>
            </ul>
           </div>

           <div>
           <h3>Backend:</h3>
            <ul>
              <li>Javascipt</li>
              <li>Java</li>
              <li>NodeJs / ExpressJs / SpringBoot</li>
            </ul>
           </div>

           <h3>Database:</h3>
           <ul>
            <li>MySQL, MongoDB, Firebase</li>
           </ul>
            <h3>Source Code Management & Tools:</h3>
            <ul>
              <li>Git, github, Postman</li>
              <li>Figma, Photoshop, Trello</li>
            </ul>
            <h2 id="contact">Get in Touch</h2>
            <p>
              I'm always open to discussing new projects, opportunities, or just chatting about web development. Feel free to reach out through any of the channels below.
            </p>

            <div className="flex flex-wrap gap-4 not-prose my-6">
              <Button asChild>
                <Link href="mailto:tranchinht32901@gmail.com">
                  Email Me
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://www.facebook.com/tranchinh04/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/TranChinh2901" target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://dev.to/tranchinh2901" target="_blank" rel="noopener noreferrer">
                  DevTo
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://www.linkedin.com/in/ch%C3%ADnh-tr%E1%BA%A7n-vi%E1%BA%BFt-099370355/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
