var obj = new Object(); // Maneira 1 de criar um objeto

var obj = {}; // Maneira 2 de criar um objeto

obj = {
  name: {
    first: "Gandalf",
    last: "the Grey",
  },
  address: "Middle Earth",
};

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

var book = new Book("title", "pag", "isbn");

console.log(book.title);
// title
book.title = "new title";
console.log(book.title);
// new title

var newBook = new Book("title", "pag", "isbn");

/**
 * A função printTitle será compartilhada entre todas as instâncias, e somente uma cópia será criada
 */
Book.prototype.printTitle = function () {
  console.log(this.title);
};

book.printTitle();
// new title

newBook.printTitle();
// title

/**
 * Cada instância terá a sua própria cópia das funções
 */
function OtherBook(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function () {
    console.log(this.isbn);
  };
}

var otherBook = new OtherBook("title", "pag", "isbn");

otherBook.printIsbn();
// isbn
