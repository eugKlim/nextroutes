type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

export async function generateStaticParams() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json());

  return users.map((user: User) => ({
    userId: user.id.toString(),
  }));
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ userId: string }>; // Объявляем params как Promise
}) {
  const { userId } = await params; // Используем await для params

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    cache: 'no-store', // Обеспечиваем SSR при каждом запросе
  });

  if (!res.ok) return <div>Ошибка при загрузке пользователя</div>;

  const user: User = await res.json();

  if (!user) return <div>Пользователь не найден</div>;

  return (
    <div>
      <h1>Информация о пользователе: {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}