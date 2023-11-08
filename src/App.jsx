// App.js
import React from 'react';
import { useTitle } from './unsed/Title';
import { Router } from 'react-router-dom';
 //import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { TitleProvider, useTitle } from './TitleContext';

const AllProducts = () => {
  const { title } = useTitle();
  return (
    <div>
      <h1>{title}</h1>
      <p>This is the All Products page.</p>
    </div>
  );
};

const AnotherRoute = () => {
  const { title } = useTitle();
  return (
    <div>
      <h1>{title}</h1>
      <p>This is the Another Route page.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <TitleProvider>
        <nav>
          <ul>
            <li>
              <Link to="/all-products">All Products</Link>
            </li>
            <li>
              <Link to="/another-route">Another Route</Link>
            </li>
          </ul>
        </nav>
        <Route path="/all-products" component={AllProducts} />
        <Route path="/another-route" component={AnotherRoute} />
      </TitleProvider>
    </Router>
  );
};

export default App;
