const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// we have characters here which will be either alphabets or alphabets + numbers + symbols based on user choice
let characters = [];

// to set characters array based on user choide. characters array will be used to generate the random passwords
function setCharacters() {
  let symbolsSelection = document.getElementById("symbols-el").checked;
  let numbersSelection = document.getElementsByName("numbers")[0].checked;

  if (symbolsSelection && numbersSelection) {
    characters = [...alphabets, ...numbers, ...symbols];
  } else if (symbolsSelection) {
    characters = [...alphabets, ...symbols];
  } else if (numbersSelection) {
    characters = [...alphabets, ...numbers];
  } else {
    characters = [...alphabets];
  }
  // console.log(numbersSelection);
}

// we get the refrence to the password <p></p>
let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");

// to generate random password
function generateRandomPassword() {
  // we get the password length from input text field where user can set the desierd length range[1, 22]
  let userSetPwLength = document.getElementById("pw-length-input").value;

  // to ensure min pwd lengt 1 and max pwd length 22, and default at 15
  let passwordLength =
    (userSetPwLength >= 1) & (userSetPwLength <= 22) ? userSetPwLength : 15;

  let randomPassword = "";

  setCharacters();

  // this for loop runs for passwordLength times
  for (i = 1; i <= passwordLength; i++) {
    let index = Math.floor(Math.random() * characters.length);
    randomPassword += characters[index];
  }
  return randomPassword;
}

function generator() {
  //   console.log("clicked");
  password1El.textContent = generateRandomPassword();
  password2El.textContent = generateRandomPassword();
}

//? for copy text challenge
// function to copy the text. We use this inside addEventListener
function copier(elementId) {
  let copyText = document.getElementById(elementId).innerHTML;
  navigator.clipboard.writeText(copyText);
}

// adding copier function to the password fields
//? here function is an anonymous function
password1El.addEventListener("click", function () {
  copier("password1");
});

password2El.addEventListener("click", function () {
  copier("password2");
});
