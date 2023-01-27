import icons from '../../../img/icons.svg';

class SummaryView {
  #parentElement = document.querySelector('.summary');
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
    <div class="section__header">
      <div class="section__header-wrapper">
        <svg class="icon--big">
          <use href="${icons}#icon-summary"></use>
        </svg>
        <h2>Recipe summary</h2>
      </div>
    </div>
    <div class="section__content">
      <p class="summary__text">${this.#data.text}</p>
      <p class="summary__credit">Recipe Credit : <a href="${
        this.#data.link
      }" target="_blank">${this.#data.credit}</a></p>
    </div>
    `;
  }
}

export default new SummaryView();
