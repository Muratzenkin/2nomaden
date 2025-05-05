import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import API_BASE from "../../config.js";

const token = localStorage.getItem("token");

function BlogAdminForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    slug: "",
    title_tr: "",
    title_de: "",
    content_tr: "",
    content_de: "",
    image: "",
    category: "",
    author: "",
  });

  const [blogs, setBlogs] = useState([]);
  const [success, setSuccess] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await fetch(`${API_BASE}/api/blogs`);
    const data = await res.json();
    setBlogs(data);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blog = {
      slug: formData.slug,
      title: {
        tr: formData.title_tr,
        de: formData.title_de,
      },
      content: {
        tr: formData.content_tr,
        de: formData.content_de,
      },
      image: formData.image,
      category: formData.category,
      author: formData.author,
    };

    const method = editMode ? "PUT" : "POST";
    const url = editMode
      ? `${API_BASE}/api/blogs/${formData.slug}`
      : `${API_BASE}/api/blogs`;

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(blog),
    });

    if (res.ok) {
      setSuccess(true);
      fetchBlogs();
      resetForm();
    } else {
      alert(t("admin.msg.fail"));
    }
  };

  const handleEdit = (blog) => {
    setEditMode(true);
    setFormData({
      slug: blog.slug,
      title_tr: blog.title.tr,
      title_de: blog.title.de,
      content_tr: blog.content.tr,
      content_de: blog.content.de,
      image: blog.image,
      category: blog.category,
      author: blog.author,
    });
  };

  const handleDelete = async (slug) => {
    if (window.confirm(t("admin.msg.confirm_delete"))) {
      const res = await fetch(`${API_BASE}/api/blogs/${slug}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        fetchBlogs();
      } else {
        alert(t("admin.msg.delete_fail"));
      }
    }
  };

  const resetForm = () => {
    setFormData({
      slug: "",
      title_tr: "",
      title_de: "",
      content_tr: "",
      content_de: "",
      image: "",
      category: "",
      author: "",
    });
    setEditMode(false);
    setSuccess(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-10">
      <h1 className="text-3xl font-bold">
        {editMode ? t("admin.title_edit") : t("admin.title_new")}
      </h1>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder={t("admin.form.slug")}
          required
          disabled={editMode}
          className="w-full p-3 border rounded"
        />
        <input
          name="title_tr"
          value={formData.title_tr}
          onChange={handleChange}
          placeholder={t("admin.form.title_tr")}
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="title_de"
          value={formData.title_de}
          onChange={handleChange}
          placeholder={t("admin.form.title_de")}
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="content_tr"
          value={formData.content_tr}
          onChange={handleChange}
          placeholder={t("admin.form.content_tr")}
          required
          className="w-full p-3 border rounded"
          rows="5"
        />
        <textarea
          name="content_de"
          value={formData.content_de}
          onChange={handleChange}
          placeholder={t("admin.form.content_de")}
          required
          className="w-full p-3 border rounded"
          rows="5"
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder={t("admin.form.image")}
          className="w-full p-3 border rounded"
        />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder={t("admin.form.category")}
          className="w-full p-3 border rounded"
        />
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder={t("admin.form.author")}
          className="w-full p-3 border rounded"
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white font-bold py-3 px-6 rounded hover:bg-indigo-700"
          >
            {editMode ? t("admin.button.update") : t("admin.button.save")}
          </button>
          {editMode && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-400 text-white font-bold py-3 px-6 rounded hover:bg-gray-500"
            >
              {t("admin.button.cancel")}
            </button>
          )}
        </div>

        {success && (
          <p className="text-green-600 font-semibold">
            {t("admin.msg.success")}
          </p>
        )}
      </form>

      <hr className="my-8" />

      <h2 className="text-2xl font-bold">{t("admin.list_title")}</h2>
      <button
        onClick={handleLogout}
        className="text-red-600 underline font-semibold"
      >
        {t("admin.button.logout")}
      </button>
      <div className="space-y-3">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{blog.title.tr}</p>
              <p className="text-sm text-gray-500">{blog.slug}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleEdit(blog)}
                className="text-blue-600 hover:underline"
              >
                {t("admin.button.edit")}
              </button>
              <button
                onClick={() => handleDelete(blog.slug)}
                className="text-red-600 hover:underline"
              >
                {t("admin.button.delete")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogAdminForm;
