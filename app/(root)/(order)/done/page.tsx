'use client'
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";


const OrderDonePage = () => {


    return (
        <div className="h-[90vh] flex flex-col justify-center items-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 font-bold  text-center ">
                <br/>
                <span className="text-cyan-950">Thank</span> <span
                className="text-cyan-900">you</span> <span
                className="text-cyan-800">for</span> <span
                className="text-cyan-700">your</span> <span
                className="text-cyan-600">order </span>
                <span className="text-cyan-500">!</span>
                <br/>

                <div className="flex justify-center items-center h-[60vh] relative  ">
                    <Image src="/images/thanks.png" alt="Landing Page Logo" className="object-contain" fill/>
                </div>
            </h1>
        </div>
    )
}

export default OrderDonePage;