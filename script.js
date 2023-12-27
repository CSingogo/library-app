// constructor for book
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    };
}

// random books manually added using constructor
var bible = new Book('bible', 'various', 999, 'The book has been read');
var quran = new Book('quran', 'muhammed', 144, 'Not read yet');
var mormon = new Book('mormon', 'john smith', 122, 'Not read yet');

const myLibrary = [bible, quran, mormon];

// function for adding a book to the library
function addBookToLibrary() {
    var title = prompt('Enter the book title:');
    var author = prompt('Enter the author:');
    var pages = prompt('Enter the number of pages:');
    var read = prompt('Has the book been read?');

    var newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    console.log("You added a new book: " + newBook.info());
}
var container = document.querySelector(".container");

// display books function
function displayBooks() {
    myLibrary.forEach(book => {
        var card = document.createElement("div");
        card.className = "card";
        
        var bookInfo = document.createElement("p");
        bookInfo.textContent = book.info();
        
        card.appendChild(bookInfo);
        
        // Append the card to the container
        container.appendChild(card);
    });
}

// Call displayBooks to initially display the books
displayBooks();

document.addEventListener('DOMContentLoaded', function() {
  
  });


