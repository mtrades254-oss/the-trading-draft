// ==========================================
// 🎯 THE TRADING DRAFT CONFIGURATION HUB
// ==========================================
const SITE_CONFIG = {
    brandName: "The Trading Draft",
    // Your exact USDT TRC20 Address from 1000363118.jpg
    cryptoWalletAddress: "TYpnJ4SjhHUZASJZCYcH4n4ha5GzbGDnfE", 
    
    telegramSupport: "https://t.me/mk9110",             
    freeChannel: "https://t.me/your_free_channel",       
    journalDownload: "https://docs.google.com/spreadsheets/d/1X_m1VbS0vGZ7bBPr21Cg92wB5T9k6SXeM28O0-bW-uA/copy", 

    pricing: {
        monthly: "$49",
        lifetime: "$199"
    }
};

// ==========================================
// 🚀 NEON GLOW ENGINE INTERFACE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Apply styling enhancements straight to the body background
    document.body.className = "bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500/30 selection:text-white";

    // Standard Injections
    document.getElementById("nav-brand-name").innerText = SITE_CONFIG.brandName;
    document.getElementById("footer-brand-name").innerText = SITE_CONFIG.brandName;
    document.getElementById("price-monthly").innerText = SITE_CONFIG.pricing.monthly;
    document.getElementById("price-lifetime").innerText = SITE_CONFIG.pricing.lifetime;
    document.getElementById("hero-free-btn").href = SITE_CONFIG.freeChannel;
    document.getElementById("floating-support-btn").href = SITE_CONFIG.telegramSupport;
    document.getElementById("pricing-monthly-tg").href = SITE_CONFIG.telegramSupport;
    document.getElementById("pricing-lifetime-tg").href = SITE_CONFIG.telegramSupport;

    // Injecting the glowing Dashboard setup
    const featuresContainer = document.querySelector("section.py-20.max-w-6xl.mx-auto.px-4 > div.grid");
    if (featuresContainer) {
        featuresContainer.className = "max-w-4xl mx-auto";
        featuresContainer.innerHTML = `
            <!-- The Premium Signal Genie Box Shell -->
            <div class="bg-slate-900/60 border border-indigo-500/40 shadow-[0_0_60px_rgba(99,102,241,0.25)] rounded-3xl overflow-hidden p-6 md:p-10 transition-all backdrop-blur-md">
                
                <!-- Box Header -->
                <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-8">
                    <div>
                        <span class="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                             ● LIVE HUB ACTIVE
                        </span>
                        <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-2 tracking-tight">Our Ecosystem Platforms</h2>
                    </div>
                    <div class="flex items-center gap-6">
                        <div class="text-right">
                            <p class="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Accuracy Model</p>
                            <p class="text-xl font-black text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">84.2%</p>
                        </div>
                        <div class="w-px h-8 bg-slate-800"></div>
                        <div class="text-right">
                            <p class="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Server Relay</p>
                            <p class="text-xl font-black text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]">&lt; 12ms</p>
                        </div>
                    </div>
                </div>

                <!-- Interactive Tab Rows -->
                <div class="flex flex-wrap gap-2 border-b border-slate-800/50 pb-5 mb-6" id="genie-tab-headers">
                    <button onclick="switchGenieTab(0)" id="g-tab-btn-0" class="px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-600/30 border border-indigo-400/20">
                        Landing Page
                    </button>
                    <button onclick="switchGenieTab(1)" id="g-tab-btn-1" class="px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-800">
                        VIP Signals
                    </button>
                    <button onclick="switchGenieTab(2)" id="g-tab-btn-2" class="px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-800">
                        Forex Journal
                    </button>
                    <button onclick="switchGenieTab(3)" id="g-tab-btn-3" class="px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-slate-800">
                        AI Analysis
                    </button>
                </div>

                <!-- Centralized Active Content Presentation Block -->
                <div id="genie-tab-content" class="min-h-[200px] bg-slate-950/80 border border-slate-800/80 rounded-2xl p-6 shadow-inner">
                    <!-- Controlled Dynamically via JS -->
                </div>

            </div>
        `;
        switchGenieTab(0);
    }
    
    // Format modal details
    const modalTitle = document.querySelector("#payment-modal h3");
    if(modalTitle) modalTitle.innerHTML = '<i class="fas fa-wallet text-indigo-400"></i> Secure Crypto Vault';
    const modalDesc = document.querySelector("#payment-modal p");
    if(modalDesc) modalDesc.innerText = "Send the exact amount via the Tron (TRC20) network to the address below, then click verify to send your confirmation snapshot.";
    const modalLabel = document.querySelector("#payment-modal span.text-slate-500");
    if(modalLabel) modalLabel.innerText = "USDT (TRC20) WALLET ADDRESS";
});

