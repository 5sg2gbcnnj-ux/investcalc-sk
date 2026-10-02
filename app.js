/* ============================================================
   INVESTCALC I18N
   ============================================================ */
const I18N = {
  sk: {
    nav_investment:'Investičná kalkulačka', nav_etf:'ETF', nav_funds:'Fondy', nav_compound:'Zložené úročenie', nav_inflation:'Inflácia', nav_fire:'FIRE', nav_retirement:'Dôchodok', nav_blog:'Blog',
    home_eyebrow:'Investovanie jednoducho', home_h1:'Koľko môže vyrásť tvoja investícia?', home_intro:'Bezplatné finančné kalkulačky pre dlhodobé investovanie. Porovnaj výnosy, pravidelné vklady, infláciu a cestu k finančnej nezávislosti.', home_cta_invest:'Spustiť investičnú kalkulačku', home_cta_etf:'ETF kalkulačka', home_calc_title:'Kalkulačky', home_calc_lead:'Vyber si kalkulačku podľa toho, čo práve riešiš.', home_card_invest_desc:'Tri scenáre výnosu, počiatočná investícia a pravidelný mesačný vklad.', home_card_etf_desc:'Porovnaj hodnotu portfólia pred a po odpočítaní ročných nákladov.', home_card_funds_title:'Fondy', home_card_funds_desc:'Modeluj vstupný, správcovský a výstupný poplatok a ich vplyv na výsledok investície.', home_card_compound_desc:'Ukáž si silu času a reinvestovania výnosov.', home_card_monthly_desc:'Koľko môže vyrásť portfólio pri pravidelnom mesačnom investovaní?', home_card_inflation_title:'Inflačná kalkulačka', home_card_inflation_desc:'Zisti, akú kúpnu silu bude mať dnešná suma o 10, 20 či 30 rokov.', home_card_fire_title:'FIRE kalkulačka', home_card_fire_desc:'Odhadni cieľové portfólio a čas potrebný na finančnú nezávislosť.', home_card_retirement_title:'Dôchodková kalkulačka', home_card_retirement_desc:'Odhad budúcej hodnoty úspor do dôchodku.', home_card_blog_title:'Blog / články', home_card_blog_desc:'Zrozumiteľné vysvetlenia investovania, ETF, inflácie a dlhodobého rastu.', home_why:'Prečo InvestCalc?', home_reason1_title:'Jednoduché vstupy', home_reason1_desc:'Zadaj pár čísel a výsledok uvidíš okamžite.', home_reason2_title:'Grafický výstup', home_reason2_desc:'Rozdiel medzi scenármi je viditeľný na prvý pohľad.', home_reason3_title:'Bezplatne', home_reason3_desc:'Kalkulačky sú navrhnuté ako verejne dostupné nástroje.', home_reason4_title:'Pre dlhý horizont', home_reason4_desc:'Stavané na otázky o desaťročiach, nie len o najbližšom roku.',
    ad_space:'Priestor pre reklamu', footer_disclaimer:'Modelové výpočty pre vzdelávacie a informačné účely. Nie je to investičné poradenstvo.', footer_investments:'Investície', footer_content:'Obsah',
    investment_eyebrow:'Kalkulačka', page_investment_title:'Investičná kalkulačka', investment_intro:'Porovnaj tri očakávané priemerné ročné výnosy a sleduj, čo spraví čas, zložené úročenie a pravidelné mesačné investovanie.', investment_inputs:'Vstupné údaje', initial_investment:'Počiatočná investícia (€)', investment_period:'Investičné obdobie', add_monthly:'Pridať pravidelnú mesačnú investíciu', monthly_investment:'Mesačná investícia (€)', return_scenarios:'Výnosové scenáre', scenario1_return:'Scenár 1 – výnos (%)', scenario2_return:'Scenár 2 – výnos (%)', scenario3_return:'Scenár 3 – výnos (%)', investment_notice:'Prerušovaná čiara „Vložený kapitál“ zobrazuje tvoju počiatočnú investíciu + všetky mesačné vklady. Výnosy sú modelované ako konštantný priemerný ročný výnos.', year:'Rok', scenario1:'Scenár 1', scenario2:'Scenár 2', scenario3:'Scenár 3', invested_capital:'Vložený kapitál', footer_model_no_taxes:'Modelový výpočet. Nezahŕňa dane, poplatky ani infláciu.',
    page_etf_title:'ETF kalkulačka', etf_intro:'Zadaj očakávaný výnos, TER a obdobie a odhadni budúcu hodnotu ETF portfólia.', inputs:'Vstupy', select_etf:'Vyber ETF', isin_label:'ISIN:', ticker_label:'Ticker:', ticker_header:'Ticker', isin_header:'ISIN', ter_header:'TER', ter_short_label:'TER:', aum_short_label:'AUM:', aum_header:'AUM', justetf_profile:'Zobraziť profil na justETF ↗', without_fee:'Bez poplatku', after_fee:'Po poplatku', difference:'Rozdiel', model_value:'Modelová hodnota', fee_effect:'Potenciálny efekt nákladu', total_invested:'Celkom vložené', initial_plus_monthly:'Počiatočná + mesačné vklady', gross_return:'Očakávaný výnos pred poplatkami (%)', ter_label:'Ročné náklady ETF – TER (%)', etf_profit_share_lost:'Podiel potenciálneho zisku stratený na TER', period_years:'Obdobie (roky)', comparison:'Porovnanie', compare_5:'Porovnaj 5 ETF', compare_intro:'Vyber päť ETF a porovnaj ich TER, základné údaje a modelovanú hodnotu pri rovnakých vstupoch.', distribution:'Výplata', value_after_period:'Hodnota po období', invested:'Vložené', diff_from_highest:'Rozdiel voči najvyššej hodnote', compare_notice:'Porovnanie používa rovnakú počiatočnú investíciu, mesačný vklad, očakávaný výnos a horizont pre všetkých päť ETF. Rozdiel v modeli preto vzniká z rozdielneho TER, nie z rozdielnej budúcej výkonnosti indexov.', etf_data_notice:'Zobrazujú sa všetky ETF dostupné v katalógu. ETF môžeš vyhľadávať podľa tickeru, ISIN alebo názvu; údaje v katalógu sa môžu v čase meniť.', search_etf:'Hľadaj ETF podľa tickeru, ISIN alebo názvu', search_etf_placeholder:'Ticker, ISIN alebo názov ETF...', footer_model_no_advice:'Modelový výpočet. Nie je investičným poradenstvom.', etf1:'ETF 1', etf2:'ETF 2', etf3:'ETF 3', etf4:'ETF 4', etf5:'ETF 5', accum:'Akumulačný', dist:'Distribučný', no_difference:'—', no_etf_selected:'ETF nebolo vybrané', ticker_header:'Ticker', isin_header:'ISIN', ter_header:'TER', year_label:'Rok',
    page_fund_title:'Kalkulačka fondov', fund_intro:'Modeluj počiatočnú a mesačnú investíciu do fondu a sleduj, ako vstupný, správcovský a výstupný poplatok ovplyvnia konečnú hodnotu a zisk.', fund_management_fee:'Správcovský poplatok (% ročne)', fund_entry_fee:'Vstupný poplatok (%)', fund_exit_fee:'Výstupný poplatok (%)', fund_before_fees:'Bez poplatkov', fund_after_all_fees:'Po všetkých poplatkoch', fund_total_fee_effect:'Strata kvôli poplatkom', fund_entry_effect:'Vplyv vstupného poplatku', fund_management_effect:'Vplyv správcovského poplatku', fund_exit_effect:'Vplyv výstupného poplatku', fund_profit_before_fees:'Zisk bez poplatkov', fund_profit_after_fees:'Zisk po poplatkoch', fund_profit_share_lost:'Podiel potenciálneho zisku stratený na poplatkoch', fund_after_entry:'Po vstupnom poplatku', fund_after_management:'Po správcovskom poplatku', fund_invested_capital:'Vložený kapitál', fund_notice:'Model predpokladá, že vstupný poplatok sa odpočíta z počiatočnej aj každej mesačnej investície, správcovský poplatok sa zjednodušene odpočíta od očakávaného ročného výnosu a výstupný poplatok sa uplatní pri predaji. Graf pri každom roku zobrazuje hypotetickú hodnotu po výstupnom poplatku, ak by investor v danom roku vystúpil.',
    compound_eyebrow:'Formula', page_compound_title:'Zložené úročenie', compound_intro:'Zisti, ako sa pri pravidelnom reinvestovaní výnosov môže meniť hodnota investície v čase.', compound_initial:'Počiatočná suma (€)', monthly_deposit:'Mesačný vklad (€)', annual_return:'Ročný výnos (%)', final_value:'Konečná hodnota', profit:'Zisk', footer_compound:'Modelový výpočet zloženého úročenia.',
    monthly_eyebrow:'Pravidelnosť', page_monthly_title:'Mesačné investovanie', monthly_intro:'Pravidelný vklad vie mať pri dlhom horizonte veľký vplyv na konečnú hodnotu portfólia.', monthly_notice_1:'Na výpočet použi hlavnú', monthly_invest_link:'investičnú kalkulačku', monthly_notice_2:'kde môžeš pridať mesačný vklad k počiatočnej investícii a porovnať tri scenáre výnosu.', how_works:'Ako to funguje?', monthly_how_desc:'Každý mesačný vklad vstupuje do portfólia a následne sa môže ďalej zhodnocovať. Pri desiatkach rokov má preto čas významný vplyv na výsledok.', footer_info:'Modelové výpočty pre informačné účely.',
    inflation_eyebrow:'Kúpna sila', page_inflation_title:'Inflačná kalkulačka', inflation_intro:'Koľko bude mať dnešných 10 000 € približne takú istú kúpnu silu o 20 rokov?', today_amount:'Dnešná suma (€)', average_inflation:'Priemerná inflácia (%)', future_purchasing_power:'Budúca kúpna sila', purchasing_power_loss:'Pokles kúpnej sily', relative_decline:'Relatívny pokles', inflation_notice:'Výpočet je nominálne zjednodušenie. Skutočná inflácia sa v čase mení.', footer_inflation:'Modelový výpočet vplyvu konštantnej inflácie.',
    fire_eyebrow:'Financial Independence', page_fire_title:'FIRE kalkulačka', fire_intro:'Odhadni cieľové portfólio podľa ročných výdavkov a zvoleného withdrawal rate a zobraz približný čas do dosiahnutia cieľa.', current_portfolio:'Aktuálne portfólio (€)', annual_expenses:'Ročné výdavky (€)', expected_return:'Očakávaný výnos (%)', withdrawal_rate:'Withdrawal rate (%)', fire_target:'FIRE cieľ', time_estimate:'Odhad času', gap_to_goal:'Chýba do cieľa', fire_notice:'Toto je zjednodušený model. Nezohľadňuje dane, zmenu výdavkov, sekvenciu výnosov ani rozdiel medzi nominálnym a reálnym výnosom.', footer_fire:'FIRE výpočet je informačný model, nie osobné finančné odporúčanie.',
    retirement_eyebrow:'Budúcnosť', page_retirement_title:'Dôchodková kalkulačka', retirement_intro:'Odhadni, akú hodnotu môže mať tvoje portfólio v deň odchodu do dôchodku a aký mesačný výber zodpovedá jednoduchému 4 % modelu.', current_age:'Aktuálny vek', retirement_age:'Vek odchodu', current_savings:'Aktuálne úspory (€)', expected_annual_return:'Očakávaný ročný výnos (%)', years_to_retirement:'Roky do dôchodku', retirement_portfolio:'Portfólio pri dôchodku', four_percent_monthly:'4 % model mesačne', retirement_notice:'4 % mesačný údaj je iba ilustračný pre výpočtový model; nepredstavuje garantovaný dôchodkový príjem.' ,
    blog_eyebrow:'Blog', blog_title:'Investovanie bez zbytočného balastu', blog_intro:'Pripravovaný obsah pre ľudí, ktorí chcú rozumieť svojim číslam a rozhodovať sa informovane.', blog_tag_compound:'ZLOŽENÉ ÚROČENIE', blog_article1_title:'Prečo je 10 % a 8 % taký veľký rozdiel?', blog_article1_desc:'Čas a compounding spôsobujú, že malý rozdiel v priemernom výnose sa po desaťročiach môže premietnuť do veľkého rozdielu v hodnote portfólia.', blog_article2_title:'Čo znamená TER pri ETF?', blog_article2_desc:'Jednoduché vysvetlenie nákladov ETF a toho, prečo aj desatiny percenta môžu mať pri dlhom horizonte význam.', blog_article3_title:'Prečo nestačí sledovať len nominálnu sumu?', blog_article3_desc:'Budúcich 100 000 € nemusí mať rovnakú kúpnu silu ako dnešných 100 000 €.', footer_educational:'Obsah je vzdelávací a informačný.'
  },
  en: {
    nav_investment:'Investment calculator', nav_etf:'ETF', nav_funds:'Funds', nav_compound:'Compound interest', nav_inflation:'Inflation', nav_fire:'FIRE', nav_retirement:'Retirement', nav_blog:'Blog',
    home_eyebrow:'Investing made simple', home_h1:'How much can your investment grow?', home_intro:'Free financial calculators for long-term investing. Compare returns, regular contributions, inflation and your path to financial independence.', home_cta_invest:'Open investment calculator', home_cta_etf:'ETF calculator', home_calc_title:'Calculators', home_calc_lead:'Choose the calculator that matches what you are working on.', home_card_invest_desc:'Three return scenarios, an initial investment and regular monthly contributions.', home_card_etf_desc:'Compare portfolio value before and after annual ETF costs.', home_card_funds_title:'Funds', home_card_funds_desc:'Model entry, management and exit fees and see their impact on investment value.', home_card_compound_desc:'See the power of time and reinvesting returns.', home_card_monthly_desc:'How much can your portfolio grow with regular monthly investing?', home_card_inflation_title:'Inflation calculator', home_card_inflation_desc:'See how much purchasing power today’s money may have in 10, 20 or 30 years.', home_card_fire_title:'FIRE calculator', home_card_fire_desc:'Estimate your target portfolio and the time needed to reach financial independence.', home_card_retirement_title:'Retirement calculator', home_card_retirement_desc:'Estimate the future value of your retirement savings.', home_card_blog_title:'Blog / articles', home_card_blog_desc:'Clear explanations of investing, ETFs, inflation and long-term growth.', home_why:'Why InvestCalc?', home_reason1_title:'Simple inputs', home_reason1_desc:'Enter a few numbers and see the result immediately.', home_reason2_title:'Visual output', home_reason2_desc:'See the difference between scenarios at a glance.', home_reason3_title:'Free to use', home_reason3_desc:'The calculators are designed as publicly available tools.', home_reason4_title:'Built for long horizons', home_reason4_desc:'Made for questions about decades, not just the next year.',
    ad_space:'Advertising space', footer_disclaimer:'Model calculations for educational and informational purposes. Not investment advice.', footer_investments:'Investments', footer_content:'Content',
    investment_eyebrow:'Calculator', page_investment_title:'Investment calculator', investment_intro:'Compare three expected average annual returns and see what time, compounding and regular monthly investing can do.', investment_inputs:'Inputs', initial_investment:'Initial investment (€)', investment_period:'Investment period', add_monthly:'Add regular monthly investment', monthly_investment:'Monthly investment (€)', return_scenarios:'Return scenarios', scenario1_return:'Scenario 1 – return (%)', scenario2_return:'Scenario 2 – return (%)', scenario3_return:'Scenario 3 – return (%)', investment_notice:'The dashed “Invested capital” line shows your initial investment + all monthly contributions. Returns are modeled as a constant average annual return.', year:'Year', scenario1:'Scenario 1', scenario2:'Scenario 2', scenario3:'Scenario 3', invested_capital:'Invested capital', footer_model_no_taxes:'Model calculation. Excludes taxes, fees and inflation.',
    page_etf_title:'ETF calculator', etf_intro:'Enter the expected return, TER and investment period to estimate the future value of an ETF portfolio.', inputs:'Inputs', select_etf:'Select ETF', isin_label:'ISIN:', ticker_label:'Ticker:', ticker_header:'Ticker', isin_header:'ISIN', ter_header:'TER', ter_short_label:'TER:', aum_short_label:'AUM:', aum_header:'AUM', justetf_profile:'View profile on justETF ↗', without_fee:'Before fees', after_fee:'After fees', difference:'Difference', model_value:'Model value', fee_effect:'Potential cost effect', total_invested:'Total invested', initial_plus_monthly:'Initial + monthly contributions', gross_return:'Expected return before fees (%)', ter_label:'Annual ETF cost – TER (%)', etf_profit_share_lost:'Share of potential profit lost to TER', period_years:'Period (years)', comparison:'Comparison', compare_5:'Compare 5 ETFs', compare_intro:'Select five ETFs and compare their TER, basic data and modeled value using the same inputs.', distribution:'Distribution', value_after_period:'Value after period', invested:'Invested', diff_from_highest:'Difference vs. highest value', compare_notice:'The comparison uses the same initial investment, monthly contribution, expected return and horizon for all five ETFs. The model difference therefore comes from TER, not different future index performance.', etf_data_notice:'All ETFs available in the catalogue are shown. Search ETFs by ticker, ISIN or name; catalogue data may change over time.', footer_model_no_advice:'Model calculation. Not investment advice.', etf1:'ETF 1', etf2:'ETF 2', etf3:'ETF 3', etf4:'ETF 4', etf5:'ETF 5', accum:'Accumulating', dist:'Distributing', no_difference:'—', no_etf_selected:'No ETF selected', ticker_header:'Ticker', isin_header:'ISIN', ter_header:'TER', year_label:'Year',
    page_fund_title:'Fund calculator', fund_intro:'Model an initial and monthly investment in a fund and see how entry, management and exit fees affect final value and profit.', fund_management_fee:'Management fee (% per year)', fund_entry_fee:'Entry fee (%)', fund_exit_fee:'Exit fee (%)', fund_before_fees:'Before fees', fund_after_all_fees:'After all fees', fund_total_fee_effect:'Loss due to fees', fund_entry_effect:'Entry fee impact', fund_management_effect:'Management fee impact', fund_exit_effect:'Exit fee impact', fund_profit_before_fees:'Profit before fees', fund_profit_after_fees:'Profit after fees', fund_profit_share_lost:'Share of potential profit lost to fees', fund_after_entry:'After entry fee', fund_after_management:'After management fee', fund_invested_capital:'Invested capital', fund_notice:'The model assumes the entry fee is deducted from the initial investment and every monthly contribution, the management fee is simplified as a reduction of the expected annual return, and the exit fee is applied when the investment is sold. For each year, the chart shows the hypothetical value after the exit fee if the investor exited in that year.',
    compound_eyebrow:'Formula', page_compound_title:'Compound interest', compound_intro:'See how the value of an investment can change over time when returns are regularly reinvested.', compound_initial:'Initial amount (€)', monthly_deposit:'Monthly contribution (€)', annual_return:'Annual return (%)', final_value:'Final value', profit:'Profit', footer_compound:'Compound interest model calculation.',
    monthly_eyebrow:'Regularity', page_monthly_title:'Monthly investing', monthly_intro:'Regular contributions can have a major impact on the final portfolio value over a long horizon.', monthly_notice_1:'For a calculation, use the main', monthly_invest_link:'investment calculator', monthly_notice_2:'where you can add a monthly contribution to the initial investment and compare three return scenarios.', how_works:'How does it work?', monthly_how_desc:'Each monthly contribution enters the portfolio and can continue to compound. Over decades, time has a significant effect on the result.', footer_info:'Model calculations for informational purposes.',
    inflation_eyebrow:'Purchasing power', page_inflation_title:'Inflation calculator', inflation_intro:'How much purchasing power will today’s €10,000 have in roughly 20 years?', today_amount:'Today’s amount (€)', average_inflation:'Average inflation (%)', future_purchasing_power:'Future purchasing power', purchasing_power_loss:'Purchasing power loss', relative_decline:'Relative decline', inflation_notice:'This is a simplified nominal model. Actual inflation changes over time.', footer_inflation:'Model calculation of the effect of constant inflation.',
    fire_eyebrow:'Financial Independence', page_fire_title:'FIRE calculator', fire_intro:'Estimate a target portfolio from annual expenses and a selected withdrawal rate, and show the approximate time to reach the goal.', current_portfolio:'Current portfolio (€)', annual_expenses:'Annual expenses (€)', expected_return:'Expected return (%)', withdrawal_rate:'Withdrawal rate (%)', fire_target:'FIRE target', time_estimate:'Estimated time', gap_to_goal:'Gap to target', fire_notice:'This is a simplified model. It does not account for taxes, changing expenses, sequence of returns or the difference between nominal and real returns.', footer_fire:'FIRE calculation is an informational model, not personal financial advice.',
    retirement_eyebrow:'Future', page_retirement_title:'Retirement calculator', retirement_intro:'Estimate your portfolio value at retirement and the monthly withdrawal corresponding to a simple 4% model.', current_age:'Current age', retirement_age:'Retirement age', current_savings:'Current savings (€)', expected_annual_return:'Expected annual return (%)', years_to_retirement:'Years to retirement', retirement_portfolio:'Portfolio at retirement', four_percent_monthly:'4% model monthly', retirement_notice:'The 4% monthly figure is illustrative only and does not represent guaranteed retirement income.',
    blog_eyebrow:'Blog', blog_title:'Investing without the fluff', blog_intro:'Upcoming content for people who want to understand their numbers and make informed decisions.', blog_tag_compound:'COMPOUND INTEREST', blog_article1_title:'Why is 10% vs. 8% such a big difference?', blog_article1_desc:'Time and compounding mean that a small difference in average return can become a large difference in portfolio value over decades.', blog_article2_title:'What does TER mean for ETFs?', blog_article2_desc:'A simple explanation of ETF costs and why even tenths of a percent can matter over a long horizon.', blog_article3_title:'Why nominal value is not enough', blog_article3_desc:'A future €100,000 may not have the same purchasing power as today’s €100,000.', footer_educational:'Educational and informational content.'
  }
};

