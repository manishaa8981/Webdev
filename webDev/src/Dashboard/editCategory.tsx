import { useEffect } from "react";
import { toast, ToastContainer, ToastContentProps } from "react-toastify";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import SidebarMenu from "./sidebar.tsx";
import "./editCategory.css";

const EditCategory = () => {
    const navigate = useNavigate();

    const useApiCall = useMutation({
        mutationKey:["POST_CATEGORY_MANAGECATEGORY"],
        mutationFn:(payload:any)=>{
            console.log(payload)
            return axios.post("http://localhost:8081/category/updateCategory",payload)
        },onSuccess: () => {
            notify();
            reset();
            navigate("/category");
        }
    })

    const onSubmit=(value:any)=>{
        useApiCall.mutate(value)
    }

    //To update
    const{pk_id} = useParams();

    const{data:getByIdApi}=useQuery({
        queryKey:["GET_BY_ID_CATEGORY_API"],
        queryFn(){
            return axios.get("http://localhost:8081/category/updateCategory/getById/"+pk_id)
        },enabled:!!pk_id
    })

    //hitting server on port 8081
    const{register,
        handleSubmit,
        formState
        ,reset}=useForm({values:getByIdApi?.data});

    const{errors} = formState;

    //Toast
    const notify = () =>toast.success('Category Updated Successfully', {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    // const navigate = useNavigate();
    // const { pk_id } = useParams();
    // const location = useLocation();
    // const currentLocation = location.pathname;
    //
    // const { register, handleSubmit, formState, reset } = useForm();
    // const { errors } = formState;
    //
    // const useApiCall = useMutation({
    //     mutationKey: ["POST_CATEGORY_MANAGECATEGORY"],
    //     mutationFn: (payload) => axios.post("http://localhost:8081/category/updateCategory", payload),
    //     onSuccess: () => {
    //         notifySuccess("Category Updated Successfully");
    //         reset();
    //         navigate("/category");
    //     },
    //     onError: (error) => {
    //         console.error("Mutation Error:", error);
    //         notifyError("Failed to update category. Please try again.");
    //     },
    // });
    //
    // const onSubmit = (data) => {
    //     useApiCall.mutate(data);
    // };
    //
    // const { data: categoryData } = useQuery({
    //     queryKey: ["GET_BY_ID_CATEGORY_API", pk_id],
    //     queryFn: () => axios.get(`http://localhost:8081/category/updateCategory/findById/${pk_id}`),
    //     enabled: !!pk_id,
    // });
    //
    // useEffect(() => {
    //     if (categoryData) {
    //         reset(categoryData);
    //     }
    // }, [categoryData, reset]);
    //
    // const notifySuccess = (message) => {
    //     toast.success(message, {
    //         position: "top-center",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //     });
    // };
    //
    // const notifyError = (message) => {
    //     toast.error(message, {
    //         position: "top-center",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //     });
    // };

    return (
        <>
            <SidebarMenu activePage={currentLocation} />
            <div className="edit-category-modal">
                <div className="edit-category-modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Edit Category</h2>
                        <div className={"category-id-number"}>
                            <label>ID: {pk_id}</label>
                        </div>
                        <div className={"category-name2"}>
                            <label>Category Name</label>
                            <input type={"text"} placeholder={"Enter Category Name"} {...register("name", { required: "Category Name is required!!" })} />
                            <h6 style={{ paddingLeft: "3px" }}>{errors?.name?.message}</h6>
                        </div>
                        <div className={"category-name-add-btn2"}>
                            <button type={"submit"}>Update</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default EditCategory;
