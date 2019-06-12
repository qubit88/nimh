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

Modal.prototype.open = function(text, success) {
  this.el.style.display = "flex";
  if(text) {
    success ? this.el.classList.add('modal--success') : this.el.classList.add('modal--failure');
    this.text.innerHTML = text;
  }
};

Modal.prototype.close = function() {
  this.el.style.display = "none";
};

export default Modal;
