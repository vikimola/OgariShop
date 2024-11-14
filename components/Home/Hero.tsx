import Image from "next/image";

const Hero = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center ">
            <div className="w-4/5 mx-auto grid items-center grid-col-1 lg:grid-cols-2 gap-4 ">
                <div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 font-bold uppercase ">
                        <br/>
                        <span className="text-cyan-950">Discover</span> <span
                        className="text-cyan-900">Fashion</span> <span
                        className="text-cyan-800">That</span> <span
                        className="text-cyan-700">Speaks</span> <span
                        className="text-cyan-600">your </span>
                        <span className="text-cyan-500">Style</span></h1>
                    <br/>
                    <h2 className=" sm:text-sm  md:text-xl lg:text-2xl xl:text-3xl text-cyan-400 "> Elevate Your
                        Wardrobe with the Latest Trends! </h2>
                    <br/>
                    <p className=" sm:text-xs  md:text-base lg:text-lg xl:text-xl text-cyan-600 ">At Ogari, we believe fashion should be an expression of who you are. From everyday
                        essentials to bold statement pieces, we offer a curated collection of clothing that’s designed
                        to make you feel confident and stylish, no matter the occasion.</p>
                </div>

                <div className="flex justify-center items-center h-[85vh] relative  ">
                <Image src="/images/pngwing.com3(1).png" alt="Landing Page Logo" className="object-contain"  fill />
                </div>
            </div>
        </div>

    );
}
export default Hero;