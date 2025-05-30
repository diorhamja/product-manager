import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import UpdateProduct from './components/UpdateProduct';
import Detail from './views/Detail';
import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  
  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id != productId));
  }

  const deleteProduct = (productId) => {
    axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => {
            removeFromDom(productId)
        })
        .catch(err => console.log(err));
}

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={ <Main products={products} setProducts={setProducts} deleteProduct={deleteProduct} /> } path='/products' default />
          <Route element={ <Detail products={products} setProducts={setProducts} deleteProduct={deleteProduct} /> } path='/products/:id' />
          <Route element={ <UpdateProduct products={products} setProducts={setProducts} /> } path='/products/edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
