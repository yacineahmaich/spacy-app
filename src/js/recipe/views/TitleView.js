class TitleView {
  #parentElement = document.querySelector('.title');
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
    <h1 class="title__text">${this.#data}</h1>
    `;
  }
}

export default new TitleView();
