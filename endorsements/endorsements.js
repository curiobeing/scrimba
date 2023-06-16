const inputEl = document.getElementById("input-el"); // endorsement textarea
const fromEl = document.getElementById("from-el"); // From input
const toEl = document.getElementById("to-el"); // To input

const publishBtn = document.getElementById("publish-btn"); // Publish button
const endorsementsUl = document.getElementById("endorsements-ul"); // ul to hold endorsements in li

publishBtn.addEventListener("click", function () {
  appendToEndorsementsUl();
});

function appendToEndorsementsUl() {
  // we create new li element
  let newEl = document.createElement("li");

  /*
    If the type="module" for js source, then onclick for button will throw refrence error
    An alternate way to get the like and delete buttons work are using addEventListener
    For that we need to create 2 buttons, append them to span, append span to div and append div to newEl
    */

  // we create like button, set innerHTML and add click event listener
  let likeBtn = document.createElement("button");
  likeBtn.innerHTML = "&#10084; 0";
  likeBtn.addEventListener("click", function () {
    console.log("Liked");
  });

  // we create delete button, set class & innerHTML and add click event listener
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "material-icons");
  deleteBtn.innerHTML = "delete";
  deleteBtn.addEventListener("click", function () {
    console.log("Deleted");
  });

  // we create span to hold like and delete buttons
  // we placed buttons inside sapn as space-between for actions-div will add space between these 2 buttons also
  let spanEl = document.createElement("span");
  spanEl.appendChild(likeBtn);
  spanEl.appendChild(deleteBtn);

  // we create div to hold fromEl and above span
  let actionsDiv = document.createElement("div");
  actionsDiv.setAttribute("class", "actions-div");
  actionsDiv.innerHTML = `<p>From ${fromEl.value}</p>`;
  actionsDiv.appendChild(spanEl);

  // we set the content of li newEl
  newEl.innerHTML = `
    <p>To ${toEl.value}</p>
    ${inputEl.value}
    `;

  // we append actionsDiv with fromEl and like & delete buttons inside span to li
  newEl.appendChild(actionsDiv);

  // we append the li newEl to endorsementsUl
  endorsementsUl.appendChild(newEl);
}
