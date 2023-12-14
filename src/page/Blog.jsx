import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/posts");
        setPost(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.error("Error response:", error.response);
      }
    };

    fetchBlogs();
  }, []);
  console.log(posts);
  // if (posts.length === 0) return null;
  // return <h1>Test</h1>;
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] gap-4">
      <p>Blog</p>
      <h1 className=" text-4xl font-black">Hiring Blog</h1>
      <p className="text-gray-500">
        Get all the guidance and insights you need to kickstart hiring and
        attract talent for your growing team
      </p>
      <div className="bg-gray-100 py-2 px-5">
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <h2>{post.attributes.title}</h2>
                <p>{post.attributes.content}</p>
                <p>{post.attributes.published}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
