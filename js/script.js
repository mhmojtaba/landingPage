//
// const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const mobileMenu = document.querySelector(".show");
// document
//   .querySelector(".mobile-menu-icon")
//   .addEventListener("click", function () {
//     alert("click");
//   });

// mobileMenuIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  //   console.log("click");
  mobileMenu.classList.toggle("mobile-menu");
}
