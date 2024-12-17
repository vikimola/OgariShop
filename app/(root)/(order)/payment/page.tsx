'use client'
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import PaypalButton from "@/components/Helper/PaypalButton";
import {CartItem, clearCart} from "@/store/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {log} from "node:util";


type PaymentData = {
    paymentType: string
}

const PaymentPage = () => {

    const items: CartItem[] = useSelector((state: RootState) => state.cart.items)

    const totalPrice = items.reduce((total, item) => total += (item.price * 0.8) * item.quantity, 0)
    const deliveryFee = totalPrice >= 100 ? 0 : 10;

    const totalPriceWithDelivery = (totalPrice + deliveryFee).toFixed(2)


    const {register, handleSubmit, formState: {errors}} = useForm<PaymentData>();

    const router = useRouter()

    const dispatch = useDispatch();

    const onSubmit = (data: PaymentData) => {
        console.log(data.paymentType);
        if (data.paymentType === 'cashAtDelivery') {
            router.push('/done');
        } else if (data.paymentType === 'payPal') {
            router.push('/payment/paypal');
        }


        console.log(errors);
    };

    const handleSuccess = (details: any) => {+
        console.log("YOOOOO")
        router.push('/done')
        dispatch(clearCart())
    }


    return (
        <div className="text-cyan-900">
            <br/>
            <h1 className=" sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  text-center  "> Payment
                information</h1>
            <br/>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-6 rounded-md max-w-lg mx-auto space-y-4 shadow-lg w-[65vw]"
            >
                <div className="flex flex-col  ">
                    <div className="  gap-4 flex flex-col justify-center items-start ">
                        <label className="flex items-center">
                            <input
                                {...register("paymentType", {required: 'Payment type is required'})}
                                type="radio"
                                value="cashAtDelivery"
                                className="mr-2"
                            />
                            Cash at Delivery
                        </label>
                        or
                        {/*<label className="flex items-center">*/}
                        {/*    <input*/}
                        {/*        {...register("paymentType", {required: 'Payment type is required'})}*/}
                        {/*        type="radio"*/}
                        {/*        value="payPal"*/}
                        {/*        className="mr-2"*/}
                        {/*    />*/}
                        {/*    PayPal*/}
                        {/*</label>*/}
                        <PaypalButton amount={totalPriceWithDelivery} onSuccess={handleSuccess}/>
                    </div>
                    {errors.paymentType && <p className="text-red-600 text-sm">{errors.paymentType.message}</p>}
                </div>

                <div className="flex justify-center">

                    <Button
                        type="submit"
                        className="bg-[#d9cde7] hover:bg-[#a386c5] px-6 py-2 rounded-md text-white font-medium"
                    >
                        Finalize </Button>


                </div>
            </form>

            <br/>


        </div>
    )
}

export default PaymentPage;