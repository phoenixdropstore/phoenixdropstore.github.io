(function() {
  'use strict';

  /* ---- STEP 1: Patch products array immediately (sync, no fetch needed) ---- */
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

  /* Run immediately - no async, no fetch, just sync DOM read */
  patchProductsArray();

  /* ---- STEP 2: Fetch sale data for strikethrough display ---- */
  var globalSaleMap = {};

  fetch('sale_prices.json')
    .then(function(r) { return r.ok ? r.json() : {}; })
    .catch(function() { return {}; })
    .then(function(saleMap) {
      if (!saleMap) saleMap = {};
      globalSaleMap = saleMap;
      applySaleTagsToCards();
    });

  /* ---- STEP 3: MutationObserver for ALL DOM changes ---- */
  new MutationObserver(function() {
    applySaleTagsToCards();
    fixModal();
  }).observe(document.body, { childList: true, subtree: true });

  /* ---- Card sale tags (strikethrough on browse grid) ---- */
  function applySaleTagsToCards() {
    if (!globalSaleMap || Object.keys(globalSaleMap).length === 0) return;
    var cards = document.querySelectorAll('[data-pid]');
    cards.forEach(function(card) {
      if (card.getAttribute('data-sale-done')) return;
      var img = card.querySelector('.card-img img');
      if (!img) return;
      var src = img.getAttribute('src') || '';
      var compare = findByImage(globalSaleMap, src);
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

  /* ---- Modal fix: correct price + sale strikethrough ---- */
  function fixModal() {
    var modal = document.querySelector('.modal');
    if (!modal) return;

    var modalPrice = modal.querySelector('.modal-price');
    if (!modalPrice) return;

    /* Check if we already fixed THIS specific modal content */
    var modalImg = modal.querySelector('.modal-img img');
    if (!modalImg) return;
    var src = modalImg.getAttribute('src') || '';
    if (!src) return;

    var fixedKey = modal.getAttribute('data-fixed-src');
    if (fixedKey === src) return;

    /* Find correct price from data-price on the matching card */
    var correctPrice = null;
    var matchCard = null;
    var cards = document.querySelectorAll('[data-pid]');
    cards.forEach(function(card) {
      var cImg = card.querySelector('.card-img img');
      if (cImg && cImg.getAttribute('src') === src) {
        correctPrice = parseFloat(card.getAttribute('data-price'));
        matchCard = card;
      }
    });

    if (!correctPrice) return;

    var compare = findByImage(globalSaleMap, src);

    /* Fix modal price display */
    var priceHtml = '$' + correctPrice.toFixed(2);
    if (compare && compare > correctPrice) {
      var pct = Math.round(((compare - correctPrice) / compare) * 100);
      priceHtml += ' <span style="text-decoration:line-through;color:#ef4444;font-size:15px;font-weight:500;margin-left:6px">$' + compare.toFixed(2) + '</span>';
      priceHtml += ' <span style="background:#ef4444;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;margin-left:6px">' + pct + '% OFF</span>';
    }
    modalPrice.innerHTML = priceHtml;

    /* Fix Add to Cart button */
    var addBtn = modal.querySelector('.modal-add');
    if (addBtn) {
      var btnHtml = 'Add to Cart \u2014 $' + correctPrice.toFixed(2);
      if (compare && compare > correctPrice) {
        btnHtml += ' <span style="text-decoration:line-through;color:rgba(255,255,255,0.7);font-size:13px;margin-left:4px">$' + compare.toFixed(2) + '</span>';
      }
      addBtn.innerHTML = btnHtml;

      /* Fix onclick to use correct price */
      if (matchCard) {
        var pid = matchCard.getAttribute('data-pid');
        var cardName = modal.querySelector('.modal-name');
        var name = cardName ? cardName.textContent.replace(/'/g, "\\'") : '';
        var sImg = src.replace(/'/g, "\\'");
        addBtn.setAttribute('onclick', "PD.addToCart('" + pid + "','" + name + "'," + correctPrice.toFixed(2) + ",'" + sImg + "');PD.closeProduct()");
      }
    }

    /* Mark this modal as fixed for this specific product image */
    modal.setAttribute('data-fixed-src', src);
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