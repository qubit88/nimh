import "@babel/polyfill";
import "../scss/main.scss";
import calculateVH from "./vh-fix";
import Range from "./Range";
import Modal from "./Modal";
import Form from "./Form";

window.addEventListener("DOMContentLoaded", function() {
  calculateVH();

  new Range().init();
  let modal = new Modal();
  modal.init();
  new Form(modal).init();
});
