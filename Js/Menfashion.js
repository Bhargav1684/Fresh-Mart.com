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

// Product container
const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    category: "T-Shirts",
    size: ["S", "M", "L", "XL"],
    color: "Blue",
    price: 999,
    description: "Van Heusen Men's Cotton Solid Regular Fit T-Shirt.",
    link: "https://yourstore.com/products/classic-black-tshirt",
    image: "https://m.media-amazon.com/images/I/51xOEh5DKYL._SY741_.jpg",
  },
  {
    id: 2,
    name: "Rolling Watch",
    category: "Watch",
    size: ["S", "M"],
    color: "Red",
    price: 1300,
    description:
      "Skmei New Car Wheel Watch with Rolling Creative Fashion Analog Watch",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/61Fe2bhYLFL._SX679_.jpg",
  },
  {
    id: 3,
    name: "Allen Solly T-Shirt",
    category: "T-Shirts",
    size: ["S", "M"],
    color: "Red",
    price: 299,
    description: "Allen Solly Men's 100% Cotton Regular Fit T-Shirt.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/61eu3eZnzxL._SY741_.jpg",
  },
  {
    id: 4,
    name: "Amazfit Active Smart Watch",
    category: "Watch",
    size: ["S", "M"],
    color: "Red",
    price: 999,
    description:
      "Amazfit Active Smart Watch with AI Fitness Exercise Coach, GPS, Bluetooth Calling & Music",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/41uSrsC+lzL._SY300_SX300_.jpg",
  },
  {
    id: 5,
    name: "Peater England Jeans",
    category: "Jeans",
    size: ["M", "L", "XL"],
    color: "Blue",
    price: 399,
    description:
      "Peter England Men's Tapered Fit Mid Rise Classic Tape Stretchable Twill Jeans.",
    link: "https://yourstore.com/products/blue-denim-jeans",
    image: "https://m.media-amazon.com/images/I/61uZ3EKN5jL._SY741_.jpg",
  },
  {
    id: 6,
    name: "BLUE TYAGA Jacket",
    category: "Jackets",
    size: ["S", "M"],
    color: "Red",
    price: 1197,
    description:
      "BLUE TYGA Sunscreen Jacket 2.0 - Advanced Protection from Sun & Pollution.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/712UDW7pnEL._SY741_.jpg",
  },
  {
    id: 7,
    name: "YOHO Wind Sneakers for Men",
    category: "Shoes",
    size: ["S", "M", "L", "XL"],
    color: "Black",
    price: 1200,
    description:
      "YOHO Wind Sneakers for Men | Stylish Casual Shoes with Elastic Laces | Comfortable.",
    link: "https://yourstore.com/products/classic-black-tshirt",
    image: "https://m.media-amazon.com/images/I/71Mu7TUif8L._SY695_.jpg",
  },
  {
    id: 8,
    name: "Men Perfume",
    category: "Perfume",
    size: ["S", "M"],
    color: "Red",
    price: 80,
    description:
      "BEARDO Godfather Perfume For Men, 100Ml | Aromatic, Spicy Perfume For Men Long Lasting.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image:
      "https://m.media-amazon.com/images/I/411lHg08M9L._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg",
  },
  {
    id: 9,
    name: "Sport Shoes",
    category: "Shoes",
    size: ["S", "M"],
    color: "Red",
    price: 449,
    description: "BRUTON EVA Lite Sport Shoes Running Shoes for Men- White.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/61md3szAgLL._SY695_.jpg",
  },
  {
    id: 10,
    name: "LEATHER JACKET FOR MEN SUEDE",
    category: "Jackets",
    size: ["S", "M", "L", "XL"],
    color: "Black",
    price: 799,
    description: "A timeless black t-shirt made from 100% organic cotton.",
    link: "https://yourstore.com/products/classic-black-tshirt",
    image: "https://m.media-amazon.com/images/I/614HziI9oQL._SX679_.jpg",
  },
  {
    id: 11,
    name: "Martin's Jeans",
    category: "Jeans",
    size: ["M", "L", "XL"],
    color: "Blue",
    price: 674,
    description:
      "Ben Martin Men's Tapered Fit Mid Rise Casual Stretchable Denim Carrot Jeans_1.",
    link: "https://yourstore.com/products/blue-denim-jeans",
    image: "https://m.media-amazon.com/images/I/61EITRMkVTL._SY741_.jpg",
  },
  {
    id: 12,
    name: "Sneakers",
    category: "Shoes",
    size: ["S", "M"],
    color: "Red",
    price: 1299,
    description: "Campus Men Brisk Sneakers.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/61giDAMYkGL._SY695_.jpg",
  },
  {
    id: 13,
    name: "Titan Watch for Men",
    category: "Watch",
    size: ["S", "M", "L", "XL"],
    color: "Black",
    price: 1299,
    description:
      "Titan Karishma Analog Black Dial Men's Watch NM1639SM02/NN1639SM02.",
    link: "https://yourstore.com/products/classic-black-tshirt",
    image: "https://m.media-amazon.com/images/I/51ykbSj-eoL._SX679_.jpg",
  },
  {
    id: 14,
    name: "Peater England",
    category: "T-Shirts",
    size: ["M", "L", "XL"],
    color: "Gray",
    price: 300,
    description:
      "Peter England Men's Premium Regular Fit Half Sleeve Polo T-Shirt with Pocket | Cotton Rich.",
    link: "https://yourstore.com/products/blue-denim-jeans",
    image: "https://m.media-amazon.com/images/I/51Ii0J5mqZL._SY879_.jpg",
  },
  {
    id: 15,
    name: "Bike Jacket for Men",
    category: "Jackets",
    size: ["S", "M"],
    color: "Red",
    price: 899,
    description:
      "BoldFit Windcheater For Men Lightweight Jacket For Men Wear Polyester Bike Jackets.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image:
      "https://m.media-amazon.com/images/I/41IX-gofnVL._SX300_SY300_QL70_FMwebp_.jpg",
  },
  {
    id: 16,
    name: "Classic Puma",
    category: "T-Shirts",
    size: ["S", "M", "L", "XL"],
    color: "Black",
    price: 250,
    description: "Allen Solly Men's Solid Regular Fit Polo",
    link: "https://yourstore.com/products/classic-black-tshirt",
    image: "https://m.media-amazon.com/images/I/51DKWYMKZSL._SY879_.jpg",
  },
  {
    id: 17,
    name: "Carlington Watch",
    category: "Watch",
    size: ["M", "L", "XL"],
    color: "Blue",
    price: 1111,
    description:
      "Carlington Endurance Series Analog-Digital Wrist Watches for Men - CT_9145.",
    link: "https://yourstore.com/products/blue-denim-jeans",
    image: "https://m.media-amazon.com/images/I/61gEW94jN8L._SX679_.jpg",
  },
  {
    id: 18,
    name: "Baggy Fit jeans",
    category: "Jeans",
    size: ["S", "M"],
    color: "Red",
    price: 480,
    description:
      "Ben Martin Men's Loose Mid Rise Denim Cotton Oversized Baggy Fit Jeans Pants.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/71OBVZ-69WL._SY741_.jpg",
  },
  {
    id: 19,
    name: "Formal Shoes",
    category: "Shoes",
    size: ["S", "M", "L", "XL"],
    color: "Black",
    price: 765,
    description: "Bata Men's BOSS-Grip Formal Shoes.",
    link: "https://yourstore.com/products/classic-black-tshirt",
    image: "https://m.media-amazon.com/images/I/71rYxtbE8SS._SX695_.jpg",
  },
  {
    id: 20,
    name: "Ragzo Jeans",
    category: "Jeans",
    size: ["M", "L", "XL"],
    color: "Blue",
    price: 490,
    description:
      "RAGZO Men Jeans || Men Jeans Pants || Denim Jeans || Men Jeans Slim Fit Stretchable.",
    link: "https://yourstore.com/products/blue-denim-jeans",
    image: "https://m.media-amazon.com/images/I/81T0s5r5duL._SY879_.jpg",
  },
  {
    id: 21,
    name: "Denim Jacket",
    category: "Jackets",
    size: ["S", "M"],
    color: "Red",
    price: 1299,
    description:
      "Urbano Plus Men's Regular Fit Washed Full Sleeve Denim Jacket.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/61nTTS5oktL._SX679_.jpg",
  },
  {
    id: 22,
    name: "Park Avenue Perfume",
    category: "Perfume",
    size: ["S", "M"],
    color: "Red",
    price: 328,
    description:
      "Park Avenue Euphoria, Eau De Parfum Men, 100ml | Long Lasting Perfume for Men.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image:
      "https://m.media-amazon.com/images/I/5105vNKcDaL._SX300_SY300_QL70_FMwebp_.jpg",
  },
];

