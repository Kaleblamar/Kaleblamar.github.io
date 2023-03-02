const parent = document.getElementById("parent");
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
