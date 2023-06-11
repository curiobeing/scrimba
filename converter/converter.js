const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const clearBtn = document.getElementById("clear-btn");

const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

const meterToFeet = 3.280839895;
const literToGallon = 0.2641728747;
const kgToPound = 2.2045855379;

convertBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;

  converter(inputValue);
});

function converter(baseValue) {
  lengthEl.textContent = `
      ${baseValue} meters = ${round(baseValue * meterToFeet)} feet | 
      ${baseValue} feet = ${round(baseValue / meterToFeet)} meters
    `;

  volumeEl.textContent = `
      ${baseValue} liters = ${round(baseValue * literToGallon)} gallons | 
      ${baseValue} gallons = ${round(baseValue / literToGallon)} liters
    `;

  massEl.textContent = `
      ${baseValue} kilos = ${round(baseValue * kgToPound)} pounds | 
      ${baseValue} pounds = ${round(baseValue / kgToPound)} kilos
    `;
}

function round(n) {
  return Math.round(n * 1000) / 1000;
}

clearBtn.addEventListener("click", function () {
  inputEl.value = "";
  converter(1);
});
