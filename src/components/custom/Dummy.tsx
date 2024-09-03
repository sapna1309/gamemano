"use client";
// import { carouselItems } from "@/constants";
import { GameCard } from "./GameCard";
import { useEffect, useRef, useState } from "react";

interface Props {
    autoPlay?: boolean;
    slidesToShow?: number; // Number of slides to show and scroll at a time
}

const carouselItems = [
    { id: 1, src: 'https://pixlr.com/images/index/product-image-one.webp', alt: "Slide 1" },
    { id: 2, src: 'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649', alt: "Slide 2" },
    { id: 3, src: 'https://pixlr.com/images/index/product-image-one.webp', alt: "Slide 3" },
    { id: 4, src: 'https://pixlr.com/images/index/product-image-one.webp', alt: "Slide 4" },
    { id: 5, src: 'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649', alt: "Slide 5" },
    { id: 6, src: 'https://pixlr.com/images/index/product-image-one.webp', alt: "Slide 6" }
]

const Dummy = ({ autoPlay = true, slidesToShow = 1 }: Props) => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<any>(null);
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
    }, [current, autoPlay]);

    const goToNext = () => {
        setCurrent((prevIndex) => (prevIndex + slidesToShow) % Math.ceil(carouselItems.length / slidesToShow));
    };

    const goToSlide = (index: number) => {
        setCurrent(index);
    };

    const slidesCount = Math.ceil(carouselItems.length / slidesToShow);

    return (
        <div className="relative w-full h-[500px] mx-auto overflow-hidden">
            {/* Slides Container */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${current * 100})`,
                    width: `${100 * slidesCount}%`, // Width based on total number of slides
                }}
            >
                {carouselItems.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="relative"
                        style={{
                            minWidth: `100%`, // Width of each slide
                            width: '200px'
                        }}
                    >
                        <img src={slide.src} alt={slide.alt} className={`transition-opacity duration-500 ease-in-out`}
                        />
                    </div>
                ))}
            </div>
        </div >
    );
};

export { Dummy };
