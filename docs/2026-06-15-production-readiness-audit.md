# Quaeris Marketing Site — Production-Readiness Audit & Remediation Roadmap

**Date:** 2026-06-15
**Method:** Production build (`next build`, quaeris brand) + full internal link crawl (97 unique links) + infra probe + 23-agent per-page qualitative audit + Opus synthesis. Headline claims independently re-verified against source (see Verification Notes).
**Deploy under review:** `next start` on `http://localhost:3101` (27 routes prerendered as static HTML, build exit 0).

---

## Verification Notes (independently confirmed 2026-06-15)

The synthesis below is accurate except for two corrected claims:

- **CORRECTED — `/platform` metadata is fine.** It serves `Governed Agentic Analytics Platform — Quaeris` + a real meta description. Per-route SEO works site-wide. (The auditor read the raw mockup `<head>`, which the catch-all embed strips.)
- **CORRECTED — `customers` is not a content blackout.** `IntersectionObserver` appears 9×, 2 script blocks present, no `.reveal{opacity:0}` rule. Content reveals on scroll; the earlier force-reveal was only the non-scrolling preview limitation. Downgraded from P0 to "verify reveal fallback as part of the P0-4 no-JS pass."

Independently confirmed TRUE: 79/97 dead links; `/contact`×53 with no form; bare unstyled 404; `platform/access-control` HIPAA "do not ship as visible copy" source comment (line 1282); `pricing` JSON-LD ("HIPAA, GDPR, and SOC 2 Type II") contradicting the visible "SOC 2 Type II — Certification in progress" badge; 6 literal `[Company Name]` placeholders in `solutions/finance`; `solutions/product` comparison highlights `nth-child(3)` with no `nth-child(4)`.

---

## 1. Executive Summary

The production build succeeds (27 static routes, runs on `:3101`), the homepage is a real React build, and 23 pages render as faithful HTML mockups with per-route SEO metadata. **But 79 of 97 internal links (81%) return 404**, and the 404 page is the bare Next.js default with no header/footer/nav — so any wrong click strands the user. The three biggest blockers: **(1) no contact/demo form anywhere — `/contact` is referenced 53 times and every "Book a Demo" CTA 404s, killing the conversion path; (2) the unstyled 404 turns 79 dead links into dead ends; (3) overstated/contradictory compliance claims** (SOC 2 / HIPAA shown as active in JSON-LD and copy while the visible page says "in progress") — a trust/legal risk on a live enterprise site. A scripted demo over the ~18 working routes is showable; an unsupervised review is not.

---

## 2. P0 — Broken Now, Must Fix Before Review

### P0-1. No contact/demo form — every conversion CTA 404s
`/contact` (+ `/contact?plan=enterprise`) referenced **53×**; no form exists. Every "Book a Demo"/"Talk to sales" button 404s. **Fix:** build a real `/contact` page + working endpoint (name, work email, company, message, optional `plan` prefill). Unblocks ~53 references.

### P0-2. Stranded 404 page (no nav)
Bare Next default (~8KB), no SiteHeader/SiteFooter/nav. Turns all 79 dead links into hard dead-ends. **Fix:** branded `not-found.tsx` with header/footer + links to top destinations.

### P0-3. Overstated / contradictory compliance claims (legal risk)
- `pricing` JSON-LD says "HIPAA, GDPR, and SOC 2 Type II" while the visible badge shows SOC 2 "In progress" — structured data contradicts the page.
- `platform/access-control` ships source comment: `HIPAA certification pending — do not ship as visible copy` (line 1282).
- `solutions/finance` FAQ states "Quaeris is SOC 2 Type II audited" as fact.
- `solutions/executives` "SOC 2 Type II · GDPR · HIPAA Ready" with a "replace with confirmed cert dates" note.
- `platform/warehouse` ships "SOC 2 Type II certification in progress" / unconfirmed HIPAA regions as visible copy.
**Fix:** one canonical compliance status (legal sign-off), applied to visible copy AND JSON-LD; remove the source comment; until certs confirmed, frame consistently as "in progress/roadmap."

