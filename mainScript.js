let stars = document.getElementById("stars-moon");
let moon = document.getElementById("layer2");
let mountains = document.getElementById("layer1");
let text = document.getElementById("heading");
let myName = document.getElementById("subHeading");
// let btn = document.getElementById("btn-letsgo");
// let header = document.querySelector("projects");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  moon.style.top = value * 1.05 + "px";
  stars.style.left = value * 0.1 + "px";
  mountains.style.top = value * 0.5 + "px";
  text.style.bottom = value * 1.35 + "px";
  myName.style.bottom = value * 1.35 + "px";
  // btn.style.marginTop = value * 1 + "px";
  //   header.style.top = value * 0 + "px";
});

// let heading = document.getElementById("heading");
// let subHeading = document.getElementById("subHeading");

// window.addEventListener("scroll", function () {
//   let fade = window.scrollY;
//   heading.style.opacity = 0;
//   subHeading.style.opacity = 0;
// });
