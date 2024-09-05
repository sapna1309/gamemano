import { Product } from "@/apis/models";
import { Carousel } from "@/components/custom/Carousel";
import { PrivateWrapper } from "@/components/custom/PrivateWrapper";
import { ProductCard } from "@/components/custom/ProductCard";
import { ReviewCard } from "@/components/custom/ReviewCard";
import { SingleProductCard } from "@/components/custom/SingleProductCard";
import { cardSliderResponsive, cardSliderSettings, gameItems, reviews } from "@/constants";
import Link from "next/link";

interface Props {
    params: {
        id: string
    };
}

interface Data {
    [key: string]: any;
}

const productDetails = async ({ params: { id } }: Props) => {
    const { data }: Data = await Product.getById(id);
    const { data: { products } } = await Product.get();

    return (
        <PrivateWrapper>
            <div className="bg-bg opacity-50 w-full pt-28 relative">
                {/* for nav */}
                <div className="w-[300px] h-[200px] absolute -top-10 -left-10 bg-black blur-[100px]"></div>
                <div className="w-[500px] h-[500px] rounded-full absolute -top-56 left-[32%] bg-black blur-[150px]"></div>
                <div className="w-[300px] h-[200px] absolute -top-10 -right-10 bg-black blur-[100px]"></div>

                {/* for header */}
                <div className="w-[400px] h-[400px] absolute top-56 rotate-45 right-40 bg-accent-600 bg-opacity-50 blur-[150px]"></div>
                <div className="w-[400px] h-[400px] absolute top-60 -rotate-45 left-32 bg-accent-600 bg-opacity-50 blur-[150px]"></div>

                {/* header section */}
                <SingleProductCard data={data} />

                {/* description an other content */}
                <div className="bg-bg-brown w-full relative">
                    {/* header bottom */}
                    <div className="w-[300px] h-[800px] absolute -top-20 -right-[20%] bg-black blur-[180px]"></div>
                    <div className="w-[300px] h-[800px] absolute -top-20 -left-[20%] bg-black blur-[180px]"></div>
                    {/* description and other text */}
                    <div className="flex w-full z-[9]">
                        <div className="w-[8%] border-r border-r-white border-opacity-30"></div>
                        <div className="ml-16 w-[75%] pt-56 pb-20">
                            <p className="font-prosto_one text-[18px] font-[400] leading-[25px] text-white text-opacity-80">{data?.description}</p>

                            <p className="font-aoboshi_one text-[26px] leading-[38px] text-accent-300 mt-20">CHOOSE YOUR</p>
                            <p className="font-aoboshi_one text-[70px] leading-[70px] text-accent-300 tracking-widest">CHAMPION</p>
                            <p className="font-prosto_one text-[18px] font-[400] leading-[25px] text-white text-opacity-80 mt-10">Whether you like to dive straight into the fray, support your teammates, or something in between, there’s a spot for you on the Rift.</p>
                        </div>
                    </div>
                </div>

                {/* other games */}
                <div className="w-full flex bg-black">
                    <div className="w-[8%] border-r border-r-white border-opacity-30"></div>
                    <div className="w-[80%]">
                        {gameItems.map((item, i) => <div key={item.id} className={`w-full h-[540px] flex items-center ${i % 2 ? 'justify-end' : 'justify-start pl-1'} ${i === 0 ? '-mt-8' : 'mt-0'}`}>
                            <div className="flex flex-col items-center">
                                <p className="font-aoboshi_one text-[50px] leading-[75px] text-white tracking-wider">{item.name}</p>
                                <p className="font-prosto_one text-[30px] leading-[37px] text-white">{item.description}</p>
                                <button className="light-button h-[50px] mt-6">Play Now</button>
                            </div>
                        </div>)}
                    </div>
                </div>

                {/* choose from multiple arenas  */}
                <div className="w-full flex bg-bg bg-opacity-50 relative">
                    <div className="w-[8%] border-r border-r-white border-opacity-30 z-[9]"></div>
                    <div className="w-[88%] py-20 mb-28 z-[9]">
                        <div className="w-full relative">
                            {/* circle */}
                            <div className="flex w-full justify-center">
                                <div className="size-[585px] border-2 border-white border-opacity-60 border-dashed rounded-full p-3">
                                    <div className="w-full h-full bg-black rounded-full bg-opacity-50"></div>
                                </div>
                            </div>
                            {/* other details */}
                            <div className="w-full flex justify-between">
                                <div className="pl-6 -mt-20">
                                    <p className="font-aoboshi_one text-[26px] leading-[38px] text-accent-300">CHOOSE FROM MULTIPLE</p>
                                    <p className="font-aoboshi_one text-[70px] leading-[70px] text-accent-300 tracking-widest">ARENAS</p>
                                </div>

                                {/* arena frame */}
                                <div className="h-full flex flex-col items-end gap-6 pr-3 -mt-[260px]">
                                    <div className="flex items-center gap-6">
                                        <p className="font-prosto_one text-[18px] leading-[23px] text-white text-opacity-80">Arena 1</p>
                                        <div className="w-[145px] h-[117px] border-2 border-white border-opacity-50 bg-bg"></div>
                                    </div>
                                    <div className="flex items-center gap-6 mr-7">
                                        <p className="font-prosto_one text-[18px] leading-[23px] text-white text-opacity-80">Arena 2</p>
                                        <div className="w-[175px] h-[140px] border-2 border-white border-opacity-50 bg-bg"></div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <p className="font-prosto_one text-[18px] leading-[23px] text-white text-opacity-80">Arena 3</p>
                                        <div className="w-[145px] h-[117px] border-2 border-white border-opacity-50 bg-bg"></div>
                                    </div>
                                </div>
                            </div>
                            {/* text */}
                            <div className="flex justify-center w-[100%] -mt-2 pr-10">
                                <p className="font-prosto_one text-[18px] leading-[23px] text-white text-opacity-80 text-center w-[65%]">Battle across an icy bridge as your team of random champions charge toward the enemy Nexus in this chaotically fun 5v5 game mode.</p>
                            </div>
                        </div>
                    </div>
                    {/* frame */}
                    <div className="absolute top-[33%] w-[93%] h-[540px] left-12">
                        <img src="/icons/frame.png" alt="frame" className="w-full h-full" />
                    </div>

                </div>

                {/* reviews */}
                <div className="w-full relative bg-bg-brown">
                    {/* left */}
                    <div className="w-[200px] h-[400px] bg-black blur-[50px] absolute -top-[20%] -left-20"></div>
                    <div className="w-[300px] h-[400px] bg-accent-900 blur-[200px] absolute -top-[20%] left-20 bg-opacity-50"></div>
                    {/* middle */}
                    <div className="w-[300px] h-[500px] bg-black blur-[200px] absolute -top-[20%] left-[30%]"></div>
                    {/* right */}
                    <div className="w-[200px] h-[400px] bg-black blur-[50px] absolute -top-[20%] -right-20"></div>
                    <div className="w-[300px] h-[400px] bg-accent-900 bg-opacity-50 blur-[200px] absolute -top-[20%] right-20"></div>
                    {/* heading and arrow */}
                    <div className="w-[92%] pl-24 -mt-5 py-14 flex justify-between items-center">
                        {/* heading */}
                        <h2 className="font-poppins text-white text-[30px] leading-[45px] font-[400]">Reviews from other top players</h2>
                        {/* text and arrow */}
                        <Link href={'/'}>
                            <div className="flex gap-3 group cursor-pointer border-b border-transparent hover:border-accent-900 transition-all duration-700 ease-in">
                                <p className="text-[18px] font-[500] leading-[27px] text-white text-opacity-80 group-hover:text-accent-900 transition-all duration-700 ease-in">VIEW ALL</p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5" className="stroke-white group-hover:stroke-accent-900 transition-all duration-700 ease-in" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </div>
                        </Link>
                    </div>
                    {/* review cards */}
                    <div className="w-full flex -mt-5">
                        <div className="w-[8%] border-r border-r-white border-opacity-30"></div>
                        <div className="w-[92%] pl-5 pb-12">
                            <Carousel settings={{ ...cardSliderSettings, autoPlay: true }} responsive={cardSliderResponsive}>
                                {reviews.map((review: any) => <ReviewCard data={review} key={review.id} />)}
                            </Carousel>
                        </div>
                    </div>
                </div>

                {/* another game card legends */}
                <div className="w-full flex bg-black bg-opacity-50">
                    <div className="w-[8%] border-r border-r-white border-opacity-30"></div>
                    <div className="w-[92%] px-20 py-32 flex justify-between items-center">
                        {/* frame */}
                        <div className="h-[310px] w-[40%] ml-8">
                            <img src="/icons/frame.png" alt="frame icon" />
                        </div>
                        {/* content */}
                        <div className="w-[50%] flex flex-col items-center mr-8">
                            <p className="font-aoboshi_one text-[26px] leading-[38px] text-accent-300">START YOUR</p>
                            <p className="font-aoboshi_one text-[70px] leading-[75px] text-accent-300 tracking-widest">LEGEND</p>
                            {/* text */}
                            <div className="font-prosto_one text-[18px] leading-[23px] text-white text-opacity-80 text-center flex flex-col gap-5 p-10 mt-8">
                                <p>Ac odio sodales mi leo vitae dui nibh turpis aliquet. Porttitor aenean egestas cras mauris at. Mi nisl turpis sodales aliquet. Quis risus lorem enim magna nisl.</p>
                                <p>Nibh vitae morbi urna sapien mattis dolor dictum massa id. Eget arcu nulla dolor nisi. Facilisis risus lectus odio enim ut tortor facilisi neque nibh.</p>
                            </div>

                            {/* button & availability */}
                            <div className="w-full flex justify-between items-center py-10 px-20">
                                {/* button */}
                                <div>
                                    <button className="light-button h-[50px]">Play Now</button>
                                    <p className="font-[600] text-[16px] leading-6 font-poppins text-white text-opacity-80 ml-1 mt-2">Buy now for $40 only</p>
                                </div>
                                {/* available */}
                                <div className="flex items-center gap-3">
                                    <p className="text-white text-opacity-80 font-[600] text-[16px] leading-6 font-poppins">Available on :</p>
                                    <img src={'/icons/macios.png'} alt="ios image for available platforms" />
                                    <img src={'/icons/windos.png'} className="ml-1" alt="windows image for available platforms" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* recommended section */}
                <div className="w-full relative bg-black bg-opacity-70">

                    {/* heading and arrow */}
                    <div className="w-[92%] pl-24 py-14 flex justify-between items-center">
                        {/* heading */}
                        <h2 className="font-poppins text-white text-[30px] leading-[45px] font-[400]">Games recommended for you</h2>
                        {/* text and arrow */}
                        <Link href={'/'}>
                            <div className="flex gap-3 group cursor-pointer border-b border-transparent hover:border-accent-900 transition-all duration-700 ease-in">
                                <p className="text-[18px] font-[500] leading-[27px] text-white text-opacity-80 group-hover:text-accent-900 transition-all duration-700 ease-in">VIEW ALL</p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5" className="stroke-white group-hover:stroke-accent-900 transition-all duration-700 ease-in" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </div>
                        </Link>
                    </div>
                    {/* review cards */}
                    <div className="w-full flex -mt-5">
                        <div className="w-[8%] border-r border-r-white border-opacity-30"></div>
                        <div className="w-[92%] pl-5 pb-12">
                            <Carousel settings={{ ...cardSliderSettings, autoPlay: true }} responsive={cardSliderResponsive}>
                                {products.map((item: any) => <ProductCard item={item} href={undefined} mr={4} key={item.id} />)}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </PrivateWrapper>
    )
}

export default productDetails;
