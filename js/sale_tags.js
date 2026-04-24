(function() {
  'use strict';

  var priceMap = {};

  function buildPriceMap() {
    var cards = document.querySelectorAll('[data-pid]');
    cards.forEach(function(card) {
      var pid = card.getAttribute('data-pid');
      var dp = card.getAttribute('data-price');
      var img = card.querySelector('.card-img img');
      if (pid && dp) {
        priceMap[pid] = { price: parseFloat(dp), img: img ? (img.getAttribute('src') || '') : '' };
      }
    });
  }

  fetch('sale_prices.json')
    .then(function(r) { return r.ok ? r.json() : {}; })
    .catch(function() { return {}; })
    .then(function(saleMap) {
      if (!saleMap || Object.keys(saleMap).length === 0) saleMap = {};
      buildPriceMap();
      applySaleTags(saleMap);
      applyModalFix(saleMap);
      new MutationObserver(function() {
        applySaleTags(saleMap);
        applyModalFix(saleMap);
      }).observe(document.body, { childList: true, subtree: true });
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

  function applyModalFix(saleMap) {
    var modal = document.querySelector('.modal');
    if (!modal) return;
    if (modal.getAttribute('data-modal-fixed')) return;

    var modalImg = modal.querySelector('.modal-img img');
    if (!modalImg) return;
    var src = modalImg.getAttribute('src') || '';
    if (!src) return;

    var correctPrice = null;
    var pid = null;
    var keys = Object.keys(priceMap);
    for (var i = 0; i < keys.length; i++) {
      if (priceMap[keys[i]].img === src) {
        correctPrice = priceMap[keys[i]].price;
        pid = keys[i];
        break;
      }
    }
    if (!correctPrice) return;

    var compare = findByImage(saleMap, src);

    var modalPrice = modal.querySelector('.modal-price');
    if (modalPrice) {
      var currentModalPrice = parseFloat(modalPrice.textContent.replace(/[^0-9.]/g, ''));
      if (currentModalPrice !== correctPrice || !modalPrice.getAttribute('data-sale-done')) {
        var priceHtml = '$' + correctPrice.toFixed(2);
        if (compare && compare > correctPrice) {
          var pct = Math.round(((compare - correctPrice) / compare) * 100);
          priceHtml += ' <span style="text-decoration:line-through;color:#ef4444;font-size:15px;font-weight:500;margin-left:6px">$' + compare.toFixed(2) + '</span>';
          priceHtml += ' <span style="background:#ef4444;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;margin-left:6px">' + pct + '% OFF</span>';
        }
        modalPrice.innerHTML = priceHtml;
        modalPrice.setAttribute('data-sale-done', '1');
      }
    }

    var addBtn = modal.querySelector('.modal-add');
    if (addBtn) {
      var btnText = 'Add to Cart \u2014 $' + correctPrice.toFixed(2);
      if (compare && compare > correctPrice) {
        btnText += ' <span style="text-decoration:line-through;color:rgba(255,255,255,0.7);font-size:13px;margin-left:4px">$' + compare.toFixed(2) + '</span>';
      }
      addBtn.innerHTML = btnText;

      if (pid) {
        var card = document.querySelector('[data-pid="' + pid + '"]');
        if (card) {
          var cardName = card.querySelector('.card-name');
          var name = cardName ? cardName.textContent : '';
          var sName = name.replace(/'/g, "\\'");
          var sImg = src.replace(/'/g, "\\'");
          addBtn.setAttribute('onclick', "PD.addToCart('" + pid + "','" + sName + "'," + correctPrice.toFixed(2) + ",'" + sImg + "');PD.closeProduct()");
        }
      }
    }

    modal.setAttribute('data-modal-fixed', '1');
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