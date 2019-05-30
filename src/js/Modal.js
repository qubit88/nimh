function Modal() {
  this.el = document.querySelector(".modal");
  this.text = this.el.querySelector(".modal__text");
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

Modal.prototype.open = function(text) {
  this.el.style.display = "flex";
  this.text.innerHTML = text;
};

Modal.prototype.close = function() {
  this.el.style.display = "none";
};

export default Modal;
