export default function Sidebar() {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        Quick Links
      </h2>

      <ul className="space-y-3 text-gray-700">
        <li>Home</li>
        <li>Profile</li>
        <li>Create Post</li>
        <li>Messages</li>
      </ul>
    </div>
  );
}