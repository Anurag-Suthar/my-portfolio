import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-gray-800 dark:text-white">
            About Me
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            I am a passionate and dedicated{" "}
            <strong>Full Stack Developer</strong> with over 5 years of
            experience in building dynamic, scalable, and efficient web
            applications. My expertise lies in crafting seamless user
            experiences with modern technologies like <strong>React</strong>,{" "}
            <strong>Next.js</strong>, and <strong>Node.js</strong>, while
            developing robust backend systems that ensure performance and
            reliability.
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            My journey in web development began in college when I built my first
            website for a local business. This sparked a deep interest in
            creating solutions that make an impact. Since then, I've had the
            opportunity to work with startups and established companies,
            developing responsive, accessible, and high-performance web
            applications.
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            I specialize in:
            <ul className="list-disc ml-5 mt-2">
              <li>
                <strong>Front-end Development:</strong> Building interactive UIs
                with React and Next.js.
              </li>
              <li>
                <strong>Back-end Development:</strong> Designing RESTful APIs,
                working with microservices, and managing database structures
                efficiently.
              </li>
              <li>
                <strong>Cloud & Deployment:</strong> Hands-on experience with
                AWS services for deploying and managing cloud-based
                applications.
              </li>
            </ul>
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            What drives me is a commitment to delivering high-quality solutions
            and staying ahead in the ever-evolving tech landscape. I thrive in
            challenging environments, constantly learning new technologies, and
            solving complex problems with innovative approaches.
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            When I’m not coding, you can find me <strong>hiking</strong>,{" "}
            <strong>reading science fiction</strong>, or{" "}
            <strong>experimenting with new tech</strong> to fuel my curiosity.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/profile-picture.jpg"
            alt="John Doe"
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
          Experience
        </h2>
        <div className="mt-8 grid gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tech Innovations Inc. | 2020 - Present
                </p>
                <p className="mt-2">
                  Led the frontend development team in building a modern web
                  application using React, Next.js, and TypeScript. Implemented
                  CI/CD pipelines and improved performance by 40%.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Full-Stack Developer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  WebSolutions Co. | 2018 - 2020
                </p>
                <p className="mt-2">
                  Developed and maintained multiple client websites using React,
                  Node.js, and MongoDB. Collaborated with designers to implement
                  responsive UI/UX designs.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Junior Web Developer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Digital Agency | 2016 - 2018
                </p>
                <p className="mt-2">
                  Built and maintained client websites using HTML, CSS,
                  JavaScript, and PHP. Worked closely with the design team to
                  implement pixel-perfect designs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
          Education
        </h2>
        <div className="mt-8 grid gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  University of Technology | 2012 - 2016
                </p>
                <p className="mt-2">
                  Graduated with honors. Specialized in web development and
                  software engineering.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
