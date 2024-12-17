'use client'
import {Button} from "@/components/ui/button";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {Product} from "@/typing";
import {addItem} from "@/store/cartSlice";
import {useToast} from "@/hooks/use-toast";
import Link from "next/link";
import useCart from "@/hooks/useCart";


const AddToCart = ({product}: { product: Product }) => {

    const {addToCart} = useCart()


    return (<div>
        <Button className="bg-cyan-500  hover:bg-[#8964b5] px-8 text-lg" onClick={() => addToCart(product)}> Add
            To Cart </Button>

    </div>)
}

export default AddToCart;