(function() {
  'use strict';

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

  patchProductsArray();

  var globalSaleMap = {};
  var cardPriceMap = {};

  function buildCardPriceMap() {
    var cards = document.querySelectorAll('[data-pid]');
    cards.forEach(function(card) {
      var img = card.querySelector('.card-img img');
      if (!img) return;
      var src = img.getAttribute('src') || '';
      var dp = card.getAttribute('data-price');
      var pid = card.getAttribute('data-pid');
      if (src && dp) cardPriceMap[src] = { price: parseFloat(dp), pid: pid };
    });
  }

  buildCardPriceMap();

  fetch('sale_prices.json')
    .then(function(r) { return r.ok ? r.json() : {}; })
    .catch(function() { return {}; })
    .then(function(saleMap) {
      if (!saleMap) saleMap = {};
      globalSaleMap = saleMap;
      applySaleTagsToCards();
    });

  new MutationObserver(function() {
    applySaleTagsToCards();
    fixModal();
  }).observe(document.body, { childList: true, subtree: true });

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

  function fixModal() {
    var modal = document.querySelector('.modal');
    if (!modal) return;
    var modalPrice = modal.querySelector('.modal-price');
    if (!modalPrice) return;
    var modalImg = modal.querySelector('.modal-img img');
    if (!modalImg) return;
    var src = modalImg.getAttribute('src') || '';
    if (!src) return;

    var cardData = cardPriceMap[src];
    if (!cardData) return;
    var correctPrice = cardData.price;
    var pid = cardData.pid;

    var currentText = modalPrice.textContent || '';
    var currentNum = parseFloat(currentText.replace(/[^0-9.]/g, ''));
    var compare = findByImage(globalSaleMap, src);

    var alreadyFixed = (currentNum === correctPrice) && modalPrice.getAttribute('data-sale-done');
    if (alreadyFixed) return;

    var priceHtml = '$' + correctPrice.toFixed(2);
    if (compare && compare > correctPrice) {
      var pct = Math.round(((compare - correctPrice) / compare) * 100);
      priceHtml += ' <span style="text-decoration:line-through;color:#ef4444;font-size:15px;font-weight:500;margin-left:6px">$' + compare.toFixed(2) + '</span>';
      priceHtml += ' <span style="background:#ef4444;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;margin-left:6px">' + pct + '% OFF</span>';
    }
    modalPrice.innerHTML = priceHtml;
    modalPrice.setAttribute('data-sale-done', '1');

    var addBtn = modal.querySelector('.modal-add');
    if (addBtn) {
      var btnHtml = 'Add to Cart \u2014 $' + correctPrice.toFixed(2);
      if (compare && compare > correctPrice) {
        btnHtml += ' <span style="text-decoration:line-through;color:rgba(255,255,255,0.7);font-size:13px;margin-left:4px">$' + compare.toFixed(2) + '</span>';
      }
      addBtn.innerHTML = btnHtml;

      var cardName = modal.querySelector('.modal-name');
      var name = cardName ? cardName.textContent.replace(/'/g, "\\'") : '';
      var sImg = src.replace(/'/g, "\\'");
      addBtn.setAttribute('onclick', "PD.addToCart('" + pid + "','" + name + "'," + correctPrice.toFixed(2) + ",'" + sImg + "');PD.closeProduct()");
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