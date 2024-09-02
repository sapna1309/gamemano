"use client";
import { carouselItems } from "@/constants";
import { GameCard } from "./GameCard";
import { useState } from "react";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCarouselNavigation = (i: number) => {

        setActiveIndex(i)

    }

    return (
        <div className="">
            <GameCard item={carouselItems[activeIndex]} />
            <div className="flex gap-5 items-center justify-center py-10">
                {carouselItems.map((item, i) => <div key={item.id} className={`size-[10px] rounded-full ${activeIndex === i ? "bg-accent-300" : "bg-white bg-opacity-80"} cursor-pointer`} onClick={() => handleCarouselNavigation(i)} ></div>)}
            </div>
        </div>
    )
}

export { Carousel };