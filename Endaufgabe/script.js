"use strict";
//VARIABLEN WERDEN DEKLARIERT
let compOrder = []; //Array in der die vom Computer generierte Reihenfolge der aufleuchtenden Buttons gespeichert werden
let playerOrder = []; //Array in der die vom Spieler eingegebene Reihenfolge gespeichert wird
let flash; //Anzahl der aufleuchtenden Buttons
let turn; //Gibt an in welcher Runde sich der Spieler befindet
let mistake; //Gibt an ob der Nutzter Fehler macht (false) oder nicht (true)
let compTurn; //Gibt an ob der Computer an der Reihe ist oder nicht
let intervalId;
let noise = true; //Gibt an ob die Buttons einen Ton abspielen sollen oder nicht
let on = false; //Gibt an ob das Spiel an ist oder nicht
let win; //Gibt an ob der Spieler das Spiel gewonnen hat oder nicht
let buttonsounds = ["sounds/A.mp3", "sounds/C.mp3", "sounds/F.mp3", "sounds/G.mp3", "sounds/hihat.mp3", "sounds/winsound.mp3", "sounds/losesound.mp3"];
//Array für alle Sounds
//Booleans für die Schwierigkeitsgrade
let easychosen;
let mediumchosen;
let hardchosen;
let extremechosen;
//BUTTONSELEKTION
//Counter
const turnCounter = document.querySelector("#turn");
const message = document.querySelector("#message");
//Buttons
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const innerCircle = document.querySelector("#inner-circle");
//Schwierigkeitsgradbuttons
const diffEasy = document.querySelector("#difficultyeasy");
const diffmedium = document.querySelector("#difficultymedium");
const diffHard = document.querySelector("#difficultyhard");
const diffextreme = document.querySelector("#difficultyextreme");
//FUNKTIONEN FÜR DIE SCHWIERIGKEITSGRADE
var i;
//EINFACH
diffEasy.addEventListener("click", function () {
    diffEasy.style.boxShadow = "0px 0px 15px 3px white"; //Gibt dem gewählten Schwierigkeitsgrad einen Schatten
    diffmedium.style.boxShadow = "none"; //Entfernt gegebenfalls den Schatten vom Schwierigkeitsgrad, der nicht gewählt wurde
    diffHard.style.boxShadow = "none";
    diffextreme.style.boxShadow = "none";
    on = true; //Spiel läuft
    easychosen = true;
    mediumchosen = false;
    hardchosen = false;
    extremechosen = false;
    playeasy();
});
function playeasy() {
    win = false; //Alle Variablen werden erstmal zurückgesetzt, falls von vorherigen Runden noch die Reihenfolge gespeichert ist
    compOrder = []; //Array, in dem die Reihenfolge gespeichert wird, ist leer
    playerOrder = [];
    flash = 0; //Noch kein Button hat aufgeleuchtet
    intervalId = 0;
    turn = 1; //Erster Sound
    turnCounter.innerHTML = "1"; //Counter stellt sich auf 1
    mistake = true; //Spieler hat noch nichts falsches gedrückt
    for (i = 0; i < 5; i++) { //5 Zahlen werden erstellt
        compOrder.push(Math.floor(Math.random() * 5) + 1); //Erstellt eine zufällige Zahl zwischen eins und fünf und pusht diese Reihenfolge dann in das dafür vorgesehene Array
    }
    compTurn = true; //Computer startet und beginnt den Ton zu spielen
    intervalId = setInterval(gameTurn, 800); //Computer spielt einen Ton alle 800ms
}
//MITTEL
diffmedium.addEventListener("click", function () {
    diffEasy.style.boxShadow = "none";
    diffmedium.style.boxShadow = "0px 0px 15px 3px white"; //Schatten bei MEDIUM
    diffHard.style.boxShadow = "none";
    diffextreme.style.boxShadow = "none";
    on = true;
    easychosen = false;
    mediumchosen = true;
    hardchosen = false;
    extremechosen = false;
    playmedium();
});
function playmedium() {
    win = false;
    compOrder = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = "1";
    mistake = true;
    for (i = 0; i < 15; i++) { //15 Zahlen werden erstellt
        compOrder.push(Math.floor(Math.random() * 5) + 1);
    }
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
}
//SCHWER
diffHard.addEventListener("click", function () {
    diffEasy.style.boxShadow = "none";
    diffmedium.style.boxShadow = "none";
    diffHard.style.boxShadow = "0px 0px 15px 3px white"; //Schatten bei SCHWER
    diffextreme.style.boxShadow = "none";
    on = true;
    easychosen = false;
    mediumchosen = false;
    hardchosen = true;
    extremechosen = false;
    playhard();
});
function playhard() {
    win = false;
    compOrder = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = "1";
    mistake = true;
    for (i = 0; i < 25; i++) { //Es werden 25 Zahlen erstellt
        compOrder.push(Math.floor(Math.random() * 5) + 1);
    }
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
}
//HARDCORE
diffextreme.addEventListener("click", function () {
    diffEasy.style.boxShadow = "none";
    diffmedium.style.boxShadow = "none";
    diffHard.style.boxShadow = "none";
    diffextreme.style.boxShadow = "0px 0px 15px 3px white"; //Schatten bei HARDCORE
    on = true;
    easychosen = false;
    mediumchosen = false;
    hardchosen = false;
    extremechosen = true;
    playextreme();
});
function playextreme() {
    win = false;
    compOrder = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = "1";
    mistake = true;
    for (i = 0; i < 35; i++) { //35 Zahlen werden generiert
        compOrder.push(Math.floor(Math.random() * 5) + 1);
    }
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
}
function gameTurn() {
    on = false; //Spieler kann keine Buttons drücken
    if (flash == turn) { //Wenn die Anzahl der gespielten Töne mit der Runde übereinstimmt, ist der Computer fertig und der Spieler ist dran 
        clearInterval(intervalId); //Abspielen des Sounds stoppt
        compTurn = false; //Computer ist nicht mehr dran
        message.innerHTML = "WIEDERHOLE DEN SOUND!";
        on = true; //Jetzt kann der Spieler drücken
    }
    if (compTurn) { //Wenn der Computer noch nicht fertig ist
        message.innerHTML = "PASS AUF!";
        setTimeout(function () {
            if (compOrder[flash] == 1)
                topleftbutton(); //Wenn die erste Stelle im Array eins entspricht, wird Funktion 1 ausgeführt
            if (compOrder[flash] == 2)
                toprightbutton(); //Wenn die erste Stelle im Array zwei entspricht, wird Funktion 2 ausgeführt
            if (compOrder[flash] == 3)
                bottomleftbutton(); // -||-
            if (compOrder[flash] == 4)
                bottomrightbutton();
            if (compOrder[flash] == 5)
                innerbutton();
            flash++;
        }, 200); //Passiert nach 200ms
    }
}
//SOUND UND LICHT, WENN DER COMPUTER SIE ABSPIELT
function topleftbutton() {
    if (noise) {
        // Spielt den jeweiligen Sound ab
        let sound = new Audio(buttonsounds[0]);
        sound.play();
    }
    noise = true; //Wenn der Ton gespielt wird
    topLeft.style.backgroundColor = "white"; //leuchtet der Button
    setTimeout(() => {
        clearColor();
    }, 300);
}
function toprightbutton() {
    if (noise) {
        let sound = new Audio(buttonsounds[1]);
        sound.play();
    }
    noise = true;
    topRight.style.backgroundColor = "white";
    setTimeout(() => {
        clearColor();
    }, 300);
}
function bottomleftbutton() {
    if (noise) {
        let sound = new Audio(buttonsounds[2]);
        sound.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "white";
    setTimeout(() => {
        clearColor();
    }, 300);
}
function bottomrightbutton() {
    if (noise) {
        let sound = new Audio(buttonsounds[3]);
        sound.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "white";
    setTimeout(() => {
        clearColor();
    }, 300);
}
function innerbutton() {
    if (noise) {
        let sound = new Audio(buttonsounds[4]);
        sound.play();
    }
    noise = true;
    innerCircle.style.backgroundColor = "white";
    setTimeout(() => {
        clearColor();
    }, 300);
}
//Funktion für leuchtende Buttons
function flashColor() {
    topLeft.style.backgroundColor = "white";
    topRight.style.backgroundColor = "white";
    bottomLeft.style.backgroundColor = "white";
    bottomRight.style.backgroundColor = "white";
    innerCircle.style.backgroundColor = "white";
}
function clearColor() {
    topLeft.style.backgroundColor = "rgb(255, 181, 233)";
    topRight.style.backgroundColor = "rgb(139, 238, 238)";
    bottomLeft.style.backgroundColor = "rgb(205, 12, 217)";
    bottomRight.style.backgroundColor = "rgb(59, 127, 238)";
    innerCircle.style.backgroundColor = "rgb(235, 227, 142)";
}
//BUTTONS, WENN DER NUTZER SIE KLICKT
//Button oben links
topLeft.addEventListener("click", function () {
    if (on) { //und das Spiel an ist
        playerOrder.push(1); //dann wird die Buttonnummer ins Array der Spielerreihenfolge gepusht
        check(); //Vergleicht Eingabe mit der Reihenfolge des Computers
        topleftbutton(); //Licht und Ton vom Button wird aufgerufen
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
//Button oben rechts
topRight.addEventListener("click", function () {
    if (on) {
        playerOrder.push(2);
        check();
        toprightbutton();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
//Button unten links
bottomLeft.addEventListener("click", function () {
    if (on) {
        playerOrder.push(3);
        check();
        bottomleftbutton();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
//Button unten rechts
bottomRight.addEventListener("click", function () {
    if (on) {
        playerOrder.push(4);
        check();
        bottomrightbutton();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
//Button innen
innerCircle.addEventListener("click", function () {
    if (on) {
        playerOrder.push(5);
        check();
        innerbutton();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
//VERGLEICH VON COMPUTEREINGABE UND NUTZEREINGABE
function check() {
    if (playerOrder[playerOrder.length - 1] !== compOrder[playerOrder.length - 1]) //Computer vergleicht das Array mit der Reihenfolge des Computers mit dem Array der Spielereingabe
        mistake = false;
    if (playerOrder.length == 5 && mistake && easychosen) { //Wenn nach 5 Runden vom Nutzer alles richtig gedrückt wurde und EINFACH gewählt wurde, dann ist das Spiel gewonnen
        winGame(); //Spiel gewonnen für Level EINFACH
    }
    if (playerOrder.length == 15 && mistake && mediumchosen) {
        winGame(); //Spiel gewonnen für Level MITTEL
    }
    if (playerOrder.length == 25 && mistake && hardchosen) {
        winGame(); //Spiel gewonnen für Level SCHWER
    }
    if (playerOrder.length == 35 && mistake && extremechosen) {
        winGame(); //Spiel gewonnen für Level HARDCORE
    }
    if (mistake == false) { //Wenn der Spieler einen Fehler macht, also das Boolean falsch ist
        loseGame(); //wird die Verloren Funktion abgespielt
        noise = false; //Beim Aufleuchten der Buttons sollen keine Töne abgespielt werden
    }
    if (turn == playerOrder.length && mistake && !win) {
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800);
    }
}
//GEWINNEN
function winGame() {
    flashColor(); //Alle Buttons leuchten auf
    let sound = new Audio(buttonsounds[5]); //Sound wird abgespielt
    sound.play();
    message.innerHTML = "SPIEL GEWONNEN!"; //Nachricht wird angezeigt
    turnCounter.innerHTML = ":)"; //Nachricht wird im Counter angezeigt
    on = false; //Spiel schaltet sich aus, der Spieler kann keine Knöpfe mehr drücken
    win = true; //Spiel gewonnen
}
//VERLIEREN
function loseGame() {
    flashColor();
    let sound = new Audio(buttonsounds[6]);
    sound.play();
    message.innerHTML = "SPIEL VERLOREN!";
    turnCounter.innerHTML = ":(";
    on = false;
    win = false; //Spiel verloren
}
//Hilfe durch https://github.com/beaucarnes/simon-game
//# sourceMappingURL=script.js.map