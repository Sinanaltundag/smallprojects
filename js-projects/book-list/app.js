const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submit = document.querySelector("[type=submit]");
const tableRow = document.querySelector("tbody");
const bookCont = document.querySelector(".container");
let alertDiv; // alertdiv kontrolünü boş inputlarda üst üste çıkmaması için kontrol etmek gerekiyor. bu yüzden global scope da let ile tanımladım
//library array oluşturuldu
let library = [];
//localstorage da varsa önceki kayıtlar çekildi
library.push(JSON.parse(localStorage.getItem("book")));
listBooks(library); //eski kayıtlar table 'a eklendi
class Library {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
submit.addEventListener("click", () => {
  let myBook = new Library(  //submit tıklandığında objeyi oluşturduk
    titleInput.value,
    authorInput.value,
    isbnInput.value
  );
  // inputların boşluk kontrolü
  if (myBook.title == "" || myBook.author == "" || myBook.isbn == "") {
    if (alertDiv) return
    showAlert("Inputs can not be Empty!");
    return;
  }
  // kontroller için kütüphaneyi local den çektik
  library = JSON.parse(localStorage.getItem("book"));
  //kütüphane dolu ise isbn kayıtlarını karşılaştırıp kayıt varsa engelledik  
  if (library) {
    let isRegistered = library.filter((book) => book.isbn == myBook.isbn);
    if (isRegistered[0]) {
      const { title, author, isbn } = isRegistered[0];
      showAlert(
        `You registered before named ${title} by ${author} with same ${isbn} ISBN`
      );
      titleInput.value = authorInput.value = isbnInput.value ="";
      return;
    }
    // kayıt yoksa null yerine boş array olarak dönmesi için
  } else {
    library = [];
  }
// eklenecek table satırı için dinamik string oluşturduk
  let htmlStr = `<tr>
    <td>${myBook.title}</td>
    <td>${myBook.author}</td>
    <td>${myBook.isbn}</td>
    <td><div class="parent-del">X<a class="del">${
      library.length + 1
    }</a></div></td>
    </tr>`;
    //table a ekledik
  tableRow.innerHTML += htmlStr;
  //kütüphanemize de yeni kaydı push'ladık
  library.push(myBook);
  // local storage ekledik
  localStorage.setItem("book", JSON.stringify(library));
  titleInput.value = authorInput.value = isbnInput.value ="";
});

// silme işlemi
tableRow.addEventListener("click", (e) => {
  if (e.target.className == "del") {
    library = JSON.parse(localStorage.getItem("book"));
    //e.target burada opacitiy ile gizlenmiş hover ile görünen div içindeki a tagi. indexi bundan çektim
    if (
      confirm(
        "Do you want to delete book named " +
          library[e.target.innerText - 1].title +
          "?"
      )
    ) {
      e.target.parentElement.parentElement.remove();
      showAlert(library[e.target.innerText - 1].title + " deleted!");
      library.splice(e.target.innerText - 1, 1);
      localStorage.setItem("book", JSON.stringify(library));
      listBooks(library);
    }
  }
});
// komple listeleme fonksiyonu. aradan bir satır silindiğinde indexler değiştiği için kullandım
function listBooks(library) {
  library = JSON.parse(localStorage.getItem("book"));
  if (library != null) {
    tableRow.replaceChildren();
    library.forEach((myBook, i) => {
      let htmlStr = `<tr>
    <td>${myBook.title}</td>
    <td>${myBook.author}</td>
    <td>${myBook.isbn}</td>
    <td><div class="parent-del">X<a class="del">${i + 1}</a></div></td>
    </tr>`;
      tableRow.innerHTML += htmlStr;
    });
  }
}
// ortadaki görünüp kaybolan uyarılar. duruma göre string gönderiliyor
function showAlert(str) {
  alertDiv = document.createElement("div");
  alertDiv.innerHTML = str + "<br>";
  bookCont.insertBefore(alertDiv, bookCont.lastElementChild);
  // 3 saniye sonra kaybolması için
  setInterval(() => {
    alertDiv.remove();
    alertDiv=""
  }, 3000);
}
