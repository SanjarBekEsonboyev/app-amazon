import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

export const Product = () => {
    const [products, setProducts] = useState({});
    console.log(products);
    const productId = useParams();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/" + productId.id)
            .then((res) => {
                setProducts(res.data);
            })
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mt-3">
                    <div className="card h-100" style={{width: "443px"}}>
                        <img src={products.image} className="card-img-top" alt="Error"/>
                    </div>
                </div>
                <div className="col-6 mt-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="display-3">{products.title}</h2>
                            <p className='h4'>Category: {products.category}</p>
                            <p className='h2'>Price: ${products.price}</p>
                            <p className='h4'>Like: {products.rating?.count} &#9733;{products.rating?.rate}</p>
                            <p className='h5'>Description: {products.description}</p>
                            <button type="button" className="btn btn-outline-primary">Add to Card</button>
                            <button type="button" className="btn btn-outline-primary ml-2">Go to Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};