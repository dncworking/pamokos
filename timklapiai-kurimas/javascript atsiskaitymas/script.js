// 3uzduotis
// function sumaTeigiamu() {
//   let suma = 0;
//   let skaicius = 0;

//   while (skaicius >= 0) {
//     skaicius = parseInt(prompt("Įveskite skaičių:"));

//     if (skaicius >= 0) {
//       suma += skaicius;
//     }
//   }

//   console.log("Visų įvestų teigiamų skaičių suma: " + suma);
// }

// sumaTeigiamu();

// 4uzduotis
// function filterItems(arr, query) {
//   return arr
//     .filter((name) => name.toLowerCase().includes(query.toLowerCase()))
//     .map((name) => `*${name}`)
//     .sort();
// }

// const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

// console.log(filterItems(friends, "ka"));
// console.log(filterItems(friends, "e"));

// 1uzduotis
// function sumEvenNumbers(n) {
//   let suma = 0;

//   for (let i = 2; i <= n; i++) {
//     if (i % 2 === 0) {
//       suma += i;
//     }
//   }

//   return suma;
// }

// const n = 20;
// console.log("Suma:", sumEvenNumbers(n));

// 2uzduotis
// const positives = (arr) => {
//   if (!Array.isArray(arr)) {
//     console.error("Klaida: Pateiktas nėra masyvas.");
//     return;
//   }

//   return arr.filter((num) => num > 0);
// };

// console.log(positives([1, -3, 5, -3, 0]));
// console.log(positives([1, 2, 3]));
// console.log(positives([-1, -2, -3]));

// console.log(positives("ne masyvas"));

// 5uzduotis
// const calculateSimpleInterest = (P, R, T) => {
//   const simpleInterest = (P * R * T) / 100;
//   return simpleInterest;
// };

// const principal = 1000;
// const rate = 5;
// const time = 3;
// console.log("Palūkanos:", calculateSimpleInterest(principal, rate, time));
