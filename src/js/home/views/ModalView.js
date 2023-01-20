class ModalView {
  #parentElement = document.querySelector('.modal');

  constructor() {
    this.#parentElement
      .querySelector('.popup__btn--close')
      .addEventListener('click', this.closeModal.bind(this));

    this.#parentElement
      .querySelector('.overlay')
      .addEventListener('click', this.closeModal.bind(this));
  }

  showModal() {
    this.#parentElement.classList.remove('hidden');
  }
  closeModal() {
    this.#parentElement.classList.add('hidden');
  }
}

export default new ModalView();
