# InvestCalc.sk v6

Static financial calculator website with Slovak/English language switcher.

## Language switcher

The 🇸🇰 / 🇬🇧 buttons store the selected language in localStorage and apply it across all pages.

## Deploy

Upload the files to your static hosting provider. No backend is required for the current calculators.


## v7 changes
- Top navigation no longer contains Monthly investing.
- Homepage no longer contains a Monthly investing card.
- The investment calculator is always labeled Investment calculator / Investičná kalkulačka.
- Language switcher uses Slovak flag + EN text.
- ETF catalogue is ordered as the current full embedded catalogue ETFs by fund size (AUM) in the public justETF largest-ETF overview, excluding ETC products.
- ETF comparison shows AUM and the catalog is preloaded with the largest five ETFs.

When replacing an older GitHub Pages version, delete the old monthly.html file from the repository because v7 no longer ships that page.

Language switcher: the header shows only the alternative language button (EN on Slovak, SK on English) with a subtle blue glow.


ETF selector supports search by ticker, ISIN or ETF name. The comparison allows 0–5 selected ETFs.


ETF kalkulačka je manuálna: bez ETF katalógu, bez vyhľadávania a bez justETF integrácie. Používateľ zadáva TER, výnos a obdobie sám.