function currentLang(){
  try {
    const saved = localStorage.getItem('investcalc_lang');
    return (saved === 'en' || saved === 'sk') ? saved : 'sk';
  } catch(e) {
    return 'sk';
  }
}
function tr(key){ const lang=currentLang(); return (I18N[lang] && I18N[lang][key]) || I18N.sk[key] || key; }

/* ============================================================
   GA4 EVENT TRACKING
   - Tracks calculator usage without sending exact monetary amounts.
   - Uses a short debounce so changing several inputs creates one event.
   ============================================================ */
function trackGA4Event(name, params = {}) {
  if (typeof window.gtag !== 'function') return;
  const clean = {};
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') clean[key] = value;
  });
  window.gtag('event', name, clean);
}

function createCalculatorTracker(calculatorType, getParams) {
  let timer = null;
  let lastSignature = '';
  return function scheduleTrack() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const params = getParams() || {};
      const signature = JSON.stringify(params);
      if (signature === lastSignature) return;
      lastSignature = signature;
      trackGA4Event('calculator_used', {
        calculator_type: calculatorType,
        ...params
      });
    }, 1200);
  };
}
function setLang(lang){
  if(!I18N[lang]) return;
  const previous = currentLang();
  localStorage.setItem('investcalc_lang',lang);
  applyTranslations();
  if(previous !== lang) trackGA4Event('language_changed', { language: lang });
  document.dispatchEvent(new CustomEvent('languagechange'));
}
function applyTranslations(){
  const lang=currentLang();
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(I18N[lang][key]!==undefined) el.textContent=I18N[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    const isCurrent = btn.dataset.lang === lang;
    btn.classList.toggle('active', isCurrent);
    // Show only the alternative language: EN on the Slovak version, SK on the English version.
    btn.hidden = isCurrent;
    btn.setAttribute('aria-hidden', isCurrent ? 'true' : 'false');
  });
  const titles={
    home: lang==='en'?'InvestCalc.eu – investment calculators':'InvestCalc.eu – investičné kalkulačky',
    investment:lang==='en'?'Investment calculator – InvestCalc.eu':'Investičná kalkulačka – InvestCalc.eu',
    etf:lang==='en'?'ETF calculator – InvestCalc.eu':'ETF kalkulačka – InvestCalc.eu',
    funds:lang==='en'?'Fund calculator – InvestCalc.eu':'Kalkulačka fondov – InvestCalc.eu',
    compound:lang==='en'?'Compound interest – InvestCalc.eu':'Zložené úročenie – InvestCalc.eu',
    monthly:lang==='en'?'Monthly investing – InvestCalc.eu':'Mesačné investovanie – InvestCalc.eu',
    inflation:lang==='en'?'Inflation calculator – InvestCalc.eu':'Inflačná kalkulačka – InvestCalc.eu',
    fire:lang==='en'?'FIRE calculator – InvestCalc.eu':'FIRE kalkulačka – InvestCalc.eu',
    retirement:lang==='en'?'Retirement calculator – InvestCalc.eu':'Dôchodková kalkulačka – InvestCalc.eu',
    blog:lang==='en'?'Investing blog – InvestCalc.eu':'Blog o investovaní – InvestCalc.eu'
  };
  document.title=titles[document.body.dataset.page] || document.title;

  // Bilingual article content uses data-lang-content=sk/en.
  document.querySelectorAll('[data-lang-content]').forEach(el=>{
    const show = el.dataset.langContent === lang;
    el.hidden = !show;
    el.setAttribute('aria-hidden', show ? 'false' : 'true');
    el.style.display = show ? '' : 'none';
  });

  // Article pages keep language-specific SEO titles in data-title-sk/en.
  if(document.body.dataset.page === 'article'){
    const skTitle=document.body.dataset.titleSk;
    const enTitle=document.body.dataset.titleEn;
    if(skTitle || enTitle){
      document.title = lang==='en' ? (enTitle || skTitle) : (skTitle || enTitle);
    }
  }

  // Reveal the page only after the saved language has been applied.
  document.body.classList.add('i18n-ready');
  document.documentElement.classList.remove('i18n-boot');
}

