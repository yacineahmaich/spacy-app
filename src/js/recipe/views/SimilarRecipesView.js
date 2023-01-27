import icons from '../../../img/icons.svg';

class StepsView {
  #parentElement = document.querySelector('.similar');
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
    <div class="similar__title">
      <h4>You might like also</h4>
    </div>
    ${this.#data
      .map(
        recipe => `
    <a href="${recipe.url}" class="similar__recipe">
      <div class="similar__img">
        <img src=${recipe.image} alt=${recipe.title}>
      </div>
      <div class="similar__info">
        <h2 class="similar__info-title">${recipe.title}</h2>
      </div>
    </a>
    `
      )
      .join('')}
    `;
  }
}

export default new StepsView();
