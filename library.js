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
    let subcell3= document.createElement('td')
    let subsubcell3 = document.createElement('input')
    subsubcell3.setAttribute('type', 'checkbox')
    container.appendChild(cell)
    cell.appendChild(subcell).className = 'holder'
    cell.appendChild(subcell1).className = 'holder'
    cell.appendChild(subcell2).className = 'holder'
    cell.appendChild(subcell3).className = 'holder'
    subcell3.appendChild(subsubcell3).className = 'toggle'
    subcell4 = document.createElement('td')
    cell.appendChild(subcell4).className = 'holder'
    let subsubcell4 = document.createElement('button')
    subcell4.appendChild(subsubcell4).className = 'rmv';
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

let rmvbutton = document.getElementsByClassName('rmv')
console.log(rmvbutton)
/* for (let i = 0; i < rmvbutton.length; i++){
    console.log(rmvbutton[i])  
    rmvbutton[i].addEventListener('click', function(){
      let parent = rmvbutton[i].parentNode;
      let parentparent = parent.parentNode;
      parentparent.parentNode.removeChild(parentparent)
    })
  }
   */

for (let i = 0; i < rmvbutton.length; i++){
    const button = rmvbutton[i];
    rmvbutton[i].addEventListener('click', function(){
      let parent = button.parentNode;
      let parentparent = parent.parentNode;
      parentparent.parentNode.removeChild(parentparent)
    })
  }