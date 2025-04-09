import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
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
              Graduated with honors. Specialized in web development and software
              engineering.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { Education };
