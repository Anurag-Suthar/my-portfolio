import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "G-Axon Tech Pvt. Ltd.",
      duration: "Jul 2024 - Present",
      period: "10 mos",
      employmentType: "Full-time",
      location: "",
      description:
        "ReactJS, NextJS, TypeScript, NestJS, GitHub, AWS\nI am excited to be a member of the skilled team at G-axon and grateful for the consistent opportunities to enhance and utilize my knowledge.",
      skills: [],
    },
    {
      title: "Frontend Developer",
      company: "G-Axon Tech Pvt. Ltd.",
      duration: "Jan 2024 - Jun 2024",
      period: "6 mos",
      employmentType: "Full-time",
      location: "Bikaner, Rajasthan, India · On-site",
      description: "",
      skills: ["Front-End Development", "AWS CloudFormation", "+13 skills"],
    },
    {
      title: "Frontend Developer (Internship)",
      company: "G-Axon Tech Pvt. Ltd.",
      duration: "Jun 2023 - Dec 2023",
      period: "7 mos",
      employmentType: "Internship",
      location: "",
      description:
        "ReactJS, NextJS, TypeScript, NestJS, GitHub, AWS, S3\nDuring my internship, I benefited from the mentorship of experienced web development professionals at G-axon.",
      skills: [],
    },
  ];

  return (
    <div className="mt-8 grid gap-6">
      {experiences.map((exp, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.company} | {exp.duration}
              </p>
              <p>{exp.location}</p>
              <p>{exp.skills}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { Experience };
