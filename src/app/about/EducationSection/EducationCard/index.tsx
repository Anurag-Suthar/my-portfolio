import { Card, CardContent } from "@/components/ui/card";

// components/education-card.tsx
interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const EducationCard = ({
  degree,
  institution,
  period,
  description,
}: EducationCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">{degree}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {institution} | {period}
          </p>
          <p className="mt-2">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export { EducationCard };
