"use client";
import { useSearchParams } from "next/navigation";
import { SortingBar } from "./SortingBar";

const Controller = () => {
    const searchParams = useSearchParams();

    return (
        <div className="w-full h-[60px] flex justify-between items-start">
            <div>
                <h3 className="text-white text-[24px] leading-[36px] font-[400] font-poppins">Search results for  <span className="capitalize"> “{searchParams.has("q") ? searchParams.get("q") : 'Valorant'}”</span></h3>
                <p className="text-white text-[20px] leading-[30px] font-[400] font-poppins text-opacity-80">10 results found</p>
            </div>
            <SortingBar />
        </div>
    )
}

export { Controller };