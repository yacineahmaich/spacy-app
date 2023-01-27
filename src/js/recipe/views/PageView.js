import icons from '../../../img/icons.svg';

class PageView {
  #parentElement = document.querySelector('.container');
  #errMessage;

  notFound(data) {
    this.#errMessage = data;
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
        <svg class="not-found__icon">
        <use href="${icons}#icon-not-found"></use>
        </svg>
        <p class="not-found__message">${this.#errMessage} 🚨</p>
        <a href="/index.html" class="not-found__link">&larr;    <span>home page<span>
        </a>
      </div>
    `;
  }
}

export default new PageView();
