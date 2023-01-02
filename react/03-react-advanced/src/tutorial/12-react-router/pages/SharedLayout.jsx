import StyledNavbar from '../components/StyledNavbar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;
