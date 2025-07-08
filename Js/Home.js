// Back to top Button
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
};

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Navigation Sidebar
document.addEventListener("DOMContentLoaded", function () {
  lucide.createIcons();

  const desktopNavbar = document.getElementById("desktopNavbar");
  const mobileTopRow = document.getElementById("mobileTopRow");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const sidebar = document.getElementById("sidebar");
  const sidebarClose = document.getElementById("sidebarClose");
  const overlay = document.getElementById("overlay");

  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      desktopNavbar.classList.add("scrolled");
    } else {
      desktopNavbar.classList.remove("scrolled");
      mobileTopRow.style.boxShadow = "none";
    }

    lastScrollTop = scrollTop;
  });

  mobileMenuBtn.addEventListener("click", function () {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  sidebarClose.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && sidebar.classList.contains("active")) {
      closeSidebar();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  document
    .querySelectorAll(".login-btn, .login-btn-sidebar")
    .forEach((button) => {
      button.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
          `;

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });

  const style = document.createElement("style");
  style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
        .login-btn, .login-btn-sidebar {
          position: relative;
          overflow: hidden;
        }
      `;
  document.head.appendChild(style);
});

// Login and Sign up
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();
});

const loginButtons = document.querySelectorAll(
  ".login-btn, .login-btn-sidebar"
);
const modal = document.getElementById("authModal");
const overlay = document.getElementById("overlay");
const closeModal = document.getElementById("closeModal");
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const modalTitle = document.getElementById("modalTitle");
const switchToSignup = document.getElementById("switchToSignup");
const switchToLogin = document.getElementById("switchToLogin");

function openModal() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

function closeAuthModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

function showLogin() {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginForm.style.display = "block";
  signupForm.style.display = "none";
  modalTitle.textContent = "Login";
}

function showSignup() {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupForm.style.display = "block";
  loginForm.style.display = "none";
  modalTitle.textContent = "Sign Up";
}

loginButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
    showLogin();
  });
});

closeModal?.addEventListener("click", closeAuthModal);
overlay?.addEventListener("click", closeAuthModal);
loginTab?.addEventListener("click", showLogin);
signupTab?.addEventListener("click", showSignup);

switchToSignup?.addEventListener("click", (e) => {
  e.preventDefault();
  showSignup();
});

switchToLogin?.addEventListener("click", (e) => {
  e.preventDefault();
  showLogin();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAuthModal();
});

function prevSlide() {
  console.log("Previous Slide");
}

function nextSlide() {
  console.log("Next Slide");
}

// Hero section
function updateCountdown() {
  const countdownItems = document.querySelectorAll(
    ".countdown-item span:first-child"
  );
  const days = countdownItems[0];
  const hours = countdownItems[1];
  const minutes = countdownItems[2];
  const seconds = countdownItems[3];
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);

  function update() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(timer);
      days.textContent = "00";
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";
      return;
    }

    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((diff % (1000 * 60)) / 1000);

    days.textContent = day.toString().padStart(2, "0");
    hours.textContent = hour.toString().padStart(2, "0");
    minutes.textContent = minute.toString().padStart(2, "0");
    seconds.textContent = second.toString().padStart(2, "0");
  }

  update();
  const timer = setInterval(update, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  updateCountdown();

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });
    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});

// Shop Section 1
function scrollItems(direction) {
  const container = document.getElementById("itemsScroll");
  const scrollAmount = direction === "left" ? -300 : 300;

  container.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });

  setTimeout(updateButtonVisibility, 300);
}

function updateButtonVisibility() {
  const container = document.getElementById("itemsScroll");
  const leftButton = document.querySelector(".scroll-button.left");
  const rightButton = document.querySelector(".scroll-button.right");

  if (!container) return;

  const showLeft = container.scrollLeft > 0;
  const showRight =
    container.scrollLeft < container.scrollWidth - container.clientWidth;

  leftButton.style.display = showLeft ? "flex" : "none";
  rightButton.style.display = showRight ? "flex" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("itemsScroll");
  container.addEventListener("scroll", updateButtonVisibility);
  updateButtonVisibility();
});

// Shop section 2, 3, 4 and 5
document.addEventListener("DOMContentLoaded", () => {
  function initSlider(
    containerSelector,
    cardSelector,
    dotContainerSelector,
    gap = 0,
    dotClass = "slider-dot"
  ) {
    const container = document.querySelector(containerSelector);
    const cards = container ? container.querySelectorAll(cardSelector) : [];
    const dotContainer = document.querySelector(dotContainerSelector);

    if (!container || cards.length === 0 || !dotContainer) return;

    const cardWidth = cards[0].offsetWidth + gap;

    cards.forEach((card, index) => {
      const dot = document.createElement("div");
      dot.classList.add(dotClass);
      if (index === 0) dot.classList.add("active");

      dot.addEventListener("click", () => {
        container.scrollTo({
          left: index * cardWidth,
          behavior: "smooth",
        });
      });

      dotContainer.appendChild(dot);
    });

    const dots = dotContainer.querySelectorAll(`.${dotClass}`);

    container.addEventListener("scroll", () => {
      const scrollLeft = container.scrollLeft;
      let activeIndex = Math.round(scrollLeft / cardWidth);
      activeIndex = Math.max(0, Math.min(activeIndex, cards.length - 1));

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === activeIndex);
      });
    });
  }

  initSlider(".shop-card-section", ".shop-card", ".slider-dots"); // Shop section 2
  initSlider(".shop-card-section-3", ".shop-card-3", ".slider-dots-3"); // Shop section 3
  initSlider("#slider", ".shop-card-4", "#sliderDots", 15); // Shop section 4
  initSlider("#sliderContainer-5", ".shop-card-5", "#sliderDots-5", 15, "dot"); // Shop section 5
});

