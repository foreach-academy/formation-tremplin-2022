import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { cocktailId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    async function fetchDrink() {
      try {
        const resp = await fetch(`${url}${cocktailId}`);
        const { drinks } = await resp.json();

        if (drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients
          };

          setDrink(newCocktail);
        } else {
          setDrink(null);
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }

    fetchDrink();
  }, [cocktailId]);

  if (isLoading) {
    return <Loading />;
  }

  if (!drink) {
    return <h2 className='section-title'>no cocktail</h2>;
  }

  const { name, image, category, info, glass, instructions, ingredients } =
    drink;

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>category :</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info :</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass :</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions :</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {ingredients.map((item, index) =>
              item ? <span key={index}>{item}</span> : null
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
