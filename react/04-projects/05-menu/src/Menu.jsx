import { useGlobalContext } from './context';

const Menu = () => {
  const { menuItems } = useGlobalContext();

  return (
    <div className='section-center'>
      {menuItems.map((item) => {
        const { id, img, title, price, desc } = item;

        return (
          <article className='menu-item' key={id}>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
