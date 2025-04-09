import { EducationCard } from "../EducationCard";

const EducationList = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications, Information Technology",
      institution: "Govt. Engineering College Bikaner",
      period: "Sep 2021 - Sep 2024",
      description:
        "Activities and societies: Volleyball.\nSkills: Computer Networking, Python (Programming Language), Operating Systems.",
    },
  ];
  return (
    <div className="mt-8 grid gap-6">
      {education.map((edu, index) => (
        <EducationCard
          key={index}
          degree={edu.degree}
          institution={edu.institution}
          period={edu.period}
          description={edu.description}
        />
      ))}
    </div>
  );
};
export { EducationList };
