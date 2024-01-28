import { Post } from "../utils/posts.ts";
import Card from "./card.tsx";

export function PostPreview(props: { post: Post }) {
  const { post } = props;
  return (
    <li>
      <Card
        link={`/blog/${post.slug}`}
        domain={post.title}
        type={
          <time>
            {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        }
        technologies="Wordpress"
        from="#ef709b"
        to="#fa9372"
      />
    </li>
  );
}
