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
    console.log(this.#data.bookmarked);
    return `
    <div class="recipe__img">
      <img src=${this.#data.image} alt="Recipe">
      <button class="recipe__btn recipe__btn--bookmark">
        <svg class="icon--medium">
          <use href="${icons}#icon-bookmark${
      this.#data.bookmarked ? '-fill' : ''
    }"></use>
        </svg>
      </button>
    </div>
    `;
  }

  addHandler(handler) {
    this.#parentElement.addEventListener('click', function (e) {
      const btnBookmark = e.target.closest('.recipe__btn--bookmark');

      if (!btnBookmark) return;

      handler();
    });
  }
}

export default new RecipeImgView();
