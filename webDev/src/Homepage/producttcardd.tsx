import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useEffect, useState} from "react";

const ProducttCardd = ({ menuData }) => {



    const useApiCall = useMutation({
        mutationKey: ["POST_CART_DATA"],
        mutationFn: (payload) => {
            // Update the endpoint and headers according to your backend requirements
            return axios.post("http://localhost:8080/cart/save", payload);
        },onSuccess:()=>{
            alert("Item added to cart successfully")
        }
    });

    const onSubmit = (itemId, total_price) => {
        // Create the payload with itemId, userId, itemPrice, and quantity
        const payload = {
            itemId,
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


    return (
        <>
            <div className={"collection-body"}>
                <section className="product-list">
                    {menuData && menuData.length > 0 ? (
                        menuData.map((curElem: any) => (
                            <div className="product-card" key={curElem?.id}>
                                <div className="">
                                    <div className="">
                                        {/*<span className="category-sheet">{curElem?.category?.name}</span>*/}
                                        <img src={'data:image/jpeg;base64,'+curElem?.itemImage} alt={curElem?.itemName} className="product-image" />
                                        <div className="product-details">
                                            <p className="product-name">{curElem?.itemName}</p>
                                            <p className="product-price">Rs. {curElem?.itemPrice}</p>
                                        </div>
                                        <div className={"product-actions"}>
                                            <button className="add-to-cart-button"
                                                    onClick={() => user ? onSubmit(curElem.id, curElem.itemPrice) : showLoginPopup()}>Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No menu items available</div>
                    )}
                </section>
            </div>
        </>
    );
};

export default ProducttCardd;