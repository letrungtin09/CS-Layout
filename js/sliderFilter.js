let listFilter = document.querySelector(".filter__slider .filter__list");
let itemsFilter = document.querySelectorAll(
  ".filter__slider .filter__list .filter__item"
);
let nextFilter = document.getElementById("next-filter");
let prevFilter = document.getElementById("prev-filter");

let activeFilter = 0;
let lengthFilter = itemsFilter.length - 1;

nextFilter.onclick = function () {
  if (activeFilter + 1 > lengthFilter - 8) {
    activeFilter = 0;
  } else {
    activeFilter += 1;
  }
  reloadSliderFilter();
};

prevFilter.onclick = function () {
  if (activeFilter - 1 < 0) {
    activeFilter = lengthFilter - 8;
  } else {
    activeFilter -= 1;
  }
  reloadSliderFilter();
};

function reloadSliderFilter() {
  let checkLeft = itemsFilter[activeFilter].offsetLeft;
  listFilter.style.left = -checkLeft + 35 + "px";
}
