// ==========================================
// 🎯 THE TRADING DRAFT CONFIGURATION HUB
// Modify the details below to update your live site!
// ==========================================
const SITE_CONFIG = {
    brandName: "The Trading Draft",
    // Your exact USDT TRC20 Address from 1000363118.jpg
    cryptoWalletAddress: "TYpnJ4SjhHUZASJZCYcH4n4ha5GzbGDnfE", 
    
    // Links 
    telegramSupport: "https://t.me/mk9110",             // Your exact Telegram link
    freeChannel: "https://t.me/your_free_channel",       // Your free setups channel link
    journalDownload: "https://docs.google.com/spreadsheets/d/1X_m1VbS0vGZ7bBPr21Cg92wB5T9k6SXeM28O0-bW-uA/copy", // Institutional Journal Link
    
    // Pricing Tiers
    pricing: {
        monthly: "$49",
        lifetime: "$199"
    }
};

// ==========================================
// 🚀 ENGINE CODE (Do not edit below this line)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Inject Text Content
    document.getElementById("nav-brand-name").innerText = SITE_CONFIG.brandName;
    document.getElementById("footer-brand-name").innerText = SITE_CONFIG.brandName;
    document.getElementById("price-monthly").innerText = SITE_CONFIG.pricing.monthly;
    document.getElementById("price-lifetime").innerText = SITE_CONFIG.pricing.lifetime;

    // Inject Hyperlinks
    document.getElementById("hero-free-btn").href = SITE_CONFIG.freeChannel;
    document.getElementById("floating-support-btn").href = SITE_CONFIG.telegramSupport;
    document.getElementById("pricing-monthly-tg").href = SITE_CONFIG.telegramSupport;
    document.getElementById("pricing-lifetime-tg").href = SITE_CONFIG.telegramSupport;
    
    // Inject Your 4 Core Services into the Feature Cards UI dynamically
    const featuresContainer = document.querySelector("section.py-20.max-w-6xl.mx-auto.px-4 > div.grid");
    if (featuresContainer) {
        featuresContainer.innerHTML = `
            <!-- Service 1: Landing Page -->
            <div class="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all">
                <div class="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 text-xl">
                    <i class="fas fa-globe"></i>
                </div>
                <h3 class="text-xl font-bold mb-3">High-Converting Landing Page</h3>
                <p class="text-slate-400 leading-relaxed text-sm">Access a high-performance web structure optimized to convert traffic into active trading students.</p>
            </div>
            
            <!-- Service 2: VIP Signals -->
            <div class="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all">
                <div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 text-xl">
                    <i class="fas fa-crosshairs"></i>
                </div>
                <h3 class="text-xl font-bold mb-3">VIP Signals Subscription</h3>
                <p class="text-slate-400 leading-relaxed text-sm">High-probability setups using strict M1/M5 Break and Retest execution with precise entries and SL/TP bounds.</p>
            </div>
            
            <!-- Service 3: Journal Download -->
            <div class="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all relative overflow-hidden group">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 text-xl">
                    <i class="fas fa-file-excel"></i>
                </div>
                <h3 class="text-xl font-bold mb-3">Professional Forex Journal</h3>
                <p class="text-slate-400 leading-relaxed text-sm mb-4">Track win-rates, risk-to-reward metrics, and clear data curves to refine your performance.</p>
                <a href="${SITE_CONFIG.journalDownload}" target="_blank" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 hover:bg-emerald-500/20 transition-all">
                    <i class="fas fa-download"></i> Download Sheet Asset
                </a>
            </div>

            <!-- Service 4: AI Analysis -->
            <div class="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all">
                <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 text-xl">
                    <i class="fas fa-brain"></i>
                </div>
                <h3 class="text-xl font-bold mb-3">AI Trade Analysis Service</h3>
                <p class="text-slate-400 leading-relaxed text-sm">Deep statistical pattern modeling on your history logs to expose strategic blindspots and edge performance.</p>
            </div>
        `;
    }
    
    // Tweak Modal descriptions dynamically
    const modalTitle = document.querySelector("#payment-modal h3");
    if(modalTitle) modalTitle.innerHTML = '<i class="fas fa-wallet text-indigo-400"></i> Crypto Wallet Deposit';
    
    const modalDesc = document.querySelector("#payment-modal p");
    if(modalDesc) modalDesc.innerText = "Send the exact amount via the Tron (TRC20) network to the address below, then click verify to send your confirmation snapshot.";
    
    const modalLabel = document.querySelector("#payment-modal span.text-slate-500");
    if(modalLabel) modalLabel.innerText = "USDT (TRC20) WALLET ADDRESS";
});

function openPaymentModal(planName, exactPrice) {
    document.getElementById("modal-plan-name").innerText = `${planName} (${exactPrice})`;
    document.getElementById("modal-binance-id").innerText = SITE_CONFIG.cryptoWalletAddress;
    document.getElementById("modal-verify-btn").href = `${SITE_CONFIG.telegramSupport}?text=Hi,%20I%20just%20sent%20the%20payment%20for%20the%20${encodeURIComponent(planName)}.`;
    
    const modal = document.getElementById("payment-modal");
    modal.classList.remove("hidden");
}

function closePaymentModal() {
    document.getElementById("payment-modal").classList.add("hidden");
}

function copyBinanceId() {
    const idText = document.getElementById("modal-binance-id").innerText;
    navigator.clipboard.writeText(idText).then(() => {
        alert("Wallet address copied to clipboard!");
    });
}
