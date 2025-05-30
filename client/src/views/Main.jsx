import React, { useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const { removeFromDom, products, setProducts, deleteProduct } = props;

    return (
        <div>
            <ProductForm products={products} setProducts={setProducts} />
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom} deleteProduct={deleteProduct} />
        </div>
    )
}

export default Main;