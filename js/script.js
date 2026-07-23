/* =========================================================
   VYSHNAVAM — site script
   Cart is stored in localStorage under 'vyshnavam_cart' so it
   persists as a visitor moves between pages on the live site.
========================================================= */
const WHATSAPP_NUMBER = "919876543210"; // replace with real WhatsApp Business number

/* ---------- Cart helpers ---------- */
function readCart(){
  try{ return JSON.parse(localStorage.getItem("vyshnavam_cart")) || []; }
  catch(e){ return []; }
}
function writeCart(cart){
  localStorage.setItem("vyshnavam_cart", JSON.stringify(cart));
  updateCartCount();
}
function addToCart(id, qty=1){
  const cart = readCart();
  const existing = cart.find(i => i.id === id);
  if(existing){ existing.qty += qty; } else { cart.push({ id, qty }); }
  writeCart(cart);
  renderCartDrawer();
  const p = typeof getProduct === "function" ? getProduct(id) : null;
  showToast(p ? `${p.name} added to your selection` : "Added to your selection");
  openCartDrawer();
}
function removeFromCart(id){
  writeCart(readCart().filter(i => i.id !== id));
  renderCartDrawer();
  if(document.getElementById("cart-page-items")) renderCartPage();
}
function changeQty(id, delta){
  const cart = readCart();
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty = Math.max(1, item.qty + delta);
  writeCart(cart);
  renderCartDrawer();
  if(document.getElementById("cart-page-items")) renderCartPage();
}
function updateCartCount(){
  const count = readCart().reduce((sum,i) => sum + i.qty, 0);
  document.querySelectorAll(".cart-count").forEach(el => el.textContent = count);
}

/* ---------- Cart drawer render ---------- */
function renderCartDrawer(){
  const wrap = document.getElementById("cart-drawer-items");
  if(!wrap) return;
  const cart = readCart();
  if(!cart.length){
    wrap.innerHTML = `<div class="cart-empty">
      <p style="font-family:var(--font-display); font-size:1.2rem; margin-bottom:.6rem;">Your selection is empty</p>
      <p style="font-size:.85rem;">Browse the collection and add pieces you'd like to enquire about.</p>
    </div>`;
    return;
  }
  wrap.innerHTML = cart.map(i => {
    const p = getProduct(i.id);
    if(!p) return "";
    return `<div class="cart-item">
      <img src="${p.image}" alt="${p.name}">
      <div class="cart-item-info">
        <span class="ci-cat">${p.category}</span>
        <h5>${p.name}</h5>
        <div class="ci-controls">
          <button onclick="changeQty('${p.id}',-1)" aria-label="Decrease quantity">–</button>
          <span>${i.qty}</span>
          <button onclick="changeQty('${p.id}',1)" aria-label="Increase quantity">+</button>
          <button class="ci-remove" onclick="removeFromCart('${p.id}')">Remove</button>
        </div>
      </div>
    </div>`;
  }).join("");
}
function whatsappEnquiryLink(){
  const cart = readCart();
  if(!cart.length) return `https://wa.me/${WHATSAPP_NUMBER}`;
  let msg = "Hello Vyshnavam, I'd like to enquire about:%0A";
  cart.forEach(i => {
    const p = getProduct(i.id);
    if(p) msg += `- ${p.name} (Qty: ${i.qty})%0A`;
  });
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
function openCartDrawer(){
  document.getElementById("cart-drawer")?.classList.add("open");
  document.getElementById("overlay-scrim")?.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeCartDrawer(){
  document.getElementById("cart-drawer")?.classList.remove("open");
  document.getElementById("overlay-scrim")?.classList.remove("show");
  document.body.style.overflow = "";
}

/* ---------- Customer account (demo, stored in localStorage) ---------- */
function readAccount(){
  try{ return JSON.parse(localStorage.getItem("vyshnavam_account")) || null; }
  catch(e){ return null; }
}
function isLoggedIn(){ return !!readAccount(); }
function loginAccount(user){
  localStorage.setItem("vyshnavam_account", JSON.stringify(user));
}
function logoutAccount(){
  localStorage.removeItem("vyshnavam_account");
  window.location.href = "account.html";
}
function updateAccountNav(){
  document.querySelectorAll(".account-link").forEach(a => {
    a.setAttribute("href", isLoggedIn() ? "dashboard.html" : "account.html");
  });
}

/* ---------- Toast ---------- */
function showToast(msg){
  const toast = document.getElementById("toast");
  if(!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ---------- Header scroll state ---------- */
function initHeader(){
  const header = document.getElementById("site-header");
  if(!header) return;
  const onScroll = () => {
    if(window.scrollY > 60) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  window.addEventListener("scroll", onScroll);
  onScroll();
}

/* ---------- Mobile nav ---------- */
function initMobileNav(){
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobile-nav");
  const closeBtn = document.getElementById("close-mobile");
  burger?.addEventListener("click", () => mobileNav.classList.add("open"));
  closeBtn?.addEventListener("click", () => mobileNav.classList.remove("open"));
  mobileNav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileNav.classList.remove("open")));
}

/* ---------- Scroll reveal (IntersectionObserver) ---------- */
function initReveal(){
  const els = document.querySelectorAll(".reveal");
  if(!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold:0.15 });
  els.forEach(el => io.observe(el));
}

/* ---------- Back to top ---------- */
function initBackTop(){
  const btn = document.getElementById("back-top");
  if(!btn) return;
  const footer = document.querySelector("footer");
  function toggle(){
    const nearFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight - 20 : false;
    if(window.scrollY > 800 && !nearFooter) btn.classList.add("show");
    else btn.classList.remove("show");
  }
  window.addEventListener("scroll", toggle);
  toggle();
  btn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
}

/* ---------- Carousel arrows ---------- */
function initCarousels(){
  document.querySelectorAll("[data-carousel]").forEach(wrap => {
    const track = wrap.querySelector(".carousel-row");
    const prev = wrap.querySelector("[data-prev]");
    const next = wrap.querySelector("[data-next]");
    const scrollAmt = () => track.clientWidth * 0.7;
    prev?.addEventListener("click", () => track.scrollBy({left:-scrollAmt(), behavior:"smooth"}));
    next?.addEventListener("click", () => track.scrollBy({left:scrollAmt(), behavior:"smooth"}));
  });
}

/* ---------- Testimonial slider ---------- */
function initTestimonials(){
  const slides = document.querySelectorAll(".testi-slide");
  const dots = document.querySelectorAll(".testi-dots button");
  if(!slides.length) return;
  let idx = 0;
  function show(i){
    slides.forEach((s,n) => s.classList.toggle("active", n===i));
    dots.forEach((d,n) => d.classList.toggle("active", n===i));
    idx = i;
  }
  dots.forEach((d,n) => d.addEventListener("click", () => show(n)));
  setInterval(() => show((idx+1) % slides.length), 5500);
}

/* ---------- Accordion (product detail) ---------- */
function initAccordion(){
  document.querySelectorAll(".accordion-item").forEach(item => {
    item.querySelector(".accordion-head")?.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      item.parentElement.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("open"));
      if(!wasOpen) item.classList.add("open");
    });
  });
}

