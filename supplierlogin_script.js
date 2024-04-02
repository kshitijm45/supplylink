let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("nametext");
let phonefield = document.getElementById("phonetext");
let emailfield = document.getElementById("emailtext");
let title = document.getElementById("title");
let homebtn = document.getElementById("home_button");
let enterbtn = document.getElementById("enter");

signinbtn.onclick = function () {
  namefield.style.display = "none";
  phonefield.style.display = "none";
  emailfield.style.display = "none";
  signinbtn.classList.remove("disable");
  signupbtn.classList.add("disable");
  title.innerHTML = "Sign In";
};

signupbtn.onclick = function () {
  namefield.style.display = "block";
  phonefield.style.display = "block";
  emailfield.style.display = "block";
  signinbtn.classList.add("disable");
  signupbtn.classList.remove("disable");
  title.innerHTML = "Sign Up";
};

homebtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

enterbtn.addEventListener("click", function () {
  window.location.href = "supplierlanding.html";
});
