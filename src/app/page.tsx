import { Product } from "@/apis/models";
import { Carousel } from "@/components/custom/Carousel";
import { GameCard } from "@/components/custom/GameCard";
import { ProductCard } from "@/components/custom/ProductCard";
import { RelatedGames } from "@/components/custom/RelatedGames";
import { SideBar } from "@/components/custom/SideBar";
import { cardSliderResponsive, cardSliderSettings, carouselItems, carouselResponsive, carouselSettings } from "@/constants";
import Link from "next/link";

export default async function Home() {
  const { data: { products } } = await Product.get();

  return (
    <div className="w-[100%] bg-black">

      {/* header section */}
      <div className="flex w-full pt-[110px] bg-black">
        <SideBar />
        <div className="w-[92%] pb-8 pl-[55px]">
          {/* **** Header Section **** */}
          <Carousel settings={{ ...carouselSettings, showDots: true, autoPlay: true }} responsive={carouselResponsive}>
            {carouselItems.map((slide) => <GameCard key={slide.id} item={slide} />)}
          </Carousel>
        </div>

      </div>

      {/* **** Most Tending Section **** */}
      <div className="w-full flex relative bg-bg-brown bg-opacity-30">
        {/* gredient starts */}
        {/* right side */}
        <div className="h-[800px] w-[500px] z-0 left-[60%] rotate-45 -top-52 bg-accent-900 bg-opacity-25 absolute blur-[210px] rounded-full"></div>
        {/* left side */}
        <div className="h-[700px] w-[400px] z-0 left-0 -top-32 bg-accent-300 bg-opacity-40 absolute blur-[210px] rounded-full"></div>
        {/* bottom side */}
        <div className="h-[700px] w-[700px] z-0 left-[30%] -bottom-40 bg-accent-900 bg-opacity-25 absolute blur-[250px] rounded-full"></div>

        {/* gredient ends */}

        {/* border */}
        <div className="w-[112px] border-r border-r-white border-opacity-30"></div>

        <div className="w-[92%] pl-5  pt-16 pb-[100px]">
          {/* top content heading and arrow */}
          <div className="w-full flex justify-between items-center pr-10">
            {/* heading */}
            <h2 className="font-press_start_2p text-accent-300 text-[38px] leading-[38px] tracking-tighter">MOST TRENDING</h2>
            {/* text and arrow */}
            <Link href={'/products'}>
              <div className="flex gap-3 group cursor-pointer border-b border-transparent hover:border-accent-900 transition-all duration-700 ease-in">
                <p className="text-[18px] font-[500] leading-[27px] text-white text-opacity-80 group-hover:text-accent-900 transition-all duration-700 ease-in">GO TO GAME STORE</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5" className="stroke-white group-hover:stroke-accent-900 transition-all duration-700 ease-in" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
            </Link>
          </div>

          {/* card slider */}
          <div className="mt-5">
            <Carousel settings={{ ...cardSliderSettings, autoPlay: true }} responsive={cardSliderResponsive}>
              {products.map((item: any) => <ProductCard key={item.id} item={item} href={`/products`} mr={4} />)}
            </Carousel>
          </div>
        </div>
      </div>

      {/* other game cards */}
      <div className="w-full bg-bg-brown opacity-70 pb-16">

        <RelatedGames />
      </div>

    </div>

  );
}
