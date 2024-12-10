'use client'
import {CartItem} from "@/store/cartSlice";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import SlidebarProductCard from "@/components/Helper/ProductCards/SlidebarProductCard";
import React, {useState} from "react";
import Image from "next/image";
import CartProductCard from "@/components/Helper/ProductCards/CartProductCard";
import TotalPrice from "@/components/Helper/TotalPrice";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const CartPage = () => {

    const items: CartItem[] = useSelector((state: RootState) => state.cart.items)

    const totalPrice = items.reduce((total, item) => total += (item.price * 0.8) * item.quantity, 0)
    const deliveryFee = totalPrice >= 100 ? 0 : 10;

    const totalPriceWithDelivery = (totalPrice + deliveryFee).toFixed(2)


    return (
        <div className="text-cyan-900 min-h-[72vh]">

            <br/>
            <br/>


            <div className="flex flex-col justify-around items-center gap-2 ">
                {(items.length === 0) ?
                    <div>
                        <div className=" h-[80vh] w-[70vw]  relative  ">
                            <p className="text-cyan-900 text-2xl mt-4 text-center">Shopping Cart is Empty!</p>
                            <br/>
                            <Image src="/images/emptyCartCat.png" alt="Empty basket" className="object-contain " fill/>
                        </div>
                    </div>
                    :
                    <div>


                        <p className="text-cyan-900 text-3xl text-bold mt-4 text-center">Your Cart - Summary</p>
                        <br/>
                        <hr className="h-px mb-1 w-[95vw]   border-0 bg-[#e5ddee] bg-opacity-75"/>
                        <br/>


                        {items.map(item => <div className="w-full" key={item.id}><CartProductCard item={item}/></div>)}
                        <br/>
                        <hr className="h-px mb-1 w-[95vw]   border-0 bg-[#e5ddee] bg-opacity-75"/>

                        <br/>
                        <div className="flex flex-col items-center align-center">
                            <p className="text-cyan-900 text-2xl  mt-4 ">Order Summary</p>

                            <hr className="h-px w-[40vw] mx-auto  border-0 bg-[#e5ddee] bg-opacity-75 mt-4 mb-4"/>

                            <TotalPrice items={items}/>

                            {(totalPrice >= 100) ?
                                <p className="text-cyan-900 text-xl ml-8 "> Delivery fee: <span
                                    className="text-cyan-700 text-xl">Free</span></p> :
                                <p className="text-cyan-900 text-xl ml-8 "> Delivery fee: 10 €</p>}


                            <hr className="h-px  w-[40vw] mx-auto  border-0 bg-[#e5ddee] bg-opacity-75  mt-4 mb-4"/>

                            <p className="text-cyan-800 text-3xl text-bold mt-4 ">Total: {totalPriceWithDelivery} €</p>
                            <br/>
                            <Link href="/delivery" ><Button className="bg-[#d9cde7] hover:bg-[#a386c5] "> Next Step</Button></Link>


                        </div>


                    </div>
                }
            </div>


            <br/>
            <br/>


        </div>
    )
}

export default CartPage;