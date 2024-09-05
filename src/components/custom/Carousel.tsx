"use client"
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
interface Props {
    [key: string]: any
}

const Carousel = ({ settings, responsive, children }: Props) => {

    return (
        <MultiCarousel {...settings} containerClass={settings && settings?.showDots && "carousel-container"} customDot={<CustomDot />} responsive={responsive}>
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