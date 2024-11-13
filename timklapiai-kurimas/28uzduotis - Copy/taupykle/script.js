"use strict"
const kiekMonetuPo5Ct = parseInt(prompt("Kiek yra monetu po 5 ct?"));
const kiekMonetuPo20Ct = parseInt(prompt("Kiek yra monetu po 20 ct?"));
const kiekMonetuPo2Lt = parseInt(prompt("Kiek yra monetu po 2 Lt?"));
const sum = (0.05 * kiekMonetuPo5Ct) + (0.20 * kiekMonetuPo20Ct) + (2 * kiekMonetuPo2Lt);
console.log(`Taupykleje yra ${sum} Lt`);
