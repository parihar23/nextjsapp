export async function GET() {
  const content = `
User-agent: *
Allow: /
Sitemap: https://nextjsapp-3x7u.vercel.app/sitemap.xml
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}