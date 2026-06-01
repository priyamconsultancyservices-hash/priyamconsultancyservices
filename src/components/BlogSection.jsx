// BlogSection.jsx
import { useEffect, useState } from "react";

const WP_BASE = ""; // proxy use பண்றோம் — vite.config.js-ல் proxy இருக்கு

function stripHtml(html) {
  const el = document.createElement("div");
  el.innerHTML = html;
  return el.textContent || "";
}

function truncate(str, len) {
  str = str.trim();
  return str.length > len ? str.slice(0, len) + "..." : str;
}

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${WP_BASE}/wp-json/wp/v2/posts?_embed&per_page=3&status=publish`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => { setPosts(data); setLoading(false); })
      .catch((err) => { setError(err.message); setLoading(false); });
  }, []);

  return (
    <section style={{ width: "100%", padding: "4rem 1rem", boxSizing: "border-box", background: "#fff" }}>

      {/* Centered container — max 1200px */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 700, margin: "0 0 0.5rem", color: "#111" }}>
            Blogs
          </h2>
          <p style={{ color: "#666", margin: 0, fontSize: "1rem" }}>
            Stay updated with the latest in digital marketing, growth strategies, and industry trends.
          </p>
        </div>

        {loading && <p style={{ textAlign: "center", color: "#888" }}>Loading...</p>}
        {error   && <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>}

        {/* Card Grid — responsive */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // desktop: 3 columns
          gap: "1.5rem",
        }}
          className="blog-grid"
        >
          {posts.map((post) => {
            const featuredImg = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
            const title   = stripHtml(post.title?.rendered || "Untitled");
            const excerpt = truncate(stripHtml(post.excerpt?.rendered || ""), 140);
            const link    = post.link;

            return (
              <div key={post.id} style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
              }}>

                {/* Featured Image */}
                <div style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  overflow: "hidden",
                  background: "#1a2744",
                }}>
                  {featuredImg ? (
                    <img
                      src={featuredImg}
                      alt={title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  ) : (
                    <div style={{
                      width: "100%", height: "100%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff", opacity: 0.4, fontSize: "0.8rem",
                    }}>
                      No image
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div style={{
                  padding: "1.25rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  background: "#fff",
                  color: "#000000",
                }}>
                  <p style={{ fontWeight: 600, fontSize: "1.1rem", lineHeight: 1.6, margin: 0 }}>
                    {title}
                  </p>
                  <p style={{ color: "#000000", fontSize: "0.875rem", lineHeight: 1.6, flex: 1, margin: 0 }}>
                    {excerpt}
                  </p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      background: "#E87C30",
                      color: "#fff",
                      padding: "0.6rem 1.5rem",
                      borderRadius: "999px",
                      textDecoration: "none",
                      fontWeight: 500,
                      alignSelf: "flex-start",
                      marginTop: "0.5rem",
                      fontSize: "0.875rem",
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile responsive CSS */}
     <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

    </section>
  );
}