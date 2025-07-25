// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
[firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput].forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
  });
});

submitBtn.onclick = () => {
  let isValid = true;

  if (firstNameInput.value.trim() === "") {
    firstNameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    firstNameInput.classList.add("is-valid");
  }

  if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    lastNameInput.classList.add("is-valid");
  }

  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
    isValid = false;
  } else {
    emailInput.classList.add("is-valid");
  }

  if (passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
    isValid = false;
  } else {
    passwordInput.classList.add("is-valid");
  }

  if (confirmPasswordInput.value !== passwordInput.value || confirmPasswordInput.value.length < 6) {
    confirmPasswordInput.classList.add("is-invalid");
    isValid = false;
  } else {
    confirmPasswordInput.classList.add("is-valid");
  }

  if (isValid) {
    alert("Registered successfully");
  }
};

resetBtn.onclick = () => {
  [firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput].forEach((input) => {
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
    input.value = "";
  });
};