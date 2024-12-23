let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
let produktyWKoszyku = 0;
let slideNumber = 0;

function dodajDoKoszyka(){
    produktyWKoszyku++;
    document.getElementById("koszyk").innerHTML ="Koszyk (" + String(produktyWKoszyku) + ")";
}

/*
function powiekszZdj(){
    this.nextSibling.nextSibling.style.display = "block";
}

function zmniejszZdj(){
    this.parentNode.style.display = "none";
}
*/

function slideShow(){
    let imgs = ["1.jpg","2.jpg","3.jpg","4.jpg","logo.png"];
    document.getElementById("logo").src = imgs[slideNumber++ % imgs.length];
}

function printTime(){
    let currDate = new Date();
    let div = document.getElementById("czas");
    div.innerHTML = String(currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds());
}

function checkEmail(elem){
    if (emailRegex.test(elem.value)){
        elem.style.backgroundColor = "green";
    } else {
        elem.style.backgroundColor = "red";
    }
}

function checkPassword(elem){
    if (elem.value.length >= 8 && passRegex.test(elem.value)){
        elem.style.backgroundColor = "green";
    } else {
        elem.style.backgroundColor = "red";
    }
}

function register(){
    document.getElementById("email").value = "";
    document.getElementById("pass1").value = "";
    document.getElementById("pass2").value = "";
}

function checkIfSamePasswords(elem){
    if (document.getElementById("pass1").value === document.getElementById("pass2").value && checkPassword(elem)){
        elem.style.backgroundColor = "green";
    } else {
        elem.style.backgroundColor = "red";
    }
}

function load(){
    /*
    let elements = document.getElementsByClassName("image-container");
    for (let element of elements){
        element.getElementsByTagName("img")[0].addEventListener("click", powiekszZdj);
        element.getElementsByClassName("info")[0].getElementsByTagName("img")[0].addEventListener("click", zmniejszZdj);
    }
    */
    let elements = document.getElementsByClassName("dish");
    for (let element of elements){
        element.getElementsByTagName("a")[0].addEventListener("click", dodajDoKoszyka);
    }
    
    setInterval(slideShow,5000);

    printTime();
    setInterval(printTime,1000);
}