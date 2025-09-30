import PostCard from "./PostCard";
import dashboardImg from "@/assets/project-dashboard.jpg";
import panelImg from "@/assets/engineering-panel.jpg";
import mobileImg from "@/assets/mobile-app.jpg";

const posts = [
  {
    id: 1,
    image: dashboardImg,
    title: "Personal Dashboard Project",
    description:
      "Built a full-stack analytics dashboard with real-time data visualization. Features include custom charts, user authentication, and responsive design.",
    likes: 47,
    tags: ["react", "typescript", "charts", "fullstack"],
  },
  {
    id: 2,
    image: panelImg,
    title: "DMC Engineering Panel Moderator",
    description:
      "Had the privilege of moderating a panel discussion on emerging technologies in software engineering. Great insights from industry leaders!",
    likes: 63,
    tags: ["speaking", "engineering", "leadership"],
  },
  {
    id: 3,
    image: mobileImg,
    title: "Mobile App Design",
    description:
      "Designed and prototyped a mobile-first expense tracking app. Focus on intuitive UX and beautiful gradient design system.",
    likes: 28,
    tags: ["design", "mobile", "ux", "figma"],
  },
];

const PostFeed = () => {
  return (
    <section className="w-full py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostFeed;
