import PostCard from "./PostCard";
import dmcImg from "@/assets/dmc-it-committee.jpg";
import ramdevImg from "@/assets/ramdev-webdev.jpg";
import cyberImg from "@/assets/cybersecurity-project.jpg";

const posts = [
  {
    id: 1,
    image: dmcImg,
    title: "DMC IT Committee Chair",
    description:
      "Leading the IT Committee for Developing Men of Color Organization. Overseeing all tech projects, fostering skill development, and ensuring smooth execution of initiatives that empower members.",
    likes: 52,
    tags: ["leadership", "IT", "mentorship", "VCU"],
  },
  {
    id: 2,
    image: ramdevImg,
    title: "RamDev Web Development",
    description:
      "Building and enhancing websites as part of VCU's RamDev community. Collaborative projects using HTML, CSS, and JavaScript to create responsive and functional web applications.",
    likes: 38,
    tags: ["webdev", "javascript", "html", "css", "ramdev"],
  },
  {
    id: 3,
    image: cyberImg,
    title: "Cybersecurity Projects",
    description:
      "Exploring security concepts through VCU's Cybersecurity Club. Learning ethical hacking, network security, and best practices for protecting digital systems in today's connected world.",
    likes: 45,
    tags: ["cybersecurity", "security", "networking", "python"],
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
