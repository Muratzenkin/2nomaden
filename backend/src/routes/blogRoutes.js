import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

router.get("/:slug", async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (!blog) return res.status(404).json({ error: "Not found" });
  res.json(blog);
});

// POST /api/blogs
router.post("/", async (req, res) => {
  const { slug, title, content, image, category, author } = req.body;

  if (!slug || !title?.tr || !title?.de || !content?.tr || !content?.de) {
    return res.status(400).json({ error: "Tüm alanlar zorunludur." });
  }

  try {
    const newBlog = new Blog({
      slug,
      title,
      content,
      image,
      category,
      author,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    console.error("Blog kayıt hatası:", err);
    res.status(500).json({ error: "Blog kaydedilemedi." });
  }
});

export default router;
