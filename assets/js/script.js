'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});


function startCounterOnIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // Start the counter animation when the element is in view
          counterUp(0);
          // Unobserve the target to stop observing once the animation has started
          observer.unobserve(entry.target);
      }
  });
}

function counterUp(initialValue) {
  $('.stats-title').each(function () {
      $(this).prop('Counter', initialValue).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(startCounterOnIntersection, {
  threshold: 0.5 // Adjust the threshold as needed
});

// Target the element you want to observe
const targetElement = document.querySelector('.stats-list');

// Observe the target element
observer.observe(targetElement);