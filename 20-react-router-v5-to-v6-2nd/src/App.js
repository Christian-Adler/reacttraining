import {Link, Navigate, Route, Routes} from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';
import {Fragment} from "react";

function App() {
  return (
    <div>
      <MainHeader/>
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to='/welcome'/>}/>
          <Route path='/welcome/*' element={<Welcome/>}>
            <Route path="new-user" element={<Fragment><p>Welcome, new user!</p>
              <Link to="../">Close New user</Link></Fragment>}/>
          </Route>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:productId' element={<ProductDetail/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
