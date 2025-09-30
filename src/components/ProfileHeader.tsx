import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileHeader = () => {
  return (
    <header className="w-full bg-card border-b">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Photo */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-background shadow-lg">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center shadow-md">
              <div className="w-3 h-3 bg-card rounded-full"></div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Jason Arias</h1>
            <p className="text-muted-foreground text-lg mb-4">
              Computer Science @ VCU | Cybersecurity Concentration | Class of 2027
            </p>

            {/* Stats */}
            <div className="flex gap-8 justify-center md:justify-start mb-6">
              <div>
                <span className="font-semibold text-lg">5+</span>
                <span className="text-muted-foreground ml-1">Projects</span>
              </div>
              <div>
                <span className="font-semibold text-lg">3</span>
                <span className="text-muted-foreground ml-1">Leadership</span>
              </div>
              <div>
                <span className="font-semibold text-lg">2+</span>
                <span className="text-muted-foreground ml-1">Years</span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-foreground mb-6 max-w-2xl">
              CS student passionate about cybersecurity and web development. 
              IT Committee Chair at DMC Organization. Skilled in Python, Java, 
              JavaScript, and full-stack development. Always learning, always building. 🚀
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center md:justify-start flex-wrap">
              <Button
                className="gradient-accent border-0"
                onClick={() => window.location.href = "mailto:ariasje@vcu.edu"}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
