import { mockAPI } from "../../backend/api/controllers/createUser.js";
// ---------------------------- FRONTEND --------------------------------------
const form = document.querySelector("form");
async function sendDataForm(e) {
  e.preventDefault();

  const userInfo = {
    name: e.target.elements.name.value,
    email: e.target.elements.email.value,
    address: e.target.elements.address.value,
    emergency: e.target.elements.emergency.value,
    city: e.target.elements.city.value,
    state: e.target.elements.state.value,
    zip: e.target.elements.zip.value,
  };

  // ----------- Pretending to send a POST request --------------

  // const response = await fetch("myfunapi.fake/user/signup", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(userInfo),

  // Just pretending
  const response = await mockAPI(userInfo);

  const error = document.querySelector("#error");
  const div = document.querySelector(".message");
  const success = document.querySelector(".success");
  const blackBackground = document.querySelector("#black");

  // ----------- Displaying Error Message --------------
  if (response.status != 201) {
    console.log(response);
    div.style.display = "flex";
    error.textContent = response.error;
    return;
  }

  // ----------- Displaying Successful Message --------------

  div.style.display = "none";
  success.style.display = "flex";
  blackBackground.style.display = "flex";

  console.log(response);
}

form.addEventListener("submit", sendDataForm);
