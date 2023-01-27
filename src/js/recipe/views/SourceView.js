import icons from '../../../img/icons.svg';

class SourceView {
  #parentElement = document.querySelector('.source');
  #data;

  render(data) {
    this.#data = data;
    this._clear();
    const markup = this._generateMarkup();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this.#parentElement.innerHTML = '';
  }

  _generateMarkup() {
    return `
    <h2 class="source__title">check the link below for more details</h2>
    <a href="${this.#data}" target="_blank" class="source__link">
      <span>Go To Website</span>
      &rarr;
    </a>
    `;
  }
}

export default new SourceView();
