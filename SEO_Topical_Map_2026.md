# Topical Map — dammamtobahrain.com

Built from real GSC query data (65 queries audited) and the actual current site inventory — not a generic keyword list. Supersedes the older `SEO_Strategy_2026.md` / `SEO_Reverse_Engineering_Strategy.md` docs, which were written before the site had this much real structure.

**How to read this**: each Pillar is a topical silo Google should recognize as one coherent subject. One canonical money page per pillar, supporting pages feed it via internal links, informational content feeds the supporting pages. No pillar should have two pages competing for the same exact intent — where that's happening, it's flagged under **Consolidation Needed**.

---

## Pillar Map

### P1 — Dammam → Bahrain (Core)
**Canonical:** Homepage `/`
**Status:** 🟢 Live, strongest performer

| Query | Impr. | Clicks |
|---|---|---|
| dammam to bahrain taxi | 240 | 6 |
| dammam to bahrain | 333 | 0 |
| going by taxi to bahrain | 237 | 0 |
| dammam to bahrain taxi service | 224 | 5 |
| renting a car in dammam to bahrain taxi | 175 | 1 |
| dammam to bahrain transportation | 146 | 2 |
| car service from dammam to bahrain | 131 | 0 |
| dammam to bahrain by road | 77 | 0 |
| dammam to bahrain by car | 71 | 1 |
| taxi from dammam to bahrain | 88 | 7 |
| taxi dammam to bahrain | 55 | 2 |

**Feeds from:** khobar-to-bahrain, dammam-airport-to-bahrain, causeway-traffic, blog/dammam-to-bahrain-taxi-guide, blog/cost-guide-2026, blog/dammam-to-bahrain-bus-vs-taxi

---

### P2 — Bahrain → Dammam (Reverse)
**Canonical:** `/services/bahrain-to-dammam/`
**Status:** 🟡 Live but new (Aug 2026) — consolidation resolved (see below), still needs authority to build up

| Query | Impr. | Clicks |
|---|---|---|
| bahrain to dammam taxi | 209 | 0 |
| taxi bahrain to dammam | 160 | 0 |
| bahrain limo dammam station map | 106 | 0 |
| bahrain to dammam taxi service | 80 | 0 |
| bahrain to dammam taxi cost | 77 | 0 |
| local taxi for bahrain causeway from dammam airport | 67 | 0 |
| taxi service from bahrain to dammam | 67 | 0 |
| bahrain limo dammam locations | 72 | 0 |
| dammam bahrain limo pick up al khobar | 60 | 0 |
| bahrain limo dammam | 55 | 0 |
| limo service from bahrain to dammam | 30 | 0 |
| taxi from bahrain to dammam | 33 | 0 |

**✅ Consolidation resolved (Aug 19, 2026):** `/locations/bahrain/` was auditing on-page and turned out to already be a genuinely broader multi-city hub ("Bahrain to Saudi Arabia" — Al Khobar, Dammam, Dhahran, Jubail, Qatif, Hofuf), not an exact duplicate of this pillar. Left its title/meta/H1 untouched (no ranking risk) and instead added an explicit contextual link from its drop-off section to `/services/bahrain-to-dammam/` for the Dammam-specific intent — the lower-risk "differentiate + link" option, not a redirect.

---

### P3 — Dammam Airport → Bahrain
**Canonical:** `/services/dammam-airport-to-bahrain/`
**Status:** 🟢 Live

| Query | Impr. | Clicks |
|---|---|---|
| dammam airport to bahrain | 11 | 1 |
| dammam airport to bahrain taxi | 10 | 1 |
| taxi from dammam airport to bahrain | 9 | 0 |
| dammam airport to bahrain taxi cost | 9 | 0 |

---

### P4 — Bahrain Airport → Dammam
**Canonical:** `/services/bahrain-airport-to-dammam/`
**Status:** 🟡 Live but new (Aug 2026)

| Query | Impr. | Clicks |
|---|---|---|
| bahrain to dammam airport taxi | 29 | 0 |
| bahrain to dammam airport service | 28 | 0 |
| taxi manama bahrain to dammam airport | 27 | 0 |
| bahrain to dammam airport | 9 | 0 |
| taxi from bahrain to dammam airport | 8 | 0 |
| bahrain to dammam airport taxi fare | 2 | 0 |

No overlap issue — confirmed distinct from `/destinations/bahrain-airport/`, which is the *drop-off* page (Dammam → BAH for departing flights), not this pickup/arrival direction.

