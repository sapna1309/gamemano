"use client"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductCard } from './ProductCard';
import { responsive } from "@/constants";

interface Props {
    data: any[],
    autoPlay: Boolean
}

interface Settings {
    [key: string]: any
}

const CardSlider = ({ data, autoPlay = false }: Props) => {

    const settings: Settings = {
        arrows: false,
        showDots: false,
        autoPlay: autoPlay,
        pauseOnHover: true,
        partialVisibilityGutter: 30
    }

    return (
        <Carousel {...settings} responsive={responsive}>
            {data.map((item) => <ProductCard key={item.id} item={item} />)}
        </Carousel>
    );
};
export { CardSlider };