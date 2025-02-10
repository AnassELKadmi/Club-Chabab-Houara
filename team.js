$(document).ready(function () {
  $(".defenders").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time in milliseconds (3 seconds)
    infinite: true, // Enable infinite scrolling
    arrows: false, // Hide navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".Midfielders").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".Forwards").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
/////
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
