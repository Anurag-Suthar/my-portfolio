import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe for payments.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management App",
      description:
        "A task management application with drag-and-drop functionality and real-time updates.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather dashboard that displays current weather and forecasts for multiple locations.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Blog Platform",
      description:
        "A blog platform with a custom CMS built with Next.js and Sanity.io.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "Sanity.io", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Recipe App",
      description:
        "A recipe application that allows users to search, save, and share recipes.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with Next.js and Tailwind CSS.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        My Projects
      </h1>
      <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
        Here are some of the projects I've worked on. Each project represents a
        unique challenge and solution.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-all hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  GitHub
                  <Github className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
