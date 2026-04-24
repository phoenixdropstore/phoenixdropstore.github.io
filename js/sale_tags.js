(function() {
  'use strict';
  fetch('sale_prices.json')
    .then(function(r) { return r.ok ? r.json() : {}; })
    .catch(function() { return {}; })
    .then(function(saleMap) {
      if (!saleMap || Object.keys(saleMap).length === 0) return;
      applySaleTags(saleMap);
      new MutationObserver(function() { applySaleTags(saleMap); })
        .observe(document.body, { childList: true, subtree: true });
    });

  function applySaleTags(saleMap) {
    var cards = document.querySelectorAll('[data-pid]');
    cards.forEach(function(card) {
      if (card.getAttribute('data-sale-done')) return;
      var img = card.querySelector('.card-img img');
      if (!img) return;
      var src = img.getAttribute('src') || '';
      var compare = findByImage(saleMap, src);
      if (!compare) return;
      var priceEl = card.querySelector('.c-price');
      if (!priceEl) return;
      var cur = parseFloat(priceEl.textContent.replace('$', ''));
      if (!cur || compare <= cur) return;
      var pct = Math.round(((compare - cur) / compare) * 100);
      priceEl.innerHTML =
        '$' + cur.toFixed(2) +
        ' <span style="text-decoration:line-through;color:#ef4444;font-size:13px;font-weight:500;margin-left:4px">$' + compare.toFixed(2) + '</span>' +
        ' <span style="background:#ef4444;color:#fff;font-size:10px;font-weight:700;padding:2px 6px;border-radius:4px;margin-left:4px">' + pct + '% OFF</span>';
      card.setAttribute('data-sale-done', '1');
    });
  }

  function findByImage(map, imgSrc) {
    if (!imgSrc) return null;
    if (map[imgSrc]) return map[imgSrc];
    var keys = Object.keys(map);
    for (var i = 0; i < keys.length; i++) {
      if (imgSrc === keys[i]) return map[keys[i]];
      if (imgSrc.indexOf(keys[i]) >= 0) return map[keys[i]];
      if (keys[i].indexOf(imgSrc) >= 0) return map[keys[i]];
    }
    return null;
  }
})();