# InvestCalc.eu V34

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
