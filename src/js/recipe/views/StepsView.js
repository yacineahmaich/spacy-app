import icons from '../../../img/icons.svg';

class StepsView {
  #parentElement = document.querySelector('.steps');
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
          <use href="${icons}#icon-steps"></use>
        </svg>
        <h2>How to make recipe</h2>
      </div>
    </div>
    <div class="section__content steps__wrapper">
      ${
        this.#data.length > 0
          ? this.#data
              .map(
                step => `
        <div class="step">
          <div class="step__number">
            <span>${step.number}</span>
          </div>
          <p class="step__text">${step.step}</p>
        </div>
      `
              )
              .join('')
          : `<div class="steps__not-found">
                <p>No cooking instructions !</p>
                <svg>
                  <use href="${icons}#icon-not-found"></use>
                </svg>
          </div>`
      }
    </div>
    `;
  }
}

export default new StepsView();