### P0-4. No-JS / fragile interactivity on key pages
Tabbed/stepper/accordion widgets hide panels 2–N behind `hidden`/`max-height:0`, revealed only by JS, no `<noscript>` fallback. Affected: `platform` (Three-Engine tabs), `docs` (quickstart stepper), `platform/governance`, `platform/agents`, `solutions/finance`, `solutions/analysts`, `solutions/executives`, `about` (timeline). **Fix:** add `<noscript>` reveal blocks or convert to native `<details>`/`<summary>`. Verify `customers` reveal-on-scroll fallback here too.

### P0-5. CDN single-point-of-failure hides hero cards
Hero "Intelligence Brief" on `solutions`, `solutions/executives`, `solutions/finance`, `solutions/product` dynamically imports Motion One from `cdn.jsdelivr.net`; on CDN failure or CSP block (common in finance/enterprise networks — the target audience), the guard exits early leaving the card at `opacity:0`. **Fix:** in the catch/early-exit path, reset `.js-anim` elements to `opacity:1`; better, self-host Motion One.

### P0-6. Non-functional forms everywhere (silent data loss)
Newsletter/signup forms across most pages have no `action` and no endpoint — JS fakes success; without JS they silently discard input. `platform/agents` Subscribe has no `<form>` wrapper. **Fix:** wire all to one real endpoint with visible success/error states.

### P0-7. Factually wrong competitive comparison
`solutions/product` comparison table highlights `nth-child(3)` (a competitor column) as the branded Quaeris column; no `nth-child(4)` exists. **Fix:** confirm the Quaeris column index and repoint the highlight selectors.

### P0-8. CTA/label mismatches that mislead clicks
- `solutions/data-teams` "See the semantic layer" → `/contact` (should be `/platform/semantic-layer`, which exists).
- `solutions/executives` "See case studies" → `#customer-proof` anchor.
- `solutions/product` "See analytics in action" / "Watch a 5-minute walkthrough" → `/contact`.
- `platform/semantic-layer` "See how teams unify their metrics" → `/contact`.
**Fix:** repoint to correct existing routes; point demo/video CTAs at `/contact` until real assets exist.

---

## 3. P1 — Missing Pages / Flows (decisions)

Effort: S = <1 day, M = 1–3 days, L = >3 days.

| Group | Routes | Decision | Effort |
|---|---|---|---|
| A. Contact/conversion | `/contact` (~53 refs) | **BUILD** (P0-1) | M |
| B. Legal/trust/standard | `/privacy` `/terms` `/security` `/trust` `/careers` `/search` | **BUILD** privacy/terms/trust; **STUB** careers; **REMOVE** `/search` link | M |
| C. Blog articles | 5 article slugs | **BUILD** (template exists) or **STUB** "coming soon"; wrap blog cards in anchors (currently non-clickable) | M |
| D. Case-study details | 6 `/case-studies/*` | **BUILD** 2–3 real (E4E already named) + **STUB** rest; gated on de-anonymization sign-off | L |
| E. Compare | `/compare` + 6 competitors | **BUILD** hub + Looker/Tableau/Power BI; **STUB/REMOVE** Cube/dbt; normalize slug scheme (`quaeris(ai)-vs-` inconsistent) | L |
| F. Industries | `/industries` + 6 | **STUB** hub → existing `/solutions/*`; **REMOVE** links with no content | M |
| G. Integrations | 8 routes | **BUILD** one `/integrations` index; **STUB** per-warehouse as anchors (`/integrations#snowflake`); consolidate duplicate `/embedded-analytics` paths | M |
| H. Use-cases/learn | `/use-cases` `/conversational-queries` `/pinboards` `/learn/*` `/videos/*` | **REDIRECT** to existing `/platform/*`/`/solutions/*`; **REMOVE** video CTA until real | S–M |
| I. Webinars | 13 watch/register routes | **STUB** one `/webinars/register` gated form + one `/webinars/watch` "coming soon"; fix countdown (uses `Date.now()+14d`, not real Jul 9 2026) | M |
| J. Resource details | ~14 `/resources/*` | **STUB** to gated `/contact?resource=<slug>`; **BUILD** only 1–2 with real content; fix generic-category hrefs (multiple assets → same URL) | M |
| K. Auth/app | `/login` `/signup` `/app` `/dashboard` | **REMOVE** links (or "Get started" → `/contact`) | S |
| L. Stray/author-error slugs | `/accelerate` `/activate` `/resonate` `/communities` `/support` `/community` | **REMOVE** entirely (point docs `/support` → `/contact`) | S |

