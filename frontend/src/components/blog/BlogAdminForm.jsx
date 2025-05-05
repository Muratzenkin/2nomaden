import { useState, useEffect } from "react";
import API_BASE from "../../config.js";

function BlogAdminForm() {
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });

    if (res.ok) {
      setSuccess(true);
      fetchBlogs();
      resetForm();
    } else {
      alert("İşlem başarısız.");
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
    if (window.confirm("Bu blog yazısı silinsin mi?")) {
      const res = await fetch(`${API_BASE}/api/blogs/${slug}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchBlogs();
      } else {
        alert("Silme işlemi başarısız.");
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

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-10">
      <h1 className="text-3xl font-bold">
        {editMode ? "Blog Güncelle" : "Yeni Blog Yazısı Ekle"}
      </h1>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder="slug (örnek: almanyada-denklik)"
          required
          disabled={editMode}
          className="w-full p-3 border rounded"
        />
        <input
          name="title_tr"
          value={formData.title_tr}
          onChange={handleChange}
          placeholder="Başlık (TR)"
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="title_de"
          value={formData.title_de}
          onChange={handleChange}
          placeholder="Başlık (DE)"
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="content_tr"
          value={formData.content_tr}
          onChange={handleChange}
          placeholder="İçerik (TR)"
          required
          className="w-full p-3 border rounded"
          rows="5"
        />
        <textarea
          name="content_de"
          value={formData.content_de}
          onChange={handleChange}
          placeholder="İçerik (DE)"
          required
          className="w-full p-3 border rounded"
          rows="5"
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Kapak görseli URL'si"
          className="w-full p-3 border rounded"
        />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Kategori"
          className="w-full p-3 border rounded"
        />
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Yazar"
          className="w-full p-3 border rounded"
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white font-bold py-3 px-6 rounded hover:bg-indigo-700"
          >
            {editMode ? "Güncelle" : "Kaydet"}
          </button>
          {editMode && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-400 text-white font-bold py-3 px-6 rounded hover:bg-gray-500"
            >
              İptal
            </button>
          )}
        </div>

        {success && (
          <p className="text-green-600 font-semibold">
            İşlem başarıyla tamamlandı.
          </p>
        )}
      </form>

      <hr className="my-8" />

      <h2 className="text-2xl font-bold">Blog Listesi</h2>
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
                Düzenle
              </button>
              <button
                onClick={() => handleDelete(blog.slug)}
                className="text-red-600 hover:underline"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogAdminForm;
