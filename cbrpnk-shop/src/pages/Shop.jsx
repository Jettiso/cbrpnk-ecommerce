import React from "react";

import Sidebar from "../components/Sidebar";
import Products from "../components/Products";

const Shop = () => {
	return (
        <main className="flex p-4 w-full gap-12">

        <Sidebar />
        <Products />

        </main>
        
    );
};

export default Shop;