// Slider item section 1
const track2 = document.getElementById("sliderTrack2");
const prevBtn2 = document.getElementById("prevBtn2");
const nextBtn2 = document.getElementById("nextBtn2");

let position2 = 0;

function getVisibleItems2() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 480) return 2;
  if (screenWidth <= 768) return 3;
  if (screenWidth <= 1024) return 5;
  return 9;
}

function updateSlider2(direction) {
  const items = document.querySelectorAll(".product2");
  const visibleItems2 = getVisibleItems2();
  const itemCount2 = items.length;
  const maxPosition2 = itemCount2 - visibleItems2;

  if (direction === "next" && position2 < maxPosition2) {
    position2++;
  } else if (direction === "prev" && position2 > 0) {
    position2--;
  }

  const itemWidth2 = items[0].offsetWidth;
  track2.style.transform = `translateX(-${position2 * itemWidth2}px)`;
}

prevBtn2.addEventListener("click", () => updateSlider2("prev"));
nextBtn2.addEventListener("click", () => updateSlider2("next"));

window.addEventListener("resize", () => {
  const visibleItems2 = getVisibleItems2();
  const itemCount2 = document.querySelectorAll(".product2").length;
  const maxPosition2 = itemCount2 - visibleItems2;

  if (position2 > maxPosition2) {
    position2 = maxPosition2;
  }

  const itemWidth2 = document.querySelector(".product2").offsetWidth;
  track2.style.transform = `translateX(-${position2 * itemWidth2}px)`;
});

// Slider item section 2
const track3 = document.getElementById("sliderTrack3");
const prevBtn3 = document.getElementById("prevBtn3");
const nextBtn3 = document.getElementById("nextBtn3");

let position3 = 0;

function getVisibleItems3() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 480) return 2;
  if (screenWidth <= 768) return 3;
  if (screenWidth <= 1024) return 5;
  return 9;
}

function updateSlider3(direction) {
  const items = document.querySelectorAll(".product3");
  const visibleItems3 = getVisibleItems3();
  const itemCount3 = items.length;
  const maxPosition3 = itemCount3 - visibleItems3;

  if (direction === "next" && position3 < maxPosition3) {
    position3++;
  } else if (direction === "prev" && position3 > 0) {
    position3--;
  }

  const itemWidth3 = items[0].offsetWidth;
  track3.style.transform = `translateX(-${position3 * itemWidth3}px)`;
}

prevBtn3.addEventListener("click", () => updateSlider3("prev"));
nextBtn3.addEventListener("click", () => updateSlider3("next"));

window.addEventListener("resize", () => {
  const visibleItems3 = getVisibleItems3();
  const itemCount3 = document.querySelectorAll(".product3").length;
  const maxPosition3 = itemCount3 - visibleItems3;

  if (position3 > maxPosition3) {
    position3 = maxPosition3;
  }

  const itemWidth3 = document.querySelector(".product3").offsetWidth;
  track3.style.transform = `translateX(-${position3 * itemWidth3}px)`;
});

// Shop section 6
document.querySelectorAll(".card6").forEach((card) => {
  const mainImage = card.querySelector(".card-image6");
  const previews = card.querySelectorAll(".preview6");

  previews.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;
      previews.forEach((img) => img.classList.remove("active6"));
      thumb.classList.add("active6");
    });
  });
});

const slider6 = document.getElementById("slider6");
const dotsContainer6 = document.getElementById("dots6");
const cards6 = slider6.querySelectorAll(".card6");

function createDots6() {
  if (window.innerWidth > 480) {
    dotsContainer6.style.display = "none";
    return;
  }

  dotsContainer6.style.display = "flex";
  dotsContainer6.innerHTML = "";

  cards6.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot6");
    if (index === 0) dot.classList.add("active6");
    dot.addEventListener("click", () => {
      slider6.scrollTo({
        left: index * slider6.offsetWidth,
        behavior: "smooth",
      });
      updateDots6(index);
    });
    dotsContainer6.appendChild(dot);
  });
}

function updateDots6(activeIndex) {
  const dots = dotsContainer6.querySelectorAll(".dot6");
  dots.forEach((dot) => dot.classList.remove("active6"));
  if (dots[activeIndex]) dots[activeIndex].classList.add("active6");
}

slider6.addEventListener("scroll", () => {
  if (window.innerWidth > 480) return;
  const index = Math.round(slider6.scrollLeft / slider6.offsetWidth);
  updateDots6(index);
});

window.addEventListener("resize", createDots6);
window.addEventListener("load", createDots6);

// Shop section 7
const sliders = document.getElementById("section7-slider");
const dots = document.getElementsByClassName("section-7-dot");

function getCardWidth() {
  const card = sliders.querySelector(".section-7-card");
  return card.offsetWidth + 20;
}

function goToSlide(index) {
  const cardWidth = getCardWidth();
  sliders.scrollTo({
    left: index * cardWidth,
    behavior: "smooth",
  });
  updateDots(index);
}

function updateDots(index) {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  if (dots[index]) {
    dots[index].classList.add("active");
  }
}

sliders.addEventListener("scroll", () => {
  const cardWidth = getCardWidth();
  const index = Math.round(sliders.scrollLeft / cardWidth);
  updateDots(index);
});

updateDots(0);

// Product section
const slider = document.getElementById("shopSlider");
const leftBtn = document.querySelector(".shop-arrow.left");
const rightBtn = document.querySelector(".shop-arrow.right");

leftBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -200, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 200, behavior: "smooth" });
});
