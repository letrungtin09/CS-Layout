let list = document.querySelector(".places__slider .places__list");
let items = document.querySelectorAll(".places__slider .places__list .img1");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active += 1;
  }
  reloadSlider();
};

prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active -= 1;
  }
  reloadSlider();
};

function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";
}