function initLanguageSwitcher(){
  document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setLang(btn.dataset.lang)));
  applyTranslations();
}

const EUR = n => new Intl.NumberFormat(currentLang()==='en' ? 'en-IE' : 'sk-SK',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
const NUM = n => new Intl.NumberFormat(currentLang()==='en' ? 'en-IE' : 'sk-SK',{maximumFractionDigits:0}).format(n);
const pct = n => `${Number(n).toFixed(1)} %`;
const monthlyRate = annual => Math.pow(1 + annual/100, 1/12) - 1;

function investmentSchedule(initial, monthly, annual, years){
  const r = monthlyRate(annual), values=[initial], contributed=[initial];
  let value=initial, paid=initial;
  for(let m=1;m<=years*12;m++){
    value *= (1+r);
    value += monthly;
    paid += monthly;
    if(m%12===0){values.push(value); contributed.push(paid)}
  }
  return {values,contributed};
}

function setupNav(){
  const page=document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===page)a.classList.add('active')});

  document.querySelectorAll('.menu-toggle').forEach(btn=>{
    const nav=btn.parentElement.querySelector('.navlinks');
    if(!nav) return;
    btn.addEventListener('click',()=>{
      const open=btn.getAttribute('aria-expanded')==='true';
      btn.setAttribute('aria-expanded',open?'false':'true');
      nav.classList.toggle('menu-open',!open);
      document.body.classList.toggle('mobile-menu-open',!open);
    });
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
      btn.setAttribute('aria-expanded','false');
      nav.classList.remove('menu-open');
      document.body.classList.remove('mobile-menu-open');
    }));
  });
}

