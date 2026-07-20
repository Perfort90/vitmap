import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/api/api";
import "../styles/HomePage.css";

type ProfileData = {
  id: string;
  name: string | null;
  rank: string;
  avatarUrl: string | null;
  createdAt: string;
};

type CurrentUser = {
  id: string;
  email: string;
  name: string | null;
};

function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    api
      .get(`/profile/${id}`)
      .then((response) => setProfile(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

async function handleAvatarChange(event: React.ChangeEvent<HTMLInputElement>) {
  const file = event.target.files?.[0];

  if (!file) return;

  const formData = new FormData();
  formData.append("avatar", file);

  const response = await api.patch("/profile/me/avatar", formData);

  setProfile(response.data);
}

  if (!profile) {
    return <p>Загрузка профиля...</p>;
  }

  const isOwner = profile.id === currentUser?.id;

  return (
    <div className="wrapper">
      <div className="infoBox">
        <h1>Профиль</h1>
        <p>Имя: {profile.name}</p>
        <p>Ранг: {profile.rank}</p>

        {isOwner && (
          <button type="button">
            Редактировать профиль
          </button>
        )}
        {isOwner && (
  <input
    type="file"
    accept="image/png,image/jpeg,image/webp,image/gif"
    onChange={handleAvatarChange}
  />
)}
        {profile.avatarUrl && (
  <img
    src={`http://localhost:3000${profile.avatarUrl}`}
    alt="Аватар"
    width={120}
    height={120}
  />
)}
      </div>
    </div>
  );
}

export default Profile;
