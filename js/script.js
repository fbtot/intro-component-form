const pageID = document.getElementsByTagName("body").id;
const form = document.getElementById("form");
const inputs = document.getElementsByTagName("input");
const inputsArray = Array(inputs);
const button = document.getElementById("intro__button");
const password = document.getElementById("form__password");
const successImg = document.getElementById("success-img");
const successGifsUrls = [
  "https://media4.giphy.com/media/13wQVrbvz2nyG4/giphy.gif",
  "https://media1.giphy.com/media/oGO1MPNUVbbk4/giphy.gif",
  "https://media3.giphy.com/media/hWd4smF80HuM0/giphy.gif",
  "https://media0.giphy.com/media/MSCzxrLEF25feISTIz/giphy.gif",
  "https://media3.giphy.com/media/IbOiFIJcSlHW2rgVUa/giphy.gif",
  "https://media4.giphy.com/media/3ohhwhT2ad8lcdD1f2/giphy.gif",
  "https://media4.giphy.com/media/3ohzdX7Wzbebc3Y0qA/giphy.gif",
  "https://media4.giphy.com/media/9wcu6Tr1ecmxa/giphy.gif",
  "https://media3.giphy.com/media/vnMdLhS2vs35fTXIk0/giphy.gif",
  "https://media1.giphy.com/media/2wYxEYYuf8Vs9hiWtQ/giphy.gif",
];

if (button !== null) {
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
}

// Success gif
const selectUrlIndex = Math.floor(Math.random() * successGifsUrls.length);
const randomUrl = successGifsUrls[selectUrlIndex];
randomUrl;

if (successImg != null) {
  successImg.setAttribute("src", randomUrl);
}
