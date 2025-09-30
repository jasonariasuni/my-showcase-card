import { Heart, MessageCircle, Bookmark } from "lucide-react";
import { useState } from "react";

interface PostCardProps {
  image: string;
  title: string;
  description: string;
  likes?: number;
  tags?: string[];
}

const PostCard = ({
  image,
  title,
  description,
  likes = 0,
  tags = [],
}: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <article className="bg-card rounded-lg overflow-hidden border card-hover">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Actions */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="transition-colors hover:text-accent"
            >
              <Heart
                className={`h-6 w-6 ${
                  isLiked ? "fill-accent text-accent" : ""
                }`}
              />
            </button>
            <button className="transition-colors hover:text-accent">
              <MessageCircle className="h-6 w-6" />
            </button>
          </div>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="transition-colors hover:text-accent"
          >
            <Bookmark
              className={`h-6 w-6 ${
                isSaved ? "fill-accent text-accent" : ""
              }`}
            />
          </button>
        </div>

        {/* Likes */}
        <p className="font-semibold text-sm mb-2">
          {isLiked ? likes + 1 : likes} likes
        </p>

        {/* Title & Description */}
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-accent text-sm font-medium hover:underline cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default PostCard;
