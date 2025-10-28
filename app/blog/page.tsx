type Post = {
  id: number;
  title: string;
  content?: string; // optional if API may return more fields
};

export default async function Page() {
  const res = await fetch('https://api.vercel.app/blog');
  const posts: Post[] = await res.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title} 123</li>
      ))}
    </ul>
  );
}