/* ---------- Marquee duplicate for seamless scroll ---------- */
function initMarquee(){
  document.querySelectorAll(".marquee-track").forEach(track => {
    track.innerHTML += track.innerHTML;
  });
}

/* ---------- WhatsApp floating button ---------- */
const WHATSAPP_DISPLAY = "+91 XXX XXX XXXX"; // shown as a fallback contact number
function initWhatsAppFloat(){
  const btn = document.getElementById("wa-float-btn");
  const panel = document.getElementById("wa-panel");
  const chatBtn = document.getElementById("wa-chat-btn");
  const closeBtn = document.getElementById("wa-panel-close");
  if(!btn || !panel) return;
  btn.addEventListener("click", () => panel.classList.toggle("open"));
  closeBtn?.addEventListener("click", () => panel.classList.remove("open"));
  chatBtn?.addEventListener("click", () => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank"));
  document.addEventListener("click", (e) => {
    if(panel.classList.contains("open") && !panel.contains(e.target) && !btn.contains(e.target)){
      panel.classList.remove("open");
    }
  });
}

/* ---------- Newsletter form (demo) ---------- */
function initNewsletter(){
  document.querySelectorAll(".news-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thank you — you're on the list.");
      form.reset();
    });
  });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initMobileNav();
  initReveal();
  initBackTop();
  initCarousels();
  initTestimonials();
  initAccordion();
  initMarquee();
  initNewsletter();
  initWhatsAppFloat();
  updateAccountNav();
  updateCartCount();
  renderCartDrawer();

  document.getElementById("cart-toggle")?.addEventListener("click", openCartDrawer);
  document.getElementById("close-cart")?.addEventListener("click", closeCartDrawer);
  document.getElementById("overlay-scrim")?.addEventListener("click", closeCartDrawer);
  document.getElementById("whatsapp-enquiry")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(whatsappEnquiryLink(), "_blank");
  });
});
