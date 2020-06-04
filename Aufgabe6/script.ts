//Emmissionswerte für Europa 
var emEU08: number = 4965.70;
var emEU18: number = 4209.3;

//Emmissionswerte für Asien
var emAS08: number = 12954.7;
var emAS18: number = 16274.1;

//Emmissionswerte für Australien
var emAU08: number = 1993;
var emAU18: number = 2100.5;

//Emmissionswerte für Afrika
var emAF08: number = 1028;
var emAF18: number = 1235.5;

//Emmissionswerte für Nordamerika
var emNA08: number = 6600.4;
var emNA18: number = 6035.6;

//Emmissionswerte für Südamerika
var emSA08: number = 1132.6;
var emSA18: number = 1261.5;

//Gesamtemission Welt 

var welt: number = (emEU18 + emAS18 + emAU18 + emAF18 + emNA18 + emSA18);

//Europa 
function EUanklicken () {
    var emEu: string = emEU18.toString();
    var relWEU: number = Math.round(((emEU18 / welt) * 100));
    var relWEu: string = relWEU.toString();
    var wrEU: number = Math.abs(Math.round(((1 - (emEU18 / emEU08)) * 100)));
    var wrEu: string = wrEU.toString();
    var wEU: number = Math.round((emEU18 - emEU08));
    var wEu: string = wEU.toString();
    document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in Europe:";
    document.getElementById("emissionsrate").innerHTML = emEu + "kg";  
    document.getElementById("relWelt").innerHTML = relWEu + "%";
    document.getElementById("wachstumsrate").innerHTML = wrEu + "%" ;
    document.getElementById("wachstum").innerHTML = wEu + "kg";
    document.querySelector(".chart").setAttribute("style", "height:" + relWEU + "px");
}

//Nordamerika 
function NAanklicken () {
    var emNa: string = emNA18.toString();
    var relWNA: number = Math.round(((emNA18 / welt) * 100));
    var relWNa: string = relWNA.toString();
    var wrNA: number = Math.abs(Math.round(((1 - (emNA18 / emNA08)) * 100)));
    var wrNa: string = wrNA.toString();
    var wNA: number = Math.round((emNA18 - emNA08));
    var wNa: string = wNA.toString();
    document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in North America:";
    document.getElementById("emissionsrate").innerHTML = emNa + "kg";  
    document.getElementById("relWelt").innerHTML = relWNa + "%";
    document.getElementById("wachstumsrate").innerHTML = wrNa + "%" ;
    document.getElementById("wachstum").innerHTML = wNa + "kg";
    document.querySelector(".chart").setAttribute("style", "height:" + relWNA + "px");
}

//Südamerika
function SAanklicken () {
    var emSa: string = emSA18.toString();
    var relWSA: number = Math.round(((emSA18 / welt) * 100));
    var relWSa: string = relWSA.toString();
    var wrSA: number = Math.abs(Math.round(((1 - (emSA18 / emSA08)) * 100)));
    var wrSa: string = wrSA.toString();
    var wSA: number = Math.round((emSA18 - emSA08));
    var wSa: string = wSA.toString();
    document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in South America:";
    document.getElementById("emissionsrate").innerHTML = emSa + "kg";  
    document.getElementById("relWelt").innerHTML = relWSa + "%";
    document.getElementById("wachstumsrate").innerHTML = wrSa + "%" ;
    document.getElementById("wachstum").innerHTML = "+" + wSa + "kg";
    document.querySelector(".chart").setAttribute("style", "height:" + relWSA + "px");
}

//Afrika
function AFanklicken () {
    var emAf: string = emAF18.toString();
    var relWAF: number = Math.round(((emAF18 / welt) * 100));
    var relWAf: string = relWAF.toString();
    var wrAF: number = Math.abs(Math.round(((1 - (emAF18 / emAF08)) * 100)));
    var wrAf: string = wrAF.toString();
    var wAF: number = Math.round((emAF18 - emAF08));
    var wAf: string = wAF.toString();
    document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in Africa:";
    document.getElementById("emissionsrate").innerHTML = emAf + "kg";  
    document.getElementById("relWelt").innerHTML = relWAf + "%";
    document.getElementById("wachstumsrate").innerHTML = wrAf + "%" ;
    document.getElementById("wachstum").innerHTML = "+" + wAf + "kg";
    document.querySelector(".chart").setAttribute("style", "height:" + relWAF + "px");
}

//Asien
function ASanklicken () {
    var emAs: string = emAS18.toString();
    var relWAS: number = Math.round(((emAS18 / welt) * 100));
    var relWAs: string = relWAS.toString();
    var wrAS: number = Math.abs(Math.round(((1 - (emAS18 / emAS08)) * 100)));
    var wrAs: string = wrAS.toString();
    var wAS: number = Math.round((emAS18 - emAS08));
    var wAs: string = wAS.toString();
    document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in Asia:";
    document.getElementById("emissionsrate").innerHTML = emAs + "kg";  
    document.getElementById("relWelt").innerHTML = relWAs + "%";
    document.getElementById("wachstumsrate").innerHTML = wrAs + "%" ;
    document.getElementById("wachstum").innerHTML = "+" + wAs + "kg";
    document.querySelector(".chart").setAttribute("style", "height:" + relWAS + "px");
}

//Australien

function AUanklicken () {
    var emAu: string = emAU18.toString();
    var relWAU: number = Math.round(((emAU18 / welt) * 100));
    var relWAu: string = relWAU.toString();
    var wrAU: number = Math.abs(Math.round(((1 - (emAU18 / emAU08)) * 100)));
    var wrAu: string = wrAU.toString();
    var wAU: number = Math.round((emAU18 - emAU08));
    var wAu: string = wAU.toString();
    document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in Australia:";
    document.getElementById("emissionsrate").innerHTML = emAu + "kg";  
    document.getElementById("relWelt").innerHTML = relWAu + "%";
    document.getElementById("wachstumsrate").innerHTML = wrAu + "%" ;
    document.getElementById("wachstum").innerHTML = "+" + wAu + "kg";
    document.querySelector(".chart").setAttribute("style", "height:" + relWAU + "px");
}
window.addEventListener("load", function() {

    document.getElementById("EU").addEventListener("click", EUanklicken);
    document.getElementById("NA").addEventListener("click", NAanklicken);
    document.getElementById("SA").addEventListener("click", SAanklicken);
    document.getElementById("AF").addEventListener("click", AFanklicken);
    document.getElementById("AS").addEventListener("click", ASanklicken);
    document.getElementById("AU").addEventListener("click", AUanklicken);
});