import {CiShoppingBasket} from "react-icons/ci";
import React from "react";

const ShoppingCartButton = () =>{
    return(
        <div className='relative'>
            <span className="absolute -top-1 -right-2 w-6 h-6 bg-red-600 flex justify-center items-center flex-col text-xs text-white rounded-full ">6</span>
            <CiShoppingBasket size={30}  cursor="pointer"  className="text-cyan-900"/>
        </div>
    )
}

export default ShoppingCartButton;