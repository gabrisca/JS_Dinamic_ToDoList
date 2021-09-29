// salvo il metodo document.getElementById in una variabile così da snellire il codice
let id = (id) => document.getElementById(id);

// * Selectors
const form = document.querySelector('form'),
  list = id('list'),
  item = id('item');


// * Event Listeners
// ! add event
// evento che inserisce dinamicamente un li con il testo inserito nell'input
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (item.value != '') {
    list.innerHTML += `<li>${item.value}</li>`;
    storage();
    item.value = '';
  }
})

// ! remove event
// evento che al click aggiunge una classe checked ad un li e al secondo click elimina il li
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('checked')) {
    e.target.remove();
  } else {
    e.target.classList.add('checked');
  }
  storage();
})


// * Functions
// ! storage
// funzione che salva nella local storage i valori inseriti nella todolist
function storage() {
  window.localStorage.todoList = list.innerHTML;
}

// funzione che restituisce i valori salvati nella local storage
function getValues() {
  let storageContent = window.localStorage.getItem('todoList');
  if (!storageContent) {
    list.innerHTML = `<li>Inserisci qualcosa</li>`;
  }
  else {
    list.innerHTML = storageContent;
  }
}
getValues();
