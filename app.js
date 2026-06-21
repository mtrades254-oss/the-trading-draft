// ==========================================
// 🎯 THE TRADING DRAFT CONFIGURATION HUB
// ==========================================
const SITE_CONFIG = {
    brandName: "The Trading Draft",
    cryptoWalletAddress: "TYpnJ4SjhHUZASJZCYcH4n4ha5GzbGDnfE", 
    
    // Hyperlinks
    telegramSupport: "https://t.me/mk9110",             
    freeChannel: "https://t.me/your_free_channel",       
    journalDownload: "https://docs.google.com/spreadsheets/d/1X_m1VbS0vGZ7bBPr21Cg92wB5T9k6SXeM28O0-bW-uA/copy", 

    pricing: {
        monthly: "$49",
        lifetime: "$199"
    }
};

// ==========================================
// 🚀 SIGNAL GENIE BOX INTERACTIVE ENGINE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Basic Brand Elements
    document.getElementById("nav-brand-name").innerText = SITE_CONFIG.brandName;
    document.getElementById("footer-brand-name").innerText = SITE_CONFIG.brandName;
    document.getElementById("price-monthly").innerText = SITE_CONFIG.pricing.monthly;
    document.getElementById("price-lifetime").innerText = SITE_CONFIG.pricing.lifetime;
    document.getElementById("hero-free-btn").href = SITE_CONFIG.freeChannel;
    document.getElementById("floating-support-btn").href = SITE_CONFIG.telegramSupport;
    document.getElementById("pricing-monthly-tg").href = SITE_CONFIG.telegramSupport;
    document.getElementById("pricing-lifetime-tg").href = SITE_CONFIG.telegramSupport;

    // Injecting the Signal Genie Box Interface layout directly into the site
    const featuresContainer = document.querySelector("section.py-20.max-w-6xl.mx-auto.px-4 > div.grid");
    if (featuresContainer) {
        // Un-grid the wrapper to allow the custom centralized dashboard container layout
        featuresContainer.className = "max-w-4xl mx-auto";
        featuresContainer.innerHTML = `
            <!-- The Glow Card Box -->
            <div class="bg-slate-950 border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.15)] rounded-3xl overflow-hidden p-6 md:p-10 transition-all">
                
                <!-- Box Header Details -->
                <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
                    <div>
                        <span class="bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-indigo-500/20">
                             System Active
                        </span>
                        <h2 class="text-2xl md:text-3xl font-bold text-white mt-2">Services Dashboard</h2>
                    </div>
                    <div class="flex items-center gap-6">
                        <div class="text-right">
                            <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Success Edge</p>
                            <p class="text-xl font-bold text-emerald-400">84.2%</p>
                        </div>
                        <div class="w-px h-8 bg-slate-800"></div>
                        <div class="text-right">
                            <p class="text-xs text-slate-500 uppercase tracking-wider font-semibold">Execution</p>
                            <p class="text-xl font-bold text-indigo-400">&lt; 15ms</p>
                        </div>
                    </div>
                </div>

                <!-- Navigation Tabs inside the box -->
                <div class="flex flex-wrap gap-2 border-b border-slate-800/60 pb-4 mb-6" id="genie-tab-headers">
                    <button onclick="switchGenieTab(0)" id="g-tab-btn-0" class="px-4 py-2.5 rounded-xl font-medium text-sm transition-all bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
                        <i class="fas fa-globe mr-2"></i> Landing Page
                    </button>
                    <button onclick="switchGenieTab(1)" id="g-tab-btn-1" class="px-4 py-2.5 rounded-xl font-medium text-sm transition-all text-slate-400 hover:text-white hover:bg-slate-900">
                        <i class="fas fa-crosshairs mr-2"></i> VIP Signals
                    </button>
                    <button onclick="switchGenieTab(2)" id="g-tab-btn-2" class="px-4 py-2.5 rounded-xl font-medium text-sm transition-all text-slate-400 hover:text-white hover:bg-slate-900">
                        <i class="fas fa-file-excel mr-2"></i> Forex Journal
                    </button>
                    <button onclick="switchGenieTab(3)" id="g-tab-btn-3" class="px-4 py-2.5 rounded-xl font-medium text-sm transition-all text-slate-400 hover:text-white hover:bg-slate-900">
                        <i class="fas fa-brain mr-2"></i> AI Trade Analysis
                    </button>
                </div>

                <!-- Content Area Showcase -->
                <div id="genie-tab-content" class="min-h-[220px] bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 relative">
                    <!-- Loaded dynamically by function -->
                </div>

            </div>
        `;
        // First initialization
        switchGenieTab(0);
    }
    
    // Formatting payment modal components
    const modalTitle = document.querySelector("#payment-modal h3");
    if(modalTitle) modalTitle.innerHTML = '<i class="fas fa-wallet text-indigo-400"></i> Crypto Wallet Deposit';
    const modalDesc = document.querySelector("#payment-modal p");
    if(modalDesc) modalDesc.innerText = "Send the exact amount via the Tron (TRC20) network to the address below, then click verify to send your confirmation snapshot.";
    const modalLabel = document.querySelector("#payment-modal span.text-slate-500");
    if(modalLabel) modalLabel.innerText = "USDT (TRC20) WALLET ADDRESS";
});

