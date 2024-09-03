import { Product } from "@/apis/models";
import { CardSlider } from "@/components/custom/CardSlider";
import { Carousel } from "@/components/custom/Carousel";
import { SideBar } from "@/components/custom/SideBar";
import { WithRatingGameCard } from "@/components/custom/WithRatingGameCard";
import { gameCradItems } from "@/constants";

export default async function Home() {
  const { data: { products } } = await Product.get();

  return (
    <main className="flex relative w-[100%]">
      <SideBar />
      {/* **** Main Content **** */}
      <div className="w-full bg-black">
        <div className="pl-[160px] w-full">
          {/* **** Header Section **** */}
          <Carousel autoPlay={true} />

        </div>



        {/* **** Most Tending Section **** */}

        <div className="w-full pl-[135px] mt-10 bg-black bg-opacity-30">

          {/* top content heading and arrow */}
          <div className="w-full flex justify-between items-center pr-10">
            {/* heading */}
            <h2 className="font-press_start_2p text-accent-300 text-[38px] leading-[38px] tracking-tighter">MOST TRENDING</h2>
            {/* text and arrow */}
            <div className="flex gap-3 group cursor-pointer border-b border-black hover:border-accent-900 transition-all duration-700 ease-in">
              <p className="text-[18px] font-[500] leading-[27px] text-white text-opacity-80 group-hover:text-accent-900 transition-all duration-700 ease-in">GO TO GAME STORE</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5" className="stroke-white group-hover:stroke-accent-900 transition-all duration-700 ease-in" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
          </div>

          {/* card slider */}
          <div className="mt-5">
            <CardSlider data={products} autoPlay={true} />
          </div>
        </div>

        {/* other game cards */}
        <div className="pl-[135px] mt-10 w-full pr-10 pb-8">

          {
            gameCradItems.map((item, index) => <WithRatingGameCard key={item.id} item={item} i={index} />

            )
          }
        </div>
      </div>
    </main>
  );
}
