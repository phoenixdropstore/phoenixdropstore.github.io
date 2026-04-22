(function(){
"use strict";
var cart=JSON.parse(localStorage.getItem("pd_cart")||"[]");
var products=[{"pid": "9aabc91f", "name": "Airlonv LED Desk Lamp", "img": "https://m.media-amazon.com/images/I/71Xa0fzUiGL._AC_UL960_QL65_.jpg", "price": 20.98, "cat": "Desk", "desc": "Clean up your workspace with one simple upgrade.", "stars": "", "stock": 3, "sold": 156}, {"pid": "65da88de", "name": "Veken Coffee Canister", "img": "https://m.media-amazon.com/images/I/71fqTPrjLbL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 7, "sold": 23}, {"pid": "e7c75254", "name": "OPNICE Desk Organizer and Accessories 2-Tier", "img": "https://m.media-amazon.com/images/I/81MeUftFm8L._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Desk", "desc": "5-tier mesh design. Everything visible, nothing lost.", "stars": "", "stock": 12, "sold": 203}, {"pid": "aebb5631", "name": "House Gem Mug Warmer - 36W Coffee Mug Warmer", "img": "https://m.media-amazon.com/images/I/61SsDfH706L._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "stars": "", "stock": 11, "sold": 341}, {"pid": "a3e34beb", "name": "Adjustable Laptop Stand", "img": "https://m.media-amazon.com/images/I/71Api8I7QML._AC_UL960_QL65_.jpg", "price": 17.99, "cat": "Desk", "desc": "Elevates to eye level. Prevents neck strain, improves posture instantly.", "stars": "", "stock": 12, "sold": 68}, {"pid": "dbfe8963", "name": "ProsourceFit Exercise Balance Pad Non-Slip", "img": "https://m.media-amazon.com/images/I/71YPoM9x53L._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "stars": "", "stock": 14, "sold": 23}, {"pid": "4e875753", "name": "ANBOXIT Countertop Coffee Station Organizer 2 Tier", "img": "https://m.media-amazon.com/images/I/71CT4aiVuRL._AC_UL960_QL65_.jpg", "price": 21.99, "cat": "Kitchen", "desc": "Professional results without professional prices.", "stars": "", "stock": 14, "sold": 156}, {"pid": "5c7d6f01", "name": "UNNEES Gravity Electric Salt and Pepper Grinder set", "img": "https://m.media-amazon.com/images/I/81XDI5KN+CL._AC_UL960_QL65_.jpg", "price": 12.79, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "stars": "", "stock": 4, "sold": 419}, {"pid": "c970de6a", "name": "The Original Pro Chopper", "img": "https://m.media-amazon.com/images/I/81GZZyozv-L._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "13 blade attachments for any cut. Prep a full meal in 60 seconds.", "stars": "", "stock": 5, "sold": 508}, {"pid": "84b2e31a", "name": "2026 Upgraded Herb Scissors Effortless Shears", "img": "https://m.media-amazon.com/images/I/81-N0JsOEPL._AC_UL960_QL65_.jpg", "price": 9.99, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "stars": "", "stock": 12, "sold": 112}, {"pid": "c8c5366a", "name": "HuggieGems Metal Magnetic Spice Storage Rack", "img": "https://m.media-amazon.com/images/I/71kyA2AybiL._AC_UL960_QL65_.jpg", "price": 19.13, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 7, "sold": 287}, {"pid": "1ec23510", "name": "Desk Clamp Power Strip USB C 40W Total Fast", "img": "https://m.media-amazon.com/images/I/51LfO2+Kn9L._AC_UL960_QL65_.jpg", "price": 32.99, "cat": "Desk", "desc": "USB-C PD fast charging + AC outlets in one sleek unit.", "stars": "", "stock": 8, "sold": 203}, {"pid": "31a18a19", "name": "Dosmix Retro Bluetooth Speaker Vintage Decor", "img": "https://m.media-amazon.com/images/I/71axiGLkw1L._AC_UL960_QL65_.jpg", "price": 14.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "stars": "", "stock": 12, "sold": 341}, {"pid": "deecfd78", "name": "SURETIVIAN Chicken Shredder Large Breast Tool Twist", "img": "https://m.media-amazon.com/images/I/71d6vBNDknL._AC_UL960_QL65_.jpg", "price": 22.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "stars": "", "stock": 4, "sold": 156}, {"pid": "a654f264", "name": "Torani Variety Pack Caramel French Vanilla", "img": "https://m.media-amazon.com/images/I/812u5hlA5SL._AC_UL960_QL65_.jpg", "price": 25.92, "cat": "Kitchen", "desc": "Professional results without professional prices.", "stars": "", "stock": 8, "sold": 47}, {"pid": "a59a72ed", "name": "Astercook Knife Set Kitchen Knives", "img": "https://m.media-amazon.com/images/I/714bnp4jQrL._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "stars": "", "stock": 8, "sold": 89}, {"pid": "9c2900e8", "name": "Iced Coffee Cups", "img": "https://m.media-amazon.com/images/I/718BOeeZ2vL._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "stars": "", "stock": 11, "sold": 112}, {"pid": "d6f12d8d", "name": "Crpich Acrylic Cell Phone Stand Portable Clear", "img": "https://m.media-amazon.com/images/I/61xq34OCYUL._AC_UL960_QL65_.jpg", "price": 8.99, "cat": "Desk", "desc": "Adjustable height and angle. Works with any phone, any case.", "stars": "", "stock": 6, "sold": 287}];
var PAYPAL="modernmonkreset@gmail.com";
var QS=function(s){return document.querySelector(s)};
var QSA=function(s){return document.querySelectorAll(s)};

function startCountdown(){
  var el=QS("#countdown");
  if(!el)return;
  var now=new Date();
  var end=new Date(now);end.setHours(23,59,59,999);
  function tick(){
    var diff=end-new Date();
    if(diff<=0){el.textContent="00:00:00";return;}
    var h=Math.floor(diff/3600000);
    var m=Math.floor((diff%3600000)/60000);
    var s=Math.floor((diff%60000)/1000);
    el.textContent=String(h).padStart(2,"0")+":"+String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");
  }
  tick();setInterval(tick,1000);
}

var search=QS("#search");
var navs=QSA(".nav-link[data-f]");
var allCards=QSA(".card");
var countEl=QS("#gcount");
var activeFilter="all";

function applyFilter(){
  var q=search?search.value.toLowerCase().trim():"";
  var n=0;
  allCards.forEach(function(c){
    var ok=(activeFilter==="all"||c.dataset.niche===activeFilter)&&(!q||c.dataset.name.includes(q));
    c.style.display=ok?"":"none";
    if(ok)n++;
  });
  if(countEl)countEl.textContent=n+" product"+(n!==1?"s":"");
}
navs.forEach(function(l){
  l.addEventListener("click",function(){
    navs.forEach(function(x){x.classList.remove("active")});
    l.classList.add("active");
    activeFilter=l.dataset.f;
    applyFilter();
  });
});
if(search)search.addEventListener("input",applyFilter);

var sortEl=QS("#sortby");
function sortCards(){
  if(!sortEl)return;
  var grid=QS(".grid");
  if(!grid)return;
  var cards=Array.prototype.slice.call(grid.querySelectorAll(".card"));
  var mode=sortEl.value;
  cards.sort(function(a,b){
    if(mode==="price-low")return parseFloat(a.dataset.price)-parseFloat(b.dataset.price);
    if(mode==="price-high")return parseFloat(b.dataset.price)-parseFloat(a.dataset.price);
    if(mode==="popular")return parseInt(b.dataset.sold)-parseInt(a.dataset.sold);
    if(mode==="name-az"){
      var na=a.dataset.name||"";var nb=b.dataset.name||"";
      return na.localeCompare(nb);
    }
    return 0;
  });
  for(var i=0;i<cards.length;i++){grid.appendChild(cards[i]);}
  applyFilter();
}
if(sortEl)sortEl.addEventListener("change",sortCards);

var cartOverlay=QS(".cart-overlay");
var cartDrawer=QS(".cart-drawer");
var cartBody=QS(".cart-body");
var cartBadge=QS(".cart-count");
var cartTotalEl=QS("#ctotal");
var checkoutBtn=QS("#cobtn");

function saveCart(){localStorage.setItem("pd_cart",JSON.stringify(cart))}

function updateBadge(){
  var t=cart.reduce(function(s,i){return s+i.qty},0);
  if(cartBadge){
    cartBadge.textContent=t||"";
    cartBadge.classList.remove("pop");
    void cartBadge.offsetWidth;
    cartBadge.classList.add("pop");
  }
}

function getTotal(){return cart.reduce(function(s,i){return s+i.price*i.qty},0)}

function renderCart(){
  if(!cartBody)return;
  if(!cart.length){
    cartBody.innerHTML='<div class="cart-empty"><div class="cart-empty-i">\u{1F6D2}</div><p>Your cart is empty</p></div>';
    if(cartTotalEl)cartTotalEl.textContent="\\$0.00";
    if(checkoutBtn)checkoutBtn.disabled=true;
    return;
  }
  var h="";
  for(var i=0;i<cart.length;i++){
    var item=cart[i];
    h+='<div class="ci">';
    h+='<div class="ci-img"><img src="'+item.img+'" alt=""></div>';
    h+='<div class="ci-info"><div class="ci-name">'+item.name+'</div><div class="ci-price">$'+item.price.toFixed(2)+'</div></div>';
    h+='<div class="qty">';
    h+='<button onclick="PD.qtyChange('+i+',-1)">\u2212</button>';
    h+='<span>'+item.qty+'</span>';
    h+='<button onclick="PD.qtyChange('+i+',1)">+</button>';
    h+='</div></div>';
  }
  cartBody.innerHTML=h;
  if(cartTotalEl)cartTotalEl.textContent="$"+getTotal().toFixed(2);
  if(checkoutBtn)checkoutBtn.disabled=false;
}

function openCart(){
  if(cartOverlay)cartOverlay.classList.add("open");
  if(cartDrawer)cartDrawer.classList.add("open");
  document.body.style.overflow="hidden";
}
function closeCart(){
  if(cartOverlay)cartOverlay.classList.remove("open");
  if(cartDrawer)cartDrawer.classList.remove("open");
  document.body.style.overflow="";
}

function showToast(msg){
  var t=QS(".toast");
  if(!t)return;
  t.textContent=msg;
  t.classList.add("show");
  setTimeout(function(){t.classList.remove("show")},2200);
}

function addToCart(id,name,price,img){
  var ex=null;
  for(var j=0;j<cart.length;j++){if(cart[j].id===id){ex=cart[j];break;}}
  if(ex){ex.qty++;}
  else{cart.push({id:id,name:name,price:parseFloat(price),img:img,qty:1});}
  saveCart();updateBadge();renderCart();showToast("Added to cart \u2713");
  var btn=document.querySelector('[data-pid="'+id+'"] .btn-add');
  if(btn){
    btn.classList.add("added");
    btn.innerHTML="\u2713 Added";
    setTimeout(function(){
      btn.classList.remove("added");
      btn.innerHTML='<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg> Add';
    },1400);
  }
}

function qtyChange(i,d){
  if(!cart[i])return;
  cart[i].qty+=d;
  if(cart[i].qty<=0)cart.splice(i,1);
  saveCart();updateBadge();renderCart();
}

function checkout(){
  if(!cart.length)return;
  saveCart();
  window.location.href="checkout.html";
}

var modalOverlay=QS(".modal-overlay");

function openProduct(pid){
  var p=null;
  for(var i=0;i<products.length;i++){if(products[i].pid===pid){p=products[i];break;}}
  if(!p||!modalOverlay)return;
  var m=QS(".modal");
  var h="";
  h+='<button class="modal-close" onclick="PD.closeProduct()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>';
  h+='<div class="modal-inner">';
  h+='<div class="modal-img"><img src="'+p.img+'" alt="'+p.name+'"></div>';
  h+='<div class="modal-info">';
  h+='<div class="modal-cat">'+p.cat+'</div>';
  h+='<h2 class="modal-name">'+p.name+'</h2>';
  h+='<p class="modal-desc">'+p.desc+'</p>';
  h+=p.stars;
  h+='<div class="modal-price-row">';
  h+='<span class="modal-price">$'+p.price.toFixed(2)+'</span>';
  h+='<span class="modal-ship">Free shipping</span>';
  h+='</div>';
  h+='<div class="modal-fomo">';
  h+='<span class="mf-stock">\ud83d\udd25 Only '+p.stock+' left</span>';
  h+='<span class="mf-sold">'+p.sold+'+ sold recently</span>';
  h+='</div>';
  var sName=p.name.replace(/'/g,"\\'");
  var sImg=p.img.replace(/'/g,"\\'");
  h+='<button class="modal-add" onclick="PD.addToCart(\''+p.pid+'\',\''+sName+'\','+p.price+',\''+sImg+'\');PD.closeProduct()">Add to Cart \u2014 $'+p.price.toFixed(2)+'</button>';
  h+='<div class="modal-trust">';
  h+='<span>\ud83d\udd12 Secure checkout</span>';
  h+='<span>\ud83d\udce6 Free shipping</span>';
  h+='<span>\u21a9\ufe0f Easy returns</span>';
  h+='</div></div></div>';
  m.innerHTML=h;
  modalOverlay.classList.add("open");
  document.body.style.overflow="hidden";
}

function closeProduct(){
  if(modalOverlay)modalOverlay.classList.remove("open");
  document.body.style.overflow="";
}

if(modalOverlay)modalOverlay.addEventListener("click",function(e){if(e.target===modalOverlay)closeProduct()});

var cartBtn=QS(".cart-btn");
if(cartBtn)cartBtn.addEventListener("click",openCart);
if(cartOverlay)cartOverlay.addEventListener("click",closeCart);
var cxBtn=QS(".cart-x");
if(cxBtn)cxBtn.addEventListener("click",closeCart);
if(checkoutBtn)checkoutBtn.addEventListener("click",checkout);
document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeCart();closeProduct();}});

updateBadge();renderCart();startCountdown();

window.PD={
  addToCart:addToCart,
  qtyChange:qtyChange,
  openCart:openCart,
  closeCart:closeCart,
  checkout:checkout,
  openProduct:openProduct,
  closeProduct:closeProduct
};
})();


/* -- Checkout redirect (added by checkout_generator.py) -- */
window.PD = window.PD || {};
window.PD.goToCheckout = function () {
  var cart = [];
  try { cart = JSON.parse(localStorage.getItem('pd_cart') || '[]'); } catch (e) {}
  if (!cart || cart.length === 0) { alert('Your cart is empty!'); return; }
  window.location.href = 'checkout.html';
};
