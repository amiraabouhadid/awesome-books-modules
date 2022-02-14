import Book from "./Book.js";
let books;
export default class UserInterface {
  static container = document.getElementById("container");

  static titleInput = document.querySelector("#title");

  static authorInput = document.querySelector("#author");

  static addButton = document.querySelector(".add-book");

  static addBook() {
    const book = new Book(
      UserInterface.titleInput.value,
      UserInterface.authorInput.value
    );
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    const addedAlert = document.getElementById("form-validation");
    addedAlert.innerHTML = "Book added successfully!";
    addedAlert.style.color = "green";
    setTimeout(() => {
      UserInterface.titleInput.value = "";
      UserInterface.authorInput.value = "";

      addedAlert.innerHTML = "";
    }, 1000);

    UserInterface.displayBook(book, books.length - 1);
  }

  static populateContainer() {
    if (localStorage.getItem("books")) {
      books = JSON.parse(localStorage.getItem("books"));
      books.forEach((book, index) => {
        UserInterface.displayBook(book, index);
      });
    } else {
      localStorage.setItem("books", "");
      books = [];
    }
  }

  static clearInput() {}

  static removeBook(book, index) {
    const bookContainer = document.getElementById(index);
    books = books.filter((el) => el !== book);
    localStorage.setItem("books", JSON.stringify(books));
    UserInterface.container.removeChild(bookContainer);
  }

  static displayBook(book, index) {
    const bookContainer = document.createElement("tr");
    bookContainer.id = index;
    const text = document.createElement("td");
    text.innerHTML = `"${book.title}" by ${book.author}`;

    bookContainer.append(text);
    const removeButtonContainer = document.createElement("td");

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.innerHTML = "<i class='fas fa-trash-alt'></i> Remove";

    removeButton.onclick = () => {
      UserInterface.removeBook(book, index);
    };
    removeButtonContainer.append(removeButton);
    bookContainer.append(removeButtonContainer);
    UserInterface.container.appendChild(bookContainer);
  }
}
