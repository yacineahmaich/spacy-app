import icons from '../../../img/icons.svg';

class RecipesView {
  #parentElement = document.querySelector('.recipes');
  #data;

  render(data) {
    this.#data = data;
    const markup = this._generateMarkup();
    this._clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    this._clear();
    this.#parentElement.innerHTML = `
    <div class="spinner">
      <svg class="spinner__icon">
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
    `;
  }

  _clear() {
    this.#parentElement.innerHTML = '';
  }

  _generateMarkup() {
    return this.#data
      .map(
        recipe => `
        <a href="/recipe.html?recipe_id=${recipe.id}">
          <div class="recipe">
            <div class="recipe__img">
              <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="recipe__info">
              <h2 class="recipe__info-title">${recipe.title}</h2>
              <p class="recipe__info-author">${
                recipe.author ?? recipe.sourceName
              }</p>
            </div>
          </div>
        </a>
    `
      )
      .join('');
  }

  renderFeedback(feedback) {
    this.#parentElement.innerHTML = `
    <div class="feedback">
      <p>${feedback} 🚨</p>
    </div>
    `;
  }
}

export default new RecipesView();
