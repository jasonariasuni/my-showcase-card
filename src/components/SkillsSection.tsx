import { Code2, Languages, Briefcase } from "lucide-react";

const technicalSkills = [
  "Python",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "C",
];

const softSkills = [
  "Public Speaking",
  "Leadership",
  "Problem Solving",
  "Team Collaboration",
  "Fluent Spanish",
];

const SkillsSection = () => {
  return (
    <section className="w-full py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="bg-card rounded-xl p-6 border card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Technical</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-card rounded-xl p-6 border card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                <Languages className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Professional</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