const itemsPerPage = 8;
let currentPage = 1;

const productsGrid = document.getElementById("productsGrid");
const pagination = document.getElementById("pagination");
const filtersForm = document.querySelector(".filters");
const sortSelect = document.getElementById("sortSelect");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const clearFiltersBtn = document.getElementById("clearFilters");
const maxProductPrice = Math.max(...products.map((p) => p.price));
priceRange.max = maxProductPrice;
priceRange.value = maxProductPrice;
priceValue.textContent = `₹${maxProductPrice}`;

priceRange.addEventListener("input", () => {
  priceValue.textContent = `₹${priceRange.value}`;
  currentPage = 1;
  renderProducts();
});

function getCheckedValues(name) {
  return [...filtersForm.querySelectorAll(`input[name="${name}"]:checked`)].map(
    (input) => input.value
  );
}

function filterProducts() {
  const selectedCategories = getCheckedValues("category");
  const selectedSizes = getCheckedValues("size");
  const selectedColors = getCheckedValues("color");
  const maxPrice = Number(priceRange.value);

  return products.filter((p) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(p.category);
    const matchSize =
      selectedSizes.length === 0 ||
      p.size.some((s) => selectedSizes.includes(s));
    const matchColor =
      selectedColors.length === 0 || selectedColors.includes(p.color);
    const matchPrice = p.price <= maxPrice;
    return matchCategory && matchSize && matchColor && matchPrice;
  });
}

