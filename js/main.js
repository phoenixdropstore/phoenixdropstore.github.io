(function(){
"use strict";
var cart=JSON.parse(localStorage.getItem("pd_cart")||"[]");
var products=[{"pid": "c970de6a", "name": "The Original Pro Chopper", "img": "https://m.media-amazon.com/images/I/81GZZyozv-L._AC_UL960_QL65_.jpg", "price": 20.99, "cat": "Kitchen", "desc": "13 blade attachments for any cut. Prep a full meal in 60 seconds.", "startext": "★★★★★", "avg": 4.7, "rcount": 3, "stock": 12, "sold": 508, "compare": 39.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.7</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">David L. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 22, 2026</span></div><p class=\"review-card-text\">Honestly did not think a kitchen gadget would excite me this much but here we are.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Aisha J. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 08, 2026</span></div><p class=\"review-card-text\">The container underneath catches everything. Zero mess on my counter.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Tyler J. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 06, 2026</span></div><p class=\"review-card-text\">Game changer for meal prep Sunday. Seriously cannot go back to a knife and board.</p></div></div>"}, {"pid": "18c4ca9f", "name": "ODISTAR Desktop Vacuum Cleaner Mini Table dust", "img": "https://m.media-amazon.com/images/I/51bbbt-YaEL._AC_UL960_QL65_.jpg", "price": 12.99, "cat": "Desk", "desc": "Clean up your workspace with one simple upgrade.", "startext": "★★★★★", "avg": 5.0, "rcount": 2, "stock": 4, "sold": 156, "compare": 34.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">5.0</span> <span class=\"review-count\">(2 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Tyler J. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 11, 2026</span></div><p class=\"review-card-text\">Everyone in my WFH group chat asked for the link after I posted a pic.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Diana R. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 28, 2026</span></div><p class=\"review-card-text\">Setup took 2 minutes. Simple, clean, works perfectly. No complaints at all.</p></div></div>"}, {"pid": "d00f4705", "name": "Bench Scraper & Chopper", "img": "https://m.media-amazon.com/images/I/51GRGFJDSkL._AC_UL960_QL65_.jpg", "price": 11.99, "cat": "Kitchen", "desc": "Stainless steel blade with comfort grip. Essential for bread and pastry.", "startext": "★★★★★", "avg": 4.5, "rcount": 4, "stock": 12, "sold": 112, "compare": 25.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.5</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Rachel N. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 16, 2026</span></div><p class=\"review-card-text\">Perfect for bread dough. Comfortable grip and a sharp clean edge.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Nicole G. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 07, 2026</span></div><p class=\"review-card-text\">The measurement markings on the blade are a nice touch for portioning.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Chloe A. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 16, 2026</span></div><p class=\"review-card-text\">Makes cleanup so much easier. One swipe and the counter is clean.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Marcus D. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">May 09, 2026</span></div><p class=\"review-card-text\">Bought this for my sourdough hobby and now I cant imagine baking without it.</p></div></div>"}, {"pid": "ec044265", "name": "AWOKE Stove Top Shelf 30 Inch", "img": "https://m.media-amazon.com/images/I/71zx5Vy8u+L._AC_UL960_QL65_.jpg", "price": 16.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "startext": "★★★★★", "avg": 5.0, "rcount": 4, "stock": 12, "sold": 23, "compare": 39.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">5.0</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Ryan S. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 22, 2026</span></div><p class=\"review-card-text\">Best impulse buy I have made in a long time. Zero regrets.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Jake A. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 01, 2026</span></div><p class=\"review-card-text\">Cleans up in seconds which is honestly half the reason I love it so much.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Sofia R. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 22, 2026</span></div><p class=\"review-card-text\">Not gonna lie I was skeptical but this is the real deal.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Zoe T. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">May 11, 2026</span></div><p class=\"review-card-text\">Lightweight but feels durable. Doesnt feel like it will break anytime.</p></div></div>"}, {"pid": "49be2e76", "name": "6.5 Inch USB Small Desk Fan 3 Speeds Quiet Portable", "img": "https://m.media-amazon.com/images/I/71s4bcH0C7L._AC_UL960_QL65_.jpg", "price": 31.99, "cat": "Desk", "desc": "3-speed whisper mode for focused work. USB powered, no outlet needed.", "startext": "", "avg": 0, "rcount": 0, "stock": 14, "sold": 47, "compare": 59.99, "reviews": ""}, {"pid": "ed672bfe", "name": "MCGOR 10inch Under Cabinet Lighting Rechargeable", "img": "https://m.media-amazon.com/images/I/61x62WLGvNL._AC_UL960_QL65_.jpg", "price": 16.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "startext": "", "avg": 0, "rcount": 0, "stock": 14, "sold": 89, "compare": 27.99, "reviews": ""}, {"pid": "e7027463", "name": "OTOTO Splatypus Jar Spatula for Scooping and Scraping", "img": "https://m.media-amazon.com/images/I/61kSyC6HXDL._AC_UL960_QL65_.jpg", "price": 13.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "startext": "★★★★★", "avg": 4.5, "rcount": 4, "stock": 5, "sold": 508, "compare": 33.95, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.5</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Derek B. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 17, 2026</span></div><p class=\"review-card-text\">Replaced something that cost me three times as much. This is better.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Omar H.</span> <span class=\"review-card-date\">April 20, 2026</span></div><p class=\"review-card-text\">Looks exactly like the picture. No misleading photos here.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Carlos M.</span> <span class=\"review-card-date\">April 06, 2026</span></div><p class=\"review-card-text\">The quality surprised me for this price range. Very well made.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Will T. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 03, 2026</span></div><p class=\"review-card-text\">Does the job perfectly and looks nice. Cant ask for more than that.</p></div></div>"}, {"pid": "3f8592bf", "name": "Astercook Deep-Carbonized Bamboo Cutting Boards", "img": "https://m.media-amazon.com/images/I/91xky+JYmZL._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Kitchen", "desc": "Non-slip feet, juice groove, knife-friendly surface. The whole package.", "startext": "★★★★☆", "avg": 4.3, "rcount": 3, "stock": 6, "sold": 47, "compare": 37.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">4.3</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Lauren C. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 10, 2026</span></div><p class=\"review-card-text\">Ive gone through so many cutting boards. This is finally the one.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Tyler J. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 02, 2026</span></div><p class=\"review-card-text\">Easy to clean, doesnt absorb odors, looks great on my counter.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Ryan S. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 09, 2026</span></div><p class=\"review-card-text\">Deep juice groove is a lifesaver when cutting tomatoes. No mess.</p></div></div>"}, {"pid": "128c116c", "name": "PD30W Desk Clamp Power Strip Desktop Mount Surge", "img": "https://m.media-amazon.com/images/I/51oCgzEjdrL._AC_UL960_QL65_.jpg", "price": 20.99, "cat": "Desk", "desc": "USB-C PD fast charging + AC outlets in one sleek unit.", "startext": "★★★★★", "avg": 4.7, "rcount": 3, "stock": 5, "sold": 341, "compare": 33.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.7</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Will T. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 15, 2026</span></div><p class=\"review-card-text\">Built solid. Not some flimsy plastic strip that feels like a fire hazard.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Diana R.</span> <span class=\"review-card-date\">April 20, 2026</span></div><p class=\"review-card-text\">Way better build quality than the generic ones at the hardware store.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Tyler J. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 22, 2026</span></div><p class=\"review-card-text\">Surge protection gives me peace of mind with all my expensive gear plugged in.</p></div></div>"}, {"pid": "d33193b4", "name": "Cable Management 25'' Under Desk No Drill", "img": "https://m.media-amazon.com/images/I/719HqEdBSvL._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Desk", "desc": "Self-adhesive clips hold every cable in place. No more desk spaghetti.", "startext": "★★★★★", "avg": 4.7, "rcount": 3, "stock": 3, "sold": 508, "compare": 32.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.7</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Ethan C.</span> <span class=\"review-card-date\">April 12, 2026</span></div><p class=\"review-card-text\">Bought these for my desk then got more for behind the TV. Game changer.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Olivia S. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">May 02, 2026</span></div><p class=\"review-card-text\">Holds cables securely but easy to pull out when I need them. Perfect balance.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Rachel N. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">May 11, 2026</span></div><p class=\"review-card-text\">Self adhesive and havent had a single one fall off in three months.</p></div></div>"}, {"pid": "16f3ce7a", "name": "Aluminum Alloy Tomato & Lemon Slicer Holder", "img": "https://m.media-amazon.com/images/I/51JuJvRk6DL._AC_UL960_QL65_.jpg", "price": 20.99, "cat": "Kitchen", "desc": "Professional results without professional prices.", "startext": "★★★★★", "avg": 4.7, "rcount": 3, "stock": 8, "sold": 68, "compare": 44.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.7</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Chloe A. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">May 10, 2026</span></div><p class=\"review-card-text\">My whole family uses this now. Even my husband who never cooks.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">James P. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 18, 2026</span></div><p class=\"review-card-text\">Use this literally every time I cook. Its become essential for me.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Ryan S. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 22, 2026</span></div><p class=\"review-card-text\">Bought this after seeing it all over TikTok and it actually lives up to the hype.</p></div></div>"}, {"pid": "342180e1", "name": "Vtopmart Clear Plastic Drawer Organizers Set 4-Size", "img": "https://m.media-amazon.com/images/I/81yj+PUYVxL._AC_UL960_QL65_.jpg", "price": 16.99, "cat": "Desk", "desc": "Built for the modern desk. Minimal footprint, maximum function.", "startext": "", "avg": 0, "rcount": 0, "stock": 8, "sold": 156, "compare": 25.99, "reviews": ""}, {"pid": "2279fade", "name": "Laborio Computer Keyboard Wrist Rest Stand", "img": "https://m.media-amazon.com/images/I/61v5t9ncx5L._AC_UL960_QL65_.jpg", "price": 17.99, "cat": "Desk", "desc": "Memory foam conforms to your wrists. Reduces strain during long sessions.", "startext": "★★★★★", "avg": 4.8, "rcount": 5, "stock": 7, "sold": 419, "compare": 31.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.8</span> <span class=\"review-count\">(5 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Jordan W. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 31, 2026</span></div><p class=\"review-card-text\">Got the matching mouse pad rest too. Whole setup is ergonomic now.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Josh R. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 05, 2026</span></div><p class=\"review-card-text\">Was getting tingling in my wrists. This fixed the problem in a week.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Caleb S.</span> <span class=\"review-card-date\">March 19, 2026</span></div><p class=\"review-card-text\">Soft but supportive. Not too squishy not too firm. Just right.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Amanda B. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 22, 2026</span></div><p class=\"review-card-text\">My wrists feel SO much better after long typing sessions. Immediate difference.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Chris H. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 25, 2026</span></div><p class=\"review-card-text\">Machine washable cover is a huge plus. Foam quality is legit premium.</p></div></div>"}, {"pid": "a7bd3e1c", "name": "Cork Desk Mat - Dual-Sided Desk Pad", "img": "https://m.media-amazon.com/images/I/61lECM81c2L._AC_UL960_QL65_.jpg", "price": 17.99, "cat": "Desk", "desc": "The upgrade your setup has been missing.", "startext": "", "avg": 0, "rcount": 0, "stock": 12, "sold": 23, "compare": 30.99, "reviews": ""}, {"pid": "cdf1ab53", "name": "Starfrit Rotato Express Electric Peeler", "img": "https://m.media-amazon.com/images/I/710ejJuESsL._AC_UL960_QL65_.jpg", "price": 21.99, "cat": "Kitchen", "desc": "Effortless glide through any skin. Ergonomic handle for comfort.", "startext": "★★★★★", "avg": 4.8, "rcount": 4, "stock": 3, "sold": 287, "compare": 43.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.8</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Audrey K. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">May 04, 2026</span></div><p class=\"review-card-text\">Bought a replacement after my old one got dull. Night and day difference.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Ashley W. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 28, 2026</span></div><p class=\"review-card-text\">Ergonomic handle is no joke. I have arthritis and this is the first one that doesnt hurt.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Chloe A. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 21, 2026</span></div><p class=\"review-card-text\">Fast shipping and the product is exactly as described. Very happy with it.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Priya K. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 19, 2026</span></div><p class=\"review-card-text\">Comfortable grip even after peeling a whole bag of carrots. No hand cramps.</p></div></div>"}, {"pid": "d7ae3014", "name": "Metal Desk Organizers and Accessories", "img": "https://m.media-amazon.com/images/I/91Bd5vXWiIL._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Desk", "desc": "5-tier mesh design. Everything visible, nothing lost.", "startext": "★★★★★", "avg": 4.6, "rcount": 5, "stock": 4, "sold": 419, "compare": 31.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.6</span> <span class=\"review-count\">(5 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Diana R. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 25, 2026</span></div><p class=\"review-card-text\">Looks way more expensive than what I paid. Very sleek minimal design.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Carlos M. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 13, 2026</span></div><p class=\"review-card-text\">Finally found one that actually fits my small desk without eating up all my space.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Brandon T. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 30, 2026</span></div><p class=\"review-card-text\">Assembly was literally 2 minutes. No tools needed. Just slide and done.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Amanda B. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 03, 2026</span></div><p class=\"review-card-text\">My desk went from absolute chaos to clean in about 5 minutes. Love it.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Megan F. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 29, 2026</span></div><p class=\"review-card-text\">Replaced a messy pencil cup and random trays with just this. So much cleaner.</p></div></div>"}, {"pid": "1ab88ce2", "name": "OTOTO Swanky Swan Soup Ladle", "img": "https://m.media-amazon.com/images/I/31314hgizlL._AC_UL960_QL65_.jpg", "price": 16.99, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "startext": "★★★★☆", "avg": 4.0, "rcount": 3, "stock": 6, "sold": 287, "compare": 31.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">4.0</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Priya K. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 16, 2026</span></div><p class=\"review-card-text\">Bought it as a gift and immediately ordered one for myself too.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Jasmine W. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">May 03, 2026</span></div><p class=\"review-card-text\">Saw the reviews and took a chance. So glad I did. Legit product.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Leo V. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 21, 2026</span></div><p class=\"review-card-text\">So simple but it makes such a difference. Love everything about it.</p></div></div>"}];
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
  if(p.compare>0&&p.compare>p.price){var mpct=Math.round(((p.compare-p.price)/p.compare)*100);h+='<span class="modal-price">$'+p.price.toFixed(2)+' <span class="c-compare">$'+p.compare.toFixed(2)+'</span> <span class="c-off">'+mpct+'% OFF</span></span>';}else{h+='<span class="modal-price">$'+p.price.toFixed(2)+'</span>';}
  h+='<span class="modal-ship">Free shipping</span>';
  h+='</div>';
  h+='<div class="modal-fomo">';
  h+='<span class="mf-stock">\ud83d\udd25 Only '+p.stock+' left</span>';
  h+='<span class="mf-sold">'+p.sold+'+ sold recently</span>';
  h+='</div>';
  var sName=p.name.replace(/'/g,"\\'");
  var sImg=p.img.replace(/'/g,"\\'");
  h+='<button class="modal-add" onclick="PD.addToCart(\''+p.pid+'\',\''+sName+'\','+p.price+',\''+sImg+'\');PD.closeProduct()">Add to Cart \u2014 $'+p.price.toFixed(2)+(p.compare>0&&p.compare>p.price?' <span class="c-compare">$'+p.compare.toFixed(2)+'</span>':'')+'</button>';
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
  closeProduct:closeProduct,
};
})();
