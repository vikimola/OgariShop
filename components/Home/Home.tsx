import Hero from "@/components/Home/Hero";
import Category from "@/components/Home/Category";
import AllProduct from "@/components/Home/AllProduct";
import Footer from "@/components/Home/Footer";

const Home = () => {
    return (
        <div className="dark:bg-background">
            <Hero/>
            <Category/>
            <AllProduct/>
        </div>
    )
}
export default Home;