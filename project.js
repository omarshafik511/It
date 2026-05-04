function confirmpass(){
    let email = document.getElementsByClassName("email")[0].value
    let password = document.getElementsByClassName("pass")[0].value;
    let confirm = document.getElementsByClassName("confirm")[0].value;

    if(password !== confirm){
        document.getElementById("error").innerText = "Passwords do not match ";
        return false; 
    }

    localStorage.setItem("email",email);
    localStorage.setItem("password",password);

    location.href="login.html";
    return false;
}

function loginUser(){

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    let loginEmail = document.getElementsByClassName("loginEmail")[0].value;
    let loginPassword = document.getElementsByClassName("loginPassword")[0].value;

    if(loginEmail === savedEmail &&
       loginPassword === savedPassword){

       location.href = "index.html";  
    }
    else{
        document.getElementById("error2").innerText =
        "Wrong email or password ";
    }

    return false;
}