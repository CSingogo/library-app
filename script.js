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
  myLibrary.forEach((book, index) => {
      var card = document.createElement("div");
      card.className = "card";

      var bookInfo = document.createElement("p");
      bookInfo.textContent = book.info();

      // Set data-index attribute on the card element
      card.setAttribute('data-index', index);

      card.appendChild(bookInfo);

      // Remove button
      var removeBtn = document.createElement("button");
      removeBtn.innerText = 'remove book';
      removeBtn.className = "removeBtn";
      removeBtn.addEventListener('click', handleDelete);
      card.appendChild(removeBtn);

      //read button
      var readBtn = document.createElement("button");
      readBtn.innerText = 'read?';
      readBtn.className = "readBtn";
      readBtn.addEventListener('click', handleRead);
      card.appendChild(readBtn);



      // Append the card to the container
      container.appendChild(card);
  });
}


// Call displayBooks to initially display the books
displayBooks();

document.addEventListener('DOMContentLoaded', function() {
  
  });


  function openNav() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
  }

  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  //submit form logic to prevet usual logic

  var myForm = document.getElementById('myForm');
  var submitBtn = document.getElementById('submitBtn');

  
  myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    addBookToLibrary();
  });

  function handleDelete(event) {
    // Retrieve the data-index attribute of the parent card element
    var dataIndex = event.target.closest('.card').getAttribute('data-index');

    // Convert dataIndex to a number (if needed)
    dataIndex = parseInt(dataIndex, 10);

    // Perform deletion based on the dataIndex
    myLibrary.splice(dataIndex, 1);

    // Clear the container and re-display the updated books
    container.innerHTML = '';
    displayBooks();
}


  function handleRead(event) {
    // Retrieve the data-index attribute of the parent card element
    var dataIndex = event.target.closest('.card').getAttribute('data-index');
  
    // Convert dataIndex to a number (if needed)
    dataIndex = parseInt(dataIndex, 10);
  
    // Find the specific readBtn element within the current card
    var readBtn = event.target.closest('.card').querySelector('.readBtn');
  
    // Update the button text
    readBtn.innerText = myLibrary[dataIndex].read === 'The book has been read' ? 'read' : 'not read';
  
    // Update the button color
    readBtn.style.backgroundColor = myLibrary[dataIndex].read === 'The book has been read' ? 'green' : 'red';

    // Toggle the read status
    myLibrary[dataIndex].read = myLibrary[dataIndex].read === 'The book has been read' ? 'Not read yet' : 'The book has been read';
  

  
    // Clear the container and re-display the updated books
    container.innerHTML = '';
    displayBooks();
  }
  
 

