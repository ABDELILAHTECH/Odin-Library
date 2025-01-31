let booksContainer = document.querySelector(".books");
let addBookBtn = document.querySelector(".addBook");
let addBookForm = document.querySelector(".addBookForm");
let addBookOperation =document.querySelector("#add");
let bookName = document.querySelector("#name");
let bookAuthor = document.querySelector("#author");
let bookPages = document.querySelector("#pages");
const myLibrary = [];

function Book(name,author,pages){
   this.name = name;
   this.author = author;
   this.pages = pages;
}

function addBookToLibrary(name,author,pages){
     let bookName = document.createElement("p");
     let bookAuthor = document.createElement("p");
     let bookPages = document.createElement("p");
     let bookCard = document.createElement("div");
     bookName.textContent = `Name: ${name}`;
     bookCard.append(bookName);
     bookAuthor.textContent = `Author: ${author}`;
     bookCard.append(bookAuthor);
     bookPages.textContent = `Pages: ${pages}`;
     bookCard.append(bookPages);
     let readYet = document.createElement("div");
     let readCheck = document.createElement("input");
     readCheck.type = "checkbox";
     let read = document.createElement("p");
     read.textContent = "read";
     readYet.append(readCheck);
     readYet.append(read);
     bookCard.append(readYet);
     read.style.display = "inline";
     bookCard.classList.add("book");
     booksContainer.insertBefore(bookCard,addBookBtn);
}
addBookBtn.addEventListener("click",()=>{
   addBookForm.style.visibility = "visible";
})
addBookOperation.addEventListener("click",()=>{
   addBookToLibrary(bookName.value,bookAuthor.value,bookPages.value);
  console.log(33);
  
   addBookForm.style.visibility = "hidden";
   bookName.value="";
   bookAuthor.value="";
   bookPages.value="";
})
myLibrary.forEach((book) =>{
     console.log(`
        name: ${book.name}
        author: ${book.author}
        pages: ${book.pages}
        `);
     
})