---

## 4. P2 — Polish & Hygiene

**Placeholder/fabricated content (de-risk before public launch):** fake testimonials/metrics with "illustrative" only in HTML comments or low-contrast text. Worst: `solutions/finance` 6 literal `[Company Name]` placeholders (render verbatim); `customers` (9/10 anonymized), `solutions/analysts` (6), `about` address mismatch (visible "Mission & 3rd, SF" vs JSON-LD "95 Third Street"). **Action:** real approved quotes, or **visible** "Illustrative example" labels on each card face (buried `rgba(...,0.4)` disclaimers don't count). Replace stray placeholder emails in visible code blocks.

**Accessibility (batch):** no skip-to-content link anywhere; `role="img"` wrapping interactive content (`platform/warehouse`, `solutions/finance`/`analysts`/`data-teams`/`revenue-ops`); invalid ARIA (`<details role="listitem">`, `<dl>` without `<dd>`, broken `aria-labelledby` on `solutions`); `aria-live` on count-ups announcing every value; contrast failures on newsletter fine-print and 10px badges; `-webkit-background-clip:text` missing standard property (`about` gradient invisible in Firefox).

**Mobile (recurring):** 3-col stat grids with no breakpoint clip <400px (`case-studies`, `customers`, `pricing`, `solutions/executives`/`analysts`/`revenue-ops`, `platform/warehouse`); wide tables scroll with no affordance/sticky column (`platform/audit`/`agents`, `solutions/product`/`finance`/`revenue-ops`, `pricing`); `white-space:pre` query strings clip; webinar filter chips don't wrap; `direction:rtl` layout hack risks RTL-locale breakage.

**SEO/infra:** no `robots.txt`, `sitemap.xml`, or web manifest (sitemap trivial from surviving routes); `blog/sample-post` Article+FAQPage JSON-LD promised in comments but absent; **build trace warning** — `web/src/lib/mockup.ts` uses `fs.readFileSync` on files outside `web/` (`../mockup`): fine for SSG but a deploy-portability smell (copy mockups into `web/` at build, or inline).

**Dead `href="#"` buttons (~49):** docs (34 — entire doc nav non-functional), customers (10), about (4), blog (1). Repoint to real targets (enumerated per page in the audit) or remove.

**Misc:** no working search despite multiple search affordances (wire or remove the decorative UI); empty filter states (`case-studies` Insurance/Manufacturing, `resources/webinars` topics show 0 results with no empty-state).

---

## 5. Recommended Build Order

1. **Branded 404 page** *(S, ½ day)* — converts 79 dead-ends into recoverable nav. Ship first.
2. **Contact/demo form at `/contact`** *(M, 1–2 days)* — real form + endpoint, honors `?plan=`. Unblocks ~53 refs + the conversion path. Repoint mislabeled CTAs (P0-8) while here.
3. **Compliance-claim sweep** *(S–M, 1 day + legal)* — one canonical status across copy AND JSON-LD; remove source comment; fix pricing contradiction.
4. **No-JS / CDN resilience pass** *(M, 2 days)* — `<noscript>` fallbacks (or `<details>`) on tab/stepper/accordion widgets; `finalize()`-on-CDN-failure for Motion One heroes.
5. **Dead-link triage — stub/redirect the 79 per §3** *(M–L, 2–3 days)* — catch-all returns credible stubs/redirects; strip REMOVE links; build only Group A (done) + Group B legal pages. Eliminates 404s wholesale.
6. **Wire all forms + fix comparison-column bug** *(S–M, 1 day)* — one endpoint, visible states; add `platform/agents` `<form>`; fix `solutions/product` nth-child.
7. **Placeholder-content visibility pass** *(M, 1–2 days, content-bound)* — real content or visible "Illustrative" labels; fix `[Company Name]` literals + `about` address.
8. **SEO infra + a11y/mobile batch** *(M, 2 days)* — robots/sitemap/manifest; skip-link; remove `role="img"`; mobile grid breakpoints + table scroll; clean `href="#"` (docs first); resolve file-trace warning.

**Critical path to "reviewable":** items 1–5 (~8–10 working days) → zero 404s, working conversion, no false compliance claims, reliably visible content. Items 6–8 → production-ready. Real Groups C/D/E content is the long tail, gated on content/CS sign-off.
