function atError(message) {
  var errorBox = document.querySelector(".alert");
  errorBox.classList.contains("d-none") && errorBox.classList.toggle("d-none");
  errorBox.innerHTML += "<p>" + message + "</p>";
}
const validate = e => {
  e.preventDefault();
  var errorBox = document.querySelector(".alert");
  !errorBox.classList.contains("d-none") && errorBox.classList.toggle("d-none");
  errorBox.innerHTML = "";
  document.querySelectorAll("input").forEach(function(items) {
    items.classList.remove("is-invalid");
  });
  document.querySelector("#exampleState").classList.remove("is-invalid");
  var accField = document.querySelector("#exampleAccount");
  var ccvCode = document.querySelector("#exampleCvc");
  var amt = document.querySelector("#exampleAmount");
  var cit = document.querySelector("#exampleCity");
  var ste = document.querySelector("#exampleState");
  var zip = document.querySelector("#exampleZip");
  var firstN = document.querySelector("#exampleFirst");
  var lastN = document.querySelector("#exampleLast");
  if (accField.value.length < 16) {
    atError("Credit card number needs to be 16 digits");
    accField.classList.add("is-invalid");
  }
  if (ccvCode.value.length < 3) {
    atError("CCV should be at least 3 digits");
    ccvCode.classList.add("is-invalid");
  }
  if (amt.value <= 0) {
    atError("Put in amount");
    amt.classList.add("is-invalid");
  }
  if (cit.value.length < 2) {
    atError("Enter City");
    cit.classList.add("is-invalid");
  }
  if (ste.value === "Choose...") {
    atError("Select State");
    ste.classList.add("is-invalid");
  }
  if (zip.value.length < 5) {
    atError("Postal code should be five digits");
    zip.classList.add("is-invalid");
  }
  if (firstN.value.length < 2) {
    atError("Enter First Name");
    firstN.classList.add("is-invalid");
  }
  if (lastN.value.length < 2) {
    atError("Enter Last Name");
    lastN.classList.add("is-invalid");
  }
};
document.querySelector("#theForm").addEventListener("submit", validate);

// import { doc } from "prettier";

// function atError
// errorBox.innerHTML = "<p>" + message + "</p>";

// const validate = (e) => {
//     e.preventDefault();
//     var errorBox = document.querySelector("alert");
//     !errorBox.classList.contains("d-non") && errorBox.classList.toggle("d-non");
//     errorBox.innerHTML = ""

//     var accField = document.querySelector("#exampleAccount")
//     var ccvCode = document.querySelector("#exampleCcv")
//     var atm = document.querySelector("#exampleAmount")
//     var cit = document.querySelector("#exampleCity")
//     var ste = document.querySelector("#exampleState")
//     var zip = document.querySelector("#exampleZip")
//     var firstN = document.querySelector("#exampleFirst")
//     var lastN = document.querySelector("#exampleLast")

//     if (accField.value<1000000000000000){
//         atError("Credit card needs to be 16 digits")
//         accField.classList.add("is-invalid")
//     }
//     if (ccvCode.value.length<3){
//         atError("ccv should be at least three digits")
//         ccvCode.classList.add("is-invalid")
//     };
//     if (atm.value<=0){
//         atError("put in amount")
//         atm.classList.add("is-invalid")
//     }
//     if (cit.value.length<2){
//         atError("enter city")
//         cit.classList.add("is-invalid")
//     }
//     if (ste.value==="Pick a state"){
//         atError("Select a state")
//         ste.classList.add("is-invalid")
//     }
//     if (zip.value.length<5){
//         atError("postal code should be 5 digits")
//         zip.classList.add("is-invalid")
//     }
//     if (firstN.value.length<2){
//         atError("Enter First Name")
//         firstN.classList.add("is-invalid")
//     }
//     if (lastN.value.length<2){
//         atError("Enter Last Name")
//         lastN.classList.add("is-invalid")
//     }

// };

// document.querySelector("theForm").addEventListener("submit",validate);
