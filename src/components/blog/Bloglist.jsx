import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching Posts: ", error));
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <NavLink
              to={`/post/${post._id}`}
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
                textDecoration: "none",
              })}
            >
              {post.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
