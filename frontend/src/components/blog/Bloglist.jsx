import { Link } from "react-router-dom";
import { blogPosts } from "./data";

function BlogList() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="rounded-t-xl w-full h-60 object-cover"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">{post.summary}</p>
              <Link
                to={`/blog/post/${post.id}`}
                className="text-brand-accent hover:underline font-medium inline-block mt-2"
              >
                Devamını Oku →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
