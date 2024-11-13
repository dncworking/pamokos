"use strict"
const automobiuliuSkaicius = parseInt(prompt("Automobiuliu skaicius"));
const kelteAutomobiliuTelpa = parseInt(prompt("I kelta telpa automobiliu"));
const k = 27;
const m = 10;
const perkeltuKartuSkaicius = Math.floor (k / m);
const liksNeperkelta = k % m;
console.log(`Perkels per kartu: ${perkeltuKartuSkaicius}`);
console.log(`Liks neperkelta: ${liksNeperkelta}`);