import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiHeart, CiUser } from "react-icons/ci";
import SearchBox from "../Helper/SearchBox";
import ShoppingCartButton from "@/components/Helper/ShoppingCartButton";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Nav = () => {
    return (
        <div className="flex justify-evenly items-center h-[10vh] w-full max-w-full sticky top-0 z-50 shadow-lg bg-[#e5ddee]">

            <div className="flex items-center space-x-2 ml-[3vw]">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 relative">
                        <Image
                            src="/images/pngwing2.com.png"
                            alt="site logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <h2 className="text-lg  md:text-2xl lg:text-3xl text-cyan-900">
                        Ogari Shop
                    </h2>
                </Link>
            </div>

            <div className="flex items-center justify-end mr-[10%] gap-4 mx-auto flex-1 ">
                <SearchBox  />
                <CiHeart size={30} cursor="pointer" className="text-cyan-900"/>
                <ShoppingCartButton />
                <SignedOut>
                    <SignInButton>
                        <CiUser size={30} cursor="pointer"  className="text-cyan-900" />
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton  />
                </SignedIn>
            </div>
        </div>
    );
};

export default Nav;
