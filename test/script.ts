var af08: number = 1028;
var af18: number = 1235.5;
var sa08: number = 1132.6;
var sa18: number = 1261.5;
var eu08: number = 4965.7;
var eu18: number = 4209.3;
var na08: number = 6600.4;
var na18: number = 6035.6;
var as08: number = 12954.7;
var as18: number = 16274.1;
var au08: number = 1993;
var au18: number = 2100.5;

var gesamt: number = af18 + sa18 + eu18 + na18 + as18 + au18;
var afReGe: number = (af18 / gesamt) * 100;
var saReGe: number = (sa18 / gesamt) * 100;
var euReGe: number = (eu18 / gesamt) * 100;
var naReGe: number = (na18 / gesamt) * 100;
var asReGe: number = (as18 / gesamt) * 100;
var auReGe: number = (au18 / gesamt) * 100;

var afV08: number = ((af18 - af08) / af08 * 100)  / 10;
var saV08: number = ((sa18 - sa08) / sa08 * 100)  / 10;
var euV08: number = ((eu18 - eu08) / eu08 * 100)  / 10;
var naV08: number = ((na18 - na08) / na08 * 100)  / 10;
var asV08: number = ((as18 - as08) / as08 * 100)  / 10;
var auV08: number = ((au18 - au08) / as08 * 100)  / 10;

var afV08P: number = af18 - af08;
var saV08P: number = sa18 - sa08;
var euV08P: number = eu18 - eu08;
var naV08P: number = na18 - na08;
var asV08P: number = as18 - as08;
var auV08P: number = au18 - au08;

console.log("Die Emission von Europa ist: " + eu18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + euReGe + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + euV08 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + euV08P + "kg CO2");
console.log("");

console.log("Die Emission von Afrika ist " + af18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + afReGe  + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afV08 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + afV08P + "kg CO2");
console.log("");

console.log("Die Emission von Asien ist " + as18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + asReGe + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asV08 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + asV08P + "kg CO2");
console.log("");

console.log("Die Emission von Australien ist " + au18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + auReGe + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + auV08 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + auV08P + "kg CO2");
console.log("");

console.log("Die Emission von South Amerika ist " + sa18 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht South Amerika damit " + saReGe + "%");
console.log("Für South Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + saV08 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + saV08P + "kg CO2");
console.log("");

console.log("Die Emission von North Amerika ist " + na18 + "kg CO2" );
console.log("Relativ zur Gesamtemission der Welt verursacht North Amerika damit " + naReGe + "%");
console.log("Für North Amerika hat sich 2018 im Vergleich zu 2008 die Emission um " + naV08 + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + naV08P + "kg CO2");
console.log("");