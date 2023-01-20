class SearchView {
  #parentElement = document.querySelector('.search');

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
