import icons from '../../img/icons.svg';

class BookmarksView {
  #parentElement = document.querySelector('.bookmarks');
  #data;

  render(data) {
    this.#data = data;
    this._clear();
    const markup = this._generateMarkup();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    this._clear();
    this.#parentElement.innerHTML = `
    <div class="spinner spinner--bookmarks">
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
    return this.#data.bookmarks.length > 0
      ? this.#data.bookmarks
          .map(
            recipe => `
        <li >
        <a href="/recipe.html?recipe_id=${recipe.id}" class="bookmark ${
              this.#data.current === recipe.id ? 'bookmark--active' : ''
            }">
        <div class="bookmark__img">
          <img src=${recipe.image} alt=${recipe.title}>
        </div>
        <h4 class="bookmark__title">${recipe.title}</h4>
        </a>
      </li>
    `
          )
          .join('')
      : `
      <div class="bookmarks--empty">
        <p>No Bookmarked recipes found ! try to bookmark one 🚨</p>
      </div>
      `;
  }
}

export default new BookmarksView();
