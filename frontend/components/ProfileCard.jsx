"use client";

export default function ProfileCard() {
  return (
    <div className="bg-white shadow-2xl rounded-3xl p-8">

      <div className="flex flex-col items-center">
        
        <img
          src="/assets/avatar.webp"
          alt="profile"
          className="w-36 h-36 rounded-full object-cover border-4 border-black shadow-lg"
        />

        <h1 className="text-3xl font-bold mt-5">
          Mohd Owais
        </h1>

        <p className="text-gray-500 mt-2">
          Full Stack Developer
        </p>

        <p className="text-center text-gray-600 mt-5 max-w-xl">
          Passionate about building scalable web
          applications, open source, AI technologies,
          and sharing real experiences in tech.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10">
        
        <div className="bg-gray-100 rounded-2xl p-5 text-center">
          <h2 className="text-2xl font-bold">12</h2>
          <p className="text-gray-500">
            Posts
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-5 text-center">
          <h2 className="text-2xl font-bold">340</h2>
          <p className="text-gray-500">
            Followers
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-5 text-center">
          <h2 className="text-2xl font-bold">180</h2>
          <p className="text-gray-500">
            Following
          </p>
        </div>
      </div>
    </div>
  );
}