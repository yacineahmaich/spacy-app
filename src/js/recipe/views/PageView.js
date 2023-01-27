import icons from '../../../img/icons.svg';

class PageView {
  #parentElement = document.querySelector('.container');

  notFound() {
    this._clear();
    const markup = this._generateMarkup();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this.#parentElement.innerHTML = '';
  }

  _generateMarkup() {
    return `
      <div class="not-found">
        <p class="not-found__message">Recipe Not Found  ! Please try again</p>
        <svg class="not-found__icon">
          <use href="${icons}#icon-not-found"></use>
        </svg>
        <a href="/index.html" class="not-found__link">&larr; <span>home page<span></a>
      </div>
    `;
  }
}

export default new PageView();
