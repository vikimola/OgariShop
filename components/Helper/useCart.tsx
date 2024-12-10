import {Product} from "@/typing";
import {addItem, removeItem} from "@/store/cartSlice";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import React from "react";
import {useToast} from "@/hooks/use-toast";
import {useDispatch} from "react-redux";


const useCart = () => {

    const {toast} = useToast()

    const dispatch = useDispatch()

    const addToCart = (product: Product) => {
        dispatch(addItem(product))
        toast({
            title: "Product added to Cart!",
            description: (
                <div className="text-sm text-white text-center ">

                    <Link
                        href="/cart"
                        className="text-white  hover:underline"
                    >
                        <Button className="p-2  border-[1px] bg-[#d9cde7] hover:bg-[#a386c5]">View your cart</Button>
                    </Link>

                </div>
            ),
            variant: "success"
        })
    }

    const removeFromCart=(id:number)=>{
        dispatch(removeItem({id}))
    }

    return(
        {
            addToCart, removeFromCart
        }
    )


}

export default useCart;