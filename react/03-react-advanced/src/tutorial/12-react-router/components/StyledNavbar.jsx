import { NavLink } from 'react-router-dom';

const StyledNavbar = () => {
  return (
    <nav className='navbar'>
      {/* <NavLink
        to='/'
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'grey' };
        }}>
        Accueil
      </NavLink> */}
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        Accueil
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        À Propos
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        Produits
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}>
        Se Connecter
      </NavLink>
    </nav>
  );
};
export default StyledNavbar;
