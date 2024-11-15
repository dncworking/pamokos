const books = [
  { title: "Knyga #1", price: 10.25 },
  { title: "Knyga #2", price: 5.15 },
  { title: "Knyga #3", price: 7.32 },
  { title: "Knyga #4", price: 54.01 },
  { title: "Knyga #5", price: 77.17 },
];

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1. Parašykite funkciją, kuri atspausdintų visą knygų sąrašą (knygos eilės numerį ir pavadinimą). Panaudokite metodą map()

function printBookList(books) {
  books.map((book, index) => {
    console.log(`${index + 1}. ${book.title}`);
  });
}

printBookList(books);

//=========================================================================
// 2. Parašykite funkciją, kuri paskaičiuotų, kiek knygų yra lentynoje
function countBooks(books) {
  return books.length;
}
console.log(`Knygų lentynoje yra: ${countBooks(books)}`);
// ==================================================
//3. Parašykite funkciją, kuri į duoto knygų masyvo galą pridėtų knygą
//Pvz. "Knyga #6", kaina 2,75. Panaudokite metodą push()

function addBook(books, newBook) {
  books.push(newBook);

  return books;
}
const newBook = { title: "Knyga #6", price: 2.75 };

addBook(books, newBook);

console.log(books);

//===============================================================
//5. Parašykite funkciją suskaičiuojančią, už kiek eurų yra knygų knygyne

const result = books.reduce((accumulator, book) => accumulator + book.price, 0);
console.log(`${result.toFixed(2)} Eur`);

//=====================================================================
//4. Parašykite funkciją, kuri išvestų paskutinės knygos pavadinimą ir kainą
function getLastBookDetails(books) {
  if (books.length === 0) {
    console.log("Knygų nėra.");
    return null;
  }
  const lastBook = books[books.length - 1];
  console.log(
    `Paskutinė knyga: ${lastBook.title}, kaina: ${lastBook.price} Eur`
  );
  return lastBook;
}
getLastBookDetails(books);
