import {getAllCategory} from "@/request/request";

const Category = async () =>{
    const categories:string[] = await getAllCategory()
    return (
        <div className="pt-12 pb-12 ">
            <h1 className="text-center font-bold text-2xl capitalize text-cyan-900 ">Shop by Category</h1>
            <div className="mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category) => {
              return(<div key={category} className="m-2 p-2 rounded-lg cursor-pointer text-center hover:scale-110 transition-all duration-300 text-cyan-700 bg-[#e5ddee] shadow-md">
                    <h1 className="text-sm sm:text-base md:text-lg capitalize font-bold">{category}</h1>
                </div>)
            })}
        </div></div>
    )
}
export default Category;