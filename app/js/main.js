"use strict";

var burger = document.querySelector(".burger");
var header = document.querySelector(".header");
var body = document.querySelector("body"); // Preloader 

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").classList.add("lock");
    document.querySelector("#preloader").classList.remove("preloader_hide");
  } else {
    setTimeout(function () {
      document.querySelector("#preloader").classList.add("preloader_hide");
      document.querySelector("body").classList.remove("lock");
    }, 2000);
  }
}; // Open mobile navigation on click to burger


burger.addEventListener("click", function () {
  header.classList.toggle("header_nav_open");
  body.classList.toggle("lock");
}); // Manipulations with header classes on scroll

var scrollPosition = window.scrollY;
window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;

  if (scrollPosition >= 30) {
    header.classList.add("header_scroll_down");
  } else {
    header.classList.remove("header_scroll_down");
  }
});

window.onload = function () {
  if (scrollPosition >= 30) {
    header.classList.add("header_scroll_down");
  }
}; // Scroll to anchor on click to Link in navigation


var menuItems = document.querySelectorAll('.nav__link[href^="#"]');

function getScrollTopByHref(element) {
  var id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  var to = getScrollTopByHref(event.currentTarget) - 164;
  scrollToPosition(to);
}

menuItems.forEach(function (item) {
  item.addEventListener('click', scrollToIdOnClick);
});

function smoothScrollTo(endX, endY, duration) {
  var startX = window.scrollX || window.pageXOffset;
  var startY = window.scrollY || window.pageYOffset;
  var distanceX = endX - startX;
  var distanceY = endY - startY;
  var startTime = new Date().getTime();
  duration = typeof duration !== 'undefined' ? duration : 400;

  var easeInOutQuart = function easeInOutQuart(time, from, distance, duration) {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  var timer = setInterval(function () {
    var time = new Date().getTime() - startTime;
    var newX = easeInOutQuart(time, startX, distanceX, duration);
    var newY = easeInOutQuart(time, startY, distanceY, duration);

    if (time >= duration) {
      clearInterval(timer);
    }

    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}

; // News slider

var swiper = new Swiper('.news__slider', {
  speed: 400,
  spaceBetween: 32,
  pagination: {
    el: '.news-pagination'
  },
  navigation: {
    nextEl: '.news-button-next',
    prevEl: '.news-button-prev'
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 32
    },
    992: {
      slidesPerView: 3
    }
  }
}); // Media 768px =====>

if (window.matchMedia("(min-width: 768px)").matches) {
  // Append images in container for desktop resolution
  var appendContainers = document.querySelectorAll(".append-container");
  appendContainers.forEach(function (appendContainer) {
    var appendItem = appendContainer.querySelector(".append-item");
    appendContainer.append(appendItem);
  });
} else {
  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      header.classList.remove("header_nav_open");
      body.classList.remove("lock");
    });
  });
}