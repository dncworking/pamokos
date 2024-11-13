"use strict"

const kiekZuvuAkvariume = parseInt(prompt("Kiek zuvu gyvena akvariume?"));
const kiekvienaDienaIdedama = parseInt(prompt("Kiek zuvu i akvariuma idedama kiekviena diena?"));
const kiekDienuPraejo = parseInt(prompt("Kiek dienu praejo?"));
const sum = kiekZuvuAkvariume + (kiekvienaDienaIdedama * kiekDienuPraejo);
console.log(`Po 3 dienu akvariume gyvens ${sum} zuvu`);