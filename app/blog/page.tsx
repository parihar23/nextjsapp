import Link from "next/link";

type Post = {
  id: number;
  title: string;
  content?: string; // optional if API may return more fields
};

export default async function Page() {
  const res = await fetch('https://api.vercel.app/blog');
  const posts: Post[] = await res.json();

  return (
    <div>
      <Link href="/">Go to home Page</Link>
      <Link href="/blog">Go to blog Page</Link>
      <Link href="/dashboard">Go to dashboard Page</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title} 123</li>
        ))}
      </ul>
    </div>
  );
}