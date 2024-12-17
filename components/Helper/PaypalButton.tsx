// @ts-nocheck
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {FUNDING, PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import { onApprove } from "@paypal/react-paypal-js/dist/cjs/stories/utils";


interface PaypalButtonProps {
    amount: string,
    onSuccess: (details: any) => void
}

const PaypalButton = ({amount, onSuccess}: PaypalButtonProps) => {


    return (
        <PayPalScriptProvider options={{clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!, currency: 'USD'}}>
            <div className="flex flex-col justify-center items-center">
                <PayPalButtons fundingSource={FUNDING.PAYPAL} createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: amount
                            }
                        }
                        ]
                    })

                }} onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        onSuccess(details)
                    })
                }} />
                    </div>
                    </PayPalScriptProvider>
                    )
                }

export default PaypalButton;