// Interactive state switcher for components
const TAB_DATA = [
    {
        title: "High-Converting Landing Page Architecture",
        badge: "Premium Utility",
        desc: "Get immediate access to a ultra-fast landing page shell optimized natively for speed and conversion metrics. Designed specifically to transform cold traffic funnels into active, engaged trading community signups.",
        icon: "fa-globe text-indigo-400 bg-indigo-500/10",
        action: ""
    },
    {
        title: "VIP Execution Signals Engine",
        badge: "Live Setup Analytics",
        desc: "Instantaneous execution signals distributed right to your mobile application interface. Every alert runs on automated, high-probability rules tracking strict M1/M5 Break and Retest technical patterns with hard boundaries for stops and target profits.",
        icon: "fa-crosshairs text-purple-400 bg-purple-500/10",
        action: ""
    },
    {
        title: "Ultimate Real-Time Forex Tracking Journal",
        badge: "Fully Verified Excel Asset",
        desc: "Download our highly detailed, professional institutional-grade trading ledger. Tracks auto-calculating equity curves, win-rate percent formulas, risk-to-reward ratios (R:R), and emotional psychological variables to expose technical leaks.",
        icon: "fa-file-excel text-emerald-400 bg-emerald-500/10",
        action: `<div class="mt-6"><a href="${SITE_CONFIG.journalDownload}" target="_blank" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 hover:bg-emerald-500/20 transition-all"><i class="fas fa-download"></i> Download Sheet Template</a></div>`
    },
    {
        title: "AI Quantitative Analysis Engine",
        badge: "Advanced Machine Learning",
        desc: "Deep algorithmic machine learning processing models mapping your custom strategy track record. Scans previous performance spreadsheets to accurately surface blindspots, behavior errors, and maximize absolute risk-adjusted gains.",
        icon: "fa-brain text-blue-400 bg-blue-500/10",
        action: ""
    }
];

window.switchGenieTab = function(index) {
    // Clear styles on all navigation tabs
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`g-tab-btn-${i}`);
        if(btn) {
            btn.className = "px-4 py-2.5 rounded-xl font-medium text-sm transition-all text-slate-400 hover:text-white hover:bg-slate-900";
        }
    }
    
    // Highlight the clicked active tab button
    const activeBtn = document.getElementById(`g-tab-btn-${index}`);
    if(activeBtn) {
        activeBtn.className = "px-4 py-2.5 rounded-xl font-medium text-sm transition-all bg-indigo-600 text-white shadow-lg shadow-indigo-600/20";
    }

    // Load active service data into presentation viewport
    const contentArea = document.getElementById("genie-tab-content");
    if(contentArea) {
        const item = TAB_DATA[index];
        contentArea.innerHTML = `
            <div class="flex flex-col md:flex-row items-start gap-6 animate-fadeIn">
                <div class="w-14 h-14 rounded-2xl ${item.icon} flex items-center justify-center text-2xl shrink-0 border border-white/5">
                    <i class="fas ${item.icon.split(' ')[0]}"></i>
                </div>
                <div class="space-y-2">
                    <span class="text-xs font-bold text-indigo-400 uppercase tracking-widest">${item.badge}</span>
                    <h4 class="text-xl font-bold text-white">${item.title}</h4>
                    <p class="text-slate-400 leading-relaxed text-sm max-w-2xl">${item.desc}</p>
                    ${item.action}
                </div>
            </div>
        `;
    }
};

// Modal functions for buying plans
window.openPaymentModal = function(planName, exactPrice) {
    document.getElementById("modal-plan-name").innerText = `${planName} (${exactPrice})`;
    document.getElementById("modal-binance-id").innerText = SITE_CONFIG.cryptoWalletAddress;
    document.getElementById("modal-verify-btn").href = `${SITE_CONFIG.telegramSupport}?text=Hi,%20I%20just%20sent%20the%20payment%20for%20the%20${encodeURIComponent(planName)}.`;
    document.getElementById("payment-modal").classList.remove("hidden");
};

window.closePaymentModal = function() {
    document.getElementById("payment-modal").classList.add("hidden");
};

window.copyBinanceId = function() {
    const idText = document.getElementById("modal-binance-id").innerText;
    navigator.clipboard.writeText(idText).then(() => {
        alert("Wallet address copied to clipboard!");
    });
};
