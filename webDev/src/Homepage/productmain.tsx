import { useState, useEffect } from "react";
import "./login-signup.css";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import HomeNavbar from "./homenavbar.tsx";
import ProductNavbar from "./productnavbar.tsx";
import ProducttCardd from "./producttcardd.tsx";

interface MenuItem {
    category: {
        name: string;
    };
}

const ProductMain: React.FC = () => {
    const location = useLocation();
    const currentLocation = location.pathname;

    const { data: Menu2 } = useQuery({
        queryKey: ["GET_ITEM_DATA"],
        queryFn() {
            return axios.get<MenuItem[]>("http://localhost:8080/item/findAll");
        },
    });

    const [menuData, setMenuData] = useState<MenuItem[]>([]);
    const [menuList, setMenuList] = useState<string[]>([]);

    useEffect(() => {
        if (Menu2?.data) {
            setMenuData(Menu2.data);

            const uniqueCategories = [
                ...new Set(
                    Menu2.data.map((curElem) => curElem?.category?.name || "Uncategorized")
                ),
                "All",
            ];
            setMenuList(uniqueCategories);
        }
    }, [Menu2?.data]);

    const filterItem = (category: string) => {
        if (category === "All") {
            setMenuData(Menu2?.data || []);
            return;
        }

        const updatedList = Menu2?.data?.filter((curElem) => {
            return curElem?.category?.name === category;
        }) || [];

        setMenuData(updatedList);
    };

    return (
        <>
            <div className={"menu-page-div"}>
                <HomeNavbar activePage={currentLocation} />
                <h1 style={{fontWeight:'bold' , fontSize: '50px'}}>Our Collection</h1>
                <h2 className={"category-title"}>Category</h2>
                <div className={"menu-contents"}>
                    <ProductNavbar filterItem={filterItem} menuList={menuList}  />
                    <ProducttCardd menuData={menuData} />
                </div>
            </div>
        </>
    );
};

export default ProductMain;