let produktyWKoszyku = 0;
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
}