'use client'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import {useForm} from "react-hook-form";

type DeliveryData = {
    firstName: string,
    lastName: string,
    mobileNum: string,
    address: string,
    address2: string,
    physicalPerson: string,
}

const DeliveryPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<DeliveryData>();
    const onSubmit = (data: DeliveryData) => console.log(data.firstName);
    console.log(errors);



    return (
        <div className="  text-cyan-900 flex flex-col justify-center align-center">

            <br/>
            <h1 className=" sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  text-center "> Shipping
                information</h1>
            <br/>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-6 rounded-md max-w-lg mx-auto space-y-4 shadow-lg w-[65vw]"
            >

                <div className="flex flex-col">
                    <label className=" font-medium mb-1">First Name *</label>
                    <input
                        type="text"
                        placeholder="First name"
                        {...register("firstName", {required: "First name is required", maxLength: 80})}
                        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName.message}</p>}
                </div>

                <div className="flex flex-col">
                    <label className=" font-medium mb-1">Last Name *</label>
                    <input
                        type="text"
                        placeholder="Last name"
                        {...register("lastName", {required: "Last name is required", maxLength: 100})}
                        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName.message}</p>}
                </div>


                <div className="flex flex-col">
                    <label className=" font-medium mb-1">Mobile Number *</label>
                    <input
                        type="tel"
                        placeholder="Mobile number"
                        {...register("mobileNum", {
                            required: "Mobile number is required",
                            minLength: {value: 6, message: "Minimum 6 digits required"},
                            maxLength: {value: 12, message: "Maximum 12 digits allowed"},
                        })}
                        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    {errors.mobileNum && <p className="text-red-600 text-sm">{errors.mobileNum.message}</p>}
                </div>

                <div className="flex flex-col">
                    <label className=" font-medium mb-1">Address *</label>
                    <input
                        type="text"
                        placeholder="Address"
                        {...register("address", {required: "Address is required"})}
                        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    {errors.address && <p className="text-red-600 text-sm">{errors.address.message}</p>}
                </div>

                <div className="flex flex-col">
                    <label className=" font-medium mb-1">Address Line 2</label>
                    <input
                        type="text"
                        placeholder="Address 2"
                        {...register("address2")}
                        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>

                <div className="flex flex-col">
                    <label className=" font-medium mb-1">Physical Person? *</label>
                    <div className="flex items-center gap-4">
                        <label className="flex items-center ">
                            <input
                                {...register("physicalPerson", {required: "This field is required"})}
                                type="radio"
                                value="Yes"
                                className="mr-2"
                            />
                            Yes
                        </label>
                        <label className="flex items-center ">
                            <input
                                {...register("physicalPerson", {required: "This field is required"})}
                                type="radio"
                                value="No"
                                className="mr-2"
                            />
                            No
                        </label>
                    </div>
                    {errors.physicalPerson && <p className="text-red-600 text-sm">{errors.physicalPerson.message}</p>}
                </div>

                <div className="flex flex-col justify-between items-center">

                    <Link href="/payment">
                        <Button type="submit" className="bg-[#d9cde7] hover:bg-[#a386c5] px-6 py-2  rounded-md">
                            Next Step
                        </Button>
                    </Link>
                </div>
            </form>
            <br/>


        </div>
    )
}

export default DeliveryPage;