function parseMoney(value){
  let v=String(value ?? '').trim().replace(/[\s\u00A0\u202F]/g,'');
  if(!v) return 0;

  // Accept both SK and EN user input formats, for example:
  // 50 000, 50,000, 50.000 and 50000.
  // A single separator followed by exactly three digits is treated as a
  // thousands separator. A trailing 1-2 digit group is treated as decimals.
  const commaCount=(v.match(/,/g)||[]).length;
  const dotCount=(v.match(/\./g)||[]).length;

  if(commaCount && dotCount){
    const lastComma=v.lastIndexOf(',');
    const lastDot=v.lastIndexOf('.');
    const decimalSep=lastComma>lastDot ? ',' : '.';
    const groupingSep=decimalSep===',' ? '.' : ',';
    v=v.split(groupingSep).join('');
    const parts=v.split(decimalSep);
    if(parts.length===2 && parts[1].length<=2) v=parts[0]+'.'+parts[1];
    else v=parts.join('');
  }else if(commaCount || dotCount){
    const sep=commaCount ? ',' : '.';
    const parts=v.split(sep);
    if(parts.length===2){
      const decimals=parts[1].length;
      v=decimals===3 ? parts.join('') : (decimals<=2 ? parts[0]+'.'+parts[1] : parts.join(''));
    }else{
      v=parts.join('');
    }
  }

  v=v.replace(/[^0-9.-]/g,'');
  const n=Number(v);
  return Number.isFinite(n) ? n : 0;
}

