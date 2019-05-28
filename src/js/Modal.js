function Modal() {
  this.el = document.querySelector(".modal");
}

Modal.prototype.init = function() {
  if (this.el) {
    this.el.addEventListener("click", e => {
      if (e.target == this.el || e.target.classList.contains("modal__close")) {
        this.close();
      }
    });
  }
};

Modal.prototype.open = function() {
  this.el.style.display = "flex";
};

Modal.prototype.close = function() {
  this.el.style.display = "none";
};

export default Modal;
