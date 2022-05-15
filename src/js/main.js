let burger = document.querySelector(".burger")
let header = document.querySelector(".header")
let body = document.querySelector("body")

// Preloader 
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector("body").classList.add("lock");
    document.querySelector("#preloader").classList.remove("preloader_hide");
  } else {
    setTimeout( () => {
      document.querySelector("#preloader").classList.add("preloader_hide");
      document.querySelector("body").classList.remove("lock");
    }, 2000)
  }
};

// Open mobile navigation on click to burger
burger.addEventListener("click", () => {

  header.classList.toggle("header_nav_open");
  body.classList.toggle("lock");

})

// Manipulations with header classes on scroll
var scrollPosition = window.scrollY;

window.addEventListener("scroll", () => {

  scrollPosition = window.scrollY;

  if (scrollPosition >= 30) {
    header.classList.add("header_scroll_down");
  } else {
    header.classList.remove("header_scroll_down");
  }

});

window.onload = () => {
  if (scrollPosition >= 30) {
    header.classList.add("header_scroll_down");
  }
}

// Scroll to anchor on click to Link in navigation
const menuItems = document.querySelectorAll('.nav__link[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget) - 164;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

// News slider
const swiper = new Swiper('.news__slider', {
  speed: 400,
  spaceBetween: 32,
  pagination: {
    el: '.news-pagination',
  },
  navigation: {
    nextEl: '.news-button-next',
    prevEl: '.news-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    992: {
      slidesPerView: 3,
    },
  }
});

// Media 768px =====>
if (window.matchMedia("(min-width: 768px)").matches) {
  // Append images in container for desktop resolution
  let appendContainers = document.querySelectorAll(".append-container")

	appendContainers.forEach(appendContainer => {
    let appendItem = appendContainer.querySelector(".append-item")
    appendContainer.append(appendItem)
	});
} else {
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      header.classList.remove("header_nav_open")
      body.classList.remove("lock")
    });
  });
}