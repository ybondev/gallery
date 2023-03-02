const username = document.querySelector(".username");
const password = document.querySelector(".password");
const btn = document.querySelector(".btn");

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
});

btn.addEventListener("click", function () {
  if (username.value === "systematic" && password.value === "password") {
    localStorage.setItem("status", "login");
    window.location.href = "gallery.html";
  } else {
    document.querySelector(".alert-danger").style.display = "block";
    setTimeout(() => {
      document.querySelector(".alert-danger").style.display = "none";
    }, 3000);
  }
});

document.getElementById("show-password").addEventListener("click", function () {
  if (document.getElementById("show-password").checked === true) {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
