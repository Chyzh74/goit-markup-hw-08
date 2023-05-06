(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  window.addEventListener("keydown", onEscCloseModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function onEscCloseModal() {
    if (event.code === "Escape") {
      refs.modal.classList.add("is-hidden");
    }
    
  }


})();