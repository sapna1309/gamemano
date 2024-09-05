"use client";
import { gameCradItems } from "@/constants";
import { GameCard } from "./GameCard";
import { usePathname } from "next/navigation";

interface Props {
    item: {
        id: number;
        image: string;
        heading: string;
        releaseDate: string;
        content: string;
        availableOn: string[];
        isButton: boolean;
        buttonText: string;
        buyNow: string;
        numberOfPlayingFriends: string;
    },
    i: number
}
const WithRatingGameCard = ({ item, i }: Props) => {
    const pathname = usePathname();
    return (
        <div className={`w-full flex ${i === gameCradItems.length - 1 ? 'mb-0' : 'mb-16'} bg-black relative bg-opacity-50`}>
            {/* gredient starts */}
            {/* right side */}
            {i % 2 !== 0 && <>
                <div className="h-[500px] w-[400px] z-0 left-[70%] -top-32 bg-accent-900 bg-opacity-25 absolute blur-[210px] rounded-full"></div>
                {/* medium */}
                <div className="h-[600px] w-[400px] z-0 left-[30%] -top-32 bg-black bg-opacity-70 absolute blur-[200px] rounded-full"></div>
                {/* left */}
                <div className="h-[500px] w-[400px] z-0 left-0 -top-32 bg-accent-300 bg-opacity-30 absolute blur-[210px] rounded-full"></div>
                {/* bottom */}
                <div className="h-[700px] w-[600px] z-0 left-[30%] -bottom-[70%] bg-accent-900 bg-opacity-25 absolute blur-[250px] rounded-full"></div>
            </>}

            {/* gredient ends */}

            {/* border */}
            {pathname === "/" && <div className={`w-[112px] ${i !== 0 ? '-mt-20' : 'mt-0'} border-r border-r-white border-opacity-30`}></div>
            }

            <div className={`w-[92%] ${pathname === '/' ? 'pl-5' : 'pl-32'} pt-12 pb-16 pr-10`}>
                {/* right top rating */}
                <div className="flex flex-col items-end">
                    <div className="flex gap-[2px] items-center text-white">
                        <div className="size-[12px] bg-[#00FF0A] bg-opacity-40 blur-[1px] rounded-full flex justify-center items-center">
                            <div className="size-[8px] blur-[1px] bg-[#00FF0A] rounded-full"></div></div><p className="font-[500] text-[12px] leading-6 font-poppins text-white ">{item.numberOfPlayingFriends}</p>
                    </div>
                    {/* rating star */}
                    <div className="flex gap-1 items-center">
                        <img src="/icons/star-fill.png" alt="fill rating star" />
                        <img src="/icons/star-fill.png" alt="fill rating star" />
                        <img src="/icons/star-fill.png" alt="fill rating star" />
                        <img src="/icons/star.png" alt="fill rating star" />
                        <img src="/icons/star.png" alt="fill rating star" />
                    </div>
                </div>

                <div className={`${i % 2 ? 'ml-96' : 'ml-0'}`}>
                    <GameCard item={item} headingStyle={'font-aoboshi_one'} isRating={false} />
                </div>
            </div>
        </div>

    )
}

export { WithRatingGameCard };