// PARALLAX
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains = document.getElementById("mountains");
// let sky = document.getElementById("layer3");
let heading = document.querySelector(".headingContainer");
let mobileHeading = document.querySelector(".headingContainerMobile");
// let button = document.getElementById("btn");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  moon.style.top = value * 1.05 + "px";
  stars.style.left = value * 0.25 + "px";
  mountains.style.top = value * 0 + "px";
  // sky.style.left = value * 1.35 + "px";
  heading.style.left = value * 1.35 + "px";
  mobileHeading.style.bottom = value * 1.3 + "px";
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
// const menuList = document.querySelector(".sideMenuList");
const listOne = document.getElementById("listOne");
const listTwo = document.getElementById("listTwo");
const listThree = document.getElementById("listThree");
const listFour = document.getElementById("listFour");
const listFive = document.getElementById("listFive");

hamburger.addEventListener("click", function () {
  bar1.classList.toggle("topBarRotate");
  bar2.classList.toggle("middleBarSlide");
  bar3.classList.toggle("bottomBarRotate");
  hamburger.classList.toggle("menuSlide");
  sideMenu.classList.toggle("sideSlide");
  listOne.classList.toggle("menuListSlider");
  listTwo.classList.toggle("menuListSlider2");
  listThree.classList.toggle("menuListSlider3");
  listFour.classList.toggle("menuListSlider4");
  listFive.classList.toggle("menuListSlider5");
  // menuList.classList.toggle("menuListSlider");
});

//RESUME FORM
const resume = document.querySelector(".resumeForm");
const resumeLink = document.querySelectorAll(".resumeLink");
const closeOut = document.querySelector(".close");
function showResume() {
  resume.classList.toggle("displayResume");
}
resumeLink.forEach((resumeLink) =>
  resumeLink.addEventListener("click", showResume)
);
closeOut.addEventListener("click", function () {
  resume.classList.remove("displayResume");
});

// CONTACT FORM
const contact = document.querySelectorAll(".contactLink");
const form = document.querySelector(".formContainer");
const contact2 = document.querySelector(".contactLink2");
const x = document.querySelector(".closeX");

function showForm() {
  form.classList.toggle("showForm");
}
contact.forEach((contact) => contact.addEventListener("click", showForm));
console.log(showForm);
x.addEventListener("click", function () {
  form.classList.remove("showForm");
});

// contact.addEventListener("click", function () {
//   form.classList.toggle("showForm");
// });

// contact2.addEventListener("click", function () {
//   form.classList.toggle("showForm");
// });

//RESUME FORM
// const resume = document.querySelector(".resumeForm");
// const resumeLink = document.querySelectorAll(".resumeLink");
// const closeOut = document.querySelector(".close");
// function showResume() {
//   resume.classList.toggle("displayResume");
// }
// resumeLink.forEach((resumeLink) =>
//   resumeLink.addEventListener("click", showResume)
// );
// closeOut.addEventListener("click", function () {
//   resume.classList.remove("displayResume");
// });