function sortProducts(productList) {
  const sortValue = sortSelect.value;
  let sorted = [...productList];

  switch (sortValue) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }
  return sorted;
}

function renderProducts() {
  const filtered = filterProducts();
  const sorted = sortProducts(filtered);

  const totalItems = sorted.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (currentPage > totalPages) currentPage = totalPages || 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = sorted.slice(startIndex, startIndex + itemsPerPage);

  productsGrid.innerHTML = paginatedItems.length
    ? paginatedItems
        .map(
          (p) => `
        <div class="product-card" tabindex="0">
          <div class="product-image" style="background-image:url(${
            p.image
          })" aria-label="${p.name}"></div>
          <div class="product-info">
            <div class="product-name">${p.name}</div>
            <div class="product-category">${p.category}</div>
            <div class="product-description" style="font-size: 12px; color: #555; margin-top: 2px; max-height: 3.9em; overflow: hidden;">
              ${p.description || "No description available."}
            </div>
            <div class="product-price">₹${p.price.toFixed(2)}</div>
            ${
              p.link
                ? `<a href="${p.link}" target="_blank" class="product-link">View Product</a>`
                : ""
            }
          </div>
        </div>
      `
        )
        .join("")
    : '<p style="font-size:1.2rem; color:#666;">No products found.</p>';

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  let buttonsHTML = `<button ${
    currentPage === 1 ? "disabled" : ""
  } data-page="${currentPage - 1}">&lt; Prev</button>`;

  for (let i = 1; i <= totalPages; i++) {
    buttonsHTML += `<button ${
      i === currentPage ? 'style="background:#004a99; color:white;"' : ""
    } data-page="${i}">${i}</button>`;
  }

  buttonsHTML += `<button ${
    currentPage === totalPages ? "disabled" : ""
  } data-page="${currentPage + 1}">Next &gt;</button>`;
  pagination.innerHTML = buttonsHTML;

  pagination.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const page = Number(btn.getAttribute("data-page"));
      if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderProducts();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
}

filtersForm.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    currentPage = 1;
    renderProducts();
  });
});

sortSelect.addEventListener("change", () => {
  currentPage = 1;
  renderProducts();
});

clearFiltersBtn.addEventListener("click", () => {
  filtersForm
    .querySelectorAll('input[type="checkbox"]')
    .forEach((cb) => (cb.checked = false));
  priceRange.value = maxProductPrice;
  priceValue.textContent = `₹${maxProductPrice}`;
  sortSelect.value = "default";
  currentPage = 1;
  renderProducts();
});

renderProducts();
