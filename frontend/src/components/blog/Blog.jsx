import { Routes, Route } from "react-router-dom";
import BlogList from "./Bloglist";
import BlogPost from "./BlogPost";

function Blog() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default Blog;
