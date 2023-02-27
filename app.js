const btn = document.querySelector(".btn");

const defaultUsername = localStorage.setItem("username", "systematic");
const defaultPassword = localStorage.setItem("password", "password");

btn.addEventListener("click", function () {
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  if (
    username == localStorage.getItem("username") &&
    password == localStorage.getItem("password")
  ) {
    localStorage.setItem("status", "login");
    alert("success");
    window.location.href = "page2.html";
  } else {
    console.log("wrong");
  }
});