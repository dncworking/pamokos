"use strick";
//1.=================================================================
//Paverskite skaičių masyvą visų skaičių suma
function total(arr) {
  const initialValue = 0;
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
}
console.log(total([1, 2, 3]));

//2.=======================================================================
//paversti skaičių masyvą į ilgą visų šių skaičių eilutę.
function stringConcat(arr) {
  const Value = "";
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    Value
  );
}
console.log(stringConcat([1, 2, 3]));

//3.========================================================================
//Paverskite rinkėjo objekto masyvą į skaičių, kiek žmonių balsavo
function totalVotes(arr) {
  return arr.reduce((count, voter) => (voter.voted ? count + 1 : count), 0);
}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

console.log(totalVotes(voters));

//4.=====================================================
//Atsižvelgdami į visų pageidavimų sąrašo elementų masyvą, apskaičiuokite, kiek kainuotų nusipirkti viską iš karto.

function shoppingSpree(arr) {
  return arr.reduce((accumulator, item) => accumulator + item.price, 0);
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A Tesla Model S", price: 90000 },
];
console.log(shoppingSpree(wishlist));

//5.======================================================================
// Atsižvelgdami į masyvų masyvą, suplokštinkite juos į vieną masyvą
function flatten(arr) {
  return arr.reduce((flat, current) => flat.concat(current), []);
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays));

//6.===================================================================
//Gavę potencialių rinkėjų masyvą, grąžinkite objektą, atspindintį balsavimas Nurodykite, kiek potencialių rinkėjų buvo 18-25 metų amžiaus, kiek
//26-35 m., 36-55 m. ir kiek iš kiekvieno iš šių amžiaus intervalų iš tikrųjų balsavo. Gautas objektas, kuriame yra šie duomenys, turėtų turėti 6 savybes.

function voterResults(arr) {
  return arr.reduce(
    (result, voter) => {
      // Categorize by age group and increment the appropriate counts
      if (voter.age >= 18 && voter.age <= 25) {
        result.numYoungPeople++;
        if (voter.voted) result.numYoungVotes++;
      } else if (voter.age >= 26 && voter.age <= 35) {
        result.numMidPeople++;
        if (voter.voted) result.numMidVotesPeople++;
      } else if (voter.age >= 36 && voter.age <= 55) {
        result.numOldsPeople++;
        if (voter.voted) result.numOldVotesPeople++;
      }
      return result;
    },
    // Initial result object with all counts set to 0
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
}

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

console.log(voterResults(voters));
