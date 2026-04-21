(function(){
"use strict";
var cart=JSON.parse(localStorage.getItem("pd_cart")||"[]");
var products=[{"pid": "c970de6a", "name": "Fullstar The Original Pro Chopper", "img": "https://m.media-amazon.com/images/I/81GZZyozv-L._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "13 blade attachments for any cut. Prep a full meal in 60 seconds.", "stars": "", "stock": 4, "sold": 287}, {"pid": "426268e5", "name": "4-Port USB 3.0 Portable Desk Hub,Fixable USB Data", "img": "https://m.media-amazon.com/images/I/51ADdtAiUDL._AC_UY654_QL65_.jpg", "price": 18.88, "cat": "Desk", "desc": "Expand from 1 port to many. Aluminum body stays cool under load.", "stars": "", "stock": 7, "sold": 89}, {"pid": "3385644a", "name": "Pisol Kitchen Unique Gadgets Set", "img": "https://m.media-amazon.com/images/I/71wPgB10WBL._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Kitchen", "desc": "Smooth-edge cut leaves no sharp lids. Safe for every kitchen.", "stars": "", "stock": 8, "sold": 112}, {"pid": "49be2e76", "name": "SWEETFULL 6.5 Inch USB Small Desk Fan", "img": "https://m.media-amazon.com/images/I/71s4bcH0C7L._AC_UL960_QL65_.jpg", "price": 14.99, "cat": "Desk", "desc": "3-speed whisper mode for focused work. USB powered, no outlet needed.", "stars": "", "stock": 8, "sold": 203}, {"pid": "f0dbb12f", "name": "Tasty Mini Sandwich Maker", "img": "https://m.media-amazon.com/images/I/71mT1f83uDL._AC_UY654_QL65_.jpg", "price": 22.4, "cat": "Kitchen", "desc": "Golden, crispy results in under 4 minutes. Non-stick plates.", "stars": "", "stock": 6, "sold": 89}, {"pid": "6105d6b3", "name": "Lamicall Cell Phone Stand", "img": "https://m.media-amazon.com/images/I/61cHbjMo7IL._AC_UL960_QL65_.jpg", "price": 9.99, "cat": "Desk", "desc": "Adjustable height and angle. Works with any phone, any case.", "stars": "", "stock": 6, "sold": 112}, {"pid": "78dd8171", "name": "DreamSky Digital Alarm Clocks for Bedrooms", "img": "https://m.media-amazon.com/images/I/71LwmSdmC7L._AC_UL960_QL65_.jpg", "price": 23.59, "cat": "Desk", "desc": "Ambient LED display. Shows time, date, and temperature at a glance.", "stars": "", "stock": 6, "sold": 341}, {"pid": "e7c75254", "name": "OPNICE Desk Organizer and Accessories", "img": "https://m.media-amazon.com/images/I/81MeUftFm8L._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Desk", "desc": "5-tier mesh design. Everything visible, nothing lost.", "stars": "", "stock": 4, "sold": 287}, {"pid": "1ec23510", "name": "Jgstkcity Desk Clamp Power Strip USB C,40W Total", "img": "https://m.media-amazon.com/images/I/51LfO2+Kn9L._AC_UY654_QL65_.jpg", "price": 32.99, "cat": "Desk", "desc": "USB-C PD fast charging + AC outlets in one sleek unit.", "stars": "", "stock": 5, "sold": 156}, {"pid": "28a23670", "name": "Rotating Pomodoro Timer 5", "img": "https://m.media-amazon.com/images/I/61ROjRaowcL._AC_UL960_QL65_.jpg", "price": 16.14, "cat": "Desk", "desc": "Flip to start. No apps, no distractions. Pure analog focus.", "stars": "", "stock": 4, "sold": 287}, {"pid": "ab58726e", "name": "Magnetic Levitating Floating Globe", "img": "https://m.media-amazon.com/images/I/61x3aoh6PXL._AC_UL960_QL65_.jpg", "price": 24.95, "cat": "Desk", "desc": "Magnetic levitation meets LED art. A conversation starter for any desk.", "stars": "", "stock": 8, "sold": 156}, {"pid": "93ac6a84", "name": "BlissTrends Foot Rest for Under Desk at", "img": "https://m.media-amazon.com/images/I/81x+otHOTeL._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Desk", "desc": "Clean up your workspace with one simple upgrade.", "stars": "", "stock": 8, "sold": 419}, {"pid": "2bb32b06", "name": "bella 1.5 Qt Slow Cooker", "img": "https://m.media-amazon.com/images/I/71RumzAk-wL._AC_UY654_QL65_.jpg", "price": 25.0, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 5, "sold": 203}, {"pid": "1a5422d7", "name": "Quntis Computer Monitor Lamp", "img": "https://m.media-amazon.com/images/I/51p1Ui5sa7L._AC_UL960_QL65_.jpg", "price": 39.95, "cat": "Desk", "desc": "Asymmetric lighting that illuminates your desk, not your screen.", "stars": "", "stock": 3, "sold": 341}, {"pid": "bbcfa2c7", "name": "N NOROCME  Cable Management Kit 4 Wire Organizer", "img": "https://m.media-amazon.com/images/I/81F7bTfj+4L._AC_UL960_QL65_.jpg", "price": 15.75, "cat": "Desk", "desc": "Self-adhesive clips hold every cable in place. No more desk spaghetti.", "stars": "", "stock": 3, "sold": 68}, {"pid": "aebb5631", "name": "House Gem Mug Warmer - 36W Coffee Mug Warmer", "img": "https://m.media-amazon.com/images/I/61SsDfH706L._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "stars": "", "stock": 4, "sold": 419}, {"pid": "97bdad21", "name": "Elite Gourmet EGC115M Easy Egg Cooker Electric", "img": "https://m.media-amazon.com/images/I/61PCEgXrOXL._AC_UY654_QL65_.jpg", "price": 11.99, "cat": "Kitchen", "desc": "The tool you'll wonder how you cooked without.", "stars": "", "stock": 11, "sold": 112}, {"pid": "4b407223", "name": "HAPPYBAG LED Lying Flat Duck Night Light", "img": "https://m.media-amazon.com/images/I/51Qz0pWd+9L._AC_UL960_QL65_.jpg", "price": 16.99, "cat": "Kitchen", "desc": "Professional results without professional prices.", "stars": "", "stock": 6, "sold": 419}, {"pid": "d7ca1f00", "name": "Genuine Fred Desk Dumpster Pencil Holder", "img": "https://m.media-amazon.com/images/I/619i-ksMRlL._AC_UL960_QL65_.jpg", "price": 13.5, "cat": "Desk", "desc": "Built for the modern desk. Minimal footprint, maximum function.", "stars": "", "stock": 11, "sold": 419}, {"pid": "034f8185", "name": "Fruit Slicer Cup for Strawberry", "img": "https://m.media-amazon.com/images/I/71bFdl7qZTL._AC_UL960_QL65_.jpg", "price": 7.98, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "stars": "", "stock": 6, "sold": 203}, {"pid": "00a7c624", "name": "Stainless Steel Onion Holder for Slicing,Onion", "img": "https://m.media-amazon.com/images/I/71GTPDTsoPL._AC_UL960_QL65_.jpg", "price": 4.97, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "stars": "", "stock": 8, "sold": 203}, {"pid": "24df794e", "name": "ALLTOP Bench Scraper & Chopper", "img": "https://m.media-amazon.com/images/I/71IgEUyQ3SL._AC_UL960_QL65_.jpg", "price": 9.99, "cat": "Kitchen", "desc": "Stainless steel blade with comfort grip. Essential for bread and pastry.", "stars": "", "stock": 4, "sold": 287}, {"pid": "db9d2e39", "name": "Fidget Toys Adult, Gravity Defying Kinetic Desk Toy", "img": "https://m.media-amazon.com/images/I/51I3WrnGjyL._AC_UL960_QL65_.jpg", "price": 16.99, "cat": "Desk", "desc": "The upgrade your setup has been missing.", "stars": "", "stock": 14, "sold": 419}, {"pid": "7d455e85", "name": "QLKUNLA Newtons Cradle Balance Balls Science", "img": "https://m.media-amazon.com/images/I/61XyO69K0ML._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Desk", "desc": "Premium materials meet thoughtful engineering.", "stars": "", "stock": 4, "sold": 47}, {"pid": "84b2e31a", "name": "2026 Upgraded Herb Scissors", "img": "https://m.media-amazon.com/images/I/81-N0JsOEPL._AC_UL960_QL65_.jpg", "price": 9.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 12, "sold": 508}, {"pid": "701d3fed", "name": "Keyboard Cleaning Kit Laptop Cleaner", "img": "https://m.media-amazon.com/images/I/71AJth10-BL._AC_UL960_QL65_.jpg", "price": 14.98, "cat": "Desk", "desc": "Designed for people who care about their workspace.", "stars": "", "stock": 6, "sold": 89}, {"pid": "28d9f9cf", "name": "Aoderun Moving Sand Art Picture Round Glass 3D Deep", "img": "https://m.media-amazon.com/images/I/51HditM6tiL._AC_UL960_QL65_.jpg", "price": 13.99, "cat": "Desk", "desc": "Small change, big difference in your daily workflow.", "stars": "", "stock": 11, "sold": 156}, {"pid": "c149967d", "name": "Meat Chopper, Hamburger Grinder", "img": "https://m.media-amazon.com/images/I/61FoHl7OBqL._AC_UL960_QL65_.jpg", "price": 9.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "stars": "", "stock": 11, "sold": 68}, {"pid": "60a28fe2", "name": "bella 4Qt Slim Air Fryer", "img": "https://m.media-amazon.com/images/I/61w9+nXxwlL._AC_UY654_QL65_.jpg", "price": 49.99, "cat": "Kitchen", "desc": "The tool you'll wonder how you cooked without.", "stars": "", "stock": 7, "sold": 203}, {"pid": "18c4ca9f", "name": "ODISTAR Desktop Vacuum Cleaner", "img": "https://m.media-amazon.com/images/I/51bbbt-YaEL._AC_UL960_QL65_.jpg", "price": 12.98, "cat": "Desk", "desc": "Clean up your workspace with one simple upgrade.", "stars": "", "stock": 8, "sold": 203}, {"pid": "71c7fb24", "name": "XXXFLOWER Plant Terrarium", "img": "https://m.media-amazon.com/images/I/71GrAWYYDyL._AC_UL960_QL65_.jpg", "price": 18.98, "cat": "Desk", "desc": "Built for the modern desk. Minimal footprint, maximum function.", "stars": "", "stock": 3, "sold": 89}, {"pid": "b2ac194c", "name": "Fidget Toys Adults & Teen Metal Fidgets Spinner", "img": "https://m.media-amazon.com/images/I/81jgc-32wbL._AC_UL960_QL65_.jpg", "price": 17.99, "cat": "Desk", "desc": "The upgrade your setup has been missing.", "stars": "", "stock": 14, "sold": 89}, {"pid": "6c9464e5", "name": "EZ Outlet Electrical Outlet Extender. Access", "img": "https://m.media-amazon.com/images/I/61TZXyA+e6L._AC_UL960_QL65_.jpg", "price": 49.88, "cat": "Desk", "desc": "Premium materials meet thoughtful engineering.", "stars": "", "stock": 4, "sold": 112}, {"pid": "9aab34d4", "name": "Ultrean Food Scale, Digital Kitchen Scale", "img": "https://m.media-amazon.com/images/I/71TV+iWbGlL._AC_UL960_QL65_.jpg", "price": 9.99, "cat": "Kitchen", "desc": "0.1g precision for baking. Tare function, multiple units, backlit display.", "stars": "", "stock": 11, "sold": 419}, {"pid": "e48eac76", "name": "Ruibo Baggy Rack Holder For Food Prep/Ziplock Bag", "img": "https://m.media-amazon.com/images/I/71m3PvJh32L._AC_UL960_QL65_.jpg", "price": 9.99, "cat": "Kitchen", "desc": "Professional results without professional prices.", "stars": "", "stock": 7, "sold": 112}, {"pid": "08a3db7a", "name": "Baggy Rack - ,Food Storage Bags Clip", "img": "https://m.media-amazon.com/images/I/61jkgSDENdL._AC_UL960_QL65_.jpg", "price": 11.97, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "stars": "", "stock": 3, "sold": 23}, {"pid": "859582fc", "name": "luckdoor Silicone Magnetic Balls Fidget Toys for", "img": "https://m.media-amazon.com/images/I/71PUwM9s-uL._AC_UL960_QL65_.jpg", "price": 9.99, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "stars": "", "stock": 8, "sold": 341}, {"pid": "c2bbb9c6", "name": "Micomlan Led Desk Lamp with Clamp, Architect Desk Lamp", "img": "https://m.media-amazon.com/images/I/81f0B2GPxyL._AC_UL960_QL65_.jpg", "price": 47.49, "cat": "Desk", "desc": "Designed for people who care about their workspace.", "stars": "", "stock": 5, "sold": 156}, {"pid": "a5c0d4ba", "name": "WOWBOX  Clear Plastic Drawer Organizer Set", "img": "https://m.media-amazon.com/images/I/81RChUS0zjL._AC_UL960_QL65_.jpg", "price": 16.13, "cat": "Desk", "desc": "Small change, big difference in your daily workflow.", "stars": "", "stock": 11, "sold": 23}, {"pid": "ede3f63f", "name": "bella 2 Slice Slim Toaster", "img": "https://m.media-amazon.com/images/I/71zZ0tSkfHL._AC_UY654_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "stars": "", "stock": 12, "sold": 68}, {"pid": "2825f636", "name": "HIC Kitchen Food Scoop", "img": "https://m.media-amazon.com/images/I/71DzsEpKTBL._AC_UL960_QL65_.jpg", "price": 14.95, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "stars": "", "stock": 3, "sold": 508}];
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
    if(cartTotalEl)cartTotalEl.textContent="\$0.00";
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
  var f=document.createElement("form");
  f.method="POST";
  f.action="https://www.paypal.com/cgi-bin/webscr";
  f.target="_blank";
  function addField(n,v){var inp=document.createElement("input");inp.type="hidden";inp.name=n;inp.value=v;f.appendChild(inp);}
  addField("cmd","_cart");
  addField("upload","1");
  addField("business",PAYPAL);
  addField("currency_code","USD");
  addField("return",location.href);
  addField("cancel_return",location.href);
  for(var i=0;i<cart.length;i++){
    var n=i+1;
    addField("item_name_"+n,cart[i].name);
    addField("amount_"+n,cart[i].price.toFixed(2));
    addField("quantity_"+n,cart[i].qty);
    addField("shipping_"+n,"0.00");
  }
  document.body.appendChild(f);
  f.submit();
  document.body.removeChild(f);
  cart=[];saveCart();updateBadge();renderCart();closeCart();
  showToast("Redirecting to checkout...");
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
