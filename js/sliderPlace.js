let list = document.querySelector(".places__slider .places__list");
// let items = document.querySelectorAll(".places__slider .places__list .img1");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 0;
// let lengthItems = items.length - 1;

// next.onclick = function () {
//   if (active + 1 > lengthItems) {
//     active = 0;
//   } else {
//     active += 1;
//   }
//   reloadSlider(className);
// };

function nextImg(className) {
  let items = document.querySelectorAll(
    `.places__slider .places__list .${className}`
  );
  let lengthItems = items.length - 1;
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active += 1;
  }
  reloadSlider(className);
}

function prevImg(className) {
  let items = document.querySelectorAll(
    `.places__slider .places__list .${className}`
  );
  let lengthItems = items.length - 1;
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active -= 1;
  }
  reloadSlider(className);
}

// prev.onclick = function () {
//   if (active - 1 < 0) {
//     active = lengthItems;
//   } else {
//     active -= 1;
//   }
//   reloadSlider();
// };

function reloadSlider(className) {
  let items = document.querySelectorAll(
    `.places__slider .places__list .${className}`
  );
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";
}
