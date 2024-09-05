"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { RelatedGames } from "./RelatedGames";

const SimilarResultForSearch = () => {
    const searchParams = useSearchParams();
    return (
        <div className="w-full">
            {/* heading and arrow */}
            <div className="w-full flex justify-between items-center mb-12 px-14">
                {/* heading */}
                <h2 className="font-poppins text-white text-[30px] leading-[45px] font-[400]">Checkout games similar to <span className="capitalize">“{searchParams.has("q") ? searchParams.get("q") : 'Valorant'}”</span></h2>
                {/* text and arrow */}
                <Link href={'/products'}>
                    <div className="flex gap-3 group cursor-pointer border-b border-transparent hover:border-accent-900 transition-all duration-700 ease-in">
                        <p className="text-[18px] font-[500] leading-[27px] text-white text-opacity-80 group-hover:text-accent-900 transition-all duration-700 ease-in">VIEW ALL</p>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5" className="stroke-white group-hover:stroke-accent-900 transition-all duration-700 ease-in" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                </Link>
            </div>

            {/* game cards */}
            <RelatedGames />
        </div>
    )
}

export { SimilarResultForSearch };