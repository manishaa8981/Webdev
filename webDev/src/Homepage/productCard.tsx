import React, {useEffect, useState} from 'react';
import './homenarbar.css'; // Import the CSS file containing the component styles
import { Heart } from "lucide-react";
import axios from "axios";

const ProductCard = () => {

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
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="product-card">
                            <div className="image-container">
                                <img
                                    className="product-image"
                                    src={"https://images.pexels.com/photos/6634649/pexels-photo-6634649.jpeg?auto=compress&cs=tinysrgb&w=600"}
                                    loading="lazy"
                                    alt="Bluetooth Headset"
                                />
                            </div>
                            <div className="product-details">
                                <p className="product-name">Bluetooth Headset</p>
                                <p className="product-price">2,900 THB</p>
                            </div>
                            <div className="product-actions">
                                <button className="add-to-cart-button">Add to cart</button>
                                <div className="heart-icon">
                                    <Heart/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductCard;
