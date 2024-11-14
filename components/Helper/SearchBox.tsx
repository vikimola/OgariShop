"use client";

import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { CiSearch } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';

const SearchBox = () => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <CiSearch size='30'  className="text-cyan-900" />
            </DialogTrigger>
            <DialogContent className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[400px] relative">
                    <button
                        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                        aria-label="Close"
                        onClick={() => setOpen(false)}
                    >
                        <IoIosClose size={20} />
                    </button>
                    <DialogTitle className="text-lg font-bold mb-4">Search Product</DialogTitle>
                    <form>
                        <input
                            type='text'
                            placeholder="Search Product"
                            className="block w-full bg-gray-200 rounded-lg px-4 py-2 outline-none"
                        />
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default SearchBox;
