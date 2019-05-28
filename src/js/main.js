import "@babel/polyfill";
import "../scss/main.scss";
import calculateVH from "./vh-fix";
import Range from "./Range";
import Modal from "./Modal";

window.addEventListener("DOMContentLoaded", function() {
  calculateVH();

  new Range().init();
  new Modal().init();
});
