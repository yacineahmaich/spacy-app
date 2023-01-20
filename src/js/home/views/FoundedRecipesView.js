class FoundedRecipesView {
  #parentElement = document.querySelector('.controls__founded');
  #data;

  render(data) {
    this.#data = data;
    const markup = this._generateMarkup();
    this.clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  clear() {
    this.#parentElement.innerHTML = '';
  }

  _generateMarkup() {
    return `
      <div class="controls__founded-dot"></div>
      <span class="controls__founded--value">${this.#data}</span>
      Recipes founded
    `;
  }
}

export default new FoundedRecipesView();
