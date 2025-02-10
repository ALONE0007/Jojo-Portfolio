let hamburgerBtn = document.getElementById("hamburgerBtn");
let navMenu = document.getElementById("navMenu");
let orgNavMenu = document.getElementById("orgNavMenu");
let header = document.getElementById("header");
let logoSvg = document.getElementById("logoSvg");

// Scroll Animation //

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.remove("bg-black");
    header.classList.add("bg-white");
    logoSvg.classList.replace("fill-white", "fill-black");
    orgNavMenu.classList.replace("text-white", "text-black");
    hamburgerBtn.classList.replace("text-white", "text-black");
  } else {
    header.classList.remove("bg-white");
    header.classList.add("bg-black");
    logoSvg.classList.replace("fill-black", "fill-white");
    orgNavMenu.classList.replace("text-black", "text-white");
    hamburgerBtn.classList.replace("text-black", "text-white");
  }
});

// to top btn //

const toTopBtn = document.querySelector('#toTopBtn');

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        toTopBtn.style.opacity = '1';
        toTopBtn.style.transition = 'opacity 0.3s';
    } else {
        toTopBtn.style.opacity = '0';
        toTopBtn.style.transition = 'opacity 0.3s';
    }
});

toTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Hamburger Menu //

hamburgerBtn.addEventListener("click", function () {
  if (!navMenu.classList.contains("h-open")) {
    navMenu.style.height = "0";
    navMenu.style.padding = "0";
    setTimeout(function () {
      navMenu.classList.add("h-open");
      navMenu.style.height = navMenu.scrollHeight + "px";
      navMenu.style.padding = "20px 0";
    }, 10);
  } else {
    navMenu.style.height = navMenu.scrollHeight + "px";
    setTimeout(function () {
      navMenu.classList.remove("h-open");
      navMenu.style.height = "0";
      navMenu.style.padding = "0";
    }, 10);
  }
});

// Slider //

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

//////////////////

const aboutMeBtns = document.getElementById("aboutMeBtns");
const aboutBtn = document.querySelectorAll("#aboutBtn");
const articles = document.querySelectorAll(".content");

aboutMeBtns.addEventListener("click", function (e) {
  setTimeout(() => {
    const id = e.target.dataset.id;
    if (id) {
      aboutBtn.forEach((btn) => {
        btn.classList.remove("active");
        e.target.classList.add("active");
      });
    }

    articles.forEach(function (article) {
      if (article.id === id) {
        article.classList.remove("no-content");
      } else {
        article.classList.add("no-content");
      }
    });
  }, 100);
});