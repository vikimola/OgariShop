
import React from 'react';
import {getProductByCategory, getSingleProduct} from "@/request/request";
import {Product} from "@/typing"
import {number} from "prop-types";
import Image from "next/image";
import {FaRegStar, FaStar} from "react-icons/fa";
import {Button} from "@/components/ui/button";
import {IoCheckmarkDoneCircle} from "react-icons/io5";
import {FiPackage} from "react-icons/fi";
import {TbTruckDelivery} from "react-icons/tb";
import ProductCard from "@/components/Helper/ProductCards/ProductCard";
import useCart from "@/components/Helper/useCart";
import AddToCart from "@/app/(root)/product/product-details/[id]/add-cart";

const ProductDetails = async ({params}: { params: { id: string } }) => {
    const id = params.id;
    const product: Product = await getSingleProduct(id);
    console.log(product)
    const relatedProduct: Product[] = await getProductByCategory(product.category)
    console.log(relatedProduct)

    const num = Math.round(product?.rating.rate)
    const starArr: number[] = new Array(5).fill(0)



    return (
        <div className=" mx-[1rem]">


            <div className="flex justify-start items-center mt-[6vh] ml-[5vw] mr-[5vw]">
                <h1 className="text-cyan-900  xs:text-lg text-2xl text-center ">{product.title}</h1>
            </div>


            <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center ">

                <div className="flex flex-col justify-center items-center mt-[5vh] mb-[5vh] ">
                    <div className=" w-5/6 h-[65vh] max-w-7xl  max-h-[65vh] relative  ">
                        <Image
                            src={product.image}
                            alt="product image"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>


                <div className="mt-[5vh]  mb-[10vh] ml-[1rem]   ">
                    <div className="flex justify-start items-center  gap-1 text-cyan-900 ">
                        {starArr.map((star, index) => (index < num ? <FaStar size={23} key={Math.random() * 1000}
                                                                             color="#fcc200"/> :
                                <FaRegStar size={23} key={Math.random() * 1000}
                                           color="#fcc200"/>
                        ))} {product?.rating.rate} out of 5 ({product?.rating.count} Reviews)
                    </div>
                    <br/>
                    <div className="xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-cyan-900 font-bold  ">
                        <p>{product.price} €</p>
                    </div>
                    <br/>


                   <AddToCart product={product}/>


                    <br/>
                    <div className=" text-cyan-900">
                        <p><span className="font-bold ">Description:</span> {product.description}</p>
                    </div>
                    <br/>
                    <div className="text-cyan-900  ">
                        <p><span className="font-bold ">Category:  </span> {product.category}</p>
                    </div>
                    <br/>
                    <div className="text-cyan-900  ">
                        <p><span className="font-bold ">Tag:  </span> Ogari Shop</p>
                    </div>
                </div>
            </div>

            <br/>

            <div>
                <h1 className="text-start font-bold text-xl  ml-6  text-cyan-900 ">Related Products</h1>

                <div
                    className="grid gap-12 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center justify-center ">
                    {relatedProduct.map(relatedProduct => (product.id !== relatedProduct.id &&
                        <div className="w-[14rem] flex justify-center items-center "><ProductCard
                            product={relatedProduct}/></div>))}

                </div>
            </div>

            <br/>
            <br/>

            <div className="grid xs:grid-cols-1 md:grid-cols-3 text-cyan-900 md:text-lg">
                <div className="flex justify-center items-center mb-4">
                    <IoCheckmarkDoneCircle size={25} className="mx-2 text-[#a386c5]"/> New product warranty
                </div>
                <div className="flex justify-center items-center mb-4">
                    <FiPackage size={25} className="mx-2 text-[#a386c5]"/> Free return for 14 days
                </div>
                <div className="flex justify-center items-center mb-4">
                    <TbTruckDelivery size={25} className="mx-2 text-[#a386c5]"/> Fast delivery in max 4 working days
                </div>
            </div>

            <br/>
        </div>
    )
}

export default ProductDetails;