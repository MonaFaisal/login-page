var form = document.getElementById("form");
var yourName = document.getElementById("yourName");
var yourPass = document.getElementById("yourPass");
var yourEmail = document.getElementById("yourEmail");
var regEmail =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/;
var regName = /\d+$/g;
var inputContainer = [];


if ((localStorage.getItem('inputs'))){
    inputContainer= JSON.parse(localStorage.getItem('inputs'));
    displayinputs(inputContainer)
}


function checkInput() {
  const email = yourEmail.value.trim();
  const pass = yourPass.value.trim();
  const nam = yourName.value.trim();
  const div = document.querySelector(".warning");
  const div2 = document.querySelector(".warning2");

  if (email === "" || !regEmail.test(yourEmail)) {
    div.classList.replace("d-none", "d-block");
  }
  if (pass == "") {
    div.classList.replace("d-none", "d-block");
  }
  if (pass.length < 6) {
    div.classList.replace("d-none", "d-block");
  } if (nam == "" || regName.test(nam)) {
    div2.classList.replace("d-none", "d-block");
} else{
    div.classList.replace("d-block", "d-none");

  }
}


function addInput() {
    var inputs = {
        email: yourEmail.value,
        pass:yourPass.value,
        nam: yourName.value,
    }
    inputContainer.push(inputs)
}