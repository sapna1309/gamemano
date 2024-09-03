"use client"
import { carouselItems } from "@/constants";
import { GameCard } from "./GameCard";
import { useEffect, useRef, useState } from "react";

interface Props {
    [key: string]: any
}

const Carousel = ({ autoPlay = false }: Props) => {
    const [current, setCurrent] = useState(0);
    const timeoutRef: any = useRef(null);
    const delay = 3000; // 3 seconds autoplay

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        if (autoPlay) {
            resetTimeout();
            timeoutRef.current = setTimeout(() => {
                goToNext();
            }, delay);

        }

        return () => {
            resetTimeout();
        };
    }, [current]);

    const goToNext = () => {
        setCurrent((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const goToSlide = (index: any) => {
        setCurrent(index);
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden">
            {/* Slides Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {carouselItems.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="min-w-full relative"
                        style={{
                            transform: current === index ? 'translateX(0)' : 'translateX(100%)',
                            position: "relative",
                            minWidth: '100%'
                        }}
                    >
                        <GameCard key={slide.id} item={slide} className={` transition-opacity duration-500 ease-in-out${current === index ? 'opacity-100' : 'opacity-0.1'}`}
                            style={{
                                opacity: current === index ? 1 : 0.2,
                                filter: current === (index + carouselItems.length - 1) % carouselItems.length ? 'blur(2px)' : 'none',
                            }} />
                    </div>
                ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex gap-5 items-center justify-center py-10">
                {carouselItems.map((item, i) => <div key={item.id} className={`size-[10px] rounded-full ${current === i ? "bg-accent-300" : "bg-white bg-opacity-80"} cursor-pointer`} onClick={() => goToSlide(i)} ></div>)}
            </div>
        </div>
    )
}

export { Carousel };