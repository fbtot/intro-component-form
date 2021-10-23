const form = document.getElementById("form");
const inputs = document.getElementsByTagName("input");
const inputsArray = Array(inputs);
const button = document.getElementById("intro__button");

button.addEventListener("click", function (event) {
  event.preventDefault();
  for (let input of inputs) {
    console.log(input.checkValidity());
  }
});

function allValid(el) {}
