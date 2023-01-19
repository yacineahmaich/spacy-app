const sortBtn = document.querySelector(".sort__btn");
const sortList = document.querySelector(".sort__list");
const sortListItems = document.querySelectorAll(".sort__item");

// Show / Hide the menu
const toggleSortList = function () {
  sortList.classList.toggle("show-menu");
};

// Select item
sortListItems.forEach((item) => {
  item.addEventListener("click", function () {
    const icon = this.querySelector("use").getAttribute("href");
    const label = this.querySelector("label").textContent;

    sortBtn.querySelector("use").setAttribute("href", icon);
    sortBtn.querySelector("label").textContent = label;
  });
});
sortBtn.addEventListener("click", toggleSortList);

// =============== Modal ===================

const btnShowSearchMenu = document.querySelector(".quick-search__btn");
const btnHideSearchMenu = document.querySelector(".popup__btn--close");
const popup = document.querySelector(".popup");
const overlay = document.querySelector(".overlay");

const showSeachMenu = function () {
  overlay.classList.remove("hidden");
  popup.classList.remove("hidden");
};
const hideSearchMenu = function () {
  overlay.classList.add("hidden");
  popup.classList.add("hidden");
};

btnShowSearchMenu.addEventListener("click", showSeachMenu);
btnHideSearchMenu.addEventListener("click", hideSearchMenu);
overlay.addEventListener("click", hideSearchMenu);
