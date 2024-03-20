import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductsList from './components/ProductsList';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <ProductForm />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