---

### P5 — Khobar ⇄ Bahrain
**Canonical:** `/services/khobar-to-bahrain/`
**Status:** ✅ Gap closed (Aug 19, 2026) — added a "Return Trips: Bahrain to Al Khobar" section, a reverse-direction FAQ, and broadened the meta description. No new page created.

| Query | Impr. | Clicks |
|---|---|---|
| bahrain to khobar taxi | 47 | 0 |
| khobar to bahrain taxi | 65 | 0 |
| al khobar to bahrain taxi | 46 | 0 |
| taxi from khobar to bahrain | 52 | 1 |
| taxi from bahrain to khobar | 30 | 0 |

**Gap:** the page currently reads Khobar→Bahrain only. 77 impressions (47+30) are reverse-direction (Bahrain→Khobar) with no on-page coverage. **Fix by adding a section/FAQ to this existing page — do not create a separate `/khobar-from-bahrain` page**, this volume doesn't justify a fourth direction-specific URL.

---

### P6 — Dhahran → Bahrain
**Canonical:** `/locations/dhahran/`
**Status:** 🟢 Live, low volume (26 impr.), no action needed

---

### P7 — Saudi ⇄ Bahrain (broad/generic)
**Canonical:** *No dedicated page — by design.*
**Status:** 🟡 Absorbed by P1/P2, not a standalone pillar

| Query | Impr. | Clicks |
|---|---|---|
| saudi to bahrain taxi | 158 | 0 |
| bahrain to saudi taxi | 115 | 0 |
| taxi from saudi to bahrain | 47 | 0 |
| taxi from bahrain to saudi arabia | 27 | 0 |

Per the original brief: only build this if it's genuinely distinct from the Dammam page. It isn't — "Saudi" in these queries almost always means the Eastern Province. **Recommendation stands: no new page.** Let the homepage and `/services/bahrain-to-dammam/` absorb this via existing broad keyword coverage, reinforced by internal links, not a new URL.

---

### P8 — Dammam ⇄ Manama (naming variant)
**Canonical:** absorbed into P1/P2 — "Manama" already appears naturally in `blog/dammam-to-bahrain-taxi-guide`.
**Status:** 🟢 No action needed (15+2 impressions, too low to justify separate treatment)

---

### P9 — Causeway / Border Crossing (informational → feeds P1–P5)
**Canonical:** `/causeway-traffic/` + `/blog/causeway-traffic-guide`
**Status:** 🟢 Strong performer

`dammam taxi bahrain bridge` — 83 impr., **7 clicks** (best CTR on the whole site). This pillar is working; keep it, keep linking it into P1–P5, don't touch the format.

---

### P10 — Cost / Fare / Price (cross-cutting)
**Canonical:** `/fare-calculator/` ("Get a Quote" hub)
**Status:** 🟢 Live, feeds every commercial pillar

`dammam to bahrain taxi cost`, `bahrain to dammam taxi cost` (77 impr.), `dammam airport to bahrain taxi cost`, `dammam to bahrain taxi fare`. Prices were deliberately removed site-wide (business decision) — this pillar's job is explaining *what affects* price and routing to WhatsApp/quote form, not publishing numbers.

---

### P11 — Uber/Careem Alternative (cross-cutting)
**Canonical:** Homepage FAQ
**Status:** 🟢 Live as FAQ content

`uber dammam to bahrain` (162 impr., 1 click), `careem dammam to bahrain` (137 impr.). Deliberately kept as FAQ, not a dedicated page — avoids looking like competitor-bait. Could graduate to a short blog post only if this volume grows materially; not needed now.

---

