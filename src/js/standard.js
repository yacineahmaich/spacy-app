const gotoSearchBtn = document.querySelector('.pagination__go');

gotoSearchBtn.addEventListener('click', function (e) {
  document.querySelector('.search__field').focus();
});
