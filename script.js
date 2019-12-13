function generatePassword() {

    let slider = document.getElementById("slider").value;

    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    let password = "";

    for (var i = 0; i <= slider; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    document.getElementById("display").value = password;
}

function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to Clipboard!");
}

