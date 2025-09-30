import { FileText, Code2, Shield, Briefcase } from "lucide-react";

const highlights = [
  {
    icon: FileText,
    label: "Resume",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    label: "Projects",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    label: "Cybersecurity",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Briefcase,
    label: "Experience",
    color: "from-green-500 to-emerald-500",
  },
];

const HighlightsSection = () => {
  return (
    <section className="w-full border-b bg-card">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
          {highlights.map((highlight) => (
            <button
              key={highlight.label}
              className="flex flex-col items-center gap-2 min-w-[80px] group"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${highlight.color} p-[2px] transition-transform group-hover:scale-110`}
              >
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <highlight.icon className="h-6 w-6 text-foreground" />
                </div>
              </div>
              <span className="text-xs text-foreground font-medium">
                {highlight.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
