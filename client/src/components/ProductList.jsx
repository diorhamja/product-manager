import React, {useState, useEffect} from 'react' 
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {

    const { products, setProducts, deleteProduct } = props;


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            {
                products.map((product, index) => {
                    return (
                        <div key={ index }>
                            <Link to={`/products/${product._id}`}>
                                <p>{product.title}</p>
                                <p>{product.price}</p>
                                <p>{product.description}</p>
                            </Link>
                            <Link to={`/products/edit/${product._id}`}>Edit!</Link>
                            <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;