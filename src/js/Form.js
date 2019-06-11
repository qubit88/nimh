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
  let self = this;

  let FD = new FormData(this.el);

  let user_id = new URLSearchParams(location.search).get("user_id");

  if (user_id) {
    FD.set("user_id", user_id);

    let object = {};

    FD.forEach((value, key) => {
      object[key] = value;
    });
    let json = JSON.stringify(object);

    fetch(
      "http://workbook.pp.ua", //"http://144.76.220.150:8080/base21cc/hs/CustomerReviewsAPI/CustomerReviews",
      {
        method: "POST",
        body: json
      }
    )
      .then(function(response) {
        console.log(response, "response");
        console.log(response.status, "response status");

        if (response.status === 200) {
          return response.text();
        } else {
          self.modal.open("Something went wrong.");
        }
      })
      .then(function(text) {
        if (text.includes("Success")) {
          self.modal.open("Операція пройшла успішно");
        } else {
          self.modal.open("Something went wrong.");
          console.log(`Server responded with text ${text}`);
        }
      });
  }
};

export default Form;
