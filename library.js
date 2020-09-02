let myLibrary = [];

function book (title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}
function addToLibrary (title, author, pages) {
  myLibrary.push(new book(title, author, pages))
}

addToLibrary('dog','cat','45')
addToLibrary('mouse','cat','55')
addToLibrary('deer','cat','66')

let fieldone = document.getElementById('title').value



console.table(myLibrary)
function titles () {
  let arr = [];
  myLibrary.forEach(function(x){
    arr.push(x.title)
  })
  return arr
}
titles()
console.log(titles())
let container = document.getElementById('customers');
function addToTable(){
  for (let i = 0; i < myLibrary.length; i++){
    console.log(i)
    let cell = document.createElement('tr');
    let subcell = document.createElement('td')
    subcell.innerHTML = myLibrary[i].title
    let subcell1 = document.createElement('td')
    subcell1.innerHTML = myLibrary[i].author
    let subcell2 = document.createElement('td')
    subcell2.innerHTML = myLibrary[i].pages
    container.appendChild(cell)
    cell.appendChild(subcell).className = 'holder'
    cell.appendChild(subcell1).className = 'holder'
    cell.appendChild(subcell2). className = 'holder'

  }
}
addToTable()


let txt = document.createElement("tr")
container.appendChild(txt)

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  