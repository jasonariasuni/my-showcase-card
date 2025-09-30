import { Heart, Users } from "lucide-react";
import engineeringPanelImg from "@/assets/engineering-panel.jpg";

const volunteerWork = [
  {
    organization: "DMC Engineering Panel - VCU",
    role: "Panel Moderator",
    image: engineeringPanelImg,
    description:
      "Moderated an engineering panel discussion at a DMC mixer event, facilitating meaningful conversations between students and engineering professionals about career pathways and industry insights.",
    icon: Users,
  },
  {
    organization: "Jacob's Chance",
    role: "Volunteer",
    image: engineeringPanelImg,
    description:
      "Volunteered with DMC's collaboration with Jacob's Chance, supporting inclusive programs that empower individuals aged 5-40 with developmental and intellectual disabilities through personal growth activities and community building.",
    icon: Heart,
  },
];

const VolunteerSection = () => {
  return (
    <section className="w-full py-12 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Volunteer Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {volunteerWork.map((volunteer, index) => {
            const Icon = volunteer.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden border card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={volunteer.image}
                    alt={volunteer.organization}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-white" />
                      <span className="text-white font-semibold">
                        {volunteer.role}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-accent">
                    {volunteer.organization}
                  </h3>
                  <p className="text-foreground">{volunteer.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
