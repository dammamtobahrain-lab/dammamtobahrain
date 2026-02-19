# SEO & Technical Audit Checklist (Based on "Why Your Website Isn't Ranking")

This checklist is derived from the "Why Your Website isn't Ranking" guide, tailored for the **Dammam to Bahrain Taxi** project.

## 1. Google Search Console & Core Web Vitals (The Foundation)
*   **Core Web Vitals (Mobile & Desktop)**:
    *   [ ] Check `layout.js` for font loading strategies (use `next/font`).
    *   [ ] Verify `next/image` usage for all images to prevent CLS (Cumulative Layout Shift) and ensure lazy loading.
    *   [ ] **Action**: Run Lighthouse audit on the new blog post.
*   **Page Indexing**:
    *   [ ] Check `robots.js` for accidental `noindex` blocks.
    *   [ ] Verify `sitemap.xml` fully covers all new routes.
    *   [ ] **Action**: Ensure `not-found.js` is custom and helpful (soft 404s).

## 2. Technical Audit (The "Engine" Check)
*   **Crawlability**:
    *   [ ] **Internal Linking**: Ensure the "Orphan Page" issue doesn't exist. Every location page must be linked from a hub.
    *   [ ] **Clean URLs**: Check for redirect chains or trailing slash consistency (`next.config.mjs`).
*   **Speed & Mobile**:
    *   [ ] **Fast Hosting**: (Project is on Vercel/Next.js, so typically good, but check bulky JS bundles).
    *   [ ] **Mobile Responsiveness**: Verify CSS Grid/Flexbox behavior on mobile (already working on this).

## 3. On-Page & Content Audit (The "Body" Check)
*   **Keyword Placement**:
    *   [ ] **Title Tag**: Does it contain the main keyword? (e.g., "Taxi Dammam to Bahrain").
    *   [ ] **First Paragraph**: Is the keyword mentioned naturally in the first 100 words?
    *   [ ] **H2 Structure**: Are subheaders keyword-rich?
    *   [ ] **Alt Text**: Do all images have descriptive, keyword-relevant alt text?
*   **Duplicate Content**:
    *   [ ] **Canonical Tags**: Ensure every page has a self-referencing `canonical` tag in `layout.js` or page metadata.
    *   [ ] **Thin Content**: Identify pages with <300 words and bulk them up.

## 4. Backlink Audit (External Authority)
*   *Note: This requires external tools (Ahrefs/Semrush), but we can prepare the site to receive links.*
*   [ ] **Anchor Text Planning**: Ensure internal links use varied, descriptive anchors (e.g., "Book a ride" vs "Dammam Taxi Prices").

---
**Immediate Action Items from Video Analysis:**
1.  Verify **Canonical Tags** implementation in `layout.js`.
2.  Check **Internal Linking** structure for the new blog post.
3.  Review **Image Optimization** in `Hero.js`.
