"use client";

export default function PostCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      
      <div className="flex items-center gap-3 mb-4">
        <img
          src={
            post?.user?.profilePic ||
            "https://i.pravatar.cc/100"
          }
          alt="profile"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h2 className="font-bold text-lg">
            {post?.user?.username}
          </h2>

          <p className="text-sm text-gray-500">
            Developer
          </p>
        </div>
      </div>

      
      <p className="text-gray-800 mb-4">
        {post?.caption}
      </p>

    
      {post?.image && (
        <img
          src={post.image}
          alt="post"
          className="rounded-lg mb-4 w-full object-cover"
        />
      )}

   
      <div className="flex items-center gap-6 text-gray-600">
        <button className="hover:text-black">
          ❤️ {post?.likes?.length || 0}
        </button>

        <button className="hover:text-black">
          💬 {post?.comments?.length || 0}
        </button>
      </div>
    </div>
  );
}