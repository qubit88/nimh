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
    this.valueBar.dataset.active = "8";
    this.el.addEventListener(
      "input",
      e => (this.valueBar.dataset.active = e.target.value)
    );
  };

  new Range().init();
});
