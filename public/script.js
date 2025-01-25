let hamburgerBtn = document.getElementById('hamburgerBtn');
let navMenu = document.getElementById('navMenu');
let orgNavMenu = document.getElementById('orgNavMenu');
let header = document.getElementById('header');
let logoSvg = document.getElementById('logoSvg');


// Scroll Animation //

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.classList.remove('bg-black');
        header.classList.add('bg-white');
        logoSvg.classList.replace('fill-white','fill-black')
        orgNavMenu.classList.replace('text-white','text-black')
        hamburgerBtn.classList.replace('text-white','text-black')
        
    } else {
        header.classList.remove('bg-white');
        header.classList.add('bg-black');
        logoSvg.classList.replace('fill-black','fill-white')
        orgNavMenu.classList.replace('text-black','text-white')
        hamburgerBtn.classList.replace('text-black','text-white')

    }
});

// Hamburger Menu //

hamburgerBtn.addEventListener('click', function() {
    
    if (!navMenu.classList.contains('h-open')) {
        navMenu.style.height = '0';
        navMenu.style.padding = '0';
        setTimeout(function() {
            navMenu.classList.add('h-open');
            navMenu.style.height = navMenu.scrollHeight + 'px';
            navMenu.style.padding = '20px 0'; // مقدار دلخواه برای padding
        }, 10);
    } else {
        navMenu.style.height = navMenu.scrollHeight + 'px';
        setTimeout(function() {
            navMenu.classList.remove('h-open');
            navMenu.style.height = '0';
            navMenu.style.padding = '0';
        }, 10);
    }
});