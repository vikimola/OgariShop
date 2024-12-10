import {addItem, CartItem, removeItem} from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import {Button} from "@/components/ui/button";
import {useDispatch} from "react-redux";
import AddCart from "@/app/(root)/product/product-details/[id]/add-cart";
import {useToast} from "@/hooks/use-toast";
import {Product} from "@/typing";
import Link from "next/link";
import useCart from "@/components/Helper/useCart";

const CartProductCard = ({item}: { item: CartItem }) => {

    const {addToCart, removeFromCart} = useCart()


    return (
        <div key={item.id} className="w-full  text-cyan-900 mt-4 mb-4 px-2 ">
            <div className="flex justify-evenly items-center gap-2 mb-4 ">

                <div
                    className="relative w-[40%] h-[40%] sm:w-[5rem] sm:h-[5rem] md:w-[6rem] md:h-[6rem] lg:w-[7rem] lg:h-[7rem] min-w-[4rem] min-h-[4rem]  ">
                    <Image src={item.image} alt='image' fill
                           className=" object-contain"/>
                </div>

                <Link href={`/product/product-details/${item.id}`} >
                    <div className="line-clamp-2 w-full text-center ">{item.title}</div>
                </Link>
                <div>
                    x{item.quantity}
                </div>

                <div className="text-center">
                    {Math.round((item.price * 0.8) * 100) / 100} €
                </div>
                <div className="flex flex-col justify-around items-center gap-2 ">
                    <Button className="  bg-[#d9cde7] hover:bg-[#a386c5]" onClick={() => addToCart(item)}>
                        Add
                    </Button>

                    <Button className=" bg-cyan-500 hover:bg-cyan-700 p-2 "
                            onClick={() => removeFromCart(item.id)}>
                        Remove
                    </Button>

                </div>
            </div>


        </div>
    )
}

export default CartProductCard;