"use strict";
//Emmissionswerte für Europa 
var emEU08 = 4965.70;
var emEU18 = 4209.3;
//Emmissionswerte für Asien
var emAS08 = 12954.7;
var emAS18 = 16274.1;
//Emmissionswerte für Australien
var emAU08 = 1993;
var emAU18 = 2100.5;
//Emmissionswerte für Afrika
var emAF08 = 1028;
var emAF18 = 1235.5;
//Emmissionswerte für Nordamerika
var emNA08 = 6600.4;
var emNA18 = 6035.6;
//Emmissionswerte für Südamerika
var emSA08 = 1132.6;
var emSA18 = 1261.5;
//Gesamtemission Welt 
var welt = (emEU18 + emAS18 + emAU18 + emAF18 + emNA18 + emSA18);
//Europa 
function EUanklicken() {
    var emEu = emEU18.toString();
    var relWEU = Math.round(((emEU18 / welt) * 100));
    var relWEu = relWEU.toString();
    var wrEU = Math.abs(Math.round(((1 - (emEU18 / emEU08)) * 100)));
    var wrEu = wrEU.toString();
    var wEU = Math.round((emEU18 - emEU08));
    var wEu = wEU.toString();
    document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in Europe:";
    document.getElementById("emissionsrate").innerHTML = emEu + "kg";
    document.getElementById("relWelt").innerHTML = relWEu + "%";
    document.getElementById("wachstumsrate").innerHTML = wrEu + "%";
    document.getElementById("wachstum").innerHTML = wEu + "kg";
    document.querySelector(".chart").setAttribute("style", "height:" + relWEU + "px");
}
//Nordamerika 
function NAanklicken() {
    var emNa = emNA18.toString();
    var relWNA = Math.round(((emNA18 / welt) * 100));
    var relWNa = relWNA.toString();
    var wrNA = Math.abs(Math.round(((1 - (emNA18 / emNA08)) * 100)));
    var wrNa = wrNA.toString();
    var wNA = Math.round((emNA18 - emNA08));
    var wNa = wNA.toString();
    document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in North America:";
    document.getElementById("emissionsrate").innerHTML = emNa + "kg";
    document.getElementById("relWelt").innerHTML = relWNa + "%";
    document.getElementById("wachstumsrate").innerHTML = wrNa + "%";
    document.getElementById("wachstum").innerHTML = wNa + "kg";
    document.querySelector(".chart").setAttribute("style", "height:" + relWNA + "px");
}
//Südamerika
function SAanklicken() {
    var emSa = emSA18.toString();
    var relWSA = Math.round(((emSA18 / welt) * 100));
    var relWSa = relWSA.toString();
    var wrSA = Math.abs(Math.round(((1 - (emSA18 / emSA08)) * 100)));
    var wrSa = wrSA.toString();
    var wSA = Math.round((emSA18 - emSA08));
    var wSa = wSA.toString();
    document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in South America:";
    document.getElementById("emissionsrate").innerHTML = emSa + "kg";
    document.getElementById("relWelt").innerHTML = relWSa + "%";
    document.getElementById("wachstumsrate").innerHTML = wrSa + "%";
    document.getElementById("wachstum").innerHTML = "+" + wSa + "kg";
    document.querySelector(".chart").setAttribute("style", "height:" + relWSA + "px");
}
//Afrika
function AFanklicken() {
    var emAf = emAF18.toString();
    var relWAF = Math.round(((emAF18 / welt) * 100));
    var relWAf = relWAF.toString();
    var wrAF = Math.abs(Math.round(((1 - (emAF18 / emAF08)) * 100)));
    var wrAf = wrAF.toString();
    var wAF = Math.round((emAF18 - emAF08));
    var wAf = wAF.toString();
    document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in Africa:";
    document.getElementById("emissionsrate").innerHTML = emAf + "kg";
    document.getElementById("relWelt").innerHTML = relWAf + "%";
    document.getElementById("wachstumsrate").innerHTML = wrAf + "%";
    document.getElementById("wachstum").innerHTML = "+" + wAf + "kg";
    document.querySelector(".chart").setAttribute("style", "height:" + relWAF + "px");
}
//Asien
function ASanklicken() {
    var emAs = emAS18.toString();
    var relWAS = Math.round(((emAS18 / welt) * 100));
    var relWAs = relWAS.toString();
    var wrAS = Math.abs(Math.round(((1 - (emAS18 / emAS08)) * 100)));
    var wrAs = wrAS.toString();
    var wAS = Math.round((emAS18 - emAS08));
    var wAs = wAS.toString();
    document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in Asia:";
    document.getElementById("emissionsrate").innerHTML = emAs + "kg";
    document.getElementById("relWelt").innerHTML = relWAs + "%";
    document.getElementById("wachstumsrate").innerHTML = wrAs + "%";
    document.getElementById("wachstum").innerHTML = "+" + wAs + "kg";
    document.querySelector(".chart").setAttribute("style", "height:" + relWAS + "px");
}
//Australien
function AUanklicken() {
    var emAu = emAU18.toString();
    var relWAU = Math.round(((emAU18 / welt) * 100));
    var relWAu = relWAU.toString();
    var wrAU = Math.abs(Math.round(((1 - (emAU18 / emAU08)) * 100)));
    var wrAu = wrAU.toString();
    var wAU = Math.round((emAU18 - emAU08));
    var wAu = wAU.toString();
    document.getElementById("heading").innerHTML = "Carbon Dioxide Emissions in Australia:";
    document.getElementById("emissionsrate").innerHTML = emAu + "kg";
    document.getElementById("relWelt").innerHTML = relWAu + "%";
    document.getElementById("wachstumsrate").innerHTML = wrAu + "%";
    document.getElementById("wachstum").innerHTML = "+" + wAu + "kg";
    document.querySelector(".chart").setAttribute("style", "height:" + relWAU + "px");
}
window.addEventListener("load", function () {
    document.getElementById("EU").addEventListener("click", EUanklicken);
    document.getElementById("NA").addEventListener("click", NAanklicken);
    document.getElementById("SA").addEventListener("click", SAanklicken);
    document.getElementById("AF").addEventListener("click", AFanklicken);
    document.getElementById("AS").addEventListener("click", ASanklicken);
    document.getElementById("AU").addEventListener("click", AUanklicken);
});
//# sourceMappingURL=script.js.map