/* reviews.js - Customer review submission form (PhoenixDrop v7.9) */
(function () {
  "use strict";

  var FORMSPREE = "https://formspree.io/f/xvzddvev";

  /* Inject review form into modal when a product is opened */
  var observer = new MutationObserver(function () {
    var modal = document.querySelector(".modal");
    if (!modal) return;
    /* Already injected? Skip */
    if (modal.querySelector(".review-form-wrap")) return;
    /* Find anchor: review-section if it exists, otherwise modal-trust */
    var anchor = modal.querySelector(".review-section") || modal.querySelector(".modal-trust");
    if (!anchor) return;

    var pid = "";
    var pname = "";
    var addBtn = modal.querySelector(".modal-add");
    if (addBtn) {
      var onclick = addBtn.getAttribute("onclick") || "";
      var m = onclick.match(/addToCart\('([^']+)','([^']+)'/);
      if (m) {
        pid = m[1];
        pname = m[2];
      }
    }

    var wrap = document.createElement("div");
    wrap.className = "review-form-wrap";
    wrap.innerHTML =
      '<h4 class="review-form-title">\u270F\uFE0F Write a Review</h4>' +
      '<form class="review-form" action="' + FORMSPREE + '" method="POST">' +
      '<input type="hidden" name="_subject" value="New Review: ' + esc(pname) + '">' +
      '<input type="hidden" name="product_id" value="' + esc(pid) + '">' +
      '<input type="hidden" name="product_name" value="' + esc(pname) + '">' +
      '<div class="star-picker" data-pid="' + esc(pid) + '">' +
      '<span class="star-pick" data-star="1">\u2606</span>' +
      '<span class="star-pick" data-star="2">\u2606</span>' +
      '<span class="star-pick" data-star="3">\u2606</span>' +
      '<span class="star-pick" data-star="4">\u2606</span>' +
      '<span class="star-pick" data-star="5">\u2606</span>' +
      '<input type="hidden" name="rating" value="0" class="star-val">' +
      "</div>" +
      '<input type="text" name="name" placeholder="Your name" required class="review-input">' +
      '<textarea name="review" placeholder="Share your experience..." required class="review-textarea"></textarea>' +
      '<button type="submit" class="btn-review-submit">Submit Review</button>' +
      '<div class="review-thanks">Thank you for your review! \u2705</div>' +
      "</form>";

    /* Insert after review-section if exists, otherwise after modal-trust */
    anchor.parentNode.insertBefore(wrap, anchor.nextSibling);
  });

  observer.observe(document.body, { childList: true, subtree: true });

  /* Star picker - event delegation */
  document.addEventListener("click", function (e) {
    var star = e.target.closest(".star-pick");
    if (!star) return;
    var picker = star.closest(".star-picker");
    if (!picker) return;
    var n = parseInt(star.getAttribute("data-star"), 10);
    var stars = picker.querySelectorAll(".star-pick");
    var valInput = picker.querySelector(".star-val");
    for (var i = 0; i < stars.length; i++) {
      stars[i].textContent = i < n ? "\u2605" : "\u2606";
      stars[i].classList.toggle("active", i < n);
    }
    if (valInput) valInput.value = n;
  });

  /* Star hover */
  document.addEventListener("mouseover", function (e) {
    var star = e.target.closest(".star-pick");
    if (!star) return;
    var picker = star.closest(".star-picker");
    if (!picker) return;
    var n = parseInt(star.getAttribute("data-star"), 10);
    var stars = picker.querySelectorAll(".star-pick");
    for (var i = 0; i < stars.length; i++) {
      stars[i].style.color = i < n ? "#f59e0b" : "#d1d5db";
    }
  });

  document.addEventListener("mouseout", function (e) {
    var star = e.target.closest(".star-pick");
    if (!star) return;
    var picker = star.closest(".star-picker");
    if (!picker) return;
    var valInput = picker.querySelector(".star-val");
    var current = valInput ? parseInt(valInput.value, 10) : 0;
    var stars = picker.querySelectorAll(".star-pick");
    for (var i = 0; i < stars.length; i++) {
      stars[i].style.color = i < current ? "#f59e0b" : "#d1d5db";
    }
  });

  /* Form submission */
  document.addEventListener("submit", function (e) {
    var form = e.target.closest(".review-form");
    if (!form) return;
    e.preventDefault();
    var btn = form.querySelector(".btn-review-submit");
    var thanks = form.querySelector(".review-thanks");
    var valInput = form.querySelector(".star-val");
    if (valInput && parseInt(valInput.value, 10) < 1) {
      alert("Please select a star rating!");
      return;
    }
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Submitting...";
    }
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (r) {
        if (r.ok) {
          form.reset();
          var stars = form.querySelectorAll(".star-pick");
          for (var i = 0; i < stars.length; i++) {
            stars[i].textContent = "\u2606";
            stars[i].classList.remove("active");
            stars[i].style.color = "#d1d5db";
          }
          if (valInput) valInput.value = "0";
          if (thanks) thanks.classList.add("show");
          setTimeout(function () {
            if (thanks) thanks.classList.remove("show");
          }, 4000);
        } else {
          alert("Something went wrong. Please try again.");
        }
        if (btn) {
          btn.disabled = false;
          btn.textContent = "Submit Review";
        }
      })
      .catch(function () {
        alert("Network error. Please try again.");
        if (btn) {
          btn.disabled = false;
          btn.textContent = "Submit Review";
        }
      });
  });

  function esc(s) {
    var d = document.createElement("div");
    d.appendChild(document.createTextNode(s));
    return d.innerHTML;
  }
})();