function moneyInput(el){
  if(!el)return;
  el.addEventListener('blur',()=>{
    if(el.value.trim()==='') return;
    el.value=NUM(parseMoney(el.value));
  });
}

function initInvestment(){
  const initial=document.querySelector('#initial'), monthly=document.querySelector('#monthly'), years=document.querySelector('#years');
  const enabled=document.querySelector('#monthlyEnabled'), r1=document.querySelector('#r1'), r2=document.querySelector('#r2'), r3=document.querySelector('#r3');
  if(!initial)return;
  [initial,monthly].forEach(moneyInput);
  const wrap=document.querySelector('#monthlyWrap');
  enabled.addEventListener('change',()=>wrap.hidden=!enabled.checked);
  wrap.hidden=!enabled.checked;
  const canvas=document.querySelector('#investmentChart');
  let chart;
  const trackUsage = createCalculatorTracker('investment', () => ({
    period_years: Number(years.value) || 0,
    monthly_investment_enabled: Boolean(enabled.checked),
    return_scenario_1: Number(r1.value) || 0,
    return_scenario_2: Number(r2.value) || 0,
    return_scenario_3: Number(r3.value) || 0
  }));

  function render(){
    const init=parseMoney(initial.value);
    const mon=enabled.checked?(parseMoney(monthly.value)):0;
    const y=Number(years.value), rates=[Number(r1.value),Number(r2.value),Number(r3.value)];
    const schedules=rates.map(rate=>investmentSchedule(init,mon,rate,y));
    const labels=Array.from({length:y+1},(_,i)=>`${tr('year')} ${i}`);
    const datasets=[
      {label:'Scenár 1',data:schedules[0].values,borderColor:'#2f81f7'},
      {label:'Scenár 2',data:schedules[1].values,borderColor:'#7dc6ff'},
      {label:'Scenár 3',data:schedules[2].values,borderColor:'#ff5b62'},
      {label:tr('invested_capital'),data:schedules[0].contributed,borderColor:'#ff9da3',borderDash:[7,7]}
    ].map(d=>({...d,tension:.22,pointRadius:0,borderWidth:2.5,fill:false}));
    if(chart)chart.destroy();
    chart=new Chart(canvas,{type:'line',data:{labels,datasets},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#fff',font:{size:13}}},tooltip:{mode:'index',intersect:false,callbacks:{label:ctx=>`${ctx.dataset.label}: ${EUR(ctx.parsed.y)}`}}},scales:{x:{ticks:{color:'#b7c2cf'},grid:{color:'rgba(255,255,255,.06)'}},y:{ticks:{color:'#b7c2cf',callback:v=>NUM(v)},grid:{color:'rgba(255,255,255,.06)'}}}}});
    const yearsValue=document.querySelector('#yearsValue'); if(yearsValue) yearsValue.textContent=`${y} ${y===1 ? (currentLang()==='en'?'year':'rok') : (currentLang()==='en'?'years':(y<5?'roky':'rokov'))}`; document.querySelectorAll('[data-year]').forEach(x=>x.textContent=y);
    document.querySelector('#m1').textContent=EUR(schedules[0].values.at(-1));
    document.querySelector('#m2').textContent=EUR(schedules[1].values.at(-1));
    document.querySelector('#m3').textContent=EUR(schedules[2].values.at(-1));
    const total=init+mon*y*12;
    document.querySelector('#s1').textContent=`${tr('profit')} ${EUR(schedules[0].values.at(-1)-total)}`;
    document.querySelector('#s2').textContent=`${tr('profit')} ${EUR(schedules[1].values.at(-1)-total)}`;
    document.querySelector('#s3').textContent=`${tr('profit')} ${EUR(schedules[2].values.at(-1)-total)}`;
    const tbody=document.querySelector('#yearRows'); tbody.innerHTML='';
    for(let i=0;i<=y;i++){
      tbody.insertAdjacentHTML('beforeend',`<tr><td>${i}</td><td>${EUR(schedules[0].values[i])}</td><td>${EUR(schedules[1].values[i])}</td><td>${EUR(schedules[2].values[i])}</td><td>${EUR(schedules[0].contributed[i])}</td></tr>`)
    }
  }
  [initial,monthly,years,r1,r2,r3].forEach(el=>el.addEventListener('input',()=>{ render(); trackUsage(); }));
  enabled.addEventListener('change',()=>{ render(); trackUsage(); });
  document.addEventListener('languagechange',render);
  trackGA4Event('calculator_opened', { calculator_type: 'investment' });
  render();
}

function initCompound(){
  const initial=document.querySelector('#ciInitial'); if(!initial)return;
  const rate=document.querySelector('#ciRate'), years=document.querySelector('#ciYears'), monthly=document.querySelector('#ciMonthly');
  [initial,monthly].forEach(moneyInput);
  const trackUsage = createCalculatorTracker('compound_interest', () => ({
    period_years: Number(years.value) || 0,
    annual_return: Number(rate.value) || 0
  }));
  function render(){
    const pv=parseMoney(initial.value), pm=parseMoney(monthly.value), r=Number(rate.value)||0, y=Number(years.value)||0;
    const s=investmentSchedule(pv,pm,r,y), total=pv+pm*y*12, end=s.values.at(-1);
    document.querySelector('#ciFinal').textContent=EUR(end); document.querySelector('#ciPaid').textContent=EUR(total); document.querySelector('#ciGain').textContent=EUR(end-total); document.querySelector('#ciMultiple').textContent=(total? (end/total).toFixed(2)+'x':'0x');
    const ctx=document.querySelector('#compoundChart'); if(window.ciChart)window.ciChart.destroy();
    window.ciChart=new Chart(ctx,{type:'line',data:{labels:s.values.map((_,i)=>`${tr('year')} ${i}`),datasets:[{label:tr('final_value'),data:s.values,borderColor:'#2f81f7',tension:.22,pointRadius:0,fill:false,borderWidth:3}]},options:{plugins:{legend:{labels:{color:'#fff'}},tooltip:{callbacks:{label:c=>EUR(c.parsed.y)}}},scales:{x:{ticks:{color:'#b7c2cf'}},y:{ticks:{color:'#b7c2cf',callback:v=>NUM(v)},grid:{color:'rgba(255,255,255,.06)'}}}}});
  }
  [initial,monthly,rate,years].forEach(el=>el.addEventListener('input',()=>{ render(); trackUsage(); }));
  document.addEventListener('languagechange',render);
  trackGA4Event('calculator_opened', { calculator_type: 'compound_interest' });
  render();
}

function initETF(){
  const initial=document.querySelector('#etfInitial');
  if(!initial)return;

  const monthly=document.querySelector('#etfMonthly');
  const rate=document.querySelector('#etfRate');
  const fee=document.querySelector('#etfFee');
  const years=document.querySelector('#etfYears');

  [initial,monthly].forEach(moneyInput);

  const trackUsage = createCalculatorTracker('etf', () => ({
    period_years: Number(years.value) || 0,
    expected_return: Number(rate.value) || 0,
    ter: Number(fee.value) || 0
  }));

  let chart;

  function readInputs(){
    const pv=parseMoney(initial.value);
    const pm=parseMoney(monthly.value);
    const gross=Number(rate.value)||0;
    const f=Number(fee.value)||0;
    const y=Math.max(1,Math.min(60,Number(years.value)||1));
    return {pv,pm,gross,f,y};
  }

  function calc(){
    const inputs=readInputs();

    const grossSchedule=investmentSchedule(
      inputs.pv,
      inputs.pm,
      inputs.gross,
      inputs.y
    );

    const netSchedule=investmentSchedule(
      inputs.pv,
      inputs.pm,
      inputs.gross-inputs.f,
      inputs.y
    );

    const endGross=grossSchedule.values.at(-1);
    const endNet=netSchedule.values.at(-1);
    const paid=inputs.pv + inputs.pm * inputs.y * 12;
    const feeCost=endGross-endNet;
    const profitBefore=endGross-paid;
    const profitShareLost=profitBefore>0 ? Math.max(0,feeCost/profitBefore*100) : 0;

    document.querySelector('#etfGross').textContent=EUR(endGross);
    document.querySelector('#etfNet').textContent=EUR(endNet);
    document.querySelector('#etfFeeCost').textContent=EUR(feeCost);
    const feePct=document.querySelector('#etfFeePct');
    if(feePct) feePct.textContent=`${profitShareLost.toFixed(1)} %`;
    document.querySelector('#etfPaid').textContent=EUR(paid);

    const ctx=document.querySelector('#etfChart');
    if(!ctx)return;

    if(chart){
      chart.destroy();
      chart=null;
    }

    const buildETFChart=()=>{
      if(typeof window.Chart==='undefined'){
        setTimeout(buildETFChart,250);
        return;
      }

      const parent=ctx.parentElement;
      if(parent){
        const h=Math.max(280,parent.clientHeight-20);
        ctx.style.height=h+'px';
      }

      Chart.defaults.font.family='Arial, ui-sans-serif, system-ui, sans-serif';
      Chart.defaults.color='#FFFFFF';

      chart=new Chart(ctx,{
        type:'line',
        data:{
          labels:grossSchedule.values.map((_,i)=>`${tr('year')} ${i}`),
          datasets:[
            {
              label:tr('without_fee'),
              data:grossSchedule.values,
              borderColor:'#7dc6ff',
              backgroundColor:'rgba(125,198,255,.08)',
              tension:.22,
              pointRadius:2,
              pointHoverRadius:5,
              pointBackgroundColor:'#7dc6ff',
              pointBorderColor:'#7dc6ff',
              borderWidth:3,
              fill:false
            },
            {
              label:tr('after_fee'),
              data:netSchedule.values,
              borderColor:'#2f81f7',
              backgroundColor:'rgba(47,129,247,.08)',
              tension:.22,
              pointRadius:2,
              pointHoverRadius:5,
              pointBackgroundColor:'#2f81f7',
              pointBorderColor:'#2f81f7',
              borderWidth:3,
              fill:false
            }
          ]
        },
        options:{
          responsive:true,
          maintainAspectRatio:false,
          animation:false,
          interaction:{mode:'index',intersect:false},
          plugins:{
            legend:{
              display:true,
              labels:{
                color:'#FFFFFF',
                font:{family:'Arial, sans-serif',size:13,weight:'700'},
                usePointStyle:true,
                boxWidth:10,
                padding:18
              }
            },
            tooltip:{
              callbacks:{
                label:c=>`${c.dataset.label}: ${EUR(c.parsed.y)}`
              }
            }
          },
          scales:{
            x:{
              ticks:{color:'#FFFFFF'},
              grid:{color:'rgba(255,255,255,.06)'}
            },
            y:{
              ticks:{color:'#FFFFFF',callback:v=>NUM(v)},
              grid:{color:'rgba(255,255,255,.06)'}
            }
          }
        }
      });
    };

    requestAnimationFrame(buildETFChart);
  }

  [initial,monthly,rate,fee,years].forEach(el=>el.addEventListener('input',()=>{ calc(); trackUsage(); }));
  document.addEventListener('languagechange',calc);
  trackGA4Event('calculator_opened', { calculator_type: 'etf' });

  calc();
  window.addEventListener('load',()=>setTimeout(calc,50),{once:true});
}

function initFunds(){
  const initial=document.querySelector('#fundInitial');
  if(!initial)return;

  const monthly=document.querySelector('#fundMonthly');
  const rate=document.querySelector('#fundRate');
  const management=document.querySelector('#fundManagementFee');
  const entry=document.querySelector('#fundEntryFee');
  const exit=document.querySelector('#fundExitFee');
  const years=document.querySelector('#fundYears');

  [initial,monthly].forEach(moneyInput);

  const trackUsage = createCalculatorTracker('funds', () => ({
    period_years: Number(years.value) || 0,
    expected_return: Number(rate.value) || 0,
    management_fee: Number(management.value) || 0,
    entry_fee: Number(entry.value) || 0,
    exit_fee: Number(exit.value) || 0
  }));

  let chart;

  function readInputs(){
    const pv=parseMoney(initial.value);
    const pm=parseMoney(monthly.value);
    const gross=Number(rate.value)||0;
    const mgmt=Math.max(0,Number(management.value)||0);
    const entryFee=Math.max(0,Math.min(100,Number(entry.value)||0));
    const exitFee=Math.max(0,Math.min(100,Number(exit.value)||0));
    const y=Math.max(1,Math.min(60,Number(years.value)||1));
    return {pv,pm,gross,mgmt,entryFee,exitFee,y};
  }

  function calc(){
    const i=readInputs();
    const entryFactor=1-i.entryFee/100;
    const exitFactor=1-i.exitFee/100;

    // A: no fees at all.
    const noFee=investmentSchedule(i.pv,i.pm,i.gross,i.y);
    // B: entry fee only (applied to every contribution).
    const afterEntry=investmentSchedule(i.pv*entryFactor,i.pm*entryFactor,i.gross,i.y);
    // C: entry + annual management fee.
    const afterManagement=investmentSchedule(i.pv*entryFactor,i.pm*entryFactor,i.gross-i.mgmt,i.y);
    // D: hypothetical redemption value after exit fee at each year.
    const afterAllValues=afterManagement.values.map(v=>v*exitFactor);

    const noFeeEnd=noFee.values.at(-1);
    const entryEnd=afterEntry.values.at(-1);
    const managementEnd=afterManagement.values.at(-1);
    const finalEnd=afterAllValues.at(-1);
    const paid=i.pv+i.pm*i.y*12;

    const entryEffect=noFeeEnd-entryEnd;
    const managementEffect=entryEnd-managementEnd;
    const exitEffect=managementEnd-finalEnd;
    const totalEffect=noFeeEnd-finalEnd;
    const profitBefore=noFeeEnd-paid;
    const profitAfter=finalEnd-paid;
    const profitShareLost=profitBefore>0 ? Math.max(0,totalEffect/profitBefore*100) : 0;

    document.querySelector('#fundGross').textContent=EUR(noFeeEnd);
    document.querySelector('#fundNet').textContent=EUR(finalEnd);
    document.querySelector('#fundFeeCost').textContent=EUR(totalEffect);
    document.querySelector('#fundFeePct').textContent=`${profitShareLost.toFixed(1)} %`;
    document.querySelector('#fundEntryCost').textContent=EUR(entryEffect);
    document.querySelector('#fundManagementCost').textContent=EUR(managementEffect);
    document.querySelector('#fundExitCost').textContent=EUR(exitEffect);
    document.querySelector('#fundProfitBefore').textContent=EUR(profitBefore);
    document.querySelector('#fundProfitAfter').textContent=EUR(profitAfter);
    document.querySelector('#fundPaid').textContent=EUR(paid);

    const ctx=document.querySelector('#fundChart');
    if(!ctx)return;
    if(chart){ chart.destroy(); chart=null; }

    const buildFundChart=()=>{
      if(typeof window.Chart==='undefined'){
        setTimeout(buildFundChart,250);
        return;
      }
      const parent=ctx.parentElement;
      if(parent){ ctx.style.height=Math.max(280,parent.clientHeight-20)+'px'; }
      Chart.defaults.font.family='Arial, ui-sans-serif, system-ui, sans-serif';
      Chart.defaults.color='#FFFFFF';
      const labels=noFee.values.map((_,idx)=>`${tr('year')} ${idx}`);
      chart=new Chart(ctx,{
        type:'line',
        data:{labels,datasets:[
          {label:tr('fund_before_fees'),data:noFee.values,borderColor:'#7dc6ff',backgroundColor:'rgba(125,198,255,.08)',tension:.22,pointRadius:1,pointHoverRadius:5,borderWidth:3,fill:false},
          {label:tr('fund_after_entry'),data:afterEntry.values,borderColor:'#9b8cff',backgroundColor:'rgba(155,140,255,.06)',tension:.22,pointRadius:1,pointHoverRadius:5,borderWidth:2,fill:false},
          {label:tr('fund_after_management'),data:afterManagement.values,borderColor:'#f5a742',backgroundColor:'rgba(245,167,66,.06)',tension:.22,pointRadius:1,pointHoverRadius:5,borderWidth:2,fill:false},
          {label:tr('fund_after_all_fees'),data:afterAllValues,borderColor:'#ff5d6c',backgroundColor:'rgba(255,93,108,.06)',tension:.22,pointRadius:2,pointHoverRadius:5,borderWidth:3,fill:false},
          {label:tr('fund_invested_capital'),data:noFee.contributed,borderColor:'#8b949e',backgroundColor:'transparent',tension:0,pointRadius:0,borderWidth:2,borderDash:[8,6],fill:false}
        ]},
        options:{
          responsive:true,maintainAspectRatio:false,animation:false,interaction:{mode:'index',intersect:false},
          plugins:{
            legend:{display:true,labels:{color:'#FFFFFF',font:{family:'Arial, sans-serif',size:12,weight:'700'},usePointStyle:true,boxWidth:9,padding:14}},
            tooltip:{callbacks:{label:c=>`${c.dataset.label}: ${EUR(c.parsed.y)}`}}
          },
          scales:{
            x:{ticks:{color:'#FFFFFF'},grid:{color:'rgba(255,255,255,.06)'}},
            y:{ticks:{color:'#FFFFFF',callback:v=>NUM(v)},grid:{color:'rgba(255,255,255,.06)'}}
          }
        }
      });
    };
    requestAnimationFrame(buildFundChart);
  }

  [initial,monthly,rate,management,entry,exit,years].forEach(el=>el.addEventListener('input',()=>{calc();trackUsage();}));
  document.addEventListener('languagechange',calc);
  trackGA4Event('calculator_opened',{calculator_type:'funds'});
  calc();
  window.addEventListener('load',()=>setTimeout(calc,50),{once:true});
}

function initInflation(){
  const amount=document.querySelector('#inflAmount'); if(!amount)return; moneyInput(amount);
  const inf=document.querySelector('#inflRate'), years=document.querySelector('#inflYears');
  function render(){const a=parseMoney(amount.value),r=Number(inf.value)||0,y=Number(years.value)||0; const real=a/Math.pow(1+r/100,y); document.querySelector('#inflFuture').textContent=EUR(real); document.querySelector('#inflLoss').textContent=EUR(a-real); document.querySelector('#inflPct').textContent=`${a?((1-real/a)*100).toFixed(1):0} %`;}
  [amount,inf,years].forEach(el=>el.addEventListener('input',()=>{ render(); trackUsage(); }));
  document.addEventListener('languagechange',render);
  trackGA4Event('calculator_opened', { calculator_type: 'inflation' });
  render();
}

function initFire(){
  const current=document.querySelector('#fireCurrent'); if(!current)return; [current,document.querySelector('#fireMonthly'),document.querySelector('#fireExpenses')].forEach(moneyInput);
  const monthly=document.querySelector('#fireMonthly'), expenses=document.querySelector('#fireExpenses'), ret=document.querySelector('#fireReturn'), swr=document.querySelector('#fireSWR');
  const trackUsage = createCalculatorTracker('fire', () => ({
    expected_return: Number(ret.value) || 0,
    withdrawal_rate: Number(swr.value) || 0
  }));
  function render(){
    const c=parseMoney(current.value), m=parseMoney(monthly.value), e=parseMoney(expenses.value), r=Number(ret.value)||0, s=Number(swr.value)||4; const target=e/(s/100);
    let val=c, months=0; const mr=monthlyRate(r); while(val<target && months<1200){val*=1+mr;val+=m;months++;} const years=months/12;
    document.querySelector('#fireTarget').textContent=EUR(target); document.querySelector('#fireYears').textContent=months>=1200?'—':years.toFixed(1)+' r.'; document.querySelector('#fireGap').textContent=EUR(Math.max(0,target-c));
  }
  [current,monthly,expenses,ret,swr].forEach(el=>el.addEventListener('input',()=>{ render(); trackUsage(); }));
  document.addEventListener('languagechange',render);
  trackGA4Event('calculator_opened', { calculator_type: 'fire' });
  render();
}

function initRetirement(){
  const age=document.querySelector('#retAge'); if(!age)return; const retire=document.querySelector('#retRetire'), savings=document.querySelector('#retSavings'), monthly=document.querySelector('#retMonthly'), rate=document.querySelector('#retReturn'); moneyInput(savings);moneyInput(monthly);
  function render(){const a=Number(age.value)||0, ra=Number(retire.value)||0, s=parseMoney(savings.value),m=parseMoney(monthly.value),r=Number(rate.value)||0,y=Math.max(0,ra-a);const sch=investmentSchedule(s,m,r,y),end=sch.values.at(-1), income=end*.04/12;document.querySelector('#retYears').textContent=y;document.querySelector('#retValue').textContent=EUR(end);document.querySelector('#retIncome').textContent=EUR(income);}
  [age,retire,savings,monthly,rate].forEach(el=>el.addEventListener('input',()=>{ render(); trackUsage(); }));
  document.addEventListener('languagechange',render);
  trackGA4Event('calculator_opened', { calculator_type: 'retirement' });
  render();
}



/* ============================================================
   V25 PROFESSIONAL BLOG BEHAVIOR
   ============================================================ */
function initBlog(){
  const search=document.querySelector('#blogSearch');
  const grid=document.querySelector('#blogGrid');
  if(!search || !grid) return;

  const empty=document.querySelector('#blogEmpty');
  const filterButtons=Array.from(document.querySelectorAll('.blog-filter[data-category]'));
  let category='all';

  function getCards(){
    return Array.from(document.querySelectorAll('.featured-card[data-category], #blogGrid [data-category]'));
  }

  function updatePlaceholder(){
    const lang=currentLang()==='en'?'en':'sk';
    search.placeholder=search.dataset['placeholder'+(lang==='en'?'En':'Sk')] || search.placeholder;
  }

  function apply(){
    const q=(search.value||'').trim().toLocaleLowerCase();
    let shown=0;

    getCards().forEach(card=>{
      const cardCategory=(card.getAttribute('data-category')||'').trim().toLowerCase();
      const matchesCategory=category==='all' || cardCategory===category;
      const hay=((card.getAttribute('data-search')||'')+' '+(card.textContent||'')).toLocaleLowerCase();
      const matchesSearch=q==='' || hay.includes(q);
      const visible=matchesCategory && matchesSearch;

      // Force visibility directly so the filter cannot be overridden by cached CSS.
      card.hidden=!visible;
      card.style.display=visible?'':'none';
      card.setAttribute('aria-hidden', visible?'false':'true');
      if(visible) shown++;
    });

    if(empty){
      empty.hidden=shown>0;
      empty.style.display=shown>0?'none':'';
    }
  }

  filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
    category=(btn.getAttribute('data-category')||'all').trim().toLowerCase();
    filterButtons.forEach(x=>x.classList.toggle('active',x===btn));
    apply();
  }));

  search.addEventListener('input',apply);
  search.addEventListener('search',apply);
  document.addEventListener('languagechange',()=>{updatePlaceholder();apply();});

  updatePlaceholder();
  apply();
}

function bootInvestCalc(){
  initLanguageSwitcher();
  setupNav();
  initInvestment();
  initCompound();
  initETF();
  initFunds();
  initInflation();
  initFire();
  initRetirement();
  initBlog();
}

// app.js is loaded with defer on the pages, so the DOM is already parsed.
// Start immediately to prevent any visible SK -> EN language flash during navigation.
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootInvestCalc, {once:true});
} else {
  bootInvestCalc();
}


/* ============================================================
   ARTICLE TRACKING
   ============================================================ */
(function () {
  function track(name, params) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, params || {});
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (document.body.dataset.page !== 'article') return;
    var slug = document.body.dataset.article || 'article';
    track('article_viewed', { article_slug: slug });
  });
})();
