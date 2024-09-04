import { Product } from "@/apis/models";
import { SingleProductCard } from "@/components/custom/SingleProductCard";
import { gameItems } from "@/constants";

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

    return (
        <div className="bg-bg w-full">
            {/* header section */}
            <SingleProductCard data={data} />

            {/* description an other content */}
            <div className="bg-bg-brown w-full">
                {/* description and other text */}
                <div className="flex w-full">
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
                <div className="w-[8%] border-r border-r-white border-opacity-30"></div>
                <div className="w-[88%] py-20 mb-32">
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
        </div>
    )
}

export default productDetails;
