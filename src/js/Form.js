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
  let object = {};

  FD.forEach((value, key) => {
    object[key] = value;
  });

  let user_id = location.href.split("user_id=")[1];

  if (user_id) {
    user_id = user_id.split("&")[0];

    object["user_id"] = user_id;

    let json = JSON.stringify(object);

    console.log(FD, json);

    fetch(
      "http://144.76.220.150:8080/base21cc/hs/CustomerReviewsAPI/CustomerReviews",
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
          console.log(`Response status ${response.status}`);
        }
      })
      .then(function(text) {
        if (text.includes("Success")) {
          self.modal.open("Операція пройшла успішно");
        } else {
          self.modal.open("Something went wrong.");
          console.log(`Server responded with ${text}`);
        }
      });
  }
};

export default Form;
