import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const Detail = (props) => {
    const { deleteProduct } = props;
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/edit/${product._id}`}>Edit!</Link>
            <button onClick={(e) => {deleteProduct(product._id); navigate('/products');}}>Delete</button>
        </div>
    )

}

export default Detail;