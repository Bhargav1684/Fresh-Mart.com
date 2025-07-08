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
    description: "BIBA Women Cotton Floral Printed A-Line T-shirt.",
    link: "https://yourstore.com/products/classic-black-tshirt",
    image: "https://m.media-amazon.com/images/I/71ZvEtYBsTL._SX679_.jpg",
  },
  {
    id: 2,
    name: "Tommy Halfiger",
    category: "Watch",
    size: ["S", "M"],
    color: "Red",
    price: 1300,
    description:
      "Tommy Hilfiger Carnation Gold Dial Round Shaped Sport Women Analog",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/71iQvOp7bTL._SY879_.jpg",
  },
  {
    id: 3,
    name: "Allen Solly T-Shirt",
    category: "T-Shirts",
    size: ["S", "M"],
    color: "Red",
    price: 1299,
    description: "BIBA Women Cotton Floral Printed A-Line T-shirt.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/81qimUrxNkL._SX679_.jpg",
  },
  {
    id: 4,
    name: "Amazfit Active Smart Watch",
    category: "Watch",
    size: ["S", "M"],
    color: "Red",
    price: 999,
    description:
      "",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "",
  },
  {
    id: 5,
    name: "Peater England Jeans",
    category: "Jeans",
    size: ["M", "L", "XL"],
    color: "Blue",
    price: 399,
    description:
      "Peter England Women Tapered Fit Mid Rise Classic Tape Stretchable Twill Jeans.",
    link: "https://yourstore.com/products/blue-denim-jeans",
    image: "https://m.media-amazon.com/images/I/71y2S7w7q3L._SY879_.jpg",
  },
  {
    id: 6,
    name: "Women Printed Kurti",
    category: "Kurti",
    size: ["S", "M"],
    color: "Red",
    price: 1197,
    description:
      "GoSriKi Women's Rayon Viscose Printed Straight Kurta with Pant & Dupatta.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/71a0THblX5L._SY879_.jpg",
  },
  {
    id: 7,
    name: "Mark Loire",
    category: "Heals",
    size: ["S", "M", "L", "XL"],
    color: "Black",
    price: 1200,
    description:
      "Marc Loire Women’s Pointed Toe Block Heel Fashion Sandals with Buckled Ankle Strap.",
    link: "https://yourstore.com/products/classic-black-tshirt",
    image: "https://m.media-amazon.com/images/I/51k7kNPwbNL._SY695_.jpg",
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
    name: "Shoe Topia Women Heals",
    category: "Heals",
    size: ["S", "M"],
    color: "Red",
    price: 449,
    description: "Shoetopia Women's Heel-1700 Heeled Sandal.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/31fQYDZtoeL._SY395_SX395_.jpg",
  },
  {
    id: 10,
    name: "Cotton Short Kurti for Women",
    category: "Kurti",
    size: ["S", "M", "L", "XL"],
    color: "Black",
    price: 799,
    description:
      "Amazon Brand - Myx Women's Printed Regular Cotton Short Kurti.",
    link: "https://yourstore.com/products/classic-black-tshirt",
    image: "https://m.media-amazon.com/images/I/81VJyJv-RYL._SX569_.jpg",
  },
  {
    id: 11,
    name: "Martin's Jeans",
    category: "Jeans",
    size: ["M", "L", "XL"],
    color: "Blue",
    price: 674,
    description:
      "Ben Martin Women Tapered Fit Mid Rise Casual Stretchable Denim Carrot Jeans_1.",
    link: "https://yourstore.com/products/blue-denim-jeans",
    image: "https://m.media-amazon.com/images/I/612+ZjkLFoL._SY879_.jpg",
  },
  {
    id: 12,
    name: "JM Looks Heals",
    category: "Heals",
    size: ["S", "M"],
    color: "Red",
    price: 1299,
    description: "JM LOOKS Women’s Open-Toe flower design Spool Heels with Floral Accent.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/51N+RmiuOLL._SY695_.jpg",
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
    description: "Puma Girls Comfort T-shit.",
    link: "https://yourstore.com/products/blue-denim-jeans",
    image: "https://m.media-amazon.com/images/I/61RErP2k6eL._SY879_.jpg",
  },
  {
    id: 15,
    name: "Kurti Dupatta set",
    category: "Kurti",
    size: ["S", "M"],
    color: "Red",
    price: 899,
    description:
      "Rangnavi Women's Cotton Anarkali Printed Kurta with Palazzo & Dupatta Set.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/61-ZDXdxEwL._SX679_.jpg",
  },
  {
    id: 16,
    name: "Classic Puma",
    category: "T-Shirts",
    size: ["S", "M", "L", "XL"],
    color: "Black",
    price: 250,
    description: "Boldfit T-shirt for Women",
    link: "https://yourstore.com/products/classic-black-tshirt",
    image: "https://m.media-amazon.com/images/I/715-Z-aOIhL._SX679_.jpg",
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
      "Ben Martin Women Loose Mid Rise Denim Cotton Oversized Baggy Fit Jeans Pants.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/51VGgYUKb1L._SY879_.jpg",
  },
  {
    id: 19,
    name: "IKSGI Heals",
    category: "Heals",
    size: ["S", "M", "L", "XL"],
    color: "Black",
    price: 765,
    description: "IKAGI Women Wedding/Party Block Heel Fashion Sandal for Women & Girls.",
    link: "https://yourstore.com/products/classic-black-tshirt",
    image: "https://m.media-amazon.com/images/I/61dFMAk8scL._SY695_.jpg",
  },
  {
    id: 20,
    name: "Ragzo Jeans",
    category: "Jeans",
    size: ["M", "L", "XL"],
    color: "Blue",
    price: 490,
    description:
      "RAGZO W0men Jeans || Women Jeans Pants || Denim Jeans || Women Jeans Slim Fit Stretchable.",
    link: "https://yourstore.com/products/blue-denim-jeans",
    image: "https://m.media-amazon.com/images/I/51tiX4IsmtL._SX679_.jpg",
  },
  {
    id: 21,
    name: "Cotton Print Kurti",
    category: "Kurti",
    size: ["S", "M"],
    color: "Red",
    price: 1299,
    description: "BIBA Women Cotton Straight Printed Kurta.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image: "https://m.media-amazon.com/images/I/71DgMpTPcAL._SX679_.jpg",
  },
  {
    id: 22,
    name: "Matajya Western Wear",
    category: "Western",
    size: ["S", "M"],
    color: "Red",
    price: 1200,
    description:
      "Matajya Women's Western Dress Oversize Organic Lurex Checks Shirt Collar - Casual.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image:
      "https://m.media-amazon.com/images/I/71Zvq75jX+L._SY879_.jpg",
  },
  {
    id: 23,
    name: "Leriya Fashion Western Dress",
    category: "Western",
    size: ["S", "M"],
    color: "Red",
    price: 1299,
    description:
      "Leriya Fashion Western Dresses for Women |A-Line Knee-Length Dress.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image:
      "https://m.media-amazon.com/images/I/71tfSH9aRsL._SY879_.jpg",
  },
  {
    id: 24,
    name: "Toplot Western",
    category: "Western",
    size: ["S", "M"],
    color: "Red",
    price: 599,
    description:
      "TOPLOT Jumpsuit for Women || Coordset for women || Co ord Western (5225).",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image:
      "https://m.media-amazon.com/images/I/61Jmz481BTL._SY879_.jpg",
  },
  {
    id: 25,
    name: "Leriya Formal Western",
    category: "Western",
    size: ["S", "M"],
    color: "Red",
    price: 800,
    description:
      "Leriya Fashion Women Formal Floral Printed Rayon Western.",
    link: "https://yourstore.com/products/red-hoodie-jacket",
    image:
      "https://m.media-amazon.com/images/I/61rOLXOQ6QL._SY879_.jpg",
  },
  {
    id: 26,
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
  {
    id: 27,
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
  {
    id: 28,
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
