"use client";

import { Carousel } from "./Carousel";

interface Props {
    [key: string]: any
}

const SingleProductCard = ({ data }: Props) => {

    const handleBack = () => {
        window.history.back();
    };

    const handleError = (event: any) => {
        event.target.onerror = null; // Prevents infinite loop if fallback also fails
        event.target.src = data?.thumbnail; // Fallback image
    };

    console.log({ data });

    return (
        <div style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' }} className="h-[530px] bg-bg-brown bg-opacity-30 flex justify-center relative">
            {/* back icon */}
            <img src="/icons/back.png" alt=" back icon for navigating back" className="absolute top-12 cursor-pointer left-14" onClick={handleBack} />

            {/* card content */}
            <div className="h-[630px] w-[75%] bg-bg bg-opacity-50 relative mt-[70px] py-10">
                {/* frame */}
                <div className="w-[96%] h-[100%] absolute -top-5 z-0 left-[2%]">
                    <img src="/icons/frame.png" className="w-full h-full" alt="frame of div" />
                </div>
                {/* badge */}
                <div className="w-[440px] bg-[#1E1E1E] h-[26px] pt-1">
                    <p className="font-[600] text-[12px] leading-[18px] font-poppins text-white text-opacity-80 ml-10">RELEASE DATE : 30TH DECEMBER</p>
                </div>
                {/* stars */}
                <div className="flex gap-1 items-center ml-10">
                    <img src="/icons/star-fill.png" className="size-[18px]" alt="fill star icon" />
                    <img src="/icons/star-fill.png" className="size-[18px]" alt="fill star icon" />
                    <img src="/icons/star-fill.png" className="size-[18px]" alt="fill star icon" />
                    <img src="/icons/star-fill.png" className="size-[18px]" alt="fill star icon" />
                    <img src="/icons/star.png" className="size-[18px]" alt="empty star icon" />
                </div>

                {/* image carousel */}
                <div className="w-full -mt-12">
                    <Carousel autoPlay={true}>
                        {data?.images?.map((image: string) => <img key={image}
                            src={image}
                            onError={(e) => handleError(e)}
                            alt=" description single product"
                            className="h-[350px] w-full object-contain"
                        />
                        )}
                    </Carousel>
                </div>
                {/* button */}
                <div className="flex flex-col items-center gap-4">
                    <button className="light-button z-[9]">Try For Free</button>
                    <div className="flex gap-x-[2px] items-center">
                        <div className="size-[12px] bg-[#00FF0A] bg-opacity-40 blur-[1px] rounded-full flex justify-center items-center">
                            <div className="size-[8px] blur-[1px] bg-[#00FF0A] rounded-full"></div></div><p className="font-[500] text-[12px] leading-6 font-poppins text-white text-opacity-80">245k players already enrolled</p>
                    </div>
                </div>

                {/* available on */}
                <div className="flex items-center gap-3 justify-end mr-16 mt-12">
                    <p className="font-[600] text-[16px] leading-6 font-poppins text-white text-opacity-80">Available on :</p>
                    <img src={'/icons/macios.png'} className="z-[9]" alt="ios image for available platforms" />
                    <img src={'/icons/windos.png'} className="ml-1 z-[9]" alt="windows image for available platforms" />
                </div>
            </div>
        </div>
    )
}

export { SingleProductCard };