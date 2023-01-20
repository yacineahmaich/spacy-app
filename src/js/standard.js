// =============== Modal ===================

const btnShowSearchMenu = document.querySelector('.quick-search__btn');
const btnHideSearchMenu = document.querySelector('.modal__btn--close');
const popup = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const showSeachMenu = function () {
  console.log('show');
  overlay.classList.remove('hidden');
  popup.classList.remove('hidden');
};
const hideSearchMenu = function () {
  overlay.classList.add('hidden');
  popup.classList.add('hidden');
};

btnShowSearchMenu.addEventListener('click', showSeachMenu);
btnHideSearchMenu.addEventListener('click', hideSearchMenu);
overlay.addEventListener('click', hideSearchMenu);

const gotoSearchBtn = document.querySelector('.pagination__go');

gotoSearchBtn.addEventListener('click', function (e) {
  document.querySelector('.search__field').focus();
});
