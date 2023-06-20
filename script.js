let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
  sizePassword.innerHTML = this.value;
}

function generatePassword() {
  let pass = '';
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  console.log(pass);
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(novaSenha);
}

function togglePasswordVisibility() {
  let passwordField = document.querySelector("#password");
  let tooltip = document.querySelector(".tooltip");
  let isPasswordVisible = passwordField.getAttribute("type") === "text";

  if (isPasswordVisible) {
    passwordField.setAttribute("type", "password");
    tooltip.innerHTML = "Clique na senha para mostrar. 👆";
  } else {
    passwordField.setAttribute("type", "text");
    tooltip.innerHTML = "Clique na senha para ocultar. 👆";
  }
}

// Adicionar evento de clique no campo de senha para alternar a visibilidade
password.addEventListener("click", togglePasswordVisibility);
