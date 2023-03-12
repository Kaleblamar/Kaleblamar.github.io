// PARALLAX
let stars = document.getElementById("stars-moon");
let moon = document.getElementById("layer2");
let mountains = document.getElementById("layer1");
let text = document.getElementById("heading");
let myName = document.getElementById("subHeading");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  moon.style.top = value * 1.05 + "px";
  stars.style.left = value * 0.1 + "px";
  mountains.style.top = value * 0.5 + "px";
  text.style.bottom = value * 1.35 + "px";
  myName.style.bottom = value * 1.35 + "px";
});

// CARD FLIP
const card = document.querySelectorAll(".card");

function flipCard() {
  this.classList.toggle("flip");
}
card.forEach((card) => card.addEventListener("click", flipCard));

// animations run when in viewport
// const element = document.querySelector(".sideBar");
// const observer = new IntersectionObserver((entries) => {
//   element.classList.toggle("slide", entries[0].isIntersecting);
//   console.log("observer");
// });

// observer.observe(element);

// const photo = document.querySelector(".myPhoto");
// const viewer = new IntersectionObserver((entries) => {
//   photo.classList.toggle("fadein", entries[0].isIntersecting);
//   console.log("fadein");
// });

// viewer.observe(photo);
const hamburger = document.querySelectorAll(".hamburgerContainer");
const nav = document.getElementById("navBar");
document.addEventListener("click", function () {
  hamburger.classList.toggle("nav");
  console.log("click");
});
