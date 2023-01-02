// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//pages
import Home from './Home';
import About from './About';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Error from './Error';
import SharedLayout from './SharedLayout';
import Login from './Login';
import Dashboard from './Dashboard';
import { useState } from 'react';
import ProtectedRoute from './ProtectedRoute';
import SharedProductLayout from './SharedProductLayout';
// composants
// import StyledNavbar from '../components/StyledNavbar';

const ReactRouterSetup = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {/* <StyledNavbar /> */}
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
