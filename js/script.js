//
// const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
// document
//   .querySelector(".mobile-menu-icon")
//   .addEventListener("click", function () {
//     alert("click");
//   });

// mobileMenuIcon.addEventListener("click", toggleMenu);

// toggle menu in mobile screen
const mobileMenu = document.querySelector(".show");
function toggleMenu() {
  //   console.log("click");
  mobileMenu.classList.toggle("mobile-menu");
}
