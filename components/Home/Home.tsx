import Hero from "@/components/Home/Hero";
import Category from "@/components/Helper/Category";
import AllProduct from "@/components/Home/AllProduct";
import Footer from "@/components/Home/Footer";
import CartHydrator from "@/components/Helper/CartHydrator";
import React from "react";

const Home = () => {
    return (
        <div>

            <Hero/>
            <Category/>
            <AllProduct/>
        </div>
    )
}
export default Home;