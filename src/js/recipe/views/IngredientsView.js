import icons from '../../../img/icons.svg';

class SammuryView {
  #parentElement = document.querySelector('.ingredients');
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
          <use href="${icons}#icon-ingredients"></use>
        </svg>
        <h2>Ingredients</h2>
      </div>
    </div>
    <div class="section__content ingredients__wrapper">
      ${this.#data
        .map(
          ing => `
      <div class="ingredient">
        <svg class="icon--medium">
          <use href="${icons}#icon-checkmark"></use>
        </svg>
        <p class="ingredient__description">${ing.text}</p>
        <div class="ingredient__img">
          <img src=${ing.image} alt="ingredient">
        </div>
      </div>
      `
        )
        .join('')}
    </div>
    `;
  }
}

export default new SammuryView();
