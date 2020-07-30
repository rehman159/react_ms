import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBotton: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3> {post.title}</h3>
        </div>
      </div>
    );
  });
  console.log(posts);
  // this empty array will tell react that run this function only one time.
  // useEffect call on after render of the component and on every update of the component

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
