// BlogSection.jsx
import { useEffect, useState } from "react";

const API_URL = "https://www.priyamconsultancy.com/blog/wp-json/wp/v2/posts?_embed&per_page=3";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        const parsed = data.map((post) => {
          const thumbnail =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

          const cleanText = (post.excerpt?.rendered || "")
            .replace(/<[^>]*>/g, "")
            .replace(/&[^;]+;/g, " ")
            .trim();
          const excerpt = cleanText.length > 200 ? cleanText.slice(0, 200) + "..." : cleanText;

          const cleanTitle = (post.title?.rendered || "Untitled")
            .replace(/&[^;]+;/g, " ")
            .trim();

          return {
            guid: post.id,
            title: cleanTitle,
            link: post.link,
            thumbnail,
            excerpt,
          };
        });

        setPosts(parsed);
        setLoading(false);
      })
      .catch((err) => { setError(err.message); setLoading(false); });
  }, []);

  return (
    <section style={{ width: "100%", padding: "4rem 1rem", boxSizing: "border-box", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, margin: "0 0 0.5rem", color: "#111" }}>Blogs</h2>
          <p style={{ color: "#666", margin: 0, fontSize: "1rem" }}>
            Stay updated with the latest in digital marketing, growth strategies, and industry trends.
          </p>
        </div>

        {loading && <p style={{ textAlign: "center", color: "#888" }}>Loading...</p>}
        {error   && <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>}

        {/* Card Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }} className="blog-grid">
          {posts.map((post) => (
            <a
              key={post.guid}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                color: "inherit",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Image */}
              <div style={{ width: "100%", aspectRatio: "16/9", overflow: "hidden", background: "#1a2744" }}>
                {post.thumbnail ? (
                  <img src={post.thumbnail} alt={post.title} loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                ) : (
                  <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center",
                    justifyContent: "center", color: "#fff", opacity: 0.4, fontSize: "0.8rem" }}>No image</div>
                )}
              </div>

              {/* Body */}
              <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <p style={{ fontWeight: 600, fontSize: "1.1rem", lineHeight: 1.6, margin: 0, color: "#111" }}>
                  {post.title}
                </p>
                <p style={{ color: "#444", fontSize: "0.875rem", lineHeight: 1.6, flex: 1, margin: 0 }}>
                  {post.excerpt}
                </p>
                <span style={{
                  display: "inline-block", background: "#E87C30", color: "#fff",
                  padding: "0.6rem 1.5rem", borderRadius: "999px",
                  fontWeight: 500, alignSelf: "flex-start", marginTop: "0.5rem", fontSize: "0.875rem",
                }}>Read More</span>
              </div>
            </a>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .blog-grid { grid-template-columns: 1fr !important; } }
      `}} />
    </section>
  );
}