# InvestCalc.eu V36

## Fix
- Blog topic filters and text search now use a robust, independent filtering routine.
- Filtering reads each card's `data-category` directly.
- Visibility is forced in JavaScript so stale/cached CSS cannot override it.
- Empty-state message appears only when no article matches.
- `All topics` restores all articles (subject to the current search text).
- Cache-busting updated to `/app.js?v=34`.

## Important deployment note
`/blog/index.html` changed in this release and must be uploaded/replaced.
Other HTML files only changed to load `/app.js?v=34`.


## V35 – Funds calculator
- Added `/fund-calculator/` (Fondy / Funds).
- Added entry fee, annual management fee and exit fee inputs.
- Added fee-impact decomposition and chart lines for no fees, after entry fee, after management fee, after all fees and invested capital.
- Added Funds to navigation and homepage.
- Added the new canonical URL to `sitemap.xml`.
- Bumped `app.js` cache version to v35 across HTML pages.


## V36 – ETF fee-profit impact
- Added a percentage metric to the ETF calculator showing the share of modeled potential profit lost to TER.
- The percentage is calculated as the modeled TER cost divided by the modeled gross profit before fees.
- ETF page sitemap lastmod updated to 2026-10-02.
- Bumped app.js cache version to v36 across HTML pages.
