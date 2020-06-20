var s1: HTMLAudioElement = new Audio("assets/A.mp3");
var s2: HTMLAudioElement = new Audio("assets/C.mp3");
var s3: HTMLAudioElement = new Audio("assets/F.mp3");
var s4: HTMLAudioElement = new Audio("assets/G.mp3");
var s5: HTMLAudioElement = new Audio("assets/hihat.mp3");
var s6: HTMLAudioElement = new Audio("assets/kick.mp3");
var s7: HTMLAudioElement = new Audio("assets/laugh-1.mp3");
var s8: HTMLAudioElement = new Audio("assets/laugh-2.mp3");
var s9: HTMLAudioElement = new Audio("assets/snare.mp3");

var sound: HTMLAudioElement [] = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
var beatsArray: Number [] = [1, 3, 4];
var clicked: boolean = false;

function playsample (z: number) {
sound[z].play();
}

function beat (arrayname) {   
    var i: number;
    var l = arrayname.length;
    for (i = 0; i < l; i++) {
        playsample(arrayname[i]);
    }
}

function record() {
   
    if (clicked === true){
        document.getElementById("b1").addEventListener("click", function() {beatsArray.push(0); });
        document.getElementById("b2").addEventListener("click", function() {beatsArray.push(1); });
        document.getElementById("b3").addEventListener("click", function() {beatsArray.push(2); });
        document.getElementById("b4").addEventListener("click", function() {beatsArray.push(3); });
        document.getElementById("b5").addEventListener("click", function() {beatsArray.push(4); });
        document.getElementById("b6").addEventListener("click", function() {beatsArray.push(5); });
        document.getElementById("b7").addEventListener("click", function() {beatsArray.push(6); });
        document.getElementById("b8").addEventListener("click", function() {beatsArray.push(7); });
        document.getElementById("b9").addEventListener("click", function() {beatsArray.push(8); });
    }  else if (clicked === false) {return; }
    
}

window.addEventListener("load", function() {
   
    //Pad
    document.getElementById("b1").addEventListener("click", function() {playsample(0); });
    document.getElementById("b2").addEventListener("click", function() {playsample(1); });
    document.getElementById("b3").addEventListener("click", function() {playsample(2); });
    document.getElementById("b4").addEventListener("click", function() {playsample(3); });
    document.getElementById("b5").addEventListener("click", function() {playsample(4); });
    document.getElementById("b6").addEventListener("click", function() {playsample(5); });
    document.getElementById("b7").addEventListener("click", function() {playsample(6); });
    document.getElementById("b8").addEventListener("click", function() {playsample(7); });
    document.getElementById("b9").addEventListener("click", function() {playsample(8); });
    //Clear
    document.getElementById("cb").addEventListener("click", function() {beatsArray = []; });
    //Play-Pause
    document.getElementById("pb").addEventListener("click", function() {document.getElementById("pb").classList.add("hidden"); });
    document.getElementById("pb").addEventListener("click", function() {document.getElementById("pb").classList.remove("buttons"); });
    document.getElementById("pb").addEventListener("click", function() {document.getElementById("sb").classList.add("buttons"); });
    document.getElementById("pb").addEventListener("click", function() {document.getElementById("sb").classList.remove("hidden"); });
    document.getElementById("sb").addEventListener("click", function() {document.getElementById("pb").classList.add("buttons"); });
    document.getElementById("sb").addEventListener("click", function() {document.getElementById("sb").classList.remove("buttons"); });
    document.getElementById("sb").addEventListener("click", function() {document.getElementById("sb").classList.add("hidden"); });
    document.getElementById("sb").addEventListener("click", function() {document.getElementById("pb").classList.remove("hidden"); });
    //Beat
    var loop: any;
    document.getElementById("pb").addEventListener("click", function() {loop = setInterval(function() {beat(beatsArray); }, 500); });
    document.getElementById("sb").addEventListener("click", function() {clearInterval(loop); });
    //Record
    document.getElementById("rb").addEventListener("click", function() {clicked = true; }​);​
    document.getElementById("pb").addEventListener("click", function() {clicked = false; }​);
    document.getElementById("rb").addEventListener("click", record);
    
});