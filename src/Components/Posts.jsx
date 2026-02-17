import { useEffect, useState } from "react";
import { deletePost, getPost } from "../API/PostApi";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  // getPostData
  const getPostData = async () => {
    try {
      const response = await getPost();
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // Call data from UseEffect
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getPostData();
  }, []);

  // Delete Event Handler:
  const handleDeletePost = async (id) => {
    console.log("Clicked dlt");
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const udpatedPosts = posts.filter((post) => post.id !== id);
        setPosts(udpatedPosts);
      } else {
        console.log("Failed to delete the post");
      }
    } catch (error) {
      console.log(error.messsage);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "24px",
      }}
    >
      {posts.map((post) => (
        <div
          style={{
            background: "gray",
            padding: "12px",
            borderRadius: "8px",
          }}
          key={post.id}
        >
          <h2>{post.id}</h2>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button
            style={{
              padding: "6px",
              borderRadius: "6px",
              background: "blue",
              color: "white",
            }}
          >
            Edit
          </button>
          <button
            style={{
              padding: "6px",
              borderRadius: "6px",
              background: "red",
              color: "white",
            }}
            onClick={() => handleDeletePost(post.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
