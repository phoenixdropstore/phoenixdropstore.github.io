(function(){
"use strict";
var cart=JSON.parse(localStorage.getItem("pd_cart")||"[]");
var products=[{"pid": "d00f4705", "name": "Bench Scraper & Chopper", "img": "https://m.media-amazon.com/images/I/51GRGFJDSkL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Stainless steel blade with comfort grip. Essential for bread and pastry.", "startext": "★★★★☆", "avg": 4.2, "rcount": 4, "stock": 4, "sold": 68, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">4.2</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Ashley W. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 03, 2026</span></div><p class=\"review-card-text\">Super easy to use right out of the box. No instructions needed.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Olivia S. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 20, 2026</span></div><p class=\"review-card-text\">Honestly one of the best kitchen purchases I've made this year.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Ryan S. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 16, 2026</span></div><p class=\"review-card-text\">This replaced a much more expensive tool I had. Works just as well.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Lauren C. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 16, 2026</span></div><p class=\"review-card-text\">Solid build quality. I've been using it daily for 3 weeks with no issues.</p></div></div>"}, {"pid": "b39cc67c", "name": "OMAIA 2-in-1 Dish Soap Dispenser", "img": "https://m.media-amazon.com/images/I/8131tWdYFfL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "startext": "★★★★☆", "avg": 4.2, "rcount": 4, "stock": 4, "sold": 419, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">4.2</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Amanda B. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 02, 2026</span></div><p class=\"review-card-text\">I've recommended this to at least 5 friends already.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Josh R.</span> <span class=\"review-card-date\">April 04, 2026</span></div><p class=\"review-card-text\">Honestly one of the best kitchen purchases I've made this year.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Chris H. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 31, 2026</span></div><p class=\"review-card-text\">Way better quality than I expected for the price. Super sturdy.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">David L. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 04, 2026</span></div><p class=\"review-card-text\">Saw this trending online and grabbed one. Zero regrets.</p></div></div>"}, {"pid": "f35d2464", "name": "3 in One Avocado Slicer", "img": "https://m.media-amazon.com/images/I/71WIWp6wB-L._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "startext": "★★★★★", "avg": 4.5, "rcount": 4, "stock": 12, "sold": 203, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.5</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Mike R. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 18, 2026</span></div><p class=\"review-card-text\">This is a game changer in my kitchen. I use it almost every day now.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Taylor P. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 07, 2026</span></div><p class=\"review-card-text\">Honestly one of the best kitchen purchases I've made this year.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">James P. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 25, 2026</span></div><p class=\"review-card-text\">Way better quality than I expected for the price. Super sturdy.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Nicole G. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 18, 2026</span></div><p class=\"review-card-text\">Makes meal prep so much faster. My wife ordered a second one for her mom.</p></div></div>"}, {"pid": "84b2e31a", "name": "2026 Upgraded Herb Scissors Effortless Shears", "img": "https://m.media-amazon.com/images/I/81-N0JsOEPL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "startext": "★★★★★", "avg": 5.0, "rcount": 4, "stock": 8, "sold": 47, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">5.0</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Chris H. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 26, 2026</span></div><p class=\"review-card-text\">Fast shipping and the product looks exactly like the photos.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Brandon T. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 12, 2026</span></div><p class=\"review-card-text\">Got this as a gift for my sister and she absolutely loves it.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Jessica T. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">February 26, 2026</span></div><p class=\"review-card-text\">I was skeptical but this thing actually works really well. Very happy.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">David L. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 24, 2026</span></div><p class=\"review-card-text\">Super easy to use right out of the box. No instructions needed.</p></div></div>"}, {"pid": "d4435edb", "name": "Meat Chopper 5 Curve Blades Ground Beef Masher", "img": "https://m.media-amazon.com/images/I/51wRBxft6KL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "Professional results without professional prices.", "startext": "★★★★★", "avg": 4.7, "rcount": 3, "stock": 11, "sold": 287, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.7</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Megan F. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 29, 2026</span></div><p class=\"review-card-text\">The design is really clever. Whoever made this actually cooks.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Ryan S. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 12, 2026</span></div><p class=\"review-card-text\">Got this as a gift for my sister and she absolutely loves it.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Jen C. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 04, 2026</span></div><p class=\"review-card-text\">Honestly one of the best kitchen purchases I've made this year.</p></div></div>"}, {"pid": "16f3ce7a", "name": "Aluminum Alloy Tomato & Lemon Slicer Holder", "img": "https://m.media-amazon.com/images/I/51JuJvRk6DL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "startext": "★★★★☆", "avg": 4.3, "rcount": 3, "stock": 11, "sold": 23, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">4.3</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Chris H. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 13, 2026</span></div><p class=\"review-card-text\">Perfect for small kitchens. Doesn't take up much counter space at all.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Olivia S. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 01, 2026</span></div><p class=\"review-card-text\">The design is really clever. Whoever made this actually cooks.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Stephanie L. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 22, 2026</span></div><p class=\"review-card-text\">This is a game changer in my kitchen. I use it almost every day now.</p></div></div>"}, {"pid": "4ddb3377", "name": "Magnetic Cable Clips [Cable Smooth Adjustable] Cord", "img": "https://m.media-amazon.com/images/I/81yvBDKR49L._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Desk", "desc": "Self-adhesive clips hold every cable in place. No more desk spaghetti.", "startext": "", "avg": 0, "rcount": 0, "stock": 8, "sold": 112, "reviews": ""}, {"pid": "9e1821a0", "name": "Multi-Purpose Anti-Scald Bowl Holder Clip 2026 New", "img": "https://m.media-amazon.com/images/I/61GZFyZxwAL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "startext": "★★★★☆", "avg": 4.0, "rcount": 2, "stock": 14, "sold": 419, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">4.0</span> <span class=\"review-count\">(2 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Tyler J. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 19, 2026</span></div><p class=\"review-card-text\">Great value. You'd pay 3x for something like this at a retail store.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Matt D. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 16, 2026</span></div><p class=\"review-card-text\">Got this as a gift for my sister and she absolutely loves it.</p></div></div>"}, {"pid": "d5c5ec6c", "name": "Bloss Anti-skid Jar Opener Lid Remover Rubber Can", "img": "https://m.media-amazon.com/images/I/61XV+x5xpqL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Smooth-edge cut leaves no sharp lids. Safe for every kitchen.", "startext": "★★★★☆", "avg": 4.0, "rcount": 5, "stock": 3, "sold": 23, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">4.0</span> <span class=\"review-count\">(5 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Andrew W.</span> <span class=\"review-card-date\">March 30, 2026</span></div><p class=\"review-card-text\">Honestly one of the best kitchen purchases I've made this year.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">David L. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 08, 2026</span></div><p class=\"review-card-text\">Saw this trending online and grabbed one. Zero regrets.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Derek B. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 15, 2026</span></div><p class=\"review-card-text\">I was worried about quality but this feels really premium.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Brittany H.</span> <span class=\"review-card-date\">April 20, 2026</span></div><p class=\"review-card-text\">Makes meal prep so much faster. My wife ordered a second one for her mom.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Rachel N. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 10, 2026</span></div><p class=\"review-card-text\">Fast shipping and the product looks exactly like the photos.</p></div></div>"}, {"pid": "26d100bd", "name": "Zulay Kitchen Spoon Rest for Multiple Utensils High", "img": "https://m.media-amazon.com/images/I/71wvVLKByeL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "startext": "", "avg": 0, "rcount": 0, "stock": 3, "sold": 341, "reviews": ""}, {"pid": "e7ea241f", "name": "Hand-held Groove Gap Cleaning Tools Door Window", "img": "https://m.media-amazon.com/images/I/61ZyeBBNL4L._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "startext": "", "avg": 0, "rcount": 0, "stock": 14, "sold": 47, "reviews": ""}, {"pid": "18c4ca9f", "name": "ODISTAR Desktop Vacuum Cleaner Mini Table dust", "img": "https://m.media-amazon.com/images/I/51bbbt-YaEL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Desk", "desc": "Clean up your workspace with one simple upgrade.", "startext": "★★★★☆", "avg": 3.5, "rcount": 2, "stock": 7, "sold": 508, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">3.5</span> <span class=\"review-count\">(2 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Brandon T.</span> <span class=\"review-card-date\">February 22, 2026</span></div><p class=\"review-card-text\">Great for keeping cables and small items organized. Highly recommend.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">James P. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 14, 2026</span></div><p class=\"review-card-text\">Got this after seeing it on social media. Actually worth the hype.</p></div></div>"}, {"pid": "5c18ce62", "name": "Under Cabinet Hooks 360 °Rotation Kitchen Hooks", "img": "https://m.media-amazon.com/images/I/61YpWTcZXLL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "startext": "", "avg": 0, "rcount": 0, "stock": 8, "sold": 68, "reviews": ""}, {"pid": "f2dc7a1e", "name": "Paper Towel Holder - Self-Adhesive or Drilling", "img": "https://m.media-amazon.com/images/I/71SdoAGoQFL._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Professional results without professional prices.", "startext": "★★★★★", "avg": 5.0, "rcount": 2, "stock": 11, "sold": 287, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">5.0</span> <span class=\"review-count\">(2 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Nicole G.</span> <span class=\"review-card-date\">April 06, 2026</span></div><p class=\"review-card-text\">This replaced a much more expensive tool I had. Works just as well.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Olivia S. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 11, 2026</span></div><p class=\"review-card-text\">Saw this trending online and grabbed one. Zero regrets.</p></div></div>"}, {"pid": "8c8fb91a", "name": "6 Packs Kitchen Gadgets Set", "img": "https://m.media-amazon.com/images/I/71qc7LkZQXL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "startext": "", "avg": 0, "rcount": 0, "stock": 6, "sold": 203, "reviews": ""}, {"pid": "c87f92fb", "name": "Splatypus Jar Spatula Funny Kitchen Gadgets", "img": "https://m.media-amazon.com/images/I/41i+av-Ul0L._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "startext": "★★★★☆", "avg": 3.8, "rcount": 4, "stock": 5, "sold": 47, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">3.8</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Chris H. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 16, 2026</span></div><p class=\"review-card-text\">The design is really clever. Whoever made this actually cooks.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Sarah M. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">February 26, 2026</span></div><p class=\"review-card-text\">Makes meal prep so much faster. My wife ordered a second one for her mom.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Ashley W. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 20, 2026</span></div><p class=\"review-card-text\">Cleans up in seconds. That alone makes it worth the price.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Amanda B. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 22, 2026</span></div><p class=\"review-card-text\">Perfect for small kitchens. Doesn't take up much counter space at all.</p></div></div>"}, {"pid": "7d455e85", "name": "QLKUNLA Newtons Cradle Balance Balls Science", "img": "https://m.media-amazon.com/images/I/61XyO69K0ML._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Desk", "desc": "Built for the modern desk. Minimal footprint, maximum function.", "startext": "★★★★☆", "avg": 4.3, "rcount": 3, "stock": 6, "sold": 89, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">4.3</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Rachel N. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 07, 2026</span></div><p class=\"review-card-text\">Compact but functional. Exactly what I needed for my small desk.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Josh R.</span> <span class=\"review-card-date\">March 26, 2026</span></div><p class=\"review-card-text\">Great for keeping cables and small items organized. Highly recommend.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Jessica T. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 03, 2026</span></div><p class=\"review-card-text\">I bought this for my home office and it completely changed my workflow.</p></div></div>"}, {"pid": "29ce0e21", "name": "LISEN Cell Phone Stand Holder", "img": "https://m.media-amazon.com/images/I/61KD4hoirXL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Desk", "desc": "Adjustable height and angle. Works with any phone, any case.", "startext": "", "avg": 0, "rcount": 0, "stock": 3, "sold": 203, "reviews": ""}, {"pid": "fc1586f2", "name": "Flat Plug Extension Cord HANYCONY 5ft Power Strip", "img": "https://m.media-amazon.com/images/I/518tiMuntLL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Desk", "desc": "USB-C PD fast charging + AC outlets in one sleek unit.", "startext": "★★★★★", "avg": 4.5, "rcount": 2, "stock": 3, "sold": 203, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.5</span> <span class=\"review-count\">(2 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Jen C. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">February 22, 2026</span></div><p class=\"review-card-text\">Great for keeping cables and small items organized. Highly recommend.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">James P. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 29, 2026</span></div><p class=\"review-card-text\">I bought this for my home office and it completely changed my workflow.</p></div></div>"}, {"pid": "f45482da", "name": "Bullshit Button – The Official Hilarious BS Button", "img": "https://m.media-amazon.com/images/I/8122+KthRTL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Desk", "desc": "The upgrade your setup has been missing.", "startext": "★★★★★", "avg": 4.4, "rcount": 5, "stock": 11, "sold": 47, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.4</span> <span class=\"review-count\">(5 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Brittany H. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 04, 2026</span></div><p class=\"review-card-text\">Got this after seeing it on social media. Actually worth the hype.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Taylor P. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 24, 2026</span></div><p class=\"review-card-text\">Great for keeping cables and small items organized. Highly recommend.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">James P. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 05, 2026</span></div><p class=\"review-card-text\">Compact but functional. Exactly what I needed for my small desk.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Kevin E. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">February 28, 2026</span></div><p class=\"review-card-text\">The quality surprised me honestly. Very well thought out product.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Sam K. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 08, 2026</span></div><p class=\"review-card-text\">I've tried cheaper versions of this and they all broke. This one is legit.</p></div></div>"}, {"pid": "49be2e76", "name": "6.5 Inch USB Small Desk Fan 3 Speeds Quiet Portable", "img": "https://m.media-amazon.com/images/I/71s4bcH0C7L._AC_UL960_QL65_.jpg", "price": 34.99, "cat": "Desk", "desc": "3-speed whisper mode for focused work. USB powered, no outlet needed.", "startext": "", "avg": 0, "rcount": 0, "stock": 5, "sold": 47, "reviews": ""}, {"pid": "f3487e93", "name": "Cleangor Chicken Shredder Tool Twist Visible", "img": "https://m.media-amazon.com/images/I/712gYP1ldtL._AC_UL960_QL65_.jpg", "price": 29.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "startext": "★★★★☆", "avg": 3.6, "rcount": 5, "stock": 11, "sold": 112, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">3.6</span> <span class=\"review-count\">(5 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Kevin E.</span> <span class=\"review-card-date\">March 10, 2026</span></div><p class=\"review-card-text\">This is a game changer in my kitchen. I use it almost every day now.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Jake A. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 19, 2026</span></div><p class=\"review-card-text\">Makes meal prep so much faster. My wife ordered a second one for her mom.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Ashley W. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 29, 2026</span></div><p class=\"review-card-text\">Cleans up in seconds. That alone makes it worth the price.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Brittany H. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 10, 2026</span></div><p class=\"review-card-text\">This replaced a much more expensive tool I had. Works just as well.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Olivia S.</span> <span class=\"review-card-date\">April 12, 2026</span></div><p class=\"review-card-text\">Got this as a gift for my sister and she absolutely loves it.</p></div></div>"}, {"pid": "e7027463", "name": "OTOTO Splatypus Jar Spatula for Scooping and Scraping", "img": "https://m.media-amazon.com/images/I/61kSyC6HXDL._AC_UL960_QL65_.jpg", "price": 34.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "startext": "★★★★★", "avg": 4.5, "rcount": 4, "stock": 12, "sold": 68, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.5</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Megan F. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 18, 2026</span></div><p class=\"review-card-text\">This replaced a much more expensive tool I had. Works just as well.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Sam K. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 04, 2026</span></div><p class=\"review-card-text\">This is a game changer in my kitchen. I use it almost every day now.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Sarah M.</span> <span class=\"review-card-date\">February 26, 2026</span></div><p class=\"review-card-text\">Compact, easy to clean, and does exactly what it says. Love it.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Nicole G. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 17, 2026</span></div><p class=\"review-card-text\">Solid build quality. I've been using it daily for 3 weeks with no issues.</p></div></div>"}, {"pid": "f6b77487", "name": "Kitchen Gadgets Set Space Saving Cooking Tools", "img": "https://m.media-amazon.com/images/I/41dpw2lxe5L._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "startext": "", "avg": 0, "rcount": 0, "stock": 12, "sold": 156, "reviews": ""}, {"pid": "3a316080", "name": "Lid Sid: Pot Lifter | Lid Holder that Keeps Pot", "img": "https://m.media-amazon.com/images/I/71FGphxeo0L._AC_UL960_QL65_.jpg", "price": 34.99, "cat": "Kitchen", "desc": "Professional results without professional prices.", "startext": "★★★★★", "avg": 4.7, "rcount": 3, "stock": 6, "sold": 47, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.7</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Nicole G. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 21, 2026</span></div><p class=\"review-card-text\">I was skeptical but this thing actually works really well. Very happy.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Marcus D. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 20, 2026</span></div><p class=\"review-card-text\">Solid build quality. I've been using it daily for 3 weeks with no issues.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Jake A. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 05, 2026</span></div><p class=\"review-card-text\">Super easy to use right out of the box. No instructions needed.</p></div></div>"}, {"pid": "96e423a0", "name": "Funny Spoon Holder by OTOTO", "img": "https://m.media-amazon.com/images/I/51fy+7IDObL._AC_UL960_QL65_.jpg", "price": 34.99, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "startext": "★★★★★", "avg": 4.8, "rcount": 4, "stock": 8, "sold": 419, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.8</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Stephanie L. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 15, 2026</span></div><p class=\"review-card-text\">Way better quality than I expected for the price. Super sturdy.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">James P. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 14, 2026</span></div><p class=\"review-card-text\">This is a game changer in my kitchen. I use it almost every day now.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Nicole G. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 08, 2026</span></div><p class=\"review-card-text\">Perfect for small kitchens. Doesn't take up much counter space at all.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Mike R. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 07, 2026</span></div><p class=\"review-card-text\">Compact, easy to clean, and does exactly what it says. Love it.</p></div></div>"}, {"pid": "28a23670", "name": "Rotating Pomodoro Timer 5 25", "img": "https://m.media-amazon.com/images/I/61ROjRaowcL._AC_UL960_QL65_.jpg", "price": 39.99, "cat": "Desk", "desc": "Flip to start. No apps, no distractions. Pure analog focus.", "startext": "", "avg": 0, "rcount": 0, "stock": 8, "sold": 68, "reviews": ""}, {"pid": "4b407223", "name": "LED Lying Flat Duck Night Light 3 Level Dimmable", "img": "https://m.media-amazon.com/images/I/51Qz0pWd+9L._AC_UL960_QL65_.jpg", "price": 39.99, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "startext": "★★★★☆", "avg": 3.8, "rcount": 4, "stock": 3, "sold": 156, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">3.8</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Lauren C. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 23, 2026</span></div><p class=\"review-card-text\">Perfect for small kitchens. Doesn't take up much counter space at all.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Olivia S. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 11, 2026</span></div><p class=\"review-card-text\">Compact, easy to clean, and does exactly what it says. Love it.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Chris H. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 23, 2026</span></div><p class=\"review-card-text\">Super easy to use right out of the box. No instructions needed.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Rachel N. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">February 24, 2026</span></div><p class=\"review-card-text\">Solid build quality. I've been using it daily for 3 weeks with no issues.</p></div></div>"}];
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
  if(p.avg>0){
    h+='<div class="card-rating"><span class="card-rating-stars">'+p.startext+'</span> <span class="card-rating-num">'+p.avg+'</span> <span class="card-rating-count">('+p.rcount+' verified reviews)</span></div>';
  }
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
  h+='</div>';
  if(p.reviews&&p.reviews.length>0){h+=p.reviews;}
  h+='</div></div>';
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
