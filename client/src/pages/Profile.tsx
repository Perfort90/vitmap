import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "@/api/api";
import { ProfileEditForm } from "@/components/Profile/ProfileEditForm";
import { ProfileView } from "@/components/Profile/ProfileView";
import "../styles/HomePage.css";
import "../styles/Profile.css";

type ProfileData = {
  id: string;
  description: string | null;
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
  const [isEditing, setIsEditing] = useState(false);

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

  if (!profile) {
    return <p>Загрузка профиля...</p>;
  }

  const isOwner = profile.id === currentUser?.id;

  return (
    <div className="wrapper">
      <main className="infoBox">
        {isEditing ? (
          <ProfileEditForm
            profile={profile}
            onCancel={() => setIsEditing(false)}
            onSaved={(updatedProfile) => {
              setProfile(updatedProfile);
              setIsEditing(false);
            }}
          />
        ) : (
          <ProfileView
            profile={profile}
            isOwner={isOwner}
            onEdit={() => setIsEditing(true)}
          />
        )}
      </main>
    </div>
  );
}

export default Profile;