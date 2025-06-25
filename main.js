// للحصول على العناصر
const menuButton = document.getElementById("menuButton");
const megaMenu = document.getElementById("mega");
const menuLinks = document.querySelectorAll(".click");

// إظهار أو إخفاء المينيو وتغيير نص الزر
menuButton.addEventListener("click", (event) => {
  event.preventDefault(); // منع تحديث الصفحة
  if (megaMenu.style.display === "flex") {
    megaMenu.style.display = "none";
    menuButton.innerHTML = "☰";
  } else {
    megaMenu.style.display = "flex";
    menuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // استخدام innerHTML لإضافة الأيقونة
  }
});

// إخفاء المينيو عند الضغط على أي رابط بداخلها والتنقل إلى القسم
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // منع تحديث الصفحة
    megaMenu.style.display = "none";
    menuButton.innerHTML = "☰"; // إعادة الزر إلى حالته الأصلية

    // الانتقال إلى القسم بعد إخفاء القائمة
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});
// ///////swiper////////

var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 3, // Default value for larger screens
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    425: {
      slidesPerView: 1, // Show 1 slide for small screens
      spaceBetween: 10,
    },
    650: {
      slidesPerView: 1.5, // Allow partial visibility for slides
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2, // Medium screens
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3, // Large screens
      spaceBetween: 30,
    },
  },
});
window.addEventListener("resize", function () {
  swiper.update(); // Force recalculation
});

swiper.update(); // Update immediately after initialization
/////
function adjustSwiperTransform() {
  if (window.innerWidth >= 425 && window.innerWidth <= 650) {
    // Calculate the correct translate3d value
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    const correctTransform = "translate3d(-5380px, 0px, 0px)"; // Replace with your correct value

    if (swiperWrapper) {
      swiperWrapper.style.transform = correctTransform;
    }
  }
}

// Run adjustment after Swiper initialization
swiper.on("resize", adjustSwiperTransform);
adjustSwiperTransform();
//////////
window.addEventListener("resize", function () {
  swiper.update(); // Force Swiper to recalculate dimensions
});
////
//

// let sml = 15;
// let mdm = 2;
// let lrg = 10;
let sml = 15;
let mdm = 2;
let lrg = 11;

// Function to handle the slide navigation based on screen size
function handleSlideNavigation() {
  if (window.innerWidth <= 640) {
    // For small screens
    var slideIndex = sml;
  } else if (window.innerWidth <= 768) {
    // For medium screens
    var slideIndex = mdm;
  } else if (window.innerWidth <= 1024 || window.innerWidth > 1024) {
    // For large screens
    var slideIndex = lrg;
  } else {
    // Default case, in case window is larger than 1024px
    var slideIndex = lrg;
  }

  swiper.slideTo(parseInt(slideIndex)); // Slide to the specified index
}

// Run the slide navigation on page load
window.addEventListener("load", function () {
  handleSlideNavigation();
});

// Resize event listener to dynamically update based on screen size
window.addEventListener("resize", function () {
  // Re-run the slide navigation logic on resize
  handleSlideNavigation();
});

///////////////////matches/////////////////
let re = new XMLHttpRequest();
re.open("GET", "./matches.json");
re.send();
re.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    let resultElements = document.getElementsByClassName("resultORvs");
    let status = document.getElementsByClassName("match-status");
    for (let i = 0; i < mainData.length; i++) {
      if (resultElements[i]) {
        // Check if the element exists to avoid errors
        resultElements[i].textContent = mainData[i].resultORvs;
        status[i].textContent = mainData[i].status;
      }
    }
  }
};

////////backto top button ///
const backtoTop = document.getElementById("backToTop");
const herosection = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300 && window.innerWidth >= 768) {
    backtoTop.style.display = "block";
  } else {
    backtoTop.style.display = "none";
  }
});
backtoTop.addEventListener("click", () => {
  herosection.scrollIntoView({ behavior: "smooth" });
});

const backToTop = document.getElementById("backToTop");
const heroSection = document.getElementById("hero"); // make sure you have this ID

window.addEventListener("scroll", () => {
  if (window.scrollY > 300 && window.innerWidth >= 768) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});

backToTop.addEventListener("click", () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
});
