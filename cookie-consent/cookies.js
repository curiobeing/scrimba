// inside div that contains h2 and p in modal-container div
const modalInnerEl = document.getElementById("modal-inner");

// p el inside the modal-inner div
const modalTextEl = document.getElementById("modal-text-p");

// the form inside the modal
const formEl = document.getElementById("consent-form");

// to close the modal
const closeModalBtn = document.getElementById("close-modal-btn");

// the modal container to be closed
const modalContainer = document.getElementById("modal-container");

// decline button
const declineBtn = document.getElementById("decline-btn");

// to reverse the buttons direction
const choiceBtnsContainer = document.getElementById("choice-btns-container");

// we show the modal after 1.5 sec of the page load
setTimeout(function () {
  modalContainer.style.display = "inline";
}, 1500);

// to close the modal-container div
closeModalBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

formEl.addEventListener("submit", function (e) {
  // to prevent the details showing up in address bar
  e.preventDefault();

  // to get the form data as an object
  let consentFormData = new FormData(formEl);
  // to get the fullName entered
  let fullName = consentFormData.get("fullName");

  modalTextEl.innerHTML = `
        <img src="/cookie-consent/assets/loading.svg" alt="">
        <p id="upload-text">Uploading your data to the dark web...</p>
        `;

  setTimeout(function () {
    document.getElementById("upload-text").textContent = "Making the sale...";
  }, 1500);

  setTimeout(function () {
    modalInnerEl.innerHTML = `
    <h2>Thanks <span>${fullName}</span>, you sucker!</h2>
    <p>We just sold the rights to your eternal soul.</p>
    <img src="/cookie-consent/assets/pirate.gif" alt=""></img>
  `;

    closeModalBtn.disabled = false;
  }, 3000);
});

declineBtn.addEventListener("mouseenter", function () {
  choiceBtnsContainer.classList.toggle("reverse");
});
