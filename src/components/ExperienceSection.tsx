import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "New Balance Athletics, Inc.",
    role: "Sales Associate",
    location: "Woodbridge, VA",
    period: "May 2025 – August 2025",
    description:
      "Delivered customer solutions and managed sales transactions while strengthening teamwork and problem-solving skills.",
  },
  {
    company: "Hollister Co.",
    role: "Sales Associate",
    location: "Woodbridge, VA",
    period: "May 2024 – August 2024",
    description:
      "Collaborated with team members to ensure a positive shopping experience.",
  },
  {
    company: "Food Lion",
    role: "Customer Lead",
    location: "Woodbridge, VA",
    period: "November 2022 – June 2023",
    description:
      "Demonstrated strong leadership and communication skills in managing customer interactions and addressing inquiries.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Work Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-lg text-accent font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <MapPin className="h-4 w-4" />
                <span>{exp.location}</span>
              </div>

              <p className="text-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
