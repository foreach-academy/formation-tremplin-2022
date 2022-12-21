// import { PropTypes } from 'prop-types';
import defaultImage from '../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  //* alternative - valeurs par défaut avec short-circuit ou chaînage optionnel
  // const url = image && image.url

  return (
    <article className='product'>
      {/* chaînage optionnel - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
      <img src={image?.url || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

export default Product;

// on vérifie qu'on a le type attendu sur les props. On aura une erreur dans la console si il y a un problème
// Product.propTypes = {
//   image: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired
// };

//* valeur par défaut
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//! le problème ici est qu'on a pas de prop url pour image
//   image: defaultImage
// };

// PropTypes rend le code plus "lourd" et difficle à lire donc on évitera de l'utiliser dans nos projets car le but est juste d'apprendre
