// PARALLAX
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains = document.getElementById("mountains");
// let sky = document.getElementById("layer3");
let heading = document.querySelector(".headingContainer");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  moon.style.top = value * 1.05 + "px";
  stars.style.left = value * 0.25 + "px";
  mountains.style.top = value * 0 + "px";
  // sky.style.left = value * 1.35 + "px";
  heading.style.left = value * 1.35 + "px";
});

//3D-CARD
const parent = document.getElementById("my-Card-Container");
document.addEventListener("mousemove", (e) => {
  rotateElement(e, parent);
});
function rotateElement(event, element) {
  //get mouse position
  const x = event.clientX;
  const y = event.clientY;

  //find middle
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  //get offset fromm middle
  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;
  //   console.log(offsetX, offsetY);

  element.style.setProperty("--rotateX", -1 * offsetY + "deg");
  element.style.setProperty("--rotateY", offsetX + "deg");
}

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
