function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const submitBtn = document.querySelectorAll(".btn-submit");
const confirmMsg = document.querySelector("#confirmationMsg");
const closeConfirmBtn = document.querySelectorAll(".btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  // display form
  modalbg.style.display = "block";
  // don't display confirmation message
  confirmMsg.style.display = "none";
  // re-display form
  form.style.display = "";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
closeConfirmBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// form elements
const form = document.getElementById("myForm");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.getElementsByName("location");

// validation form
function validate() {
  document.getElementById("firstError").classList.add("hidden");
  document.getElementById("lastError").classList.add("hidden");
  document.getElementById("emailError").classList.add("hidden");
  document.getElementById("birthdateError").classList.add("hidden");
  document.getElementById("quantityError").classList.add("hidden");
  document.getElementById("locationError").classList.add("hidden");

  let isFormValid = true;

  // if a field is not valid, display error message underneath
  if (form.first.value == "") {
    document.getElementById("firstError").classList.remove("hidden");
    isFormValid = false;
  }

  if (form.last.value == "") {
    document.getElementById("lastError").classList.remove("hidden");
    isFormValid = false;
  }

  if (form.email.value == "") {
    document.getElementById("emailError").classList.remove("hidden");
    isFormValid = false;
  }

  if (form.birthdate.value == "") {
    document.getElementById("birthdateError").classList.remove("hidden");
    isFormValid = false;
  }

  if (form.quantity.value == "") {
    document.getElementById("quantityError").classList.remove("hidden");
    isFormValid = false;
  }

  if (form.location.value == "") {
    document.getElementById("locationError").classList.remove("hidden");
    isFormValid = false;
  }

  // if form is valid, do this
  if (isFormValid == true) {
    // form not displayed
    form.style.display = "none";
    // display confirmaion message
    confirmMsg.style.display = "block";
    // reset form to initial state
    form.reset();
  }

  return false;
}
