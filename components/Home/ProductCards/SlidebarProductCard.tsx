import {addItem, CartItem, removeItem} from "@/store/cartSlice";
import Image from "next/image";
import React from "react";
import {Button} from "@/components/ui/button";
import {useDispatch} from "react-redux";
import {useToast} from "@/hooks/use-toast";
import {Product} from "@/typing";
import Link from "next/link";
import {SheetClose} from "@/components/ui/sheet";
import UseCart from "@/hooks/useCart";
import useCart from "@/hooks/useCart";

const SlidebarProductCard = ({item}: { item: CartItem }) => {

    const {addToCart, removeFromCart} = useCart()


    return (
        <div key={item.id} className="w-full  text-cyan-900 mt-4 mb-4 ">
            <div className="flex justify-center items-center gap-2 mb-4 ">

                <div
                    className="relative w-[40%] h-[40%] sm:w-[30%] sm:h-[30%] md:w-[35%] md:h-[25%] lg:w-[15%] lg:h-[15%] min-w-[3rem] min-h-[3rem]">
                    <Image src={item.image} alt='image' fill
                           className=" object-contain"/>
                </div>

                <Link href={`/product/product-details/${item.id}`}>
                    <div className="line-clamp-2  w-full text-center">
                        {item.title}</div>
                </Link>

                <div>
                    x{item.quantity}
                </div>

                <div>
                    {Math.round((item.price * 0.8) * 100) / 100}€
                </div>
                <div className="flex flex-col justify-around items-center gap-2">
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
export default SlidebarProductCard;