(function(){
"use strict";
var cart=JSON.parse(localStorage.getItem("pd_cart")||"[]");
var products=[{"pid": "d6f12d8d", "name": "Crpich Acrylic Cell Phone Stand Portable Clear", "img": "https://m.media-amazon.com/images/I/61xq34OCYUL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Desk", "desc": "Adjustable height and angle. Works with any phone, any case.", "stars": "", "stock": 14, "sold": 68}, {"pid": "8bd350a5", "name": "ChefAide Silicone Spatula Set Food Grade Rubber", "img": "https://m.media-amazon.com/images/I/51hm8-fJJkL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 14, "sold": 203}, {"pid": "84b2e31a", "name": "2026 Upgraded Herb Scissors Effortless Shears", "img": "https://m.media-amazon.com/images/I/81-N0JsOEPL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "stars": "", "stock": 14, "sold": 203}, {"pid": "c0ac8bb4", "name": "KongNai Kitchen Funnel Set Small and Large", "img": "https://m.media-amazon.com/images/I/6197TF0tXlL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "stars": "", "stock": 5, "sold": 47}, {"pid": "26d100bd", "name": "Zulay Kitchen Spoon Rest for Multiple Utensils High", "img": "https://m.media-amazon.com/images/I/71wvVLKByeL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Professional results without professional prices.", "stars": "", "stock": 4, "sold": 68}, {"pid": "c17c3005", "name": "6.7 Inches Coffee/ Tea Spoons Long Handle Gold", "img": "https://m.media-amazon.com/images/I/51Ev1-Oe6cS._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "stars": "", "stock": 5, "sold": 68}, {"pid": "c149967d", "name": "Meat Chopper Hamburger Grinder", "img": "https://m.media-amazon.com/images/I/61FoHl7OBqL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "stars": "", "stock": 4, "sold": 287}, {"pid": "5c7d6f01", "name": "UNNEES Gravity Electric Salt and Pepper Grinder set", "img": "https://m.media-amazon.com/images/I/81XDI5KN+CL._AC_UL960_QL65_.jpg", "price": 34.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 14, "sold": 47}, {"pid": "379c2d62", "name": "Zolunu Espresso Coffee Stirrer 5 Needles 0.4mm", "img": "https://m.media-amazon.com/images/I/61V9jVCVQbL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "stars": "", "stock": 11, "sold": 341}, {"pid": "876a3da9", "name": "Ceramic Coffee Bean Dosing Cup + Sprayer Gift Set", "img": "https://m.media-amazon.com/images/I/61jL7XEXObL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "stars": "", "stock": 8, "sold": 112}, {"pid": "80d69f7f", "name": "CasaZenith Foot Rest for Under Desk at Work", "img": "https://m.media-amazon.com/images/I/61TupahbNKL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Desk", "desc": "Clean up your workspace with one simple upgrade.", "stars": "", "stock": 11, "sold": 68}, {"pid": "4b7411f5", "name": "DEMON CHEST ErgoComfort Gel Wrist Rest Mouse", "img": "https://m.media-amazon.com/images/I/41RY+TzdD8L._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Desk", "desc": "Memory foam conforms to your wrists. Reduces strain during long sessions.", "stars": "", "stock": 5, "sold": 47}, {"pid": "fe17434b", "name": "MECHEER Over The Sink Dish Drying Rack Roll Up Dish", "img": "https://m.media-amazon.com/images/I/71sU8KRIAzL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Professional results without professional prices.", "stars": "", "stock": 12, "sold": 341}, {"pid": "66ea2384", "name": "Otstar Jar Opener Bottle and Can Opener for Weak", "img": "https://m.media-amazon.com/images/I/61xYvdy15jL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Smooth-edge cut leaves no sharp lids. Safe for every kitchen.", "stars": "", "stock": 4, "sold": 508}, {"pid": "edc4457f", "name": "Nearockle Silicone Cable Straps Cord Organizer", "img": "https://m.media-amazon.com/images/I/71T6CBglgDL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Self-adhesive clips hold every cable in place. No more desk spaghetti.", "stars": "", "stock": 12, "sold": 419}, {"pid": "6c002c25", "name": "TrendPlain 16oz/470ml Glass Olive Oil Sprayer", "img": "https://m.media-amazon.com/images/I/716HuBmcRsL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "stars": "", "stock": 7, "sold": 23}, {"pid": "9f8121d9", "name": "Silicone Spatula Set Food Grade Rubber Spatulas", "img": "https://m.media-amazon.com/images/I/61eEvgBauIL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "stars": "", "stock": 4, "sold": 341}, {"pid": "c99ee66e", "name": "SKYDUE 360 Degree Rotating Desk Organizer", "img": "https://m.media-amazon.com/images/I/71PJd4T656L._AC_UL960_QL65_.jpg", "price": 34.99, "cat": "Desk", "desc": "5-tier mesh design. Everything visible, nothing lost.", "stars": "", "stock": 12, "sold": 89}, {"pid": "18c4ca9f", "name": "ODISTAR Desktop Vacuum Cleaner Mini Table dust", "img": "https://m.media-amazon.com/images/I/51bbbt-YaEL._AC_UL960_QL65_.jpg", "price": 34.99, "cat": "Desk", "desc": "Built for the modern desk. Minimal footprint, maximum function.", "stars": "", "stock": 3, "sold": 341}, {"pid": "92108fdd", "name": "Coffee Spoon Rest Mini Coffee Spoon Holder", "img": "https://m.media-amazon.com/images/I/41srk842j9L._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 11, "sold": 508}, {"pid": "48a6c77c", "name": "Jetmore Chip Clips Bag Magnetic Clip for Food", "img": "https://m.media-amazon.com/images/I/71f2qfFK0SL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "stars": "", "stock": 4, "sold": 112}, {"pid": "a3e34beb", "name": "Adjustable Laptop Stand", "img": "https://m.media-amazon.com/images/I/71Api8I7QML._AC_UL960_QL65_.jpg", "price": 39.99, "cat": "Desk", "desc": "Elevates to eye level. Prevents neck strain, improves posture instantly.", "stars": "", "stock": 3, "sold": 156}, {"pid": "00d39465", "name": "JETKONG 12-Inch Kitchen Tweezers Fine Tweezer Tongs", "img": "https://m.media-amazon.com/images/I/61HK-cH4fcL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "stars": "", "stock": 5, "sold": 156}, {"pid": "ce73a2bc", "name": "Alpha Grillers Meat Thermometer Digital – Instant", "img": "https://m.media-amazon.com/images/I/81bpKKv68-L._AC_UL960_QL65_.jpg", "price": 34.99, "cat": "Kitchen", "desc": "Professional results without professional prices.", "stars": "", "stock": 7, "sold": 203}];
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
