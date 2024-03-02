// import React, { useState } from "react";
// import { Table, Container, Button } from "react-bootstrap";
// import "./ViewCustomer.css";
// import { useQuery, useMutation } from "react-query";
// import axios from "axios";
// import { useForm } from "react-hook-form";
//
// const ViewCustomer = () => {
//     const { register, handleSubmit, formState, reset } = useForm();
//     const { errors } = formState;
//
//
//     // Fetching User Data from API
//     const{data:userdata,refetch} = useQuery({
//         queryKey:["GET_USER_DATA"],
//         queryFn(){
//             return axios.get("http://localhost:8082/user/getAll", {
//                 headers: {
//                     Authorization: "Bearer " + localStorage.getItem("token"),
//                 },
//             })
//         }
//     })
//
//     const deleteUserMutation = useMutation(
//         (id) =>
//             axios.delete(http://localhost:8082/user/deleteById/${id}, {
//     headers: {Authorization: "Bearer " + localStorage.getItem("token"),
//     },
// }),
// {
//     onSuccess: () => {
//         refetch();
//     },
// }
// );
//
// //Deleting comic Item
// const deleteByIdApi=useMutation(
//     {
//         mutationKey:["DELETE_USER_BY_ID"],
//         mutationFn(id){
//             return axios.delete("http://localhost:8082/user/deleteById/"+id, {
//                 headers: {
//                     Authorization: "Bearer " + localStorage.getItem("token"),
//                 },
//             });
//         }
//         ,onSuccess(){refetch()}
//     }
// )
//
// const updateUserStatusMutation = useMutation(
//     ({ id, active }) =>
//         axios.put(
//             http://localhost:8082/user/updateStatus/${id},
// { active },
// {
//     headers: {
//         Authorization: "Bearer " + localStorage.getItem("token"),
//     },
// }
// ),
// {
//     onSuccess: () => {
//         refetch();
//     },
// }
// );
//
// const [search, setSearch] = useState("");
//
// //Searching users
// const filteredData = userdata?.data.filter((user) => {
//     const userNameMatch = user.username.toLowerCase().includes(search.toLowerCase());
//     return search.toLowerCase() === '' ? true : (userNameMatch );
// });
//
// const handleDeleteUser = (id) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//         deleteUserMutation.mutate(id);
//     }
// };
//
// const handleUpdateUserStatus = (id, active) => {
//     const newActiveStatus = !active; // Toggle the active status
//     if (
//         window.confirm(
//             `Are you sure you want to ${
//                 newActiveStatus ? "activate" : "deactivate"
//             } this user?`
//         )
//     ) {
//         updateUserStatusMutation.mutate({ id, active: newActiveStatus });
//     }
// };
//
// return (
//     <Container style={{ color: "hotpink" }}>
//         <div className="view_order mt-4">
//             <div className="search-product">
//                 <input
//                     type="search"
//                     id="searchCategory"
//                     placeholder="Search for customer..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//                 <button className="barsearch">Search</button>
//             </div>
//             <h1>Manage Customer</h1>
//             <Table striped bordered hover>
{/*                <thead>*/}
{/*                <tr>*/}
{/*                    <th>Customer Name</th>*/}
{/*                    <th>Email</th>*/}
{/*                    <th>Contact Number</th>*/}
{/*                    <th>Action</th>*/}
{/*                </tr>*/}
{/*                </thead>*/}
{/*                <tbody>*/}
{/*                { filteredData && filteredData.length > 0 ? (*/}
{/*                    filteredData?.map((user) => (*/}
{/*                        <tr key={user?.id}>*/}
{/*                            <td>{user?.fullname}</td>*/}
{/*                            <td>{user?.email}</td>*/}
{/*                            <td>{user?.contactNumber}</td>*/}

{/*                            <td>*/}
{/*                                <Button*/}
{/*                                    variant="danger"*/}
{/*                                    onClick={() => {*/}
{/*                                        if (window.confirm("Are you sure you want to delete this item?")) {*/}
{/*                                            deleteByIdApi.mutate(user?.id);*/}
{/*                                        }*/}
{/*                                    }}*/}
{/*                                >*/}
{/*                                    Delete*/}
{/*                                </Button>{" "}*/}

{/*                            </td>*/}
{/*                        </tr>*/}
{/*                    ))*/}
{/*                ) : (*/}
{/*                    <tr>*/}
{/*                        <td colSpan="4">No users found</td>*/}
{/*                    </tr>*/}
{/*                )}*/}
{/*                </tbody>*/}
{/*            </Table>*/}
{/*        </div>*/}
{/*    </Container>*/}
{/*);*/}
{/*};*/}

{/*export default ViewCustomer;*/}
























import SidebarMenu from "./sidebar.tsx";
import {useLocation} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useState} from "react";
import "./user.css"

const User=() =>{

    const location = useLocation();
    const currentLocation = location.pathname;

    const[search, setSearch] = useState('');


    console.log('Token Check:',localStorage.getItem("token"));

    // Fetching data from API
    const{data,refetch} = useQuery({
        queryKey:["GETCUSTOMERDATA"],
        queryFn(){
            return axios.get("http://localhost:8081/user/getAll",{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
        }
    })

    //Searching data
    // Filtered data based on the search input (name, email, or ID)
    const filteredData = data?.data.filter((user) =>
        user.id.toString().includes(search.toLowerCase()) || // Include ID
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    // Dynamically calculate the number of customers
    const userLength = filteredData ? filteredData.length : 0;

    //Deleting data
    const deleteUserByIdApi=useMutation(
        {
            mutationKey:["DELETE_CUSTOMER_BY_ID"],
            mutationFn(id:number){
                return axios.delete("http://localhost:8081/user/deleteById/"+id ,{
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                });
            },onSuccess(){refetch()}
        }
    )

    return(
        <>
            <div className={"customer-page"}>
                <SidebarMenu activePage={currentLocation}/>

                <div className={"customer-page-right"}>
                    <header className={"customer-page-header"}>
                        <h1>Users</h1>

                        <div className={"search-wrapper2"} style={{width:"16rem"}}>
                            <span><FaSearch /></span>
                            <input type={"search"} placeholder={"Search Customers"} value={search} onChange={(e)=>setSearch(e.target.value)}/>
                        </div>
                    </header>
                    <div className={"customer-page-main"}>
                        <div className={"no-of-customer"}>
                            <h2>No. of Customer: {userLength}</h2>
                        </div>
                        <table className={"customer-table"}>
                            <thead>
                            <tr>
                                <th className={"id-box3"}>ID</th>
                                <th className={"name-box3"}>Name</th>
                                <th className={"name-box2"}>Email</th>
                                <th className={"delete-box2"}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {filteredData?.map((user) => (
                                <tr key={user?.id}>
                                    <td>{user?.id}</td>
                                    <td>{user?.fullName}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        <button
                                            className={"delete-btn2"}
                                            onClick={() => {
                                                if (window.confirm(
                                                    "Are you sure you want to delete this customer?"))
                                                {deleteUserByIdApi.mutate(user?.id);}
                                            }}>
                                            <MdDelete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default User