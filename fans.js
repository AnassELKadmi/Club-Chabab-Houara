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
