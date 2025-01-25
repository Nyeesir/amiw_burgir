let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
let produktyWKoszyku = 0;
let slideNumber = 0;

function dodajDoKoszyka(){
    //funkcja zwiększająca liczbę produktów w koszyku i wyświetlająca ją w elemencie o id:koszyk
    
    produktyWKoszyku++;
    document.getElementById("koszyk").innerHTML ="Koszyk (" + String(produktyWKoszyku) + ")";
}

/*
function powiekszZdj(){
    //funkcja ujawniająca powiększony obrazek potrawy po naciśnięciu na obrazek przy pozycji w menu
    
    this.nextSibling.nextSibling.style.display = "block";
}

function zmniejszZdj(){
    //funkcja ukrywająca blok z powiększonym obrazkiem potrway i opisem
    
    this.parentNode.style.display = "none";
}
*/

function slideShow(){
    //funkcja inkrementuje licznik slajdu slideNumber
    //następnie element o id:logo podmieniany jest przez odpowiedni obrazek w tablicy
    //elementy z tablicy wybierane są na podstawie slideNumber modulo długość tablicy
    
    let imgs = ["1.jpg","2.jpg","3.jpg","4.jpg","logo.png"];
    document.getElementById("logo").src = imgs[slideNumber++ % imgs.length];
}

function printTime(){
    //Funkcja pobiera obecną datę i godzinę, następnie do diva o id:czas wpisuje obecną godzinę, minutę i sekundę
    
    let currDate = new Date();
    let div = document.getElementById("czas");
    div.innerHTML = String(currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds());
}

function checkEmail(elem){
    //funkcja sprawdza czy atrybut value przkazanego elementu spełnia wymagania regexa
    if (emailRegex.test(elem.value)){
        //jeżeli tak to zmienia tło elementu na zielony
        elem.style.backgroundColor = "green";
    } else {
        //jeżeli nie to zmienia tło elementu na czerwony
        elem.style.backgroundColor = "red";
    }
}

function checkPassword(elem){
    //funkcja sprawdza czy atrybut value przekazanego elementu spełnia wymagania
    //regexa i posiada długość przynajmniej 8 znaków
    if (elem.value.length >= 8 && passRegex.test(elem.value)){
        //jeżeli tak to zmienia tło elementu na zielony
        elem.style.backgroundColor = "green";
    } else {
        //jeżeli nie to zmienia tło elementu na czerwony
        elem.style.backgroundColor = "red";
    }
}

function register(){
    //funkcja czyści pola formularza po jego zatwierdzeniu
    document.getElementById("email").value = "";
    document.getElementById("pass1").value = "";
    document.getElementById("pass2").value = "";
}

function checkIfSamePasswords(elem){
    //funkcja sprawdza czy wartości obydwu pól z hasłem jest taka sama
    //i czy spełnia odpowiednia kryteria
    if (document.getElementById("pass1").value === document.getElementById("pass2").value && checkPassword(elem)){
        //jeżeli tak to zmienia tło elementu na zielony
        elem.style.backgroundColor = "green";
    } else {
        //jeżeli nie to zmienia tło elementu na czerwony
        elem.style.backgroundColor = "red";
    }
}

function load(){
    //funkcja wywoływana jest po załadowaniu strony i uruchamia wszystkie potrzebne mechanizmy
    
    /*
    //funkcja pobiera wszystkie elementy o klasie:image-container
    let elements = document.getElementsByClassName("image-container");
    for (let element of elements){
        //dla każdego z elementów dodawany zostaje EventListener.
        //Sprawia on że kliknięcie w obrazek przy pozycji menu wywoła funkcję powiekszZdj()
        //a kliknięcie w powiękoszny obrazek wywoła funkcjE zmniejszZdj()
        element.getElementsByTagName("img")[0].addEventListener("click", powiekszZdj);
        element.getElementsByClassName("info")[0].getElementsByTagName("img")[0].addEventListener("click", zmniejszZdj);
    }
    */
    
    //funkcja pobiera wszystkie elementy z klasie:dish
    let elements = document.getElementsByClassName("dish");
    for (let element of elements){
        //dla każdego z elementów dodawany zostaje EventListener.
        //Po kliknięciu w tag 'a' znajdujący się w danym elemencie, zostaje wywołana funkcja dodajDokoszyka()
        element.getElementsByTagName("a")[0].addEventListener("click", dodajDoKoszyka);
    }
    
    //ustawiamy wywołanie funkcji slideShow(), czyli wyświetlenie następnego obrazu w kolejce co 5 sekund.
    setInterval(slideShow,5000);

    //wyświetlamy obecny czas
    printTime();
    //ustawiamy aktualizację czasu co 1 sekundę.
    setInterval(printTime,1000);
}