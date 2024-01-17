
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

Object.setPrototypeOf(Book.prototype, Author.prototype);
Book.prototype.getBookInfo = function () {
    return `
    Book Title: ${this.title}.
    Author's Name: ${this.author.name}.
    Genre: ${this.genre}.
    Price: ${this.price}.`
}
let author1 = new Author("John Doe", 1990, "Indian");
let book1 = new Book("Harry Potter", author1, "Fantasy", 500);

console.log(book1.getBookInfo());


let author2 = new Author("Chetan Bhagat", 1984, "Indian");
let book2 = new Book("Two States", author2, "Romance", 400);

console.log(book2.getBookInfo());