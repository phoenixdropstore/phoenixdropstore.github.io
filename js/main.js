(function(){
"use strict";
var cart=JSON.parse(localStorage.getItem("pd_cart")||"[]");
var products=[{"pid": "c970de6a", "name": "The Original Pro Chopper", "img": "https://m.media-amazon.com/images/I/81GZZyozv-L._AC_UL960_QL65_.jpg", "price": 24.99, "cat": "Kitchen", "desc": "13 blade attachments for any cut. Prep a full meal in 60 seconds.", "startext": "★★★★★", "avg": 4.7, "rcount": 3, "stock": 11, "sold": 341, "compare": 39.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.7</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">David L. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 06, 2026</span></div><p class=\"review-card-text\">Honestly did not think a kitchen gadget would excite me this much but here we are.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Aisha J. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 23, 2026</span></div><p class=\"review-card-text\">The container underneath catches everything. Zero mess on my counter.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Tyler J. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 21, 2026</span></div><p class=\"review-card-text\">Game changer for meal prep Sunday. Seriously cannot go back to a knife and board.</p></div></div>"}, {"pid": "49be2e76", "name": "6.5 Inch USB Small Desk Fan 3 Speeds Quiet Portable", "img": "https://m.media-amazon.com/images/I/71s4bcH0C7L._AC_UL960_QL65_.jpg", "price": 39.99, "cat": "Desk", "desc": "3-speed whisper mode for focused work. USB powered, no outlet needed.", "startext": "", "avg": 0, "rcount": 0, "stock": 14, "sold": 203, "compare": 59.99, "reviews": ""}, {"pid": "3f8592bf", "name": "Astercook Deep-Carbonized Bamboo Cutting Boards", "img": "https://m.media-amazon.com/images/I/91xky+JYmZL._AC_UL960_QL65_.jpg", "price": 23.72, "cat": "Kitchen", "desc": "Non-slip feet, juice groove, knife-friendly surface. The whole package.", "startext": "★★★★☆", "avg": 4.3, "rcount": 3, "stock": 4, "sold": 156, "compare": 37.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">4.3</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Lauren C. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 25, 2026</span></div><p class=\"review-card-text\">Ive gone through so many cutting boards. This is finally the one.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Tyler J. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 17, 2026</span></div><p class=\"review-card-text\">Easy to clean, doesnt absorb odors, looks great on my counter.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Ryan S. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 24, 2026</span></div><p class=\"review-card-text\">Deep juice groove is a lifesaver when cutting tomatoes. No mess.</p></div></div>"}, {"pid": "e1457f10", "name": "Gianotter Dual Monitor Stand Riser Desk Organizer", "img": "https://m.media-amazon.com/images/I/715+qntQ7xL._AC_UL960_QL65_.jpg", "price": 27.98, "cat": "Desk", "desc": "5-tier mesh design. Everything visible, nothing lost.", "startext": "★★★★★", "avg": 4.7, "rcount": 3, "stock": 8, "sold": 341, "compare": 41.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.7</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Zoe T. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 25, 2026</span></div><p class=\"review-card-text\">My desk went from absolute chaos to clean in about 5 minutes. Love it.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Mike R.</span> <span class=\"review-card-date\">March 21, 2026</span></div><p class=\"review-card-text\">Everything has a spot now. Pens, clips, sticky notes, all within reach.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Josh R. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 26, 2026</span></div><p class=\"review-card-text\">Sturdy construction. I loaded it up with stuff and it doesnt budge or tip.</p></div></div>"}, {"pid": "5c7d6f01", "name": "UNNEES Gravity Electric Salt and Pepper Grinder set", "img": "https://m.media-amazon.com/images/I/710QVSB0wWL._AC_UL960_QL65_.jpg", "price": 9.99, "cat": "Kitchen", "desc": "Smart kitchen upgrade that pays for itself in saved time.", "startext": "★★★★★", "avg": 4.5, "rcount": 4, "stock": 4, "sold": 23, "compare": 17.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.5</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Grace P. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 25, 2026</span></div><p class=\"review-card-text\">Makes meal prep so much faster. Wish I found this sooner honestly.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Trevor D.</span> <span class=\"review-card-date\">March 22, 2026</span></div><p class=\"review-card-text\">Compact, easy to clean, does what it says. What more do you need?</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Olivia S. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 27, 2026</span></div><p class=\"review-card-text\">Great value. Youd pay double at a regular store for something like this.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Vanessa C. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 09, 2026</span></div><p class=\"review-card-text\">Saw a friend using one and had to get my own. No regrets at all.</p></div></div>"}, {"pid": "16f3ce7a", "name": "Aluminum Alloy Tomato & Lemon Slicer Holder", "img": "https://m.media-amazon.com/images/I/51JuJvRk6DL._AC_UL960_QL65_.jpg", "price": 26.99, "cat": "Kitchen", "desc": "Built for daily use. Premium materials, thoughtful design.", "startext": "★★★★★", "avg": 4.7, "rcount": 3, "stock": 7, "sold": 47, "compare": 44.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.7</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Nicole G. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 26, 2026</span></div><p class=\"review-card-text\">My kitchen is small and this fits perfectly without taking up space.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Alex M. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 10, 2026</span></div><p class=\"review-card-text\">Affordable and well made. Cant really ask for more at this price.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Megan F. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 20, 2026</span></div><p class=\"review-card-text\">Kitchen counter looks so much better with this. Practical and aesthetic.</p></div></div>"}, {"pid": "cdf1ab53", "name": "Starfrit Rotato Express Electric Peeler", "img": "https://m.media-amazon.com/images/I/710ejJuESsL._AC_UL960_QL65_.jpg", "price": 29.19, "cat": "Kitchen", "desc": "Effortless glide through any skin. Ergonomic handle for comfort.", "startext": "★★★★★", "avg": 4.8, "rcount": 4, "stock": 3, "sold": 89, "compare": 43.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.8</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Audrey K. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 18, 2026</span></div><p class=\"review-card-text\">Bought a replacement after my old one got dull. Night and day difference.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Ashley W. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 12, 2026</span></div><p class=\"review-card-text\">Ergonomic handle is no joke. I have arthritis and this is the first one that doesnt hurt.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Chloe A. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 05, 2026</span></div><p class=\"review-card-text\">Fast shipping and the product is exactly as described. Very happy with it.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Priya K. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 03, 2026</span></div><p class=\"review-card-text\">Comfortable grip even after peeling a whole bag of carrots. No hand cramps.</p></div></div>"}, {"pid": "2279fade", "name": "Laborio Computer Keyboard Wrist Rest Stand", "img": "https://m.media-amazon.com/images/I/61v5t9ncx5L._AC_UL960_QL65_.jpg", "price": 19.99, "cat": "Desk", "desc": "Memory foam conforms to your wrists. Reduces strain during long sessions.", "startext": "★★★★★", "avg": 4.8, "rcount": 5, "stock": 3, "sold": 287, "compare": 31.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.8</span> <span class=\"review-count\">(5 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Jordan W. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 15, 2026</span></div><p class=\"review-card-text\">Got the matching mouse pad rest too. Whole setup is ergonomic now.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Josh R. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 20, 2026</span></div><p class=\"review-card-text\">Was getting tingling in my wrists. This fixed the problem in a week.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Caleb S.</span> <span class=\"review-card-date\">March 03, 2026</span></div><p class=\"review-card-text\">Soft but supportive. Not too squishy not too firm. Just right.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Amanda B. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 06, 2026</span></div><p class=\"review-card-text\">My wrists feel SO much better after long typing sessions. Immediate difference.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Chris H. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 09, 2026</span></div><p class=\"review-card-text\">Machine washable cover is a huge plus. Foam quality is legit premium.</p></div></div>"}, {"pid": "e8857542", "name": "KDD 7 in 1 Clamp-on Desk Pegboard", "img": "https://m.media-amazon.com/images/I/719oiaHs4GL._AC_UL960_QL65_.jpg", "price": 27.95, "cat": "Desk", "desc": "Adjustable height and angle. Works with any phone, any case.", "startext": "★★★★☆", "avg": 4.0, "rcount": 3, "stock": 6, "sold": 156, "compare": 41.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">4.0</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Tyler J. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 20, 2026</span></div><p class=\"review-card-text\">Solid build quality for the price. Aluminum feels nice and stays put on my desk.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">James P. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 14, 2026</span></div><p class=\"review-card-text\">I have one on my desk and one on my nightstand now. Simple but so useful.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Sam K. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 04, 2026</span></div><p class=\"review-card-text\">Bought as a stocking stuffer and it ended up being the most used gift I gave.</p></div></div>"}, {"pid": "128c116c", "name": "PD30W Desk Clamp Power Strip Desktop Mount Surge", "img": "https://m.media-amazon.com/images/I/51oCgzEjdrL._AC_UL960_QL65_.jpg", "price": 20.88, "cat": "Desk", "desc": "USB-C PD fast charging + AC outlets in one sleek unit.", "startext": "★★★★★", "avg": 4.7, "rcount": 3, "stock": 6, "sold": 419, "compare": 33.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.7</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Will T. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">February 27, 2026</span></div><p class=\"review-card-text\">Built solid. Not some flimsy plastic strip that feels like a fire hazard.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Diana R.</span> <span class=\"review-card-date\">April 04, 2026</span></div><p class=\"review-card-text\">Way better build quality than the generic ones at the hardware store.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Tyler J. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 06, 2026</span></div><p class=\"review-card-text\">Surge protection gives me peace of mind with all my expensive gear plugged in.</p></div></div>"}, {"pid": "b39cc67c", "name": "OMAIA 2-in-1 Dish Soap Dispenser", "img": "https://m.media-amazon.com/images/I/8131tWdYFfL._AC_UL960_QL65_.jpg", "price": 21.99, "cat": "Kitchen", "desc": "The tool you will wonder how you cooked without.", "startext": "★★★★☆", "avg": 4.0, "rcount": 4, "stock": 8, "sold": 47, "compare": 39.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">4.0</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Taylor P. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 20, 2026</span></div><p class=\"review-card-text\">Waterproof base so no worries about it sitting near the sink. Thought of everything.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★☆☆</span> <span class=\"review-card-name\">Sofia R. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 19, 2026</span></div><p class=\"review-card-text\">Adjustable soap volume is nice. Less for quick rinse more for serious scrubbing.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Liam O. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 13, 2026</span></div><p class=\"review-card-text\">Replaced an ugly plastic dispenser with this and my kitchen looks 10x better.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Alex M. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 11, 2026</span></div><p class=\"review-card-text\">Looks expensive but wasnt. Guests always comment on it.</p></div></div>"}, {"pid": "f35d2464", "name": "3 in One Avocado Slicer", "img": "https://ae-pic-a1.aliexpress-media.com/kf/S076568c4bf54479fac5024388503a0db5.png_220x220.png_.avif", "price": 21.99, "cat": "Kitchen", "desc": "Professional results without professional prices.", "startext": "★★★★★", "avg": 4.8, "rcount": 4, "stock": 3, "sold": 419, "compare": 39.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.8</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Jake A. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 19, 2026</span></div><p class=\"review-card-text\">Fast shipping and the product looks exactly like the photos. Very happy.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Matt D. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 13, 2026</span></div><p class=\"review-card-text\">Way better quality than I expected for the price. Feels solid and well made.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Stephanie L. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 30, 2026</span></div><p class=\"review-card-text\">My sister saw mine and ordered two. One for her one for our mom.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Chris H. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 04, 2026</span></div><p class=\"review-card-text\">Bought this after seeing it all over TikTok and it actually lives up to the hype.</p></div></div>"}, {"pid": "c32fc230", "name": "Kitchen Utensil Set-Silicone Cooking Utensils-33", "img": "https://m.media-amazon.com/images/I/71J6P8L6ORL._AC_UL960_QL65_.jpg", "price": 31.99, "cat": "Kitchen", "desc": "Simplifies your most repetitive kitchen tasks.", "startext": "★★★★☆", "avg": 4.3, "rcount": 3, "stock": 3, "sold": 68, "compare": 47.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★☆</span> <span class=\"review-avg\">4.3</span> <span class=\"review-count\">(3 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Sam K. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 14, 2026</span></div><p class=\"review-card-text\">Not gonna lie I was skeptical but this is the real deal.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Audrey K. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 25, 2026</span></div><p class=\"review-card-text\">Does the job perfectly and looks nice. Cant ask for more than that.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Priya K. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 04, 2026</span></div><p class=\"review-card-text\">First kitchen purchase in years that I actually use every day.</p></div></div>"}, {"pid": "07ae64f7", "name": "PELEG DESIGN Handheld Cheese Grater", "img": "https://m.media-amazon.com/images/I/81isqPahIEL._AC_UL960_QL65_.jpg", "price": 15.9, "cat": "Kitchen", "desc": "Quality you can feel the moment you pick it up.", "startext": "★★★★★", "avg": 4.8, "rcount": 4, "stock": 12, "sold": 508, "compare": 25.99, "reviews": "<div class=\"review-section\"><div class=\"review-header\"><span class=\"review-stars\">★★★★★</span> <span class=\"review-avg\">4.8</span> <span class=\"review-count\">(4 verified reviews)</span></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Rachel N. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 14, 2026</span></div><p class=\"review-card-text\">So simple but it makes such a difference. Love everything about it.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★☆</span> <span class=\"review-card-name\">Nathan B. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 24, 2026</span></div><p class=\"review-card-text\">Cute design but also genuinely functional. Rare combo these days.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Mike R. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">March 12, 2026</span></div><p class=\"review-card-text\">One of those things you dont know you need until you have it.</p></div><div class=\"review-card\"><div class=\"review-card-header\"><span class=\"review-card-stars\">★★★★★</span> <span class=\"review-card-name\">Brandon T. <span class=\"verified-badge\">✅ Verified Buyer</span></span> <span class=\"review-card-date\">April 03, 2026</span></div><p class=\"review-card-text\">My kitchen feels more functional with this. Small upgrade big impact.</p></div></div>"}];
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


/* -- Checkout redirect (added by checkout_generator.py) -- */
window.PD = window.PD || {};
window.PD.goToCheckout = function () {
  var cart = [];
  try { cart = JSON.parse(localStorage.getItem('pd_cart') || '[]'); } catch (e) {}
  if (!cart || cart.length === 0) { alert('Your cart is empty!'); return; }
  window.location.href = 'checkout.html';
};
