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

    this.valueBar.addEventListener("click", e => {
      if (e.target.classList.contains("range-slider__number")) {
        let number = Number(e.target.dataset.id);
        this.el.value = number;
        this.valueBar.dataset.active = number;
      }
    });
  }
};

export default Range;
