"use client";

import { useState } from "react";

const SortingBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex flex-col items-end">
            <div onClick={() => setIsOpen(true)} className="bg-transparent border border-white border-opacity-50 rounded-[30px] flex gap-2 items-center py-2 px-5 cursor-default max-w-max"> <p className="text-white font-[400] font-poppins text-[15px] leading-[23px]">Sort</p> <img src="/icons/sorting.png" alt="Sorting menu icon" /></div>

            {/* options of sorting */}
            {isOpen && <div className="w-[300px] rounded-[10px] p-4 absolute top-[50px] -right-[1px] bg-bg-brown z-[11] flex flex-col gap-3 cursor-pointer">
                <div className="text-white font-[400] font-poppins text-[18px] leading-[27px] hover:bg-accent-900 rounded-[20px] py-1 px-3">Release date : Old to New</div>
                <div className="text-white font-[400] font-poppins text-[18px] leading-[27px] hover:bg-accent-900 rounded-[20px] py-1 px-3">Release date : New to Old</div>
                <div className="text-white font-[400] font-poppins text-[18px] leading-[27px] hover:bg-accent-900 rounded-[20px] py-1 px-3">Price : Low to High</div>
                <div className="text-white font-[400] font-poppins text-[18px] leading-[27px] hover:bg-accent-900 rounded-[20px] py-1 px-3">Price : High to Low</div>
            </div>}

            {isOpen && <div className="w-full fixed top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-45" onClick={() => setIsOpen(false)}></div>}
        </div>
    )
}

export { SortingBar };