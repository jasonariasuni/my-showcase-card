import ProfileHeader from "@/components/ProfileHeader";
import HighlightsSection from "@/components/HighlightsSection";
import PostFeed from "@/components/PostFeed";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import VolunteerSection from "@/components/VolunteerSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ProfileHeader />
      <HighlightsSection />
      <SkillsSection />
      <PostFeed />
      <VolunteerSection />
      <ExperienceSection />
    </div>
  );
};

export default Index;
