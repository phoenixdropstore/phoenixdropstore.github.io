/**
 * sale_tags.js - Adds red strikethrough "compare at" prices to product cards
 * Reads compare_price from product data injected by store_generator.py
 * Works as a post-render enhancement - no changes to store_generator.py needed
 * 
 * How it works:
 * 1. store_manager.py saves compare_price to live_products.json
 * 2. store_generator.py passes compare_price as data-compare attribute on price elements
 * 3. This script finds those attributes and injects the strikethrough display
 * 
 * Alternative approach (used here): reads from a sidecar JSON file
 */
(function() {
  'use strict';

  var SALE_DATA_URL = 'data/sale_prices.json';
  
  // Try to load sale data
  fetch(SALE_DATA_URL)
    .then(function(r) { return r.ok ? r.json() : {}; })
    .catch(function() { return {}; })
    .then(function(saleMap) {
      if (!saleMap || Object.keys(saleMap).length === 0) return;
      applySaleTags(saleMap);
      // Also apply when modal opens (MutationObserver)
      observeModals(saleMap);
    });

  function applySaleTags(saleMap) {
    // Find all product cards
    var cards = document.querySelectorAll('.product-card');
    cards.forEach(function(card) {
      var nameEl = card.querySelector('.product-title') || card.querySelector('h3');
      if (!nameEl) return;
      var name = nameEl.textContent.trim();
      
      // Match by product name (fuzzy - first 30 chars)
      var key = findKey(saleMap, name);
      if (!key) return;
      
      var comparePrice = saleMap[key];
      if (!comparePrice) return;
      
      // Find price element
      var priceEl = card.querySelector('.product-price') || card.querySelector('.price');
      if (!priceEl) return;
      
      // Don't double-apply
      if (priceEl.querySelector('.price-was')) return;
      
      var currentText = priceEl.textContent.trim();
      var currentVal = parseFloat(currentText.replace('$', ''));
      
      if (comparePrice <= currentVal) return;
      
      // Wrap existing price and add strikethrough
      priceEl.innerHTML = 
        '<span class="price-sale-wrap">' +
          '<span class="price-now">' + currentText + '</span>' +
          '<span class="price-was">$' + comparePrice.toFixed(2) + '</span>' +
          '<span class="sale-badge">SALE</span>' +
        '</span>';
    });
  }

  function findKey(map, name) {
    // Exact match first
    if (map[name]) return name;
    // Fuzzy: match first 25 characters
    var prefix = name.substring(0, 25).toLowerCase();
    var keys = Object.keys(map);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i].substring(0, 25).toLowerCase() === prefix) return keys[i];
    }
    return null;
  }

  function observeModals(saleMap) {
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        m.addedNodes.forEach(function(node) {
          if (node.nodeType === 1 && node.querySelector && node.querySelector('.modal-price')) {
            // Modal opened, check if this product has a sale price
            var modalTitle = node.querySelector('.modal-title') || node.querySelector('h2');
            if (!modalTitle) return;
            var key = findKey(saleMap, modalTitle.textContent.trim());
            if (!key) return;
            var comparePrice = saleMap[key];
            var modalPriceEl = node.querySelector('.modal-price');
            if (!modalPriceEl || modalPriceEl.querySelector('.price-was')) return;
            var currentText = modalPriceEl.textContent.trim();
            var currentVal = parseFloat(currentText.replace('$', ''));
            if (comparePrice <= currentVal) return;
            modalPriceEl.innerHTML = 
              '<span class="price-now">' + currentText + '</span>' +
              '<span class="price-was">$' + comparePrice.toFixed(2) + '</span>' +
              '<span class="sale-badge">SALE</span>';
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Add CSS dynamically
  var style = document.createElement('style');
  style.textContent = 
    '.price-was { text-decoration:line-through; color:#ef4444; font-size:13px; font-weight:500; margin-left:6px; }' +
    '.price-sale-wrap { display:flex; align-items:center; gap:2px; flex-wrap:wrap; }' +
    '.price-now { font-weight:700; }' +
    '.sale-badge { background:#ef4444; color:#fff; font-size:10px; font-weight:700; padding:2px 7px; border-radius:4px; margin-left:6px; text-transform:uppercase; letter-spacing:.5px; }';
  document.head.appendChild(style);

})();