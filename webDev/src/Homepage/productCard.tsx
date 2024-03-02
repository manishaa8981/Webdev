import React, {useEffect, useState} from 'react';
import './homenarbar.css'; // Import the CSS file containing the component styles
import { Heart } from "lucide-react";
import axios from "axios";
import {useMutation, useQuery} from "@tanstack/react-query";
import {useParams} from "react-router-dom";

const ProductCard = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userDetails"));
        setUser(data);
    }, [localStorage.getItem("userDetails")]);
    console.log(user?.id)

    const useApiCall = useMutation({
        mutationKey: ["POST_CART_DATA"],
        mutationFn: (payload) => {
            // Update the endpoint and headers according to your backend requirements
            return axios.post("http://localhost:8081/cart/save", payload);
        }, onSuccess: () => {
            alert("Product added to cart successfully")
        }
    });
    const onSubmit = (productId, total_price) => {
        // Create the payload with itemId, userId, itemPrice, and quantity
        const payload = {
            productId,
            userId: user.id,
            total_price,
            quantity: 1, // Initial quantity
        };
        console.log(payload)
        // Call the mutation function with the payload

        useApiCall.mutate(payload);
    };

    const showLoginPopup = () => {
        alert("Please log-in to add items to your cart."); // You can replace this with a modal or other UI component
    };


    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:8081/category/getAll');
            setCategories(response.data);
            console.log('Fetched Categories:', response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };


    useEffect(() => {
        fetchCategories();
    }, []);


    const [product, setProduct] = useState([]);

    const fetchProduct = async () => {
        try {
            const response = await axios.get('http://localhost:8081/product/getAll');
            setProduct(response.data);
            console.log('Fetched Products:', response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };


    useEffect(() => {
        fetchProduct();
    }, []);


    // const {productId} = useParams();
    // const {data: productitem} = useQuery({
    //     queryKey: ["GET_COMIC_ITEM", productId],
    //     queryFn() {
    //         return axios.get(`http://localhost:8081/product/getAll`,);
    //     }
    // });
    //
    // console.log(productId)
    // const productitem = productitem?.data.filter(product => product.productId === (productId));
    return (
        <>
            <h1 className="collection-heading">Our Collection</h1>
            <h2 className="category-heading">Category</h2>
            <div className="collection-body">
                <div className="category-list">
                    <div className="category-sheet">
                        {/*<h1 className="category-heading">Category</h1>*/}
                        <ul className="category-sublist">
                            {Array.isArray(categories) && categories.length > 0 ? (
                                categories.map((category) => (
                                    <div key={category.id} className="category-item">
                                        <div className="text-left">
                                            <p className="">{category.name}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>No categories found</div>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="product-list">
                    {Array.isArray(product) && product.length > 0 ? (
                        product.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="image-container">
                                    <img
                                        className="product-image"
                                        src={'data:image/jpeg;base64,' + product.image}
                                        loading="lazy"
                                        alt="Bluetooth Headset"
                                    />
                                </div>
                                <div className="product-details">
                                    <p className="product-name">{product.name}</p>
                                    <p className="product-price">Rs {product.old_price} </p>
                                </div>
                                <div className="product-actions">
                                    <button className="add-to-cart-button"
                                            onClick={() => user ? onSubmit(product.name, product.old_price) : showLoginPopup()}>Add
                                        to Cart
                                    </button>
                                    <div className="heart-icon">
                                        <span><Heart/></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No products found</div>
                    )}
                </div>
            </div>
        </>
    );
}
export default ProductCard