(function(){
"use strict";
var cart=JSON.parse(localStorage.getItem("pd_cart")||"[]");
var products=[{"pid": "9aabc91f", "name": "Airlonv LED Desk Lamp", "img": "https://m.media-amazon.com/images/I/71Xa0fzUiGL._AC_UL960_QL65_.jpg", "price": 20.98, "cat": "Desk", "desc": "Clean up your workspace with one simple upgrade.", "stars": "", "stock": 7, "sold": 341}, {"pid": "65da88de", "name": "Veken Coffee Canister", "img": "https://m.media-amazon.com/images/I/71fqTPrjLbL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 5, "sold": 89}, {"pid": "e7c75254", "name": "OPNICE Desk Organizer and Accessories 2-Tier", "img": "https://m.media-amazon.com/images/I/81MeUftFm8L._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Desk", "desc": "5-tier mesh design. Everything visible, nothing lost.", "stars": "", "stock": 6, "sold": 508}, {"pid": "aebb5631", "name": "House Gem Mug Warmer - 36W Coffee Mug Warmer", "img": "https://m.media-amazon.com/images/I/61SsDfH706L._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "stars": "", "stock": 14, "sold": 112}, {"pid": "a3e34beb", "name": "Adjustable Laptop Stand", "img": "https://m.media-amazon.com/images/I/71Api8I7QML._AC_UL960_QL65_.jpg", "price": 17.99, "cat": "Desk", "desc": "Elevates to eye level. Prevents neck strain, improves posture instantly.", "stars": "", "stock": 5, "sold": 341}, {"pid": "dbfe8963", "name": "ProsourceFit Exercise Balance Pad Non-Slip", "img": "https://m.media-amazon.com/images/I/71YPoM9x53L._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "stars": "", "stock": 11, "sold": 203}, {"pid": "4e875753", "name": "ANBOXIT Countertop Coffee Station Organizer 2 Tier", "img": "https://m.media-amazon.com/images/I/71CT4aiVuRL._AC_UL960_QL65_.jpg", "price": 21.99, "cat": "Kitchen", "desc": "Professional results without professional prices.", "stars": "", "stock": 4, "sold": 419}, {"pid": "5c7d6f01", "name": "UNNEES Gravity Electric Salt and Pepper Grinder set", "img": "https://m.media-amazon.com/images/I/81XDI5KN+CL._AC_UL960_QL65_.jpg", "price": 12.79, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "stars": "", "stock": 8, "sold": 287}, {"pid": "c970de6a", "name": "The Original Pro Chopper", "img": "https://m.media-amazon.com/images/I/81GZZyozv-L._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "13 blade attachments for any cut. Prep a full meal in 60 seconds.", "stars": "", "stock": 12, "sold": 47}, {"pid": "84b2e31a", "name": "2026 Upgraded Herb Scissors Effortless Shears", "img": "https://m.media-amazon.com/images/I/81-N0JsOEPL._AC_UL960_QL65_.jpg", "price": 9.99, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "stars": "", "stock": 12, "sold": 508}, {"pid": "c8c5366a", "name": "HuggieGems Metal Magnetic Spice Storage Rack", "img": "https://m.media-amazon.com/images/I/71kyA2AybiL._AC_UL960_QL65_.jpg", "price": 19.13, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 5, "sold": 419}, {"pid": "1ec23510", "name": "Desk Clamp Power Strip USB C 40W Total Fast", "img": "https://m.media-amazon.com/images/I/51LfO2+Kn9L._AC_UL960_QL65_.jpg", "price": 32.99, "cat": "Desk", "desc": "USB-C PD fast charging + AC outlets in one sleek unit.", "stars": "", "stock": 14, "sold": 341}, {"pid": "31a18a19", "name": "Dosmix Retro Bluetooth Speaker Vintage Decor", "img": "https://m.media-amazon.com/images/I/71axiGLkw1L._AC_UL960_QL65_.jpg", "price": 14.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "stars": "", "stock": 12, "sold": 68}, {"pid": "deecfd78", "name": "SURETIVIAN Chicken Shredder Large Breast Tool Twist", "img": "https://m.media-amazon.com/images/I/71d6vBNDknL._AC_UL960_QL65_.jpg", "price": 22.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "stars": "", "stock": 11, "sold": 287}, {"pid": "a654f264", "name": "Torani Variety Pack Caramel French Vanilla", "img": "https://m.media-amazon.com/images/I/812u5hlA5SL._AC_UL960_QL65_.jpg", "price": 25.92, "cat": "Kitchen", "desc": "Professional results without professional prices.", "stars": "", "stock": 14, "sold": 112}, {"pid": "a59a72ed", "name": "Astercook Knife Set Kitchen Knives", "img": "https://m.media-amazon.com/images/I/714bnp4jQrL._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "stars": "", "stock": 7, "sold": 156}, {"pid": "9c2900e8", "name": "Iced Coffee Cups", "img": "https://m.media-amazon.com/images/I/718BOeeZ2vL._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "stars": "", "stock": 12, "sold": 508}, {"pid": "d6f12d8d", "name": "Crpich Acrylic Cell Phone Stand Portable Clear", "img": "https://m.media-amazon.com/images/I/61xq34OCYUL._AC_UL960_QL65_.jpg", "price": 8.99, "cat": "Desk", "desc": "Adjustable height and angle. Works with any phone, any case.", "stars": "", "stock": 12, "sold": 156}, {"pid": "ad3b8d48", "name": "AeroPress Original Coffee Press", "img": "https://m.media-amazon.com/images/I/61u3sW4Vx4L._AC_UL960_QL65_.jpg", "price": 34.96, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 12, "sold": 419}, {"pid": "cdf1ab53", "name": "Starfrit Rotato Express Electric Peeler", "img": "https://m.media-amazon.com/images/I/710ejJuESsL._AC_UL960_QL65_.jpg", "price": 29.19, "cat": "Kitchen", "desc": "Effortless glide through any skin. Ergonomic handle for comfort.", "stars": "", "stock": 5, "sold": 68}, {"pid": "90b2e3a5", "name": "Dealusy - 16 oz Clear Plastic Cups", "img": "https://m.media-amazon.com/images/I/71Rpi8FxjmL._AC_UL960_QL65_.jpg", "price": 25.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "stars": "", "stock": 3, "sold": 23}, {"pid": "89de16c1", "name": "Drinking Glasses", "img": "https://m.media-amazon.com/images/I/81YS7014JPL._AC_UL960_QL65_.jpg", "price": 16.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "stars": "", "stock": 5, "sold": 508}, {"pid": "565dd9c6", "name": "Owala SmoothSip Slider Insulated Stainless Steel", "img": "https://m.media-amazon.com/images/I/31TMiHAjqNL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Professional results without professional prices.", "stars": "", "stock": 3, "sold": 203}, {"pid": "8c807209", "name": "Cold Brew Coffee Maker 64 oz Mason Jar Pitcher", "img": "https://m.media-amazon.com/images/I/81pX9Dz162L._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "stars": "", "stock": 4, "sold": 203}, {"pid": "7b9744a4", "name": "AIEVE Espresso Cooling Ball Stainless Steel Frozen", "img": "https://m.media-amazon.com/images/I/61FDktwxKkL._AC_UL960_QL65_.jpg", "price": 14.99, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "stars": "", "stock": 5, "sold": 287}, {"pid": "a95bcc8b", "name": "Set Vintage Coffee Mugs gifts for women Overnight", "img": "https://m.media-amazon.com/images/I/81HGpJbrnaL._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 8, "sold": 23}, {"pid": "7b8b9849", "name": "Bodum 34oz Pour Over Coffee Maker High-Heat", "img": "https://m.media-amazon.com/images/I/61ShLwhRkML._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "stars": "", "stock": 5, "sold": 89}, {"pid": "92108fdd", "name": "Coffee Spoon Rest Mini Coffee Spoon Holder", "img": "https://m.media-amazon.com/images/I/41srk842j9L._AC_UL960_QL65_.jpg", "price": 11.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "stars": "", "stock": 5, "sold": 68}, {"pid": "c8450ef7", "name": "Coffee Mug Warmer - Fastest Heating & Highest", "img": "https://m.media-amazon.com/images/I/618IaAUvESL._AC_UL960_QL65_.jpg", "price": 21.6, "cat": "Kitchen", "desc": "Professional results without professional prices.", "stars": "", "stock": 8, "sold": 287}, {"pid": "c7a65143", "name": "MHDCLY Coffee Bar Accessories Syrup Dispenser", "img": "https://m.media-amazon.com/images/I/71SgAC0eVSL._AC_UL960_QL65_.jpg", "price": 24.97, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "stars": "", "stock": 6, "sold": 68}, {"pid": "8484e4cb", "name": "Post-it Dispenser Sticky Note Holder", "img": "https://m.media-amazon.com/images/I/614LVo96vlL._AC_UL960_QL65_.jpg", "price": 14.59, "cat": "Desk", "desc": "Built for the modern desk. Minimal footprint, maximum function.", "stars": "", "stock": 11, "sold": 156}, {"pid": "ccee4d29", "name": "Turelar Immersion Blender Handheld Corded Hand", "img": "https://m.media-amazon.com/images/I/61XRVcpkxxL._AC_UL960_QL65_.jpg", "price": 39.99, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "stars": "", "stock": 14, "sold": 112}, {"pid": "c149967d", "name": "Meat Chopper Hamburger Grinder", "img": "https://m.media-amazon.com/images/I/61FoHl7OBqL._AC_UL960_QL65_.jpg", "price": 9.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 6, "sold": 341}, {"pid": "18c4ca9f", "name": "ODISTAR Desktop Vacuum Cleaner Mini Table dust", "img": "https://m.media-amazon.com/images/I/51bbbt-YaEL._AC_UL960_QL65_.jpg", "price": 12.98, "cat": "Desk", "desc": "The upgrade your setup has been missing.", "stars": "", "stock": 3, "sold": 419}, {"pid": "e7027463", "name": "OTOTO Splatypus Jar Spatula for Scooping and Scraping", "img": "https://m.media-amazon.com/images/I/61kSyC6HXDL._AC_UL960_QL65_.jpg", "price": 12.95, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "stars": "", "stock": 5, "sold": 341}, {"pid": "19d78d2e", "name": "Sarevile Bluetooth Headset", "img": "https://m.media-amazon.com/images/I/61DF5hiMFSL._AC_UL960_QL65_.jpg", "price": 39.99, "cat": "Desk", "desc": "Premium materials meet thoughtful engineering.", "stars": "", "stock": 4, "sold": 156}, {"pid": "80d69f7f", "name": "CasaZenith Foot Rest for Under Desk at Work", "img": "https://m.media-amazon.com/images/I/61TupahbNKL._AC_UL960_QL65_.jpg", "price": 9.99, "cat": "Desk", "desc": "Designed for people who care about their workspace.", "stars": "", "stock": 12, "sold": 341}, {"pid": "4b7411f5", "name": "DEMON CHEST ErgoComfort Gel Wrist Rest Mouse", "img": "https://m.media-amazon.com/images/I/41RY+TzdD8L._AC_UL960_QL65_.jpg", "price": 9.99, "cat": "Desk", "desc": "Memory foam conforms to your wrists. Reduces strain during long sessions.", "stars": "", "stock": 7, "sold": 341}, {"pid": "9a448cc5", "name": "TILUCK Stainless Steel Measuring Cups & Spoons Set", "img": "https://m.media-amazon.com/images/I/713cp4XSG7L._AC_UL960_QL65_.jpg", "price": 15.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "stars": "", "stock": 14, "sold": 419}, {"pid": "09caeacd", "name": "CIRCLE JOY Rechargeable Milk Frother Hanheld Dual", "img": "https://m.media-amazon.com/images/I/610xCsjTM8L._AC_UL960_QL65_.jpg", "price": 9.98, "cat": "Kitchen", "desc": "Professional results without professional prices.", "stars": "", "stock": 4, "sold": 23}, {"pid": "c0ac8bb4", "name": "KongNai Kitchen Funnel Set Small and Large", "img": "https://m.media-amazon.com/images/I/6197TF0tXlL._AC_UL960_QL65_.jpg", "price": 5.98, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "stars": "", "stock": 7, "sold": 287}, {"pid": "56c4acdf", "name": "DRAGON'S BREATH Microwave Steam Cleaner BPA-Free", "img": "https://m.media-amazon.com/images/I/61nMMfAGqLL._AC_UL960_QL65_.jpg", "price": 16.2, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "stars": "", "stock": 7, "sold": 156}, {"pid": "50ffccec", "name": "HOXWC Ankle Resistance Bands", "img": "https://m.media-amazon.com/images/I/71wuVWTFi8L._AC_UL960_QL65_.jpg", "price": 16.98, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 4, "sold": 419}];
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
