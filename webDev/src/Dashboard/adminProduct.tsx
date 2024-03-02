import "./product.css"
import  { useEffect, useState } from "react";
import {FaPlus, FaSearch} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";
import SidebarMenu from "./sidebar.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {CiEdit} from "react-icons/ci";
import {MdDelete} from "react-icons/md";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";


const AdminProduct = () =>  {

    const[search,setSearch] = useState('');
    const navigate = useNavigate();

    // Add Items modal
    const [modal, setModal] = useState(false);

    const toggleItemModal = () => {
        if (modal) {
            reset(); // Reset the form
        }
        setModal(!modal); // Toggle the modal
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    // GSAP cdn for animation
    useEffect(() => {
        if (modal) {
            gsap.from(".add-item-modal", {
                y: -50,
                duration: 0.3,
                opacity: 0,
            });
        }
    }, [modal]);

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;


    //hitting server on port 8080
    const{register,
        handleSubmit,
        formState
        ,reset}=useForm();

    const{errors} = formState;

    // const useApiCall = useMutation({
    //     mutationKey:["POST_ITEM_DATA"],
    //     mutationFn:async (payload)=>{
    //         try {
    //             console.log('Payload',payload);
    //             const response = await axios.post("http://localhost:8081/product/save", payload, {
    //                 headers:{authorization:"Bearer "+localStorage.getItem("token")}});
    //             return response.data;
    //         } catch (error) {
    //             console.error("Error:", error);
    //
    //             throw error;
    //         }        },onSuccess: () => {
    //         notify();
    //         reset();
    //         refetch();
    //     }
    // })

    const useApiCall = useMutation({
        mutationKey: ["POST_PRODUCT_CREATE"],
        mutationFn: (payload) => {
            console.log(payload);
            return axios.post("http://localhost:8081/product/save", payload ,{headers:{authorization:"Bearer "+localStorage.getItem("token")}}
            );
        },
        onSuccess() {
            navigate("/product");
        }
    });

    const onSubmit=(value)=>{
        console.log(value);
        const fd= new FormData();
        // fd.append("itemId",value?.product.id)
        fd.append("itemName",value?.name)
        fd.append("itemPrice",value?.old_price)
        fd.append("categoryId",value?.categoryId)
        if (value?.productImage) {
            fd.append("itemImage", value.image[0]);
        }
        useApiCall.mutate(fd)
    }


    // Fetching data from API
    const{data,refetch} = useQuery({
        queryKey:["GET_ITEM_DATA"],
        queryFn(){
            return axios.get("http://localhost:8081/product/getAll",
                {headers:{authorization:"Bearer "+localStorage.getItem("token")}}
            );
        }
    })

    // const product = data || [];
    // const filteredItemData = product.filter(product =>
    //     product.productName.toLowerCase().includes(search.toLowerCase())
    // );

    // Searching data
    const filteredItemData = data?.data.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.id.toString().includes(search.toLowerCase()) ||
        product.category?.name.toLowerCase().includes(search.toLowerCase())
    );

    const { data: categories } = useQuery({
        queryKey: ["GET_CATEGORIES"],
        queryFn() {
            return axios.get("http://localhost:8081/category/getAll");
        },
    });

    //Deleting data
    const deleteByIdApi=useMutation(
        {
            mutationKey:["DELETE_ITEM_BY_ID"],
            mutationFn:async (id:any) =>{
                try {
                    await axios.delete("http://localhost:8081/product/delete/"+id, {
                        headers:{authorization:"Bearer "+localStorage.getItem("token")}});
                    refetch();
                } catch (error) {
                    console.error("Error:", error);
                    throw error;
                }            },onSuccess(){refetch()}
        }
    )

    console.log(filteredItemData)

    const notify = () => toast.success('Product Added Successfully', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });

    return(
        <div>
            <div className={"add-item-page"}>
                <div className={"itempage-left"} >
                    <SidebarMenu activePage={currentLocation} />
                </div>

                <div className={"itempage-right"}>
                    <header className={"itempage-header"}>
                        <h1>Products</h1>

                        <div className={"search-wrapper2"}>
                            <span><FaSearch /></span>
                            <input type={"search"} placeholder={"Search Products"} value={search} onChange={(e)=>setSearch(e.target.value)}/>
                        </div>
                    </header>

                    <div className={"item-main-content"}>
                        <div className={"i-main-content"}>
                            <div className={"btn3"}>
                                <button type={"button"} onClick={toggleItemModal}><span><FaPlus style={{fontSize:"1.5rem",marginBottom:"-1px",color:"white"}}/></span></button>
                            </div>

                            <div className={"table-container3"}>
                                <div className={"card-body3"}>
                                    <table className={"table-bordered3"}>
                                        <thead>
                                        <tr>
                                            <th className={"id-box3"}>Id</th>
                                            <th className={"name-box3"}>Name</th>
                                            <th className={"category-box3"}>Category</th>
                                            <th className={"image-box3"}>Image</th>
                                            <th className={"price-box3"}>Price</th>
                                            <th className={"action-box3"}>Action</th>
                                            {/*<th className={"status-box3"}>Status</th>*/}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            filteredItemData
                                                ?.sort((a, b) => a.id - b.id)
                                                .map((i) =>{
                                                    return(
                                                        <tr key={i?.id}>
                                                            <td>{i?.id}</td>
                                                            <td>{i?.name}</td>
                                                            <td>{i?.category?.name}</td>
                                                            <td style={{display:"flex",justifyContent:"center"}}>
                                                                <img src={'data:image/jpeg;base64,'+i?.image} width={"45px"}/>
                                                            </td>
                                                            <td>{i?.old_price}</td>
                                                            <td>
                                                                <button className={"edit-btn3"} onClick={()=>{
                                                                    navigate("/editItem/"+i?.id);
                                                                }}><CiEdit />
                                                                </button>
                                                                <button className={"delete-btn3"} onClick={() => {
                                                                    if (window.confirm("Are you sure you want to delete this category?")) {
                                                                        deleteByIdApi.mutate(i?.id);
                                                                    }
                                                                }}><MdDelete />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {modal && (
                <div className="add-item-modal">
                    <div onClick={toggleItemModal} className="add-item-overlay"></div>
                    <div className="add-item-modal-content">
                        <h2>Add Item</h2>
                        <button className="close-add-item-btn" onClick={toggleItemModal}>
                            <IoClose />
                        </button>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={"select-category"}>
                                <label>Category</label>
                                <select id={"category-option"}{...register("categoryId", { required: true })}>
                                    <option>Select a Category</option>
                                    {categories &&
                                        categories.data.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div className={"item-name"}>
                                <label>Item Name</label>
                                <input type={"text"} placeholder={"Enter item Name"} {...register("name",{required:"Item Name is required!!"})}/>
                                <h6 style={{paddingLeft:"3px"}}>{errors?.name?.message}</h6>
                            </div>
                            <div className={"item-price"}>
                                <label>Price</label>
                                <input type={"number"} placeholder={"Enter the Price"} {...register("old_price",{required:"Price is required!!"})}/>
                                <h6 style={{paddingLeft:"3px"}}>{errors?.old_price?.message}</h6>
                            </div>
                            <div className={"item-image"}>
                                <label>Image</label>
                                <span>
                                    <input type={"file"} placeholder={"Add image here"} {...register("image",{required:"Item Image is required!!"})}/>
                                     <h6 style={{paddingLeft:"3px"}}>{errors?.image?.message}</h6>
                                </span>
                            </div>

                            <div className={"item-name-add-btn"}>
                                <button type={"submit"}>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};


export default AdminProduct
