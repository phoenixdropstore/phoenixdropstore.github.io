(function() {
  'use strict';

  fetch('sale_prices.json')
    .then(function(r) { return r.ok ? r.json() : {}; })
    .catch(function() { return {}; })
    .then(function(saleMap) {
      if (!saleMap || Object.keys(saleMap).length === 0) saleMap = {};
      patchProductsArray();
      applySaleTags(saleMap);
      new MutationObserver(function() {
        applySaleToModal(saleMap);
      }).observe(document.body, { childList: true, subtree: true });
    });

  function patchProductsArray() {
    if (typeof products === 'undefined') return;
    var cards = document.querySelectorAll('[data-pid]');
    var pidPriceMap = {};
    cards.forEach(function(card) {
      var pid = card.getAttribute('data-pid');
      var dp = card.getAttribute('data-price');
      if (pid && dp) pidPriceMap[pid] = parseFloat(dp);
    });
    for (var i = 0; i < products.length; i++) {
      var p = products[i];
      if (pidPriceMap[p.pid] && pidPriceMap[p.pid] !== p.price) {
        p.price = pidPriceMap[p.pid];
      }
    }
  }

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
      var cur = parseFloat(card.getAttribute('data-price') || priceEl.textContent.replace('$', ''));
      if (!cur || compare <= cur) return;
      var pct = Math.round(((compare - cur) / compare) * 100);
      priceEl.innerHTML =
        '$' + cur.toFixed(2) +
        ' <span style="text-decoration:line-through;color:#ef4444;font-size:13px;font-weight:500;margin-left:4px">$' + compare.toFixed(2) + '</span>' +
        ' <span style="background:#ef4444;color:#fff;font-size:10px;font-weight:700;padding:2px 6px;border-radius:4px;margin-left:4px">' + pct + '% OFF</span>';
      card.setAttribute('data-sale-done', '1');
    });
  }

  function applySaleToModal(saleMap) {
    var modal = document.querySelector('.modal');
    if (!modal) return;
    var modalPrice = modal.querySelector('.modal-price');
    if (!modalPrice) return;
    if (modalPrice.getAttribute('data-sale-done')) return;
    var modalImg = modal.querySelector('.modal-img img');
    if (!modalImg) return;
    var src = modalImg.getAttribute('src') || '';
    var compare = findByImage(saleMap, src);
    if (!compare) return;
    var cur = parseFloat(modalPrice.textContent.replace(/[^0-9.]/g, ''));
    if (!cur || compare <= cur) return;
    var pct = Math.round(((compare - cur) / compare) * 100);
    modalPrice.innerHTML =
      '$' + cur.toFixed(2) +
      ' <span style="text-decoration:line-through;color:#ef4444;font-size:15px;font-weight:500;margin-left:6px">$' + compare.toFixed(2) + '</span>' +
      ' <span style="background:#ef4444;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;margin-left:6px">' + pct + '% OFF</span>';
    modalPrice.setAttribute('data-sale-done', '1');

    var addBtn = modal.querySelector('.modal-add');
    if (addBtn) {
      var btnMatch = addBtn.textContent.match(/\$([0-9.]+)/);
      var btnPrice = btnMatch ? parseFloat(btnMatch[1]) : cur;
      addBtn.innerHTML = 'Add to Cart \u2014 $' + btnPrice.toFixed(2) +
        ' <span style="text-decoration:line-through;color:rgba(255,255,255,0.7);font-size:13px;margin-left:4px">$' + compare.toFixed(2) + '</span>';
      addBtn.setAttribute('data-sale-done', '1');
    }
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