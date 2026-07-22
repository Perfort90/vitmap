type ProfileViewProps = {
  profile: {
    id: string;
    name: string | null;
    rank: string;
    avatarUrl: string | null;
    createdAt: string;
  };
  isOwner: boolean;
  onEdit: () => void;
};

export function ProfileView({ profile, isOwner, onEdit }: ProfileViewProps) {
  return (
    <section className="profileGrid">
      <div className="profileCard avatarBlock">
        {profile.avatarUrl && (
          <img
            src={`http://localhost:3000${profile.avatarUrl}`}
            alt="Аватар"
            width={120}
            height={120}
          />
        )}
      </div>

      <div className="profileCard nameBlock">
        <h1>{profile.name}</h1>
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

      {isOwner && (
        <div className="profileCard settingBlock">
          <button type="button" onClick={onEdit}>
            Редактировать
          </button>
        </div>
      )}

      <div className="profileCard activityBlock">
        Активность
      </div>
    </section>
  );
}