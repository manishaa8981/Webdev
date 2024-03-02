import HomeNavbar from "./homenavbar.tsx";
import "./cart.css";
import axios from "axios";
import {useMutation, useQuery} from "@tanstack/react-query";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import { IoClose } from "react-icons/io5";



const Cart = () => {
    const navigate = useNavigate();
    const { parss } = useParams();
    let price="0";
    let custom_id="0";

    // console.log(custom_id,"id")

    // Fetching data from API
    const{data:cartData,refetch} = useQuery({
        queryKey:["GET_CART_DATA"],
        queryFn(){
            return axios.get("http://localhost:8081/cart/getAll")
        }
    })

    // State to manage cart items
    const [cartItems, setCartItems] = useState(cartData?.data || []);

    // Function to update quantity in the cart
    const updateQuantity = (productId, newQuantity) => {
        // Update the quantity in the local state
        const updatedCartItems = cartItems.map((product) =>
            product.id === productId ? { ...product, quantity: newQuantity } : product
        );

        // Update the quantity on the server
        axios.put(`http://localhost:8081/cart/updateQuantity`, {
            id:productId,
            quantity: newQuantity,
        }).then(res=>{
            refetch()
        });

        // Update the local state and trigger a refetch if needed
        setCartItems(updatedCartItems);

    };

    //Deleting cart item by id
    const deleteByIdApi = useMutation(
        {
            mutationKey:["DELETE_CART_BY_ID"],
            mutationFn(id){
                return axios.delete(`http://localhost:8081/cart/deleteById/` + id);
            }
            ,onSuccess() {refetch()}
        }

    )

    // Calculate total cart price
    let cartTotal = cartData?.data.reduce(
        (total, product) => total + product.total_price * product.quantity,
        0
    );
    if (parss) {
        const id_priceArray = parss.split('+');
        custom_id = id_priceArray[0];
        price = id_priceArray[1];
        cartTotal=cartTotal+ +price;
    }
    console.log(cartTotal,"cartTotal")

    const handleGoBack = () => {
        // Use the goBack function to navigate to the previous page
        navigate(-1);
    };
    return (
        <>
            <HomeNavbar/>
            <div className={"cart-container"}>
                <div className={"cart-text-div"}><h1><b>Shopping Cart</b></h1>
                    <button onClick={handleGoBack} className={"cross-button"}>
                         <span>
                        <IoClose/>
                    </span>
                    </button>
                </div>
                <div className="half-hr"/>
                <div className={"cart-main-container"}>
                    <div className={"cart-heading-grid"}>
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                        <p>Remove</p>
                    </div>

                    <div className={"cart-items-container"}>
                        {
                            cartData?.data.map((i) => {
                                return (
                                    <div className={"items-info"} key={i?.id}>
                                        <div className={"title"}>
                                            <h3>{i?.product?.name}</h3>
                                        </div>

                                        <div className={"price"}>
                                            <h3>Rs. {i?.total_price}</h3>
                                        </div>

                                        <div className={"add-minus-quantity"}>
                                            <i className={"fas fa-minus minus"} onClick={() => {
                                                const newQuantity = Math.max(0, i?.quantity - 1);
                                                updateQuantity(i?.id, newQuantity);}}></i>
                                            <input type={"text"} value={i?.quantity} readOnly/>
                                            <i className={"fas fa-plus add"} onClick={() => {
                                                const newQuantity = i?.quantity + 1;
                                                updateQuantity(i?.id, newQuantity);}}></i>
                                        </div>

                                        <div className={"sub-total"}>
                                            Rs {+custom_id === i?.product.id ? (+price + i?.total_price) :
                                            i?.price ? i?.price * i?.quantity : i?.total_price * i?.quantity}
                                        </div>

                                        <div className={"remove-item"}>
                                            <i className="fas fa-trash-alt remove" style={{color: 'red'}} onClick={() => {
                                                if (window.confirm("Are you sure you want to delete this category?")) {
                                                    deleteByIdApi.mutate(i?.id);}}}></i>
                                        </div>
                                    </div>
                                )})}
                        <hr/>
                    </div>
                </div>
                <hr/>

                <div className={"CheckOut-Container"}>
                    <div className={"cart-total"}>
                        <h3> Cart Total: Rs. {cartTotal}</h3>
                        <Link to={"/"}>
                            <button className={"checkout-button"}>CHECKOUT</button>
                        </Link>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Cart;
