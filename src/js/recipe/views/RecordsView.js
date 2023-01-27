import icons from '../../../img/icons.svg';

class RecordsView {
  #parentElement = document.querySelector('.records');
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
    <div class="record">
    <div class="record__header">
      <svg class="icon--medium icon-likes">
        <use href="${icons}#icon-heart"></use>
      </svg>
      <span class="record__label">likes</span>
    </div>
    <span class="record__value">${this.#data.likes}</span>
  </div>
  <div class="record">
    <div class="record__header">
      <svg class="icon--medium icon-healt">
        <use href="${icons}#icon-healt"></use>
      </svg>
      <span class="record__label">healt score</span>
    </div>
    <span class="record__value">${this.#data.healthScore}%</span>
  </div>
  <div class="record">
    <div class="record__header">
      <svg class="icon--medium icon-servings">
        <use href="${icons}#icon-servings"></use>
      </svg>
      <span class="record__label">servings</span>
    </div>
    <span class="record__value">${this.#data.servings}</span>
  </div>
  <div class="record">
    <div class="record__header">
      <svg class="icon--medium icon-price">
        <use href="${icons}#icon-price"></use>
      </svg>
      <span class="record__label">price</span>
    </div>
    <span class="record__value">$${this.#data.price}</span>
  </div>
    `;
  }
}

export default new RecordsView();
