import icons from '../../../img/icons.svg';

class PaginationView {
  #parentElement = document.querySelector('.pagination');
  #data;

  constructor() {
    // document
    //   .querySelector('.pagination__go')
    //   .addEventListener('click', function () {
    //     document.querySelector('.search__field').focus();
    //   });
  }

  render(data) {
    this.#data = data;
    const markup = this._generateMarkup();
    this.clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  clear() {
    this.#parentElement.innerHTML = '';
  }

  disablePagination() {
    this.#parentElement.classList.add('pagination--disabled');
  }

  enablePagination() {
    this.#parentElement.classList.remove('pagination--disabled');
  }

  _generateMarkup() {
    const { num_pages, current } = this.#data;

    // if there only 1 page
    if (num_pages <= 1) return '';

    return `
    <button class="pagination__btn pagination__btn--prev ${
      current === 1 ? 'pagination__btn--disabled' : ''
    }" data-goto=${current - 1}>
      <svg class="icon--small">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>prev</span>
    </button>

    <div class="pagination__pages">
      <span class="pagination__pages-current">${current}</span>
      <span class="pagination__pages-num_pages">${num_pages}</span>
    </div>

    <button class="pagination__btn pagination__btn--next ${
      current === num_pages ? 'pagination__btn--disabled' : ''
    }" data-goto=${current + 1}>
      <span>next</span>
      <svg class="icon--small">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
    `;
  }

  addHandler(handler) {
    this.#parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.pagination__btn');

      if (!btn || btn.classList.contains('pagination__btn--disabled')) return;

      const goto = +btn.dataset.goto;
      handler(goto);
    });
  }
}

export default new PaginationView();
