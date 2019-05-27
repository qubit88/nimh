import "@babel/polyfill";
import "../scss/main.scss";
import calculateVH from "./vh-fix";

window.addEventListener("DOMContentLoaded", function() {
  calculateVH();

  function Range() {
    this.el = document.querySelector(".range-slider__input");
    this.valueBar = document.querySelector(".range-slider__value");
  }

  Range.prototype.init = function() {
    if (this.el) {
      this.valueBar.dataset.active = "8";
      this.el.addEventListener(
        "input",
        e => (this.valueBar.dataset.active = e.target.value)
      );
    }
  };

  function Modal() {
    this.el = document.querySelector(".modal");
  }

  Modal.prototype.init = function() {
    if (this.el) {
      this.el.addEventListener("click", e => {
        if (
          e.target == this.el ||
          e.target.classList.contains("modal__close")
        ) {
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

  new Range().init();
  new Modal().init();
});
