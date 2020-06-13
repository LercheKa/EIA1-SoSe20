// Aufgabe 7.1

var sounds: HTMLAudioElement [] = [];
        sounds.push (new Audio ("assets/A.mp3"));
        sounds.push (new Audio ("assets/C.mp3"));
        sounds.push (new Audio ("assets/F.mp3"));
        sounds.push (new Audio ("assets/G.mp3"));
        sounds.push (new Audio ("assets/hihat.mp3"));
        sounds.push (new Audio ("assets/kick.mp3"));
        sounds.push (new Audio ("assets/laugh-1.mp3"));
        sounds.push (new Audio ("assets/laugh-2.mp3"));
        sounds.push (new Audio ("assets/snare.mp3"));

function playSample(samplenumber: number): void {
    sounds[samplenumber].play();
}

window.addEventListener("load", function() {
    document.querySelector("#b1").addEventListener("click", function() { playSample(0); });
    document.querySelector("#b2").addEventListener("click", function() { playSample(1); });
    document.querySelector("#b3").addEventListener("click", function() { playSample(2); });
    document.querySelector("#b4").addEventListener("click", function() { playSample(3); });
    document.querySelector("#b5").addEventListener("click", function() { playSample(4); });
    document.querySelector("#b6").addEventListener("click", function() { playSample(5); });
    document.querySelector("#b7").addEventListener("click", function() { playSample(6); });
    document.querySelector("#b8").addEventListener("click", function() { playSample(7); });
    document.querySelector("#b9").addEventListener("click", function() { playSample(8); });


// Aufgabe 7.2

function drumpadbeat() {
    setInterval(function() {
        playSample(5); 
        playSample(7); 
        playSample(8)
    }, 500);
}


document.querySelector("img").addEventListener('click', drumpadbeat);

})