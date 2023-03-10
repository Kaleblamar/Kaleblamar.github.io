// PARALLAX
let stars = document.getElementById("stars-moon");
let moon = document.getElementById("layer2");
let mountains = document.getElementById("layer1");
// let text = document.getElementById("heading");
// let myName = document.getElementById("subHeading");
let heading = document.querySelector(".headingContainer");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  moon.style.top = value * 1.05 + "px";
  stars.style.left = value * 0.1 + "px";
  mountains.style.top = value * 0.5 + "px";
  // text.style.bottom = value * 1.35 + "px";
  // myName.style.bottom = value * 1.35 + "px";
  heading.style.bottom = value * 1.35 + "px";
});

// CARD FLIP
const card = document.querySelectorAll(".card");

function flipCard() {
  this.classList.toggle("flip");
}
card.forEach((card) => card.addEventListener("click", flipCard));

// hamburger menu
const hamburger = document.querySelectorAll(".hamburgerContainer")[0];
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const sideMenu = document.getElementById("sideMenu");

hamburger.addEventListener("click", function () {
  bar1.classList.toggle("topBarRotate");
  bar2.classList.toggle("middleBarSlide");
  bar3.classList.toggle("bottomBarRotate");
  hamburger.classList.toggle("menuSlide");
  sideMenu.classList.toggle("sideSlide");
});

// CONTACT FORM
const contact = document.querySelectorAll(".contactLink")[0];
const form = document.querySelector(".formContainer");
const contact2 = document.querySelector(".contactLink2");

contact.addEventListener("click", function () {
  form.classList.toggle("showForm");
});
contact2.addEventListener("click", function () {
  form.classList.toggle("showForm");
});
const x = document.querySelector(".closeX");
x.addEventListener("click", function () {
  form.classList.remove("showForm");
});
