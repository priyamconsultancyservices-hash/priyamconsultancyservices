// scripts/indexnow-notify.js
const https = require("https");

const SITE_HOST = "www.priyamconsultancy.com";
const SITEMAP_URL = `https://${SITE_HOST}/sitemap-index.xml`;
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

async function getAllUrls(indexXml) {
  // Step 1: sitemap-index.xml-la irukum sub-sitemap links edu
  const sitemapLinks = [...indexXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());

  let allUrls = [];

  // Step 2: ovvoru sub-sitemap-ஐயும் fetch panni, adhula irukum URLs edu
  for (const link of sitemapLinks) {
    console.log(`📥 Sub-sitemap fetch pandren: ${link}`);
    try {
      const subXml = await fetchUrl(link);
      const urls = [...subXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
      console.log(`   → ${urls.length} URLs kandupudichen`);
      allUrls = allUrls.concat(urls);
    } catch (err) {
      console.error(`   ⚠️ Fetch failed: ${link} - ${err.message}`);
    }
  }

  // Duplicate URLs remove pannu
  return [...new Set(allUrls)];
}

async function submitToIndexNow(urls) {
  const payload = JSON.stringify({
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "api.indexnow.org",
        path: "/indexnow",
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Content-Length": Buffer.byteLength(payload),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ status: res.statusCode, body: data }));
      }
    );
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

(async () => {
  if (!INDEXNOW_KEY) {
    console.error("❌ INDEXNOW_KEY environment variable illa. Exit pandren.");
    process.exit(1);
  }

  console.log(`📥 Sitemap index fetch pandren: ${SITEMAP_URL}`);
  const indexXml = await fetchUrl(SITEMAP_URL);
  const urls = await getAllUrls(indexXml);

  if (urls.length === 0) {
    console.error("❌ Edhavum URLs kedaikala. Exit pandren.");
    process.exit(1);
  }

  console.log(`✅ Total ${urls.length} unique URLs. IndexNow-ku submit pandren...`);
  const result = await submitToIndexNow(urls);
  console.log(`📤 IndexNow response: ${result.status} - ${result.body || "(empty - success)"}`);

  if (result.status !== 200 && result.status !== 202) {
    console.error("⚠️ Submission failed-a irukalam. Status code check pannunga.");
    process.exit(1);
  }

  console.log("🎉 Success! IndexNow-ku ella URLs-um notify aachu.");
})();
