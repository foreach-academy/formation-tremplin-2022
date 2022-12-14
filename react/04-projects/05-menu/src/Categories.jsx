import { useGlobalContext } from './context';

const Categories = () => {
  const { categories, filterItems } = useGlobalContext();

  return (
    <div className='btn-container'>
      {categories.map((category, index) => (
        <button
          className='filter-btn'
          key={index}
          onClick={() => filterItems(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
