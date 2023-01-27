import icons from '../../../img/icons.svg';

class RecipeImgView {
  #parentElement = document.querySelector('.recipe');
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
    <div class="recipe__img">
      <img src=${this.#data} alt="Recipe">
      <button class="recipe__btn recipe__btn--bookmark">
        <svg class="icon--medium">
          <use href="${icons}#icon-bookmark"></use>
        </svg>
      </button>
    </div>
    `;
  }
}

export default new RecipeImgView();
