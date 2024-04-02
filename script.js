let homebtn = document.getElementById("home_button");
let custbtn = document.getElementById("customer_button");
let supbtn = document.getElementById("supplier_button");

homebtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

custbtn.addEventListener("click", function () {
  window.location.href = "customerlogin.html";
});

supbtn.addEventListener("click", function () {
  window.location.href = "supplierlogin.html";
});
