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
  password.value = pass; // Altera o valor do campo de senha

  novaSenha = pass;
}

function copyPassword() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(novaSenha);
}

function togglePasswordVisibility() {
  let passwordField = document.querySelector("#password");
  let passwordVisibilityButton = document.querySelector("#password-visibility");

  if (passwordField.getAttribute("type") === "password") {
    passwordField.setAttribute("type", "text");
    passwordVisibilityButton.innerHTML = "Ocultar senha"; // Altera o texto do botão para "Ocultar senha"
  } else {
    passwordField.setAttribute("type", "password");
    passwordVisibilityButton.innerHTML = "Mostrar senha"; // Altera o texto do botão para "Mostrar senha"
  }
}

// Adicionar evento de clique no botão de ocultar/mostrar senha
let passwordVisibilityButton = document.createElement("button");
passwordVisibilityButton.id = "password-visibility";
passwordVisibilityButton.innerHTML = "Mostrar senha"; // Define o texto inicial do botão como "Mostrar senha"
passwordVisibilityButton.onclick = togglePasswordVisibility;

containerPassword.appendChild(passwordVisibilityButton);
