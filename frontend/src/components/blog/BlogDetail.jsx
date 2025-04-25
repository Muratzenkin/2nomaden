import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [slug]);

  if (!blog) return <p>Yükleniyor...</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      {/* GÖRSEL */}
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title[i18n.language]}
          className="w-full h-96 object-cover rounded-xl mb-6"
        />
      )}

      {/* KATEGORİ, YAZAR, TARİH */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium">
          {blog.category}
        </span>
        <span>🖊️ {blog.author}</span>
        <span>
          📅{" "}
          {new Date(blog.createdAt).toLocaleDateString("tr-TR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      {/* BAŞLIK */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        {blog.title[i18n.language]}
      </h1>

      {/* İÇERİK */}
      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.content[i18n.language]}
      </div>
    </div>
  );
}

export default BlogDetail;
