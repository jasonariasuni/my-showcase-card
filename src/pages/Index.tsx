import ProfileHeader from "@/components/ProfileHeader";
import HighlightsSection from "@/components/HighlightsSection";
import PostFeed from "@/components/PostFeed";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ProfileHeader />
      <HighlightsSection />
      <PostFeed />
    </div>
  );
};

export default Index;
