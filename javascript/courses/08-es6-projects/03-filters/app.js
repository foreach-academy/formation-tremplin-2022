let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
  productsContainer.innerHTML = filteredProducts.map((product) => {
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
  });
};

displayProducts();

// Filtrer avec le texte

// Filtrer avec les boutons
