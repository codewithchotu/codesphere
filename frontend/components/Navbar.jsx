"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex items-center justify-between shadow-md">
      <Link href="/">
        <h1 className="text-2xl font-bold cursor-pointer">
          CodeSphere
        </h1>
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/">
          <p className="hover:text-gray-300 cursor-pointer">
            Home
          </p>
        </Link>

        <Link href="/profile">
          <p className="hover:text-gray-300 cursor-pointer">
            Profile
          </p>
        </Link>

        <Link href="/create-post">
          <p className="hover:text-gray-300 cursor-pointer">
            Create Post
          </p>
        </Link>

        <Link href="/login">
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}