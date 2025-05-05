import express from "express";
import Blog from "../models/Blog.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ALLE BLOGS LISTEN (Sortierung möglich)
router.get("/", async (req, res) => {
  const { sortBy = "createdAt", order = "desc", category } = req.query;

  const filter = category ? { category } : {};
  const sortOptions = { [sortBy]: order === "desc" ? -1 : 1 };

  try {
    const blogs = await Blog.find(filter).sort(sortOptions);
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Fehler beim Laden der Blog-Beiträge." });
  }
});

// EINZELNEN BLOG LADEN (per Slug)
router.get("/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog)
      return res.status(404).json({ error: "Blog-Beitrag nicht gefunden." });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Serverfehler beim Abrufen des Beitrags." });
  }
});

// NEUEN BLOG ERSTELLEN
router.post("/", authMiddleware, async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const saved = await newBlog.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Fehler beim Speichern des Beitrags." });
  }
});

// BLOG BEITRAG AKTUALISIEREN
router.put("/:slug", authMiddleware, async (req, res) => {
  try {
    const updated = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    if (!updated)
      return res.status(404).json({ error: "Blog-Beitrag nicht gefunden." });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Fehler beim Aktualisieren des Beitrags." });
  }
});

// BLOG BEITRAG LÖSCHEN
router.delete("/:slug", authMiddleware, async (req, res) => {
  try {
    const deleted = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!deleted)
      return res.status(404).json({ error: "Blog-Beitrag nicht gefunden." });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Fehler beim Löschen des Beitrags." });
  }
});

export default router;
