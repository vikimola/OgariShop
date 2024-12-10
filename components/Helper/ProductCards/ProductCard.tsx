'use client'
import Hero from "@/components/Home/Hero";
import Category from "@/components/Home/Category";
import AllProduct from "@/components/Home/AllProduct";
import {Product} from "@/typing";
import Image from "next/image";
import {FaEuroSign, FaRegHeart, FaRegStar, FaShoppingBasket, FaStar} from "react-icons/fa";
import React from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {CiHeart} from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "@/store/cartSlice";
import {RootState} from "@/store/store";
import {useToast} from "@/hooks/use-toast";
import {ToastAction} from "@radix-ui/react-toast";
import useCart from "@/components/Helper/useCart";


type Props = {
    product: Product
}


const ProductCard = ({product}: Props) => {

    const num = Math.round(product.rating.rate)
    const ratingArr = new Array(5).fill(0)
    const {addToCart} = useCart()


    return (
        <div key={product.id}
             className="p-4 height-[150px] width-[200px]  flex flex-col justify-between items-center rounded-xl ">

            <Link href={`/product/product-details/${product.id}`}>
                <h4 className=" rounded-lg cursor-pointer text-center hover:scale-110 transition-all duration-300 text-cyan-900 line-clamp-2 ">{product.title}</h4>
            </Link>

            <div className="w-[10rem] h-[10rem] relative">
                <Image src={product.image} alt='image' fill
                       className=" object-contain"/>
            </div>

            <p className="mt-1 text-xs capitalize text-cyan-900">{product.category}</p>

            <div>
                <div className="flex justify-start items-center ">
                    {ratingArr.map((item, index) => (index < num ?
                            <FaStar key={Math.random() * 1000} color="#fcc200"/> :
                            <FaRegStar key={Math.random() * 1000} color="#fcc200"/>
                    ))}
                    <br/>
                    <p className=" flex justify-start items-center  text-xs capitalize text-cyan-900 ml-1"> ({product.rating.count})</p>
                </div>
            </div>

            <div className="flex justify-start items-baseline">
                <div className="flex justify-start items-baseline">
                    <p className="mt-1 text-md capitalize text-cyan-900 text-decoration: line-through opacity-70">{product.price}</p>
                    <p className=" ml-0.5 mt-1 text-md capitalize text-cyan-900 opacity-70">€</p>
                </div>
                <div className="flex justify-start items-baseline ml-1">
                    <p className="mt-1 text-md capitalize text-cyan-900 ">{Math.round((product.price * 0.8) * 100) / 100}</p>
                    <p className=" ml-0.5 mt-1 text-md capitalize text-cyan-900">€</p>
                </div>
            </div>

            <div className=" w-[80%] flex justify-evenly items-center">
                <Button className="bg-cyan-500 hover:bg-cyan-700 w-[40%]"
                        onClick={() => addToCart(product)}><FaShoppingBasket size={20}/></Button>
                <Button className="bg-[#d9cde7] hover:bg-[#a386c5] w-[40%]"><FaRegHeart size={20}/></Button>
            </div>

        </div>
    )
}
export default ProductCard;