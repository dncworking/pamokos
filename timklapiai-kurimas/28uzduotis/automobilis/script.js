"user strict"
const automobilioGreitis = parseInt(prompt("Koks automobilio grietis?"));
const atstumas = 264;
const greitisKmH = 60;
const greitisMs = greitisKmH * (5 / 18);
const laiskasSek = atstumas / greitisMs;
console.log(`Automobilis tuneli pravaziuos per ${laiskasSek.toFixed(2)} s`);