import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  slug: { type: String, unique: true, required: true },
  title: {
    tr: { type: String, required: true },
    de: { type: String, required: true },
  },
  content: {
    tr: { type: String, required: true },
    de: { type: String, required: true },
  },
  image: String,
  category: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Blog", BlogSchema);
