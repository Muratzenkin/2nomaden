import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./data";

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post)
    return <p className="text-center py-20 text-red-500">Yazı bulunamadı.</p>;

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div className="text-gray-800 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>
      <Link
        to="/blog"
        className="text-brand-accent hover:underline block mt-10"
      >
        ← Tüm yazılara dön
      </Link>
    </article>
  );
}

export default BlogPost;
