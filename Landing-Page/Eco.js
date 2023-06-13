const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.Login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-Popup');
const iconClose = document.querySelector('.icon-close');
// const toggleBtn = document.querySelector('toggle-btn')


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-Popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-Popup');
});




function logInValidation() {
    const loginMail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;

    if (loginMail == "") {
        alert('Enter Mail Id');
    }
    else if (loginMail== /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(loginMail)) {
        alert('Enter Correct Input Please');
    }

    if (loginPassword ==""){
        alert('Enter Password');
    }
    else if(loginPassword ==!loginPassword.length >12 || loginPassword.length< 6){
        alert('Enter password minimum 6 or maximum 12 ');
    }
}


String.prototype.isEmail = function () {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
  };

  function checkEmail(input) {
    if (!input.value.trim().isEmail()) {
      errorInput(input, `This is not an valid email address`);
    }
  }

function registerValidation(){
    const userName = document.getElementById('username').value;
    const mail = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('hi');
    if (userName ==""){
        alert("Enter Name Please")
    }
    else if(!userName==/^[A-Z][a-z][A-Za-z]+$/.test(userName)){
        alert("Enter Correct Input Please")
    }

    // if (mail ==""){
    //     alert('Enter Mail Id');
    // }
    // else if(mail==/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail)    ){
    //     alert('Enter Correct Input Please');
    // }

    if (password ==""){
        alert('Enter Password');
    }
    else if(password==!password.length >12 || password.length< 6){
        alert('Enter password minimum 6 or maximum 12 ');
    }
    else{
        alert('Success ');
    }


}

