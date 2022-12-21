import React, { useState, useEffect, useCallback } from 'react';
import { useMemo } from 'react';
import useFetch from '../8-custom-hooks/2-useFetch';

const url = 'https://course-api.com/javascript-store-products';

// https://kentcdodds.com/blog/usememo-and-usecallback

//* Chaque fois qu'une prop ou qu'un state change, cela déclenche un nouveau rendu du componsant

const calculateMostExpensive = (data) => {
  // Cette fonction est appelée à chaque fois qu'on clique sur count
  //? Imaginons si elle prenait longtemps à récupérer notre valeur...
  console.log('hello');
  // Solution : useMemo - mémorise la valeur

  return (
    // récupère le prix le plus grand
    data.reduce((total, item) => {
      const price = item.fields.price;

      if (price > total) {
        total = price;
      }

      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { data: products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  // À chaque rendu on recréé la fonction qu'on passe dans les composants ce qui crééra un nouveau rendu de singleProduct
  // Solution : useCallback - si la valeur dans la fonction ne change pas => pas de rendu, sinon => rendu
  // Si maintenant on change le state count cela ne déclenchera plus de rendu
  const addToCart = useCallback(() => {
    setCart(cart + 1);
    console.log(cart);
  }, [cart]);

  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );

  return (
    <>
      <h1>compteur : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        clique moi
      </button>
      <h2 style={{ marginTop: '3rem' }}>panier: {cart}</h2>
      {/* <h2>Le plus cher : ${calculateMostExpensive(products)}</h2> */}
      <h2>Le plus cher : ${mostExpensive}</h2>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

// React.memo mémorise la valeur des props et si elles ne changent pas, elle ne déclencheront pas un nouveau rendu
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('appel de BigList');
  });

  return (
    <section className='products'>
      {products.map((product) => (
        <SingleProduct key={product.id} addToCart={addToCart} {...product} />
      ))}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  const image = fields.image[0].url;
  let { name, price } = fields;
  price = price / 100;

  useEffect(() => {
    console.count('appel de SingleProduct');
  });

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>ajouter au panier</button>
    </article>
  );
};

export default Index;
