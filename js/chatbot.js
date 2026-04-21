/*
 * PhoenixDrop Smart Assistant v1.1
 * Rule-based chatbot with context tracking and escalation.
 * var/function only. No const/let/arrow/template literals.
 */

(function() {
    "use strict";

    /* ===== KNOWLEDGE BASE ===== */
    var KB = {
        shipping: {
            time: "7-15 business days",
            cost: "FREE on all orders",
            tracking: "You'll receive a tracking number via email within 2-3 business days after your order ships.",
            countries: "We currently ship within the United States.",
            detail: "All orders include free standard shipping. Most items ship within 1-3 business days and arrive in 7-15 business days. You'll get a tracking email once your order is on its way."
        },
        returns: {
            window: "30 days",
            policy: "We offer a 30-day return policy. If you're not satisfied, contact us within 30 days of delivery for a full refund or exchange.",
            process: "To start a return: 1) Send us a message with your order details, 2) We'll send you return instructions, 3) Once we receive the item, we'll process your refund within 3-5 business days.",
            condition: "Items must be unused and in original packaging."
        },
        payment: {
            methods: "We accept PayPal and all major credit/debit cards through PayPal's secure checkout.",
            security: "All payments are processed securely through PayPal. We never store your card information.",
            issues: "If your payment failed, try using a different card or PayPal balance. If the problem persists, leave us a message and we'll help."
        },
        general: {
            brand: "PhoenixDrop",
            tagline: "New drops every week",
            categories: "kitchen gadgets and desk/WFH accessories",
            contact_email: "phoenixdrop.support@gmail.com"
        }
    };

    /* ===== INTENT PATTERNS ===== */
    var INTENTS = [
        {
            name: "greeting",
            patterns: ["hello", "hi", "hey", "sup", "yo", "whats up", "good morning", "good evening", "howdy", "hola"],
            response: function() {
                return "Hey there! Welcome to PhoenixDrop. How can I help you today?";
            },
            quickReplies: ["Where's my order?", "Shipping info", "Return policy", "Product question"]
        },
        {
            name: "shipping_general",
            patterns: ["shipping", "ship", "deliver", "delivery", "how long", "when will", "when does", "arrive", "get here", "estimated", "eta"],
            response: function() {
                return KB.shipping.detail;
            },
            quickReplies: ["Do you ship internationally?", "Is shipping free?", "Track my order"]
        },
        {
            name: "shipping_free",
            patterns: ["free shipping", "shipping cost", "shipping fee", "how much.*ship", "delivery fee", "shipping price"],
            response: function() {
                return "Yes! Shipping is completely FREE on every order. No minimum purchase required.";
            }
        },
        {
            name: "shipping_international",
            patterns: ["international", "outside us", "other countries", "worldwide", "canada", "uk", "europe", "australia", "ship to"],
            response: function() {
                return "We currently ship within the United States only. We're working on expanding to more countries soon! Follow us on TikTok or Instagram for updates.";
            }
        },
        {
            name: "order_tracking",
            patterns: ["track", "tracking", "where.*order", "order status", "my order", "when.*arrive", "where.*package", "haven't received", "not received", "lost package", "lost order"],
            response: function() {
                var orders = [];
                try {
                    orders = JSON.parse(localStorage.getItem("pd_orders") || "[]");
                } catch(e) {}
                if (orders.length > 0) {
                    var latest = orders[orders.length - 1];
                    var total = latest.total || "N/A";
                    var date = latest.date || "recently";
                    return "I found your most recent order from " + date + " (total: $" + total + "). Tracking numbers are sent via email within 2-3 business days after shipping. If it's been more than 15 business days, let me connect you with our team.";
                }
                return "I don't see any orders on this device. If you placed an order, your tracking info will be sent to your email within 2-3 business days after it ships. If it's been a while, I can help you reach our support team.";
            },
            quickReplies: ["Talk to support", "Shipping times", "Return policy"]
        },
        {
            name: "returns",
            patterns: ["return", "refund", "money back", "exchange", "send back", "don't want", "not satisfied", "wrong item", "damaged", "broken", "defective"],
            response: function() {
                return KB.returns.policy + "\n\n" + KB.returns.process;
            },
            quickReplies: ["Start a return", "Shipping info"]
        },
        {
            name: "return_start",
            patterns: ["start.*return", "initiate.*return", "want.*return", "how.*return", "return process"],
            response: function() {
                return "I'd be happy to help with your return! To process it quickly, I'll need to connect you with our support team. Please leave a message with your order details and we'll get back to you within 24 hours with return instructions.";
            },
            quickReplies: ["Leave a message"]
        },
        {
            name: "payment_general",
            patterns: ["pay", "payment", "credit card", "debit", "paypal", "checkout", "billing", "charge", "charged"],
            response: function() {
                return KB.payment.methods + " " + KB.payment.security;
            }
        },
        {
            name: "payment_issue",
            patterns: ["payment fail", "card declined", "can't pay", "won't go through", "error.*pay", "pay.*error", "checkout.*problem", "problem.*checkout"],
            response: function() {
                return KB.payment.issues;
            },
            quickReplies: ["Talk to support", "Payment methods"]
        },
        {
            name: "product_question",
            patterns: ["product", "item", "quality", "material", "size", "dimensions", "color", "does it", "is it", "can it", "how does", "what is", "tell me about"],
            response: function() {
                return "Great question! Each product page has detailed descriptions and specs. If you need specific info about a product, let me know which one and I'll do my best to help. If I can't answer it, I'll connect you with our team.";
            },
            quickReplies: ["Browse products", "Talk to support"]
        },
        {
            name: "stock",
            patterns: ["in stock", "out of stock", "available", "sold out", "restock", "back in stock", "when.*available"],
            response: function() {
                return "If an item is showing on our store, it's available to order! We get new drops every week, so if something sold out, check back soon or follow us on TikTok @phoenixdropstore for restock alerts.";
            }
        },
        {
            name: "discount",
            patterns: ["discount", "coupon", "promo", "code", "sale", "deal", "offer", "percent off", "cheaper"],
            response: function() {
                return "We don't have active coupon codes right now, but our prices are already super competitive with free shipping included! Follow us on TikTok @phoenixdropstore \u2014 we'll announce any special deals there first.";
            }
        },
        {
            name: "social",
            patterns: ["tiktok", "instagram", "social media", "follow", "content"],
            response: function() {
                return "Find us on social media!\n\nTikTok: @phoenixdropstore\nInstagram: @phoenixdropstore\n\nWe post new finds, kitchen hacks, desk setup inspo, and exclusive deals!";
            }
        },
        {
            name: "contact",
            patterns: ["contact", "email", "reach", "support.*email", "talk.*human", "real person", "speak.*someone", "agent", "human", "representative"],
            response: function() {
                return "You can reach our team at phoenixdrop.support@gmail.com, or leave a message right here and we'll reply within 24 hours!";
            },
            quickReplies: ["Leave a message", "Email support"]
        },
        {
            name: "thanks",
            patterns: ["thank", "thanks", "thx", "appreciate", "helpful", "great", "awesome", "perfect", "got it"],
            response: function() {
                return "You're welcome! Anything else I can help with?";
            },
            quickReplies: ["No, I'm good!", "Shipping info", "Browse products"]
        },
        {
            name: "bye",
            patterns: ["bye", "goodbye", "see ya", "later", "no.*good", "that's all", "nothing else", "i'm good", "all set", "nope"],
            response: function() {
                return "Thanks for chatting! Happy shopping and enjoy your PhoenixDrop finds. Have a great day!";
            }
        },
        {
            name: "who_are_you",
            patterns: ["who are you", "what are you", "are you.*bot", "are you.*human", "are you.*real", "ai", "robot", "chatbot"],
            response: function() {
                return "I'm the PhoenixDrop assistant! I can help with shipping questions, order tracking, returns, product info, and more. If I can't solve something, I'll connect you with our support team right away.";
            }
        },
        {
            name: "browse",
            patterns: ["browse", "shop", "products", "catalog", "what do you sell", "what.*have", "show me", "categories"],
            response: function() {
                return "We specialize in two categories:\n\n\ud83c\udf73 Kitchen Gadgets \u2014 clever tools that make cooking easier\n\ud83d\udda5\ufe0f Desk & WFH Accessories \u2014 upgrade your workspace\n\nCheck out our latest drops on the main page! New products every week.";
            },
            quickReplies: ["Shipping info", "Return policy"]
        },
        {
            name: "escalate",
            patterns: ["talk.*support", "leave.*message", "contact.*team", "reach.*team", "message.*support", "connect.*support", "need help", "speak.*support"],
            response: function() {
                window.PD_Chat.showMessageForm();
                return null;
            }
        },
        {
            name: "complaint",
            patterns: ["terrible", "awful", "worst", "scam", "fake", "fraud", "rip off", "ripoff", "never buying", "waste", "garbage", "trash", "horrible", "disgusting"],
            response: function() {
                return "I'm really sorry to hear you had a bad experience. That's not what we want for any customer. Please leave us a message with the details, and our team will personally look into this and make it right.";
            },
            quickReplies: ["Leave a message"]
        },
        {
            name: "slow_shipping",
            patterns: ["so slow", "taking forever", "too long", "still waiting", "been weeks", "where is it", "taking long"],
            response: function() {
                return "I understand the wait can be frustrating! Our standard delivery is 7-15 business days. If it's been longer than that, something might be off. Let me connect you with support so we can track it down and fix this for you.";
            },
            quickReplies: ["Leave a message", "Track my order"]
        }
    ];

    /* ===== CONTEXT TRACKER ===== */
    var context = {
        lastIntent: null,
        messageCount: 0,
        unresolved: 0,
        userName: null,
        hasGreeted: false
    };

    /* ===== CORE FUNCTIONS ===== */

    function matchIntent(input) {
        var lower = input.toLowerCase().replace(/[^\w\s]/g, "");
        var bestMatch = null;
        var bestScore = 0;

        for (var i = 0; i < INTENTS.length; i++) {
            var intent = INTENTS[i];
            for (var j = 0; j < intent.patterns.length; j++) {
                var pattern = intent.patterns[j];
                if (pattern.indexOf(".*") > -1) {
                    try {
                        var re = new RegExp(pattern);
                        if (re.test(lower)) {
                            var score = pattern.replace(/\.\*/g, "").length;
                            if (score > bestScore) {
                                bestScore = score;
                                bestMatch = intent;
                            }
                        }
                    } catch(e) {}
                } else {
                    var idx = lower.indexOf(pattern);
                    if (idx > -1) {
                        var score2 = pattern.length;
                        var before = idx > 0 ? lower.charAt(idx - 1) : " ";
                        var after = idx + pattern.length < lower.length ? lower.charAt(idx + pattern.length) : " ";
                        if (before === " " || before === "") score2 += 2;
                        if (after === " " || after === "") score2 += 2;
                        if (score2 > bestScore) {
                            bestScore = score2;
                            bestMatch = intent;
                        }
                    }
                }
            }
        }
        return bestMatch;
    }

    function getFallbackResponse() {
        context.unresolved++;
        if (context.unresolved >= 2) {
            return "I'm having trouble understanding that one. Let me connect you with our support team so they can help you properly. You can leave a message below, or email us at phoenixdrop.support@gmail.com.";
        }
        var fallbacks = [
            "Hmm, I'm not sure about that. Could you rephrase or try one of these?",
            "I want to make sure I help you right. Can you tell me a bit more about what you need?",
            "I didn't quite catch that. Are you asking about shipping, orders, returns, or something else?"
        ];
        var idx = Math.floor(Math.random() * fallbacks.length);
        return fallbacks[idx];
    }

    function addMessage(text, isBot) {
        var container = document.getElementById("pd-chat-messages");
        if (!container) return;
        var div = document.createElement("div");
        div.className = "pd-msg " + (isBot ? "pd-msg-bot" : "pd-msg-user");
        div.innerHTML = text.replace(/\n/g, "<br>");
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    function addQuickReplies(replies) {
        if (!replies || replies.length === 0) return;
        var container = document.getElementById("pd-chat-messages");
        var wrap = document.createElement("div");
        wrap.className = "pd-quick-replies";
        for (var i = 0; i < replies.length; i++) {
            var btn = document.createElement("button");
            btn.className = "pd-quick-btn";
            btn.textContent = replies[i];
            btn.setAttribute("data-reply", replies[i]);
            btn.onclick = function() {
                var text = this.getAttribute("data-reply");
                var allQR = document.querySelectorAll(".pd-quick-replies");
                for (var q = 0; q < allQR.length; q++) {
                    allQR[q].remove();
                }
                document.getElementById("pd-chat-input").value = text;
                window.PD_Chat.send();
            };
            wrap.appendChild(btn);
        }
        container.appendChild(wrap);
        container.scrollTop = container.scrollHeight;
    }

    function showTyping() {
        var container = document.getElementById("pd-chat-messages");
        var div = document.createElement("div");
        div.className = "pd-typing";
        div.id = "pd-typing-indicator";
        div.innerHTML = "<span></span><span></span><span></span>";
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    function hideTyping() {
        var el = document.getElementById("pd-typing-indicator");
        if (el) el.remove();
    }

    function processInput(text) {
        context.messageCount++;
        addMessage(text, false);

        showTyping();

        var delay = 400 + Math.random() * 600;
        setTimeout(function() {
            hideTyping();

            var intent = matchIntent(text);
            var reply;
            var quickReplies = null;

            if (intent) {
                context.lastIntent = intent.name;
                context.unresolved = 0;
                reply = intent.response();
                quickReplies = intent.quickReplies || null;

                if (reply === null) return;
            } else {
                reply = getFallbackResponse();
                if (context.unresolved >= 2) {
                    quickReplies = ["Leave a message", "Email support", "Shipping info", "Return policy"];
                } else {
                    quickReplies = ["Shipping info", "Track order", "Return policy", "Talk to support"];
                }
            }

            addMessage(reply, true);
            if (quickReplies) {
                addQuickReplies(quickReplies);
            }
        }, delay);
    }

    /* ===== PUBLIC API ===== */
    window.PD_Chat = {
        toggle: function() {
            var win = document.getElementById("pd-chat-window");
            var btn = document.getElementById("pd-chat-launcher");
            if (!win || !btn) return;

            if (win.classList.contains("open")) {
                win.classList.remove("open");
                btn.classList.remove("open");
            } else {
                win.classList.add("open");
                btn.classList.add("open");

                if (!context.hasGreeted) {
                    context.hasGreeted = true;
                    setTimeout(function() {
                        addMessage("Hey! \ud83d\udc4b Welcome to PhoenixDrop. I'm here to help with orders, shipping, returns, or anything else. What can I do for you?", true);
                        addQuickReplies(["Where's my order?", "Shipping info", "Return policy", "Browse products"]);
                    }, 300);
                }

                setTimeout(function() {
                    var input = document.getElementById("pd-chat-input");
                    if (input) input.focus();
                }, 350);
            }
        },

        send: function() {
            var input = document.getElementById("pd-chat-input");
            if (!input) return;
            var text = input.value.trim();
            if (!text) return;
            input.value = "";
            processInput(text);
        },

        showMessageForm: function() {
            var messages = document.getElementById("pd-chat-messages");
            var inputArea = document.getElementById("pd-chat-input-area");
            var form = document.getElementById("pd-msg-form");
            if (messages) messages.style.display = "none";
            if (inputArea) inputArea.style.display = "none";
            if (form) {
                form.style.display = "flex";
                document.getElementById("pd-msg-form-success").style.display = "none";
                var fields = ["pd-msg-name", "pd-msg-email", "pd-msg-topic", "pd-msg-order-id", "pd-msg-body"];
                for (var i = 0; i < fields.length; i++) {
                    var el = document.getElementById(fields[i]);
                    if (el) el.value = "";
                }
                var formFields = form.querySelectorAll("input, textarea, select, h4, p");
                for (var j = 0; j < formFields.length; j++) {
                    formFields[j].style.display = "";
                }
                document.getElementById("pd-msg-form-submit").style.display = "";
                form.querySelector(".pd-back-to-chat").style.display = "";
            }
        },

        submitMessage: function() {
            var name = document.getElementById("pd-msg-name").value.trim();
            var email = document.getElementById("pd-msg-email").value.trim();
            var topic = document.getElementById("pd-msg-topic").value;
            var orderId = document.getElementById("pd-msg-order-id").value.trim();
            var body = document.getElementById("pd-msg-body").value.trim();

            if (!name || !email || !body) {
                alert("Please fill in your name, email, and message.");
                return;
            }

            if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
                alert("Please enter a valid email address.");
                return;
            }

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://formspree.io/f/xpwdgvek", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Accept", "application/json");

            var payload = {
                name: name,
                email: email,
                _replyto: email,
                topic: topic || "General",
                order_id: orderId || "N/A",
                message: body,
                _subject: "PhoenixDrop Support: " + (topic || "General") + " from " + name
            };

            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var form = document.getElementById("pd-msg-form");
                    var formFields = form.querySelectorAll("input, textarea, select, h4, p");
                    for (var j = 0; j < formFields.length; j++) {
                        formFields[j].style.display = "none";
                    }
                    document.getElementById("pd-msg-form-submit").style.display = "none";
                    form.querySelector(".pd-back-to-chat").style.display = "none";
                    document.getElementById("pd-msg-form-success").style.display = "block";

                    try {
                        var msgs = JSON.parse(localStorage.getItem("pd_messages") || "[]");
                        msgs.push({
                            name: name,
                            email: email,
                            topic: topic,
                            orderId: orderId,
                            body: body,
                            date: new Date().toISOString()
                        });
                        localStorage.setItem("pd_messages", JSON.stringify(msgs));
                    } catch(e) {}
                } else {
                    alert("Something went wrong. Please email us directly at phoenixdrop.support@gmail.com");
                }
            };

            xhr.onerror = function() {
                alert("Connection error. Please email us at phoenixdrop.support@gmail.com");
            };

            xhr.send(JSON.stringify(payload));
        },

        backToChat: function() {
            var messages = document.getElementById("pd-chat-messages");
            var inputArea = document.getElementById("pd-chat-input-area");
            var form = document.getElementById("pd-msg-form");
            if (messages) messages.style.display = "flex";
            if (inputArea) inputArea.style.display = "flex";
            if (form) form.style.display = "none";

            addMessage("I'm back! What else can I help with?", true);
            addQuickReplies(["Shipping info", "Track order", "Return policy", "Browse products"]);
        }
    };

})();
