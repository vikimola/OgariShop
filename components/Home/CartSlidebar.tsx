import {SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import ProductCard from "@/components/Home/ProductCards/ProductCard";
import React from "react";
import {CartItem} from "@/store/cartSlice";
import SlidebarProductCard from "@/components/Home/ProductCards/SlidebarProductCard";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import TotalPrice from "@/components/Helper/TotalPrice";
import totalPrice from "@/components/Helper/TotalPrice";

const CartSlidebar = ({items}: { items: CartItem[] }) => {

    return (
        <SheetContent className="overflow-auto bg-[#f7fdff]">
            <SheetHeader>

                <SheetTitle><span className="text-cyan-900 text-2xl">Shopping Cart</span> </SheetTitle>
                <div className="flex items-center justify-center   ">
                    <hr className="h-px mb-1 w-[95vw]   border-0 bg-[#e5ddee] bg-opacity-75"/>
                </div>
            </SheetHeader>

            <SheetDescription className=" flex flex-col justify-center items-center">
                {items.map(item => <div key={item.id}><SlidebarProductCard item={item}/></div>)}
            </SheetDescription>

            {items.length > 0 && <div className="flex items-center justify-center   ">
                <hr className="h-px mb-1 w-[95vw]   border-0 bg-[#e5ddee] bg-opacity-75"/>
            </div>}


            <TotalPrice items={items}/>

            <div className="mt-auto w-full">

                <SheetClose className="w-full" asChild>
                <Link href="/cart">
                        <Button className="w-full mb-6 mt-6 bg-[#d9cde7] hover:bg-[#a386c5]">
                            View All Cart
                        </Button>
                    </Link>
                </SheetClose>

            </div>

        </SheetContent>
    )
}

export default CartSlidebar;