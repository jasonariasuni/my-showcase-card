import ProfileHeader from "@/components/ProfileHeader";
import HighlightsSection from "@/components/HighlightsSection";
import PostFeed from "@/components/PostFeed";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ProfileHeader />
      <HighlightsSection />
      <SkillsSection />
      <PostFeed />
      <ExperienceSection />
    </div>
  );
};

export default Index;
