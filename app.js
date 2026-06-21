// ==========================================
// ⚙️ SITE CONFIGURATION HUB
// Modify the details below to update your live site!
// ==========================================
const SITE_CONFIG = {
    brandName: "The Trading Draft",
    // Your exact USDT TRC20 Address from 1000363118.jpg
    cryptoWalletAddress: "TYpnJ4SjhHUZASJZCYcH4n4ha5GzbGDnfE", 
    
    // Links (Replace with your actual Telegram links)
    telegramSupport: "https://t.me/mk9110",             // Your Telegram Support/Contact link
    freeChannel: "https://t.me/your_free_channel",       // Your free setups channel link
    
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
    
    // Dynamically tweak modal labels to match direct wallet deposits
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
