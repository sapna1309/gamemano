"use client";
import { GameCard } from "./GameCard";

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
    return (
        <div className="w-full my-10">
            {/* right top rating */}
            <div className="flex flex-col items-end">
                <div className="flex gap-[2px] items-center mt-5 text-white">
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

    )
}

export { WithRatingGameCard };