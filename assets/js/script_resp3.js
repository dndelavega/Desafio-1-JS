const check = document.querySelector('#check');

function checkPassword() {
  let digit1 = document.getElementById("digito1").value;
  let digit2 = document.getElementById("digito2").value;
  let digit3 = document.getElementById("digito3").value;
  let password = digit1 + digit2 + digit3;
  let resultElement = document.getElementById("result");
  console.log(password)
  if (password === "911") {
    resultElement.innerHTML = "Password 1 correcto";
  } else if (password === "714") {
    resultElement.innerHTML = "Password 2 es correcto";
  } else {
    resultElement.innerHTML = "Password incorrecto";
  }
}

check.addEventListener("click", checkPassword);
