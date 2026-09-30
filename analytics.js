/* ============================================================
   INVESTCALC.EU - GA4 CUSTOM EVENTS
   Measurement ID: G-PC1F010733

   Sends only non-sensitive usage parameters.
   Exact money amounts are intentionally NOT sent to GA4.
   ============================================================ */
(function () {
  "use strict";

  var MEASUREMENT_ID = "G-PC1F010733";

  function track(name, params) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, params || {});
  }

  function pageType() {
    var path = window.location.pathname.toLowerCase();
    if (path.indexOf("investment") !== -1) return "investment";
    if (path.indexOf("etf") !== -1) return "etf";
    if (path.indexOf("compound") !== -1) return "compound_interest";
    if (path.indexOf("inflation") !== -1) return "inflation";
    if (path.indexOf("fire") !== -1) return "fire";
    if (path.indexOf("retirement") !== -1) return "retirement";
    return null;
  }

  function value(id) {
    var el = document.getElementById(id);
    return el ? el.value : undefined;
  }

  function numberValue(id) {
    var v = value(id);
    if (v === undefined || v === "") return undefined;
    var n = Number(String(v).replace(/\s/g, "").replace(",", "."));
    return Number.isFinite(n) ? n : undefined;
  }

  function buildParams(type) {
    var p = { calculator_type: type };

    if (type === "investment") {
      p.period_years = numberValue("years");
      p.monthly_enabled = !!document.getElementById("monthlyEnabled")?.checked;
      p.return_scenario_1 = numberValue("r1");
      p.return_scenario_2 = numberValue("r2");
      p.return_scenario_3 = numberValue("r3");
    }

    if (type === "etf") {
      p.period_years = numberValue("etfYears");
      p.expected_return = numberValue("etfRate");
      p.ter = numberValue("etfFee");
    }

    if (type === "compound_interest") {
      p.period_years = numberValue("ciYears");
      p.expected_return = numberValue("ciRate");
    }

    if (type === "inflation") {
      p.period_years = numberValue("inflYears");
      p.inflation_rate = numberValue("inflRate");
    }

    if (type === "fire") {
      p.expected_return = numberValue("fireReturn");
      p.withdrawal_rate = numberValue("fireSWR");
    }

    if (type === "retirement") {
      p.current_age = numberValue("retAge");
      p.retirement_age = numberValue("retRetire");
      p.period_years = numberValue("retYears");
      p.expected_return = numberValue("retReturn");
    }

    Object.keys(p).forEach(function (k) {
      if (p[k] === undefined || p[k] === null || p[k] === "") delete p[k];
    });

    return p;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var type = pageType();
    if (!type) return;

    track("calculator_opened", {
      calculator_type: type
    });

    var trackedInputs = document.querySelectorAll(
      ".calculator input, .calculator select, .calculator textarea"
    );

    var timer = null;
    var lastSignature = "";

    trackedInputs.forEach(function (el) {
      el.addEventListener("input", schedule);
      el.addEventListener("change", schedule);
    });

    function schedule() {
      window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        var params = buildParams(type);
        var signature = JSON.stringify(params);
        if (signature === lastSignature) return;
        lastSignature = signature;
        track("calculator_used", params);
      }, 1500);
    }

    document.addEventListener("click", function (event) {
      var button = event.target.closest(".lang-btn");
      if (!button) return;
      track("language_changed", {
        language: button.dataset.lang || "unknown"
      });
    });
  });
})();
