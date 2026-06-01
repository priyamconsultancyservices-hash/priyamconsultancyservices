// BlogSection.jsx
import { useEffect, useState } from "react";

const RSS_URL = "https://www.priyamconsultancy.com/blog/feed/";
const PROXY = `https://corsproxy.io/?${encodeURIComponent(RSS_URL)}`;

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(PROXY)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      })
      .then((xmlText) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "text/xml");
        const items = Array.from(xml.querySelectorAll("item")).slice(0, 3);

        const parsed = items.map((item) => {
          // ── Image extraction ──
          // 1. <enclosure>
          const enclosure = item.querySelector("enclosure");
          // 2. <media:content>
          const mediaContent = item.getElementsByTagNameNS("http://search.yahoo.com/mrss/", "content")[0];
          // 3. <media:thumbnail>
          const mediaThumbnail = item.getElementsByTagNameNS("http://search.yahoo.com/mrss/", "thumbnail")[0];
          // 4. <content:encoded> உள்ளே முதல் <img src>
          const contentEncoded = item.getElementsByTagNameNS("http://purl.org/rss/1.0/modules/content/", "encoded")[0];
          const contentHtml = contentEncoded?.textContent || "";
          const contentImgMatch = contentHtml.match(/<img[^>]+src=["']([^"']+)["']/i);
          // 5. <description> உள்ளே <img src>
          const descRaw = item.querySelector("description")?.textContent || "";
          const descImgMatch = descRaw.match(/<img[^>]+src=["']([^"']+)["']/i);

          const thumbnail =
            enclosure?.getAttribute("url") ||
            mediaContent?.getAttribute("url") ||
            mediaThumbnail?.getAttribute("url") ||
            contentImgMatch?.[1] ||
            descImgMatch?.[1] ||
            null;

          // ── Excerpt — content:encoded இல்லன்னா description ──
          const rawText = contentHtml || descRaw;
          const cleanText = rawText.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").trim();
          const excerpt = cleanText.length > 340 ? cleanText.slice(0, 340) + "..." : cleanText;

          // ── Link ──
          const linkEl = item.getElementsByTagName("link")[0];
          const link = linkEl?.textContent?.trim() || item.querySelector("guid")?.textContent || "#";

          return {
            guid: item.querySelector("guid")?.textContent || Math.random().toString(),
            title: item.querySelector("title")?.textContent?.trim() || "Untitled",
            link,
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
            // ── முழு card-உம் clickable ──
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

        {/* View All */}
        {/* {!loading && !error && (
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="https://www.priyamconsultancy.com/blog/" target="_blank" rel="noreferrer" style={{
              display: "inline-block", border: "2px solid #1a2744", color: "#1a2744",
              padding: "0.75rem 2rem", borderRadius: "999px", textDecoration: "none",
              fontWeight: 600, fontSize: "0.95rem",
            }}>View All Blogs →</a>
          </div>
        )} */}

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .blog-grid { grid-template-columns: 1fr !important; } }
      `}} />
    </section>
  );
}