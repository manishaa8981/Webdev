import React from "react";

interface NavbarProps {
    filterItem: (category: string) => void;
    menuList: string[];
}

const ProductNavbar: React.FC<NavbarProps> = ({ filterItem, menuList }) => {

    // console.log(menuList)
    return (
        <>
            <nav className="category-list">
                {/*<h2>Categories</h2>*/}
                <div className="category-sublist">
                    {menuList.map((curElem) => (
                        <button
                            key={curElem}
                            className="category-item"
                            onClick={() => filterItem(curElem)}>
                            {curElem}
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default ProductNavbar;