// Hamburger Menu
let hamburgerBtn = document.getElementById("hamburgerBtn");
let navMenu = document.getElementById("navMenu");
let orgNavMenu = document.getElementById("orgNavMenu");
let header = document.getElementById("header");
let logoSvg = document.getElementById("logoSvg");

// introduction


let introductionElem = document.getElementById('introduction')

const careers = [
    'Developer',
    'Designer'
]

let careerIndex = 0
let characterIndex = 0

updateIntroduction()

function updateIntroduction(){
    characterIndex++
    introductionElem.innerHTML = careers[careerIndex].slice(0,characterIndex)

    if(characterIndex === careers[careerIndex].length){

        setTimeout(() => {
            careerIndex++
            characterIndex = 0

            if(careerIndex === careers.length){
                careerIndex = 0
            }
        }, 2000);
        
    }


    setTimeout(() => {
        updateIntroduction()
    }, 90);
}



// Scroll Animation
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

// To Top Button
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

// Hamburger Menu Toggle
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

// Swiper Slider
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

// Tab Switching Logic
const aboutMeBtns = document.getElementById("aboutMeBtns");
const secondAboutMeBtns = document.getElementById("secondAboutMeBtns");
const aboutBtn = document.querySelectorAll("#aboutBtn");
const SecondAboutBtn = document.querySelectorAll("#SecondAboutBtn");
const articles = document.querySelectorAll(".content");

function handleTabClick(e, buttons) {
  const id = e.target.dataset.id;
  if (id) {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    articles.forEach(function (article) {
      if (article.id === id) {
        article.classList.remove("no-content");
      } else {
        article.classList.add("no-content");
      }
    });
  }
}

aboutMeBtns.addEventListener("click", function (e) {
  setTimeout(() => handleTabClick(e, aboutBtn), 100);
});

secondAboutMeBtns.addEventListener("click", function (e) {
  setTimeout(() => handleTabClick(e, SecondAboutBtn), 100);
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    images.forEach(function(img) {
        img.setAttribute("loading", "lazy");
    });
});
