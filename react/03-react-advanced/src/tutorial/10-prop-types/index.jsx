import Product from './Product';
import useFetch from '../8-custom-hooks/2-useFetch';

const url = 'https://course-api.com/react-prop-types-example';

const Index = () => {
  const { data: products } = useFetch(url);

  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
};

export default Index;
