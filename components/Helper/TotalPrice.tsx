import React from "react";
import {CartItem} from "@/store/cartSlice";

const TotalPrice = ({items}:{items:CartItem[]})=>{

    const totalPrice = items.reduce((total, item) => total += (item.price * 0.8) * item.quantity, 0)
    const formattedTotalPrice = totalPrice.toFixed(2);

    return(
         totalPrice > 0 ? <div>

                    <div className="text-cyan-900 text-xl text-center "> Total
                        Product Price: {formattedTotalPrice} €
                    </div>
                </div> :
                <div className="text-cyan-900 text-2xl mt-4 text-center">Shopping Cart is Empty!</div>

    )
}

export default TotalPrice;