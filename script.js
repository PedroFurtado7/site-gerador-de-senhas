let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let showPasswordElement = document.querySelector("#showPassword");

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
  password.value = pass;
  novaSenha = pass;
}

function copyPassword(){
  alert("Senha copiada com sucesso!")
  navigator.clipboard.writeText(novaSenha);
}

function togglePasswordVisibility() {
  let passwordInputType = password.getAttribute("type");
  if (passwordInputType === "password") {
    password.setAttribute("type", "text");
    showPasswordElement.classList.add("hide-password");
  } else {
    password.setAttribute("type", "password");
    showPasswordElement.classList.remove("hide-password");
  }
}


