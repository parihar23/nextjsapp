export async function GET() {
  const content = `
User-agent: *
Allow: /
Sitemap: https://indorefresh.site/sitemap.xml
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}