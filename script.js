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

function generatePassword(){
  let pass = '';
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  console.log(pass)
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword(){
  alert("Senha copiada com sucesso!")
  navigator.clipboard.writeText(novaSenha);
}

function togglePasswordVisibility() {
  var passwordElement = document.getElementById("password");
  var toggleButton = document.getElementById("toggle-button");

  if (passwordElement.classList.contains("hide")) {
    passwordElement.classList.remove("hide");
    toggleButton.textContent = "Ocultar senha";
  } else {
    passwordElement.classList.add("hide");
    toggleButton.textContent = "Mostrar senha";
  }
}

  console.log(pass)
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword(){
  alert("Senha copiada com sucesso!")
  navigator.clipboard.writeText(novaSenha);
}

function togglePasswordVisibility() {
  var passwordElement = document.getElementById("password");
  var toggleButton = document.getElementById("toggle-button");

  if (passwordElement.type === "password") {
    passwordElement.type = "text";
    toggleButton.textContent = "Ocultar senha";
  } else {
    passwordElement.type = "password";
    toggleButton.textContent = "Mostrar senha";
  }
}
