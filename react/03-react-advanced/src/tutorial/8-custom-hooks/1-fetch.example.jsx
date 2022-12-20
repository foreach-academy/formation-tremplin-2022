import useFetch from './2-useFetch';

const url = 'https://course-api.com/javascript-store-products';

const FetchExample = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [products, setProducts] = useState([]);

  // const getProducts = async (url) => {
  //   setIsLoading(true);

  //   try {
  //     const resp = await fetch(url);
  //     const products = await resp.json();
  //     setIsLoading(false);
  //     setProducts(products);
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getProducts(url);
  // }, []);

  const { isLoading, data: products } = useFetch(url);

  console.log(products);

  return (
    <div>
      <h2>{isLoading ? 'chargement...' : 'données'}</h2>
    </div>
  );
};
export default FetchExample;
