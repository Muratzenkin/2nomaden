import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts")
      .then((response) => setPost(response.data))
      .catch((error) => console.error("Error fetching Posts: ", error));
  }, [id]);

  return (
    <div>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Text laden...</p>
      )}
    </div>
  );
};

export default BlogPost;
