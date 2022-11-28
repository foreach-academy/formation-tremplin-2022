let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
  if (!filteredProducts.length) {
    productsContainer.innerHTML = `<h6>sorry, no products matched your search</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map((product) => {
      const { id, title, image, price } = product;

      return ` <article class="product" data-id="${id}">
              <img
                src="${image}"
                class="product-img img"
                alt="${title}" />
              <footer>
                <h5 class="product-name">${title}</h5>
                <span class="product-price">$${price}</span>
              </footer>
            </article>`;
    })
    .join('');
};

displayProducts();

// Filtrer avec le texte
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value.toLowerCase();

  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });

  displayProducts();
});

// Filtrer avec les boutons
const companiesDOM = document.querySelector('.companies');

const displayButtons = () => {
  const buttons = [
    'all',
    ...new Set(products.map((product) => product.company))
  ];

  companiesDOM.innerHTML = buttons
    .map(
      (company) =>
        `<button class="company-btn" data-id="${company}">${company}</button>`
    )
    .join('');
};

displayButtons();

companiesDOM.addEventListener('click', (e) => {
  const el = e.target;

  if (el.classList.contains('company-btn')) {
    if (el.dataset.id === 'all') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter(
        (product) => product.company === el.dataset.id
      );
    }
  }

  searchInput.value = '';
  displayProducts();
});
