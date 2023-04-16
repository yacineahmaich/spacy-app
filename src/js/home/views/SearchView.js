class SearchView {
  #parentElement = document.querySelector('.search');

  constructor() {
    this.#parentElement
      .querySelector('.search__field')
      .addEventListener('focus', function () {
        this.placeholder = 'hints: pasta, tacos, burger...';
      });
    this.#parentElement
      .querySelector('.search__field')
      .addEventListener('blur', function () {
        this.placeholder = 'Search over 1.000.000 recipes';
      });
  }

  clear() {
    this.#parentElement.querySelector('.search__field').value = '';
  }

  addHandler(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      const query = this.querySelector('.search__field').value;

      if (!query) return;

      handler(query);
    });
  }
}

export default new SearchView();
