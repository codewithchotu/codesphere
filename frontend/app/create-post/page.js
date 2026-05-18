"use client";

import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";

export default function CreatePost() {
  const [caption, setCaption] = useState("");

  const createPost = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/posts/create",
        {
          caption,
          image: "",
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      alert("Post Created");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-2xl mx-auto p-5">
        <div className="bg-white rounded-xl shadow p-5">
          <h1 className="text-2xl font-bold mb-5">
            Create Post
          </h1>

          <textarea
            placeholder="What's happening?"
            className="w-full border p-4 rounded-lg h-40"
            onChange={(e) => setCaption(e.target.value)}
          />

          <button
            onClick={createPost}
            className="bg-black text-white px-5 py-3 rounded-lg mt-4"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}