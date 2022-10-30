const form = document.querySelector("form");
let checkBox = document.querySelector(".form-check-input");
const signUpBtn = document.querySelector(".btn");
let userName = document.getElementById("form3Example1c");
const email = document.getElementById("form3Example2c");
let password = document.getElementById("form3Example4c");
let repeatPassword = document.getElementById("form3Example4cd");
const successMessage = document.getElementById("error-msg");

// defining regex for each input field
const inp_field = {
    username: /^[a-z\d]{5,12}$/i, /* 5 to 12 characters that are lower-case letters or digits. */
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/, /*lower-case letters, hyphens, dots or digits with one or more characters indicated by the +. @ symbol follows domain name should contain one or more lower-case characters, digits or hyphens dot follows.The first extension contains 2 to 8 characters. The second is optional, indicated by ?. */
    password: /^[#\w@_-]{8,20}$/, //The password contains any word character \w (letters and digits). # _ - @ are also supported, length should be 8-20 chars.
}

// click event pn register btn
signUpBtn.addEventListener("click", ()=>{
    if(checkBox.checked){
        if (!inp_field.username.test(userName.value)) {
            return alert("Username must contain 5 to 12 characters lower-case letters or digits.");
        }
        if(!inp_field.email.test(email.value)){
            return alert("Enter valid email");
        }
        if(password.value == repeatPassword.value){
            if (inp_field.password.test(password.value)) {
                successMessage.innerHTML = "Account Sucessfully Registered";
                form.reset();
            } else {
                alert("Password should be at least 8 characters long");
            }
        }
        else{ 
            alert("Password not Matched !")
        }
    }else{
        alert("Please Check Terms & Conditions.");
    }
})