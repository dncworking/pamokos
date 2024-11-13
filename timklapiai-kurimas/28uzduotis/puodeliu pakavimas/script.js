"use strict";
const puodeliuSupakavimoSkaicius = parseInt(
    prompt("Puodeliu, kuriuos reikia supakuoti, skaicius")
);
const puodeliuSkaicius = 7;
const pilnuDezuciuSkaicius = Math.floor(puodeliuSkaicius / 3);
const nesupakuotuPuodeliuSkaicius = puodeliuSkaicius % 3;
console.log(`Pilnu deziu skaicius: ${pilnuDezuciuSkaicius}`);
console.log(`Nesupakuotu puodeliu skaicius: ${nesupakuotuPuodeliuSkaicius}`);
