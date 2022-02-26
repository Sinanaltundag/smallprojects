

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submit = document.querySelector("[type=submit]");
const tableRow = document.querySelector("tbody")
let library=[]
library.push(JSON.parse(localStorage.getItem('book')));
console.log(library);

class Library{
    constructor(title, author, isbn){
        this.title= title;
        this.author=author;
        this.isbn=isbn;
    }
}
submit.addEventListener("click", ()=>{
    let myBook= new Library(titleInput.value, authorInput.value, isbnInput.value)
    
    library = (JSON.parse(localStorage.getItem('book')));
    console.log(library);
    if (library==null) {
        library=[]
    }
    library.push(myBook)
    console.log(library);
    localStorage.setItem('book', JSON.stringify(library));
listBooks(library)

})

tableRow.addEventListener("click", (e)=>{
 if (e.target.className=="del") {
     e.target.parentElement
     e.target.parentElement.parentElement.remove()
 }
})

function listBooks(library) {
library.forEach((myBook,i) => {
    
    let htmlStr=`<tr>
    <td>${myBook.title}</td>
    <td>${myBook.author}</td>
    <td>${myBook.isbn}</td>
    <td><a class="del">${i}</a></td>
    </tr>`
    tableRow.innerHTML += htmlStr
  
});
}