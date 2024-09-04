"use client"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselResponsive } from "@/constants";

interface Props {
    data: any[],
    autoPlay: Boolean
}

interface Settings {
    [key: string]: any
}

const slides = [
    { id: 1, src: 'https://pixlr.com/images/index/product-image-one.webp', alt: "Slide 1" },
    { id: 2, src: 'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649', alt: "Slide 2" },
    { id: 3, src: 'https://pixlr.com/images/index/product-image-one.webp', alt: "Slide 3" }
];

const Dummy = () => {

    const settings: Settings = {
        arrows: false,
        showDots: true,
        autoPlay: true,
        pauseOnHover: true,
        partialVisibilityGutter: 30,
        shouldResetAutoplay: true,
        infinite: true,
        autoPlaySpeed: 2500,
    }

    return (
        <Carousel {...settings} containerClass="carousel-container" customDot={<CustomDot />} responsive={carouselResponsive}>
            {slides.map((slide) => <img className="h-[500px] w-full" key={slide.id} src={slide.src} alt={slide.alt} />)}
        </Carousel>
    );
};

const CustomDot = ({ onClick, active }: any) => {
    return (
        <button
            onClick={onClick}
            className={`${active ? "bg-accent-300" : 'bg-white bg-opacity-80'} cursor-pointer rounded-full size-[10px] mx-2`}
        />
    );
};

export default CustomDot;

export { Dummy };