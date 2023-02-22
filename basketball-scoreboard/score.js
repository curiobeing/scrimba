let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

function plusOne(team) {
  if (team == "home") {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
  } else if (team == "guest") {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
  }
  highlightTop();
}

function plusTwo(team) {
  if (team == "home") {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
  } else if (team == "guest") {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
  }
  highlightTop();
}

function plusThree(team) {
  if (team == "home") {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
  } else if (team == "guest") {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
  }
  highlightTop();
}

let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

function highlightTop() {
  let highlight = "#34D399";
  if (homeScore > guestScore) {
    homeEl.style.background = highlight;
    guestEl.style.background = "none";
  } else if (guestScore > homeScore) {
    homeEl.style.background = "none";
    guestEl.style.background = highlight;
  } else {
    homeEl.style.background = "none";
    guestEl.style.background = "none";
  }
}

function newGame() {
  homeScore = 0;
  guestScore = 0;

  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;

  highlightTop();
}
