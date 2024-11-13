
"use strict"
const sienosIlgis = parseInt(prompt("Sienos ilgis"));
const sienosAukstis = parseInt(prompt("Sienos aukstis"));
const plytosKaina = parseInt(prompt("Plytos kaina"));
const a = 4;
const h = 3;
const k = 0.5;
const plytosIlgis = 0.20;
const plytosAukstis = 0.10;
const sienosPlotas = a * h;
const plytosPlotas = plytosIlgis * plytosAukstis;
const plytuSkaicius = sienosPlotas / plytosPlotas;
const kaina = plytuSkaicius * k;
console.log(`Plytu kiekis: ${Math.ceil(plytuSkaicius)}`);
console.log(`Plytos kainuos ${kaina.toFixed(2)} Lt`);
