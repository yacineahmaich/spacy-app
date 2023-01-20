class SearchView {
  #parentElement = document.querySelector('.search');

  addHandler(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('submited');

      const query = this.querySelector('.search__field').value;

      if (!query) return;

      handler(query);
    });
  }
}

export default new SearchView();
