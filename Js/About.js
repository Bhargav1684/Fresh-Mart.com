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

// Page body animation
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".md\\:hidden button");
  const mobileMenu = document.querySelector(".md\\:block");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  const observerOptions = {
    threshold: 0.5,
    triggerOnce: true,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = "0s";
        entry.target.classList.add("animate-fade-in");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".card-hover").forEach((card) => {
    observer.observe(card);
  });
});
