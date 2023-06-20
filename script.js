let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let passwordElement = document.querySelector("#password");
let copyButton = document.querySelector("#copy-button");
let showPasswordButton = document.querySelector("#show-password-button");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';

sliderElement.oninput = function() {
  let sizePassword = document.querySelector("#valor");
  sizePassword.innerHTML = this.value;
}

function generatePassword() {
  let pass = '';
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  console.log(pass);
  novaSenha = pass;
  passwordElement.innerHTML = pass;
  showPasswordButton.style.display = "inline-block";
  copyButton.style.display = "inline-block";
}

function copyPassword() {
  navigator.clipboard.writeText(novaSenha).then(function() {
    alert("Senha copiada com sucesso!");
  }).catch(function() {
    alert("Não foi possível copiar a senha.");
  });
}

function togglePasswordVisibility() {
  if (passwordElement.type === "password") {
    passwordElement.type = "text";
    showPasswordButton.innerHTML = "Ocultar senha";
  } else {
    passwordElement.type = "password";
    showPasswordButton.innerHTML = "Mostrar senha";
  }
}

showPasswordButton.addEventListener("click", togglePasswordVisibility);

