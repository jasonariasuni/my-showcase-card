import PostCard from "./PostCard";
import dmcImg from "@/assets/dmc-it-committee.jpg";
import ramdevImg from "@/assets/ramdev-webdev.jpg";
import cyberImg from "@/assets/cybersecurity-project.jpg";
import fitnessImg from "@/assets/fitness-app.jpg";
import portfolioImg from "@/assets/portfolio-template.jpg";
import engineeringPanelImg from "@/assets/engineering-panel.jpg";

const posts = [
  {
    id: 1,
    image: fitnessImg,
    title: "AI Fitness & Nutrition App",
    description:
      "Collaborating with classmates to build a comprehensive fitness app with AI-powered health assistant. Features include calorie tracking, personalized workout plans, nutrition guidance, and intelligent meal recommendations.",
    likes: 67,
    tags: ["AI", "health-tech", "mobile-app", "team-project"],
  },
  {
    id: 2,
    image: portfolioImg,
    title: "DMC Portfolio Template System",
    description:
      "As IT Committee Chair, led development of a GitHub-integrated portfolio website system enabling DMC students to create professional resumes using customizable templates. Streamlined the resume creation process for committee members.",
    likes: 58,
    tags: ["leadership", "webdev", "github", "templates"],
  },
  {
    id: 3,
    image: dmcImg,
    title: "DMC IT Committee Chair",
    description:
      "Leading the IT Committee for Developing Men of Color Organization. Overseeing all tech projects, fostering skill development, and ensuring smooth execution of initiatives that empower members.",
    likes: 52,
    tags: ["leadership", "IT", "mentorship", "VCU"],
  },
  {
    id: 4,
    image: ramdevImg,
    title: "RamDev Web Development",
    description:
      "Building and enhancing websites as part of VCU's RamDev community. Collaborative projects using HTML, CSS, and JavaScript to create responsive and functional web applications.",
    likes: 38,
    tags: ["webdev", "javascript", "html", "css", "ramdev"],
  },
  {
    id: 5,
    image: cyberImg,
    title: "Cybersecurity Projects",
    description:
      "Exploring security concepts through VCU's Cybersecurity Club. Learning ethical hacking, network security, and best practices for protecting digital systems in today's connected world.",
    likes: 45,
    tags: ["cybersecurity", "security", "networking", "python"],
  },
  {
    id: 6,
    image: engineeringPanelImg,
    title: "SHPE at VCU",
    description:
      "Active member of the Society of Hispanic Professional Engineers, participating in resume reviews, elevator pitch exercises, and professional development workshops to prepare for excellence in the workplace.",
    likes: 41,
    tags: ["SHPE", "professional-development", "networking", "VCU"],
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
