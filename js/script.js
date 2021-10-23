const form = document.getElementById("form");
const inputs = document.getElementsByTagName("input");
const inputsArray = Array(inputs);
const button = document.getElementById("intro__button");
const password = document.getElementById("form__password");

button.addEventListener("click", function (event) {
  for (let input of inputs) {
    if (input.checkValidity()) {
      input.classList.remove("error");
      input.nextElementSibling.classList.remove("visible");
    } else {
      event.preventDefault();
      input.classList.add("error");
      input.nextElementSibling.classList.add("visible");
    }

    if (input.id === "form__password") {
      if (input.validity.tooShort) {
        input.nextElementSibling.innerText = "Password must be at least 6 characters long";
      } else {
        input.nextElementSibling.innerText = "Password cannot be empty";
      }
    }
  }
});
