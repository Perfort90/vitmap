import { type ChangeEvent, type FormEvent, useState } from "react";
import api from "@/api/api";

type ProfileEditFormProps = {
  profile: {
    id: string;
    name: string | null;
    rank: string;
    avatarUrl: string | null;
    createdAt: string;
  };
  onCancel: () => void;
  onSaved: (profile: any) => void;
};

export function ProfileEditForm({ profile, onCancel, onSaved }: ProfileEditFormProps) {

  const [name, setName] = useState(profile.name ?? "");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

 async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData();

  formData.append("name", name);

  if (avatarFile) {
    formData.append("avatar", avatarFile);
  }

  const response = await api.patch("/profile/me", formData);

  onSaved(response.data);
}

  function handleAvatarChange(event: ChangeEvent<HTMLInputElement>) {
  const file = event.target.files?.[0];

  if (!file) return;

  setAvatarFile(file);
}
  return (
    <form className="profileGrid profileEditForm" onSubmit={handleSubmit}>
      <div className="profileCard avatarBlock">
        {profile.avatarUrl && (
          <img
            src={`http://localhost:3000${profile.avatarUrl}`}
            alt="Аватар"
            width={120}
            height={120}
          />
        )}

        <label>Аватар</label>
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp,image/gif"
          onChange={handleAvatarChange}
        />
      </div>

      <div className="profileCard nameBlock">
        <h2>Редактирование профиля</h2>

        <label>Имя</label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </div>

      <div className="profileCard sideBlock">
        достижения
      </div>

      <div className="profileCard bioBlock">
        Описание профиля
      </div>

      <div className="profileCard statsBlock">
        Статистика
      </div>

      <div className="profileCard rankBlock">
        <p>{profile.rank}</p>
      </div>

      <div className="profileCard settingBlock">
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onCancel}>
          Отмена
        </button>
      </div>

      <div className="profileCard activityBlock">
        Активность
      </div>
    </form>
  );
}