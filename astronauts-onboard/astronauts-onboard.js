const onboardingForm = document.getElementById("onboarding-form");
const onboardDataOl = document.getElementById("onboard-data-ol");

onboardingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let onboardingData = new FormData(onboardingForm);
  console.log(onboardingData.get("password"));

  onboardDataOl.innerHTML += `
        <li>
           <span>Astronaut Name:  </span> ${onboardingData.get("astronautName")}
            <br />
           <span>Astronaut Email:  </span> ${onboardingData.get(
             "astronautEmail"
           )}
            <br />
           <span>Password:  </span> ${onboardingData.get("password")}
        </li>
    `;
});
