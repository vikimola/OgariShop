'use client'
import Hero from "@/components/Home/Hero";
import Category from "@/components/Home/Category";
import {getAllProducts, getProductByCategory} from "@/request/request";
import {Product} from "@/typing";
import {useEffect, useState} from "react";
import {Loader} from "lucide-react";
import ProductCard from "@/components/Helper/ProductCards/ProductCard";
import category from "@/components/Home/Category";

const AllProduct =  ({params}:{params:{category:string}}) => {
    const decodedCategory = decodeURIComponent(params.category)
    const [products, setProducts] = useState<Product[] | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const products: Product[] = await getProductByCategory(params.category)
                setProducts(products)
                console.log(products)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        };

        getData();

    }, []);

    return (
        <div className="pt-6 pb-12 ">
            <h1 className="text-cyan-900 font-bold text-2xl text-center">{decodedCategory} Items</h1>
            {loading ? (
                <div className="flex justify-center items-center mt-16">
                    <Loader size={32} className="animate-spin"/>
                </div>
            ) : (
                <div
                    className="w-4/5 mx-auto mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {products?.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            )}


        </div>
    )
}
export default AllProduct;