// ==========================================
// 🎯 THE TRADING DRAFT CONFIGURATION HUB
// ==========================================
const SITE_CONFIG = {
    brandName: "The Trading Draft",
    cryptoWalletAddress: "TYpnJ4SjhHUZASJZCYcH4n4ha5GzbGDnfE", 
    
    telegramSupport: "https://t.me/mk9110",             
    journalDownload: "https://docs.google.com/spreadsheets/d/1X_m1VbS0vGZ7bBPr21Cg92wB5T9k6SXeM28O0-bW-uA/copy", 

    pricing: {
        monthly: "$49",
        lifetime: "$199"
    }
};

// ==========================================
// 🚀 LUXURY GOLD ENGINE INTERFACE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Standard Injections
    document.getElementById("nav-brand-name").innerText = SITE_CONFIG.brandName;
    document.getElementById("footer-brand-name").innerText = SITE_CONFIG.brandName;
    document.getElementById("price-monthly").innerText = SITE_CONFIG.pricing.monthly;
    document.getElementById("price-lifetime").innerText = SITE_CONFIG.pricing.lifetime;
    document.getElementById("floating-support-btn").href = SITE_CONFIG.telegramSupport;

    // Injecting the glowing Dashboard setup
    const featuresContainer = document.querySelector("section relative > div.max-w-6xl.mx-auto > div.grid") || document.querySelector("section.py-16.px-4.relative > div.max-w-6xl.mx-auto > div.grid");
    if (featuresContainer) {
        featuresContainer.className = "max-w-4xl mx-auto";
        featuresContainer.innerHTML = `
            <div class="bg-zinc-950/90 border border-amber-500/30 shadow-[0_0_60px_rgba(245,158,11,0.12)] rounded-3xl overflow-hidden p-6 md:p-10 transition-all backdrop-blur-md">
                
                <div class="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-900 pb-6 mb-8">
                    <div>
                        <span class="bg-amber-500/10 text-amber-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                             ● LIVE HUB ACTIVE
                        </span>
                        <h2 class="text-2xl md:text-3xl font-extrabold text-white mt-2 tracking-tight">Our Ecosystem Platforms</h2>
                    </div>
                    <div class="flex items-center gap-6">
                        <div class="text-right">
                            <p class="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Accuracy Model</p>
                            <p class="text-xl font-black text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]">84.2%</p>
                        </div>
                        <div class="w-px h-8 bg-zinc-800"></div>
                        <div class="text-right">
                            <p class="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Server Relay</p>
                            <p class="text-xl font-black text-amber-500/80">&lt; 12ms</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap gap-2 border-b border-zinc-900 pb-5 mb-6" id="genie-tab-headers">
                    <button onclick="switchGenieTab(0)" id="g-tab-btn-0" class="px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-xl shadow-amber-500/10 border border-amber-400/20">
                        Landing Page
                    </button>
                    <button onclick="switchGenieTab(1)" id="g-tab-btn-1" class="px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800">
                        VIP Signals
                    </button>
                    <button onclick="switchGenieTab(2)" id="g-tab-btn-2" class="px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800">
                        Forex Journal
                    </button>
                    <button onclick="switchGenieTab(3)" id="g-tab-btn-3" class="px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-zinc-800">
                        AI Analysis
                    </button>
                </div>

                <div id="genie-tab-content" class="min-h-[200px] bg-black/40 border border-zinc-900 rounded-2xl p-6 shadow-inner">
                    </div>

            </div>
        `;
        switchGenieTab(0);
    }
    
    const modalTitle = document.querySelector("#payment-modal h3");
    if(modalTitle) modalTitle.innerHTML = '<i class="fas fa-wallet text-amber-400"></i> Secure Crypto Vault';
});

const TAB_DATA = [
    {
        title: "High-Converting Landing Page Framework",
        badge: "Automated Lead Hub",
        desc: "A custom engineered, lightning-fast deployment layer tuned flawlessly for premium conversion. Built to bridge traffic directly into highly responsive subscription streams instantly.",
        icon: "fa-globe text-amber-400 bg-amber-500/5 border-amber-500/20",
        action: ""
    },
    {
        title: "Sniper Premium Execution Signals",
        badge: "Alpha Market Analytics",
        desc: "Premium real-time setups sent seamlessly via push notifications. Operates exclusively on sniper rules tracking structural Break and Retest entries across M1/M5 charts with pre-calculated, iron-clad Risk-to-Reward targets.",
        icon: "fa-crosshairs text-amber-400 bg-amber-500/5 border-amber-500/20",
        action: ""
    },
    {
        title: "Institutional-Grade Interactive Trade Journal",
        badge: "Performance Asset Download",
        desc: "Expose dangerous psychological execution faults. This complete tracking sheet monitors running win-rates, equity growth metrics, automated R-multiple equations, and custom discipline tags smoothly.",
        icon: "fa-file-excel text-amber-400 bg-amber-500/5 border-amber-500/20",
        action: `<div class="mt-6"><a href="${SITE_CONFIG.journalDownload}" target="_blank" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/30 hover:bg-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)] transition-all"><i class="fas fa-download"></i> Get Journal Sheet Asset</a></div>`
    },
    {
        title: "AI Quantitative Backtesting Analysis",
        badge: "Machine Learning Intelligence",
        desc: "Run deep predictive computational metrics over your history parameters. Our algorithmic processing module surfaces hidden strategy vulnerabilities, timing lags, and tracks mathematical edge improvements.",
        icon: "fa-brain text-amber-400 bg-amber-500/5 border-amber-500/20",
        action: ""
    }
];

window.switchGenieTab = function(index) {
    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`g-tab-btn-${i}`);
        if(btn) {
            btn.className = "px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent";
        }
    }
    
    const activeBtn = document.getElementById(`g-tab-btn-${index}`);
    if(activeBtn) {
        activeBtn.className = "px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all bg-gradient-to-r from-amber-500 to-yellow-600 text-black shadow-xl shadow-amber-500/10 border border-amber-400/20";
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
                    <span class="text-[10px] font-black text-amber-400 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">${item.badge}</span>
                    <h4 class="text-xl font-extrabold text-white tracking-tight">${item.title}</h4>
                    <p class="text-zinc-400 leading-relaxed text-sm max-w-2xl">${item.desc}</p>
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
