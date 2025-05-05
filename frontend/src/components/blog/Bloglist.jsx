import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import API_BASE from "../../config.js";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch(`${API_BASE}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>{t("blog.loading")}</p>;

  const filteredBlogs = selectedCategory
    ? blogs.filter((b) => b.category === selectedCategory)
    : blogs;

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleClearCategory = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-10">{t("blog.blogPageTitle")}</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Sol taraf - Bloglar */}
        <div className="md:col-span-2 space-y-10">
          {filteredBlogs.map((blog) => (
            <Link
              key={blog._id}
              to={`/blog/post/${blog.slug}`}
              className="block group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                {blog.image && (
                  <div className="relative">
                    <img
                      src={blog.image}
                      alt={blog.title[i18n.language]}
                      className="w-full h-64 object-cover transition-all duration-300 group-hover:brightness-90"
                    />
                    <span className="absolute bottom-4 left-4 bg-lime-400 text-black px-3 py-1 text-xs font-bold rounded">
                      {new Date(blog.createdAt).toLocaleDateString(
                        i18n.language,
                        {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <p className="text-sm text-indigo-600 font-semibold uppercase">
                    {blog.category}
                  </p>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {blog.title[i18n.language]}
                  </h2>
                  <p className="text-gray-600">
                    {blog.content[i18n.language].slice(0, 160)}...
                  </p>
                  <span className="mt-3 inline-block text-sm font-semibold text-indigo-600 group-hover:underline">
                    {t("blog.readMore")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Sağ taraf - Yan panel */}
        <aside className="space-y-8">
          {/* EN SON */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-2">{t("blog.latestPosts")}</h3>
            <ul className="space-y-1">
              {blogs.slice(0, 5).map((blog) => (
                <li key={blog._id}>
                  <Link
                    to={`/blog/post/${blog.slug}`}
                    className="text-sm text-gray-700 hover:text-indigo-600"
                  >
                    {blog.title[i18n.language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KATEGORİLER */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold">{t("blog.categories")}</h3>
              {selectedCategory && (
                <button
                  onClick={handleClearCategory}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <ul className="space-y-1">
              {Array.from(new Set(blogs.map((b) => b.category)))
                .filter(Boolean)
                .map((category) => (
                  <li
                    key={category}
                    className={`text-sm cursor-pointer ${
                      selectedCategory === category
                        ? "text-indigo-600 font-bold"
                        : "text-gray-700"
                    } hover:underline`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category} (
                    {blogs.filter((b) => b.category === category).length})
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>
      {/* Yeni Blog Ekle Butonu (sayfanın altında, login yönlendirmeli) */}
      <div className="mt-16 text-center">
        <Link
          to="/login"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition"
        >
          📝 Yeni Blog Ekle
        </Link>
      </div>
    </div>
  );
}

export default BlogList;
