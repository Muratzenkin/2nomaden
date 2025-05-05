import { useState } from "react";
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

  const [success, setSuccess] = useState(false);

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

    const res = await fetch(`${API_BASE}/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    if (res.ok) {
      setSuccess(true);
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
    } else {
      alert("Kayıt başarısız");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Yeni Blog Yazısı Ekle</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          placeholder="slug (örnek: almanyada-denklik)"
          required
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
          rows="6"
        />
        <textarea
          name="content_de"
          value={formData.content_de}
          onChange={handleChange}
          placeholder="İçerik (DE)"
          required
          className="w-full p-3 border rounded"
          rows="6"
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
          placeholder="Kategori (örnek: Göçmenlik)"
          className="w-full p-3 border rounded"
        />
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Yazar adı"
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-3 rounded hover:bg-indigo-700"
        >
          Kaydet
        </button>
        {success && (
          <p className="text-green-600">Blog yazısı başarıyla eklendi.</p>
        )}
      </form>
    </div>
  );
}

export default BlogAdminForm;
