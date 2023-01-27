import icons from '../../../img/icons.svg';

class StatisticsView {
  #parentElement = document.querySelector('.statistics');
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
    <div class="statistic">
    <svg class="icon--big">
      <use href="${icons}#icon-ingredients"></use>
    </svg>
    <h3 class="statistic__value">${this.#data.ingredientsCount}</h3>
    <span class="statistic__label">Ingredients</span>
  </div>

  <div class="statistic">
    <svg class="icon--big">
      <use href="${icons}#icon-timer"></use>
    </svg>
    <h3 class="statistic__value">${this.#data.estimatedTime}</h3>
    <span class="statistic__label">Estimated time</span>
  </div>

  <div class="statistic">
    <svg class="icon--big">
      <use href="${icons}#icon-steps"></use>
    </svg>
    <h3 class="statistic__value">${this.#data.stepsCount}</h3>
    <span class="statistic__label">Steps</span>
  </div>
    `;
  }
}

export default new StatisticsView();