### P12 — Trip Purpose / Use-Case (not GSC-volume-driven, but real depth)
**Pages:** `/services/visa-run` 🟢 (773 impr., 22 clicks — flagship, don't restructure), `/services/business-meetings`, `/corporate`, `/services/family-taxi`, `/services/weekend-getaway`, `/services/hotel-transfers`, `/services/student-transport`, `/services/pet-transport`, `/services/airport-transfers`
**Status:** 🟢 Mature pillar, good existing depth

---

### P13 — Location Directory (Saudi-side geo long-tail)
**Hub:** `/locations/` — 47 pages (Al Khobar, Dammam, Riyadh, Jubail, Dhahran, Qatif, Hofuf, Ras Tanura, Khafji, Jeddah, Yanbu, Jizan, Najran + ~30 smaller Eastern Province towns/industrial sites)
**Status:** 🟢 Live — **was silently 404ing on every page until this week's `params` fix; now healthy.** This pillar is already large. Per "don't create hundreds of location pages" — do not expand it further.

---

### P14 — Destination Directory (Bahrain-side)
**Hub:** `/destinations/` — Juffair, Bahrain Airport (drop-off), City Centre Mall, Amwaj Islands (4 pages)
**Status:** 🟡 Thin but low priority

Seef District, Adliya/Block 338, and Manama Souq are mentioned in existing blog/service content but have no dedicated destination page. Real but minor gap — only worth filling if P1–P5 conversion work is done first.

---

### P15 — Blog / Informational Authority
**Pages:** taxi guide, cost guide, causeway guide, bus-vs-taxi, visa requirements, expat guide, Grand Prix travel, top hotels, Eid travel (9 posts)
**Status:** 🟢 Mature — maintenance only (internal linking sweep), not new posts. The brief was explicit: the site's problem was never a lack of content.

---

### P16 — Fleet (trust/conversion support, not keyword-driven)
**Pages:** `/fleet/`, camry, gmc-yukon, lexus, hyundai-staria
**Status:** 🟢 Supports all commercial pillars as proof content

---

## Silo / Internal Linking Structure

```
                          HOMEPAGE (P1: Dammam → Bahrain)
                                    |
        +---------------+----------+----------+---------------+
        |               |                     |               |
   P2 Bahrain→Dammam  P3 DMM Airport→BH   P4 BAH Airport→DMM  P5 Khobar⇄BH
        |               |                     |               |
        +-------+-------+---------+-----------+-------+-------+
                |                 |                   |
          P9 Causeway        P10 Fare/Quote      P12 Trip Purpose
         (traffic guide)     (get-a-quote hub)   (Visa Run flagship,
                |                 |                Corporate, Family...)
                +--------+--------+
                         |
              P13 Locations (47) · P14 Destinations (4) · P15 Blog (9) · P16 Fleet (4)
              (all link back up into P1–P5, none of them compete with each other)
```

Rule of thumb going forward: **P1–P5 are the only pages allowed to rank for a direction+city query.** Everything else (P9, P10, P12–P16) exists to feed traffic and authority *into* P1–P5 via internal links, never to compete with them.

**✅ Implemented (Aug 19, 2026):** `RelatedGuide.js` — the component already used on all 47 `/locations/*` pages plus 11 service pages (visa-run, khobar-to-bahrain, dammam-airport-to-bahrain, bahrain-to-dammam, bahrain-airport-to-dammam, family-taxi, weekend-getaway, hotel-transfers, business-meetings, student-transport, pet-transport) — now carries a permanent "Explore Our Main Routes" link row pointing to all 5 P1–P5 canonical pages. One component edit, whole silo reinforced in a single pass. Verified across all 58 pages post-deploy: zero regressions.

---

## What NOT to Build

Explicit no-build list, so this doesn't drift back into overbuilding:

- No new page for P7 (generic "Saudi to Bahrain") — absorbed by P1/P2.
- No new page for P8 (Dammam↔Manama) — absorbed by P1/P2.
- No Bahrain→Khobar page — fold into P5 as a section.
- No competitor-comparison pages for Uber/Careem — FAQ only.
- No expansion of P13 (locations) beyond the current 47.
- No new blog posts as a default response to a new query appearing in GSC — check if an existing pillar page can absorb it first.

## Resolved: P2 Consolidation

Was flagged as an open decision, resolved Aug 19, 2026 — see P2 section above. Went with the lower-risk "differentiate + link" option rather than a redirect, since `/locations/bahrain/` turned out to be a genuine multi-city hub, not a hard duplicate.

## What's Left on This Map

Everything marked 🟢/✅ above is done or healthy as-is. Remaining open items, roughly in priority order:
1. **P14** (Bahrain-side destinations) — thin (4 pages), low priority per the map. Only worth expanding (Seef District, Adliya/Block 338, Manama Souq) once P1–P5 conversion performance is proven out.
2. **P11** (Uber/Careem) — currently FAQ-only by design. Revisit only if that query volume grows materially in GSC.
3. Ongoing: watch GSC for any *new* query that doesn't fit an existing pillar before defaulting to "create a page" — check the "What NOT to Build" list first.
