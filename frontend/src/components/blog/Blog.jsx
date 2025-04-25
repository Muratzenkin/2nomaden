import { Routes, Route } from "react-router-dom";
import Bloglist from "./Bloglist";
import { Helmet } from "react-helmet-async";
import BlogDetail from "./BlogDetail";

function Blog() {
  return (
    <div>
      <Helmet>
        <title>Blog | 2 Nomaden</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Bloglist />} />
        <Route path="/post/:slug" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default Blog;
