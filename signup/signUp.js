var username = document.forms["vform"]["username"];
var email = document.forms["vform"]["email"];
var password = document.forms["vform"]["password"];
var password_confirmation = document.forms["vform"]["password2"];

var name_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");

username.addEventListener("blur", nameVerify, true);
email.addEventListener("blur", emailVerify, true);
password.addEventListener("blur", passwordVerify, true);

function Validate(){
  if (username.value == ""){
    username.style.border = "1px solid red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  if (email.value == ""){
    email.style.border = "1px solid red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }
  if (password.value == ""){
    password.style.border = "1px solid red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }

  if (password.value != password_confirmation.value){
    password.style.border = "1px solid red";
    password_confirmation.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }
}

function nameVerify(){
  if (username.value !=""){
    username.style.border = "1px solid #5e6e66";
    name_error.innerHTML = "";
    return true;
  }
}
function emailVerify(){
  if (email.value !=""){
    email.style.border = "1px solid #5e6e66";
    email_error.innerHTML = "";
    return true;
  }
}
function passwordVerify(){
  if (password.value !=""){
    password.style.border = "1px solid #5e6e66";
    password_error.innerHTML = "";
    return true;
  }
}