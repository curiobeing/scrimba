// to store the current count
let count = 0;

// to get the element that shows counter number
let countEl = document.getElementById("count-el");

// to get the p element that saves previous entries
let saveEl = document.getElementById("save-el");

// to increment the counter on click of increment button and set count-el value
function increment() {
  count += 1;
  //   countEl.innerText = count;
  // we use textContent instead of innerText as innerText does not show spaces
  countEl.textContent = count;
}

// to save current counter number and reset the counter value
function save() {
  let text = count + " - ";
  saveEl.textContent += text;

  count = 0;
  countEl.textContent = count;
}

// to reset saved previous entries
function reset() {
  saveEl.textContent = "Previous Entries: ";
}
