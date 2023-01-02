import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <NavLink to='/'>
          <img src={logo} alt='logo' className='logo' />
        </NavLink>
        <ul className='nav-links'>
          <li>
            <NavLink to='/'>home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>about</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
