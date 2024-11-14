import {FaPhone, FaRegCopyright} from "react-icons/fa";
import {MdOutlinePhoneInTalk} from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {SiRevolut} from "react-icons/si";
import {images} from "next/dist/build/webpack/config/blocks/images";

const Footer = () => {
    return (
        <div>
            <div className="grid gap-2 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 max-w-full ">
                <div className="flex flex-col justify-center items-center ml-8 mr-8">

                    <div
                        className="mt-1 mb-1 ml-auto mr-auto w-[5vw] min-w-[4rem]  flex justify-center items-center hover:cursor-pointer ">
                        <Link href="/">
                            <Image src="/images/pngwing2.com.png" alt="site logo" layout="responsive" width="1"
                                   height="1"></Image>
                        </Link>
                    </div>

                    <h2 className=" sm:text-base  md:text-xl lg:text-3xl xl:text-4xl text-cyan-900 hover:text-[#bba5d4] hover:cursor-pointer">Ogari
                        Shop</h2>
                    <br/>
                    <br/>
                    <div className="flex ">
                        <MdOutlinePhoneInTalk className=" text-cyan-600 hover:text-[#bba5d4] hover:cursor-pointer"
                                              size="30"/>
                        <p className=" sm:text-xs  md:text-base lg:text-lg xl:text-xl text-cyan-600 hover:text-[#bba5d4] hover:cursor-pointer">
                            <a href="tel:+40755464904"> + 040 755 464 904 </a></p>
                    </div>

                </div>
                <div className="flex flex-col  items-center ">
                    <br/>
                    <h2 className="footer_title">Information</h2>
                    <br/>
                    <div className=" h-[100%] flex flex-col justify-evenly  items-center ">
                        <p className="footer_link"> About Us </p>
                        <p className="footer_link"> Privacy Policy</p>
                        <p className="footer_link"> Return Policy</p>
                        <p className="footer_link"> Shipping Policy</p>
                        <p className="footer_link"> Dropshipping</p>
                    </div>

                </div>
                <div className="flex flex-col  items-center">
                    <br/>
                    <h2 className="footer_title ">Account</h2>
                    <br/>
                    <div className=" h-[100%] flex flex-col justify-evenly  items-center ">

                        <p className="footer_link"> Dashboard </p>
                        <p className="footer_link"> My Orders </p>
                        <p className="footer_link"> Account Details </p>
                        <p className="footer_link"> Track My Orders </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <br/>
                    <h2 className="footer_title ">Shop</h2>
                    <br/>
                    <div className=" h-[100%] flex flex-col justify-evenly  items-center ">
                        <p className="footer_link"> Affiliate </p>
                        <p className="footer_link"> Best Sellers </p>
                        <p className="footer_link"> Latest Products </p>
                        <p className="footer_link"> Sale Products </p>
                    </div>
                </div>

            </div>
            <br/>
            <div className="flex items-center justify-center   ">
                <hr className="h-px mb-1 w-[95vw]   border-0 bg-[#e5ddee] bg-opacity-75"/>
            </div>
            <div className="grid sm:grid-cols-2 justify-center items-center  ">

                <div className="flex items-center justify-center gap-2 text-[#b098cd]   ">
                    <FaRegCopyright/> Copyright Csuka Viktória Imola, 2024
                </div>
                <div className="flex items-center justify-center gap-4  ">
                    <SiRevolut className="text-cyan-700 h-10 w-5"/>

                    <div className="w-7 h-7 relative">
                        <Image
                            src="/images/raif2.png"
                            alt="site logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="w-8 h-10 relative">
                        <Image
                            src="/images/bt.png"
                            alt="site logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="w-12 h-10 relative">
                        <Image
                            src="/images/bcr2.png"
                            alt="site logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;