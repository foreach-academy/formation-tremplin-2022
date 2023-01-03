import Loading from './Loading';
import Cocktail from './Cocktail';

const CocktailList = ({ isLoading, cocktails }) => {
  if (isLoading) {
    return <Loading />;
  }

  if (!cocktails.length) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((cocktail) => {
          const {
            idDrink: id,
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strGlass: glass
          } = cocktail;
          const newCocktail = { id, name, image, info, glass };

          return <Cocktail key={id} {...newCocktail} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
