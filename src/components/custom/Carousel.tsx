"use client"
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselResponsive } from "@/constants";
interface Props {
    [key: string]: any
}
interface Settings {
    [key: string]: any
}

const Carousel = ({ autoPlay = false, showDots = false, children }: Props) => {

    const settings: Settings = {
        arrows: false,
        showDots: showDots,
        autoPlay: autoPlay,
        pauseOnHover: true,
        partialVisibilityGutter: 30,
        shouldResetAutoplay: true,
        infinite: true,
        autoPlaySpeed: 2500,
    }

    return (
        <MultiCarousel {...settings} containerClass={showDots && "carousel-container"} customDot={<CustomDot />} responsive={carouselResponsive}>
            {children}
        </MultiCarousel>
    );
}

const CustomDot = ({ onClick, active }: any) => {
    return (
        <button
            onClick={onClick}
            className={`${active ? "bg-accent-300" : 'bg-white bg-opacity-80'} cursor-pointer rounded-full size-[10px] mx-2`}
        />
    );
};

export { Carousel };