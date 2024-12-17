import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateCart } from "@/store/cartSlice";
import { getFromLocalStorage } from "@/components/Helper/localStorage";

const CartHydrator = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const storedCart = getFromLocalStorage("cart") || [];
        dispatch(hydrateCart(storedCart));
    }, [dispatch]);

    return null;
};

export default CartHydrator;
