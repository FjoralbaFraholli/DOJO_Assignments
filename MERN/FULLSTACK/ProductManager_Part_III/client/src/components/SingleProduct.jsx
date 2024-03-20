import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import '../App.css';

const SingleProduct = (props) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                setProduct(res.data.product);
            })
            .catch((err) => {
                setErrorMessage("Error fetching product details.");
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (errorMessage) {
        return <p>Error: {errorMessage}</p>;
    }

    return (
        <>
            <p className="text-decoration-none" onClick={navigateBack}>&larr;</p>
            <div className="row">
                <h2 className="text-center">{product.title}</h2>
                <p className="text-center">Price in $: {product.price}</p>
                <p className="text-center">Description: {product.description}</p>
            </div>
        </>
    )
}

export default SingleProduct;