const TAB_DATA = [
    {
        title: "High-Converting Landing Page Framework",
        badge: "Automated Lead Hub",
        desc: "A custom engineered, lightning-fast deployment layer tuned flawlessly for premium conversion. Built to bridge social traffic directly into highly responsive subscription streams instantly.",
        icon: "fa-globe text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
        action: ""
    },
    {
        title: "Sniper Premium Execution Signals",
        badge: "Alpha Market Analytics",
        desc: "Premium real-time setups sent seamlessly via push notifications. Operates exclusively on sniper rules tracking structural Break and Retest entries across M1/M5 charts with pre-calculated, iron-clad Risk-to-Reward targets.",
        icon: "fa-crosshairs text-purple-400 bg-purple-500/10 border-purple-500/20",
        action: ""
    },
    {
        title: "Institutional-Grade Interactive Trade Journal",
        badge: "Performance Asset Download",
        desc: "Expose dangerous psychological execution faults. This complete tracking sheet monitors running win-rates, equity growth metrics, automated R-multiple equations, and custom discipline tags smoothly.",
        icon: "fa-file-excel text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
        action: `<div class="mt-6"><a href="${SITE_CONFIG.journalDownload}" target="_blank" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/30 hover:bg-emerald-500/20 shadow-[0_0_15px_rgba(52,211,153,0.1)] transition-all"><i class="fas fa-download"></i> Get Journal Sheet Asset</a></div>`
    },
    {
        title: "AI Quantitative Backtesting Analysis",
        badge: "Machine Learning Intelligence",
        desc: "Run deep predictive computational metrics over your history parameters. Our algorithmic processing module surfaces hidden strategy vulnerabilities, timing lags, and tracks mathematical edge improvements.",
        icon: "fa-brain text-blue-400 bg-blue-500/10 border-blue-500/20",
        action: ""
    }
];

window.switchGenieTab = function(index) {
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`g-tab-btn-${i}`);
        if(btn) {
            btn.className = "px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent";
        }
    }
    
    const activeBtn = document.getElementById(`g-tab-btn-${index}`);
    if(activeBtn) {
        activeBtn.className = "px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-600/30 border border-indigo-400/20";
    }

    const contentArea = document.getElementById("genie-tab-content");
    if(contentArea) {
        const item = TAB_DATA[index];
        contentArea.innerHTML = `
            <div class="flex flex-col md:flex-row items-start gap-6 animate-fadeIn">
                <div class="w-14 h-14 rounded-2xl ${item.icon.split(' ')[0]} ${item.icon.split(' ')[1]} flex items-center justify-center text-2xl shrink-0 border ${item.icon.split(' ')[2]} shadow-lg">
                    <i class="fas ${item.icon.split(' ')[0]}"></i>
                </div>
                <div class="space-y-2">
                    <span class="text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">${item.badge}</span>
                    <h4 class="text-xl font-extrabold text-white tracking-tight">${item.title}</h4>
                    <p class="text-slate-400 leading-relaxed text-sm max-w-2xl">${item.desc}</p>
                    ${item.action}
                </div>
            </div>
        `;
    }
};

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
