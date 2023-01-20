class QuickSearchView {
  #parentElement = document.querySelector('.search-menu');
  #btn = document.querySelector('.quick-search__btn');

  addShowMenuHandler(handler) {
    this.#btn.addEventListener('click', function (e) {
      const openModalBtn = e.target.closest('.quick-search__btn');

      if (!openModalBtn) return;

      handler();
    });
  }

  addHandler(handler) {
    this.#parentElement.addEventListener('click', function (e) {
      const item = e.target.closest('.search-menu__item');

      if (!item) return;

      const { tag } = item.dataset;
      handler(tag);
    });
  }
}

export default new QuickSearchView();
