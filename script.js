const CONFIG = {
    businessName: "DAILY DRIP",
    whatsappNumberIntl: "2349020594981",
    instagramHandle: "daily_drip_style",
    email: "dailydripstyle@outlook.com"
  };
  
  document.getElementById("year").textContent = new Date().getFullYear();
  
  document.getElementById("waLink").href =
    `https://wa.me/${CONFIG.whatsappNumberIntl}?text=${encodeURIComponent(
      `Hi ${CONFIG.businessName}, I’d like to inquire about your products.`
    )}`;
  
  document.getElementById("igLink").href =
    `https://instagram.com/${CONFIG.instagramHandle}`;
  
  document.getElementById("mailLink").href =
    `mailto:${CONFIG.email}?subject=${encodeURIComponent(CONFIG.businessName + " — Product inquiry")}`;
  
  document.querySelectorAll(".card").forEach(card => {
    const name = card.dataset.name;
    const price = card.dataset.price;
    const waBtn = card.querySelector(".order-btn");
    const igBtn = card.querySelector(".insta-btn");
  
    waBtn.href = `https://wa.me/${CONFIG.whatsappNumberIntl}?text=${encodeURIComponent(
      `Hi ${CONFIG.businessName}, I'm interested in: ${name} (${price}).`
    )}`;
    igBtn.href = `https://instagram.com/${CONFIG.instagramHandle}`;
  });
  