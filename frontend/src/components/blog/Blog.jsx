import { Routes, Route } from "react-router-dom";
import BlogList from "./Bloglist";
import BlogPost from "./BlogPost";
import { Helmet } from "react-helmet-async";

function Blog() {
  return (
    <div>
      <Helmet>
        <title>Blog | 2 Nomaden</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default Blog;
