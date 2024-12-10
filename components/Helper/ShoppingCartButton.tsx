'use client'
import {CiShoppingBasket} from "react-icons/ci";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import ProductCard from "@/components/Helper/ProductCards/ProductCard";
import CartSlidebar from "@/components/Helper/CartSlidebar";

const ShoppingCartButton = () => {

    const items = useSelector((state: RootState) => state.cart.items)
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0)


    return (
        <Sheet>
            <SheetTrigger>
                <div className='relative'>
            <span
                className="absolute -top-1 -right-2 w-6 h-6 bg-cyan-500 flex justify-center items-center flex-col text-xs text-white rounded-full ">{totalQuantity}</span>
                    <CiShoppingBasket size={30} cursor="pointer" className="text-cyan-900"/>
                </div>
            </SheetTrigger>
            <CartSlidebar items={items} />
        </Sheet>
    )
}

export default ShoppingCartButton;