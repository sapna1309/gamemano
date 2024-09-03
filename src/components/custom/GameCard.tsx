"use client";
interface Props {
    [key: string]: any
}
const GameCard = ({ item, headingStyle, style, className, isRating = true }: Props) => {

    return (
        <div className={`w-full pt-14 relative text-white text-opacity-80 ${className}`} {...style} >
            <h1 className={`${headingStyle ? headingStyle : 'font-wallpoet'} text-7xl`}>{item.heading}</h1>
            <div className="bg-[#1E1E1E] flex justify-end mt-2 ml-1 w-[450px] text-[12px] font-[600] py-1 px-2">
                {item.releaseDate}
            </div>
            <p className="w-[656px] ml-1 mt-14 font-prosto_one text-[18px] font-[400] leading-[23px]">{item.content}</p>
            <div className="ml-1 mt-14 flex gap-8">
                {item.isButton && <button className="light-button">
                    {item.buttonText}
                </button>}
                <div className="flex items-center gap-3">
                    <p className="font-[600] text-[16px] leading-6 font-poppins">Available on :</p>
                    <img src={item.availableOn[0]} alt="ios image for available platforms" />
                    <img src={item.availableOn[1]} className="ml-1" alt="ios image for available platforms" />
                </div>
            </div>
            <p className="ml-1 font-[600] text-[16px] leading-6 font-poppins mt-2">{item.buyNow}</p>
            {isRating && <div className="flex gap-[2px] items-center mt-5 ml-1">
                <div className="size-[12px] bg-[#00FF0A] bg-opacity-40 blur-[1px] rounded-full flex justify-center items-center">
                    <div className="size-[8px] blur-[1px] bg-[#00FF0A] rounded-full"></div></div><p className="ml-1 font-[500] text-[12px] leading-6 font-poppins ">{item.numberOfPlayingFriends}</p>
            </div>}
        </div>
    )
}

export { GameCard };