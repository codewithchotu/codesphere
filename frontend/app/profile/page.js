import Navbar from "../../components/Navbar";
import ProfileCard from "../../components/ProfileCard";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-3xl mx-auto p-5">
        <ProfileCard />
      </div>
    </div>
  );
}