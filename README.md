# InvestCalc.eu v31

Technical SEO cleanup release.

Changes:
- Added permanent 301 redirects from legacy calculator/blog `.html` URLs to canonical directory URLs.
- Removed the seven legacy root HTML duplicates after redirect rules were added.
- Kept canonical calculator/blog URLs and article URLs unchanged.
- Sitemap remains focused on canonical URLs only.

Legacy redirects:
- /investment.html -> /investment-calculator/
- /etf.html -> /etf-calculator/
- /compound.html -> /compound-interest-calculator/
- /inflation.html -> /inflation-calculator/
- /fire.html -> /fire-calculator/
- /retirement.html -> /retirement-calculator/
- /blog.html -> /blog/


## V32
- Fixed locale-safe parsing of money inputs in EN/SK modes across all calculators.
- Values such as 50000, 50 000, 50,000 and 50.000 are parsed consistently.
- Updated app.js cache-busting query to v=32.
