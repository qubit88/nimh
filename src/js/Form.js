function Form(modal) {
  this.el = document.querySelector(".feedback__form");
  this.modal = modal;
}

Form.prototype.init = function() {
  this.el.addEventListener("submit", event => {
    event.preventDefault();

    this.sendData();
  });
};

Form.prototype.sendData = function() {
  let XHR = new XMLHttpRequest();

  let FD = new FormData(this.el);

  let object = {};

  FD.forEach((value, key) => {
    object[key] = value;
  });

  let json = JSON.stringify(object);

  console.log(FD, json);

  XHR.addEventListener("load", event => {
    alert(event.target.responseText);
    if (event.target.responseText === "Success") {
      this.modal.open("Операція пройшла успішно");
    } else {
      this.modal.open("Something went wrong");
    }
  });

  XHR.addEventListener("error", function(event) {
    alert("Oops! Something went wrong.");
  });

  XHR.open(
    "POST",
    "http://144.76.220.150:8080/base21cc/hs/CustomerReviewsAPI/CustomerReviews"
  );

  XHR.setRequestHeader("Content-Type", "application/json");

  XHR.send(json);
};

export default Form;
