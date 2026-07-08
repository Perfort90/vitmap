import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '@/api/api';

function Profile() {
  const { id } = useParams();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    api.get(`/profile/${id}`)
      .then((response) => setProfile(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!profile) {
    return <p>Загрузка профиля...</p>;
  }

  return (
    <div>
      <h1>Профиль</h1>
      <p>Имя: {profile.name}</p>
      <p>Ранг: {profile.rank}</p>
    </div>
  );
}

export default Profile;