let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("nametext");
let cityfield = document.getElementById("citytext");
let zipfield = document.getElementById("ziptext");
let title = document.getElementById("title");
let homebtn = document.getElementById("home_button");
let enterbtn = document.getElementById("enter");

signinbtn.onclick = function () {
  namefield.style.display = "none";
  cityfield.style.display = "none";
  zipfield.style.display = "none";
  signinbtn.classList.remove("disable");
  signupbtn.classList.add("disable");
  title.innerHTML = "Sign In";
};

signupbtn.onclick = function () {
  namefield.style.display = "block";
  cityfield.style.display = "block";
  zipfield.style.display = "block";
  signinbtn.classList.add("disable");
  signupbtn.classList.remove("disable");
  title.innerHTML = "Sign Up";
};

homebtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

enterbtn.addEventListener("click", function () {
  window.location.href = "customerlanding.html";
});
