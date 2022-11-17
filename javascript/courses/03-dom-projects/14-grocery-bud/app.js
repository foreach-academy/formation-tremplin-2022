// ****** SELECTIONNER LES ELEMENTS HTML **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// option d'édition
let editFlag = false;
let editElement = null;
let editID = '';

// ****** EVENT LISTENERS **********
// soumettre le formulaire
form.addEventListener('submit', addItem);

// supprimer tous les items
clearBtn.addEventListener('click', clearItems);

// charger les items (DOMContentLoaded)
window.addEventListener('DOMContentLoaded', setupItems);

// ****** FONCTIONS **********
// ajouter un item
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    container.classList.add('show-container');
    createListItem(id, value);
    addToLocalStorage(id, value);
    displayAlert('item added to the list', 'success');
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.textContent = value;
    displayAlert('value changed', 'success');
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert('please enter a value', 'danger');
  }
}

// afficher l'alerte
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // supprimer l'alerte
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

function setBackToDefault() {
  grocery.value = '';
  editElement = null;
  editFlag = false;
  submitBtn.textContent = 'submit';
  grocery.focus();
}

// supprimer tous les items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');

  if (items.length) {
    items.forEach(function (item) {
      item.remove();
    });
  }

  container.classList.remove('show-container');
  displayAlert('empty list', 'danger');
  setBackToDefault();
  localStorage.removeItem('list');
}

// supprimer un item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  element.remove();

  if (!list.children.length) {
    container.classList.remove('show-container');
  }

  displayAlert('item removed', 'danger');
  removeFromLocalStorage(id);
  setBackToDefault();
}

// éditer un item
function editItem(e) {
  const element = e.currentTarget.parentElement;
  editElement = element.previousElementSibling;
  editID = element.parentElement.dataset.id;
  grocery.value = editElement.innerHTML;
  submitBtn.textContent = 'edit';
  grocery.focus();
  editFlag = true;
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  const items = getLocalStorage();
  const grocery = { id, value };

  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    return item.id !== id;
  });

  localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }

    return item;
  });

  localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list')).sort(
        (a, b) => a.itemOrder - b.itemOrder
      )
    : [];
}

// ****** METTRE EN PLACE LES ITEMS **********
// récupérer la liste dans le localStorage ou en créer une vide
function setupItems() {
  const items = getLocalStorage();

  if (items.length) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });

    container.classList.add('show-container');
  }
}

function createListItem(id, value) {
  const element = document.createElement('article');
  element.classList.add('grocery-item');
  element.dataset.id = id;
  element.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;

  const deleteBtn = element.querySelector('.delete-btn');
  const editBtn = element.querySelector('.edit-btn');

  deleteBtn.addEventListener('click', deleteItem);
  editBtn.addEventListener('click', editItem);

  list.appendChild(element);
}
