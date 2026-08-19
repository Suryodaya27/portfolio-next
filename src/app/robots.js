export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://suryodaya.vercel.app/sitemap.xml",
  };
}
