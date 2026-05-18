"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      fetchPosts();
    } else {
      window.location.href = "/login";
    }
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/posts/feed"
      );

      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-black text-white rounded-3xl p-10 shadow-2xl">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to CodeSphere 
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl">
            A modern social platform for developers.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6">
            Latest Posts
          </h2>

          {posts.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
              <h2 className="text-2xl font-bold mb-3">
                No Posts Yet
              </h2>
            </div>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <PostCard
                  key={post._id}
                  post={post}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}