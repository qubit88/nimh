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

  let json = JSON.stringify(object);

  console.log(FD, json);

  fetch(
    "http://144.76.220.150:8080/base21cc/hs/CustomerReviewsAPI/CustomerReviews",
    {
      method: "POST",
      mode: "no-cors", // no-cors, cors, *same-origin
      headers: {
        "Content-Type": "application/json"
      },
      body: json
    }
  )
    .then(function(response) {
      console.log(response);
      if (response.status === 200) {
        console.log(response.text());
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
};

export default Form;
