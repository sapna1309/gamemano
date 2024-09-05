import Link from "next/link";

interface Props {
    item: { [key: string]: any },
    href: any,
    mr: number
}
const ProductCard = ({ item, href, mr = 0 }: Props) => {

    if (href) {
        return <Link href={href}>
            <div className={`relative rounded-[10px] bg-accent-600 ${mr ? 'mr-4' : "mr-0"} p-3`}>
                {/* online badge */}
                <div className="flex gap-1 py-1 px-2 rounded-[20px] bg-bg-brown items-center max-w-max absolute ">
                    <div className="size-[10px] bg-[#00FF0A] bg-opacity-40 blur-[1px] rounded-full flex justify-center items-center">
                        <div className="size-[8px] blur-[1px] bg-[#00FF0A] rounded-full"></div></div>
                    <p className="text-[10px] font-[600] text-white text-opacity-80">1200 Online</p>
                </div>
                {/* image */}
                <div className="h-[210px] w-full">
                    <img src={item.thumbnail} className="h-full w-full object-contain" alt="product card image" />
                </div>
                <p className="text-[30px] font-aoboshi_one text-text-cardMain leading-[44px] truncate">{item.title}</p>
                {/* rating star */}
                <div className="flex gap-1 items-center">
                    <img src="/icons/star-fill.png" alt="fill rating star" />
                    <img src="/icons/star-fill.png" alt="fill rating star" />
                    <img src="/icons/star-fill.png" alt="fill rating star" />
                    <img src="/icons/star.png" alt="fill rating star" />
                    <img src="/icons/star.png" alt="fill rating star" />
                </div>
                {/* review and other stuff*/}
                <div className="flex gap-x-3 font-[500] font-poppins text-[14px] leading-[21px] text-[#FF1C1C] items-center flex-wrap">
                    <p>10k+ Players</p>
                    <div className="size-[5px] rounded-full bg-[#FF1C1C]"></div>
                    <p>Action</p>
                    <div className="size-[5px] rounded-full bg-[#FF1C1C]"></div>
                    <p>Adventure</p>
                </div>
                <p className="font-poppins text-[12px] font-[500] leading-[18px] text-[#000]">Released 10th August 2022</p>
                {/* button */}
                <div className="flex justify-between gap-5 items-center mt-4">
                    <p className="text-text-cardMain font-poppins text-[22px] font-[600] leading-[33px]">${Math.ceil(item.price)}</p>
                    <button className="dark-button h-[45px] w-full">Buy Now</button>
                </div>
            </div>
        </Link>
    }

    return (
        <div className={`relative rounded-[10px] bg-accent-600 mr-${mr} p-3`}>
            {/* online badge */}
            <div className="flex gap-1 py-1 px-2 rounded-[20px] bg-bg-brown items-center max-w-max absolute ">
                <div className="size-[10px] bg-[#00FF0A] bg-opacity-40 blur-[1px] rounded-full flex justify-center items-center">
                    <div className="size-[8px] blur-[1px] bg-[#00FF0A] rounded-full"></div></div>
                <p className="text-[10px] font-[600] text-white text-opacity-80">1200 Online</p>
            </div>
            {/* image */}
            <div className="h-[210px] w-full">
                <img src={item.thumbnail} className="h-full w-full object-contain" alt="product card image" />
            </div>
            <p className="text-[30px] font-aoboshi_one text-text-cardMain leading-[44px] truncate">{item.title}</p>
            {/* rating star */}
            <div className="flex gap-1 items-center">
                <img src="/icons/star-fill.png" alt="fill rating star" />
                <img src="/icons/star-fill.png" alt="fill rating star" />
                <img src="/icons/star-fill.png" alt="fill rating star" />
                <img src="/icons/star.png" alt="fill rating star" />
                <img src="/icons/star.png" alt="fill rating star" />
            </div>
            {/* review and other stuff*/}
            <div className="flex gap-x-3 font-[500] font-poppins text-[14px] leading-[21px] text-[#FF1C1C] items-center flex-wrap">
                <p>10k+ Players</p>
                <div className="size-[5px] rounded-full bg-[#FF1C1C]"></div>
                <p>Action</p>
                <div className="size-[5px] rounded-full bg-[#FF1C1C]"></div>
                <p>Adventure</p>
            </div>
            <p className="font-poppins text-[12px] font-[500] leading-[18px] text-[#000]">Released 10th August 2022</p>
            {/* button */}
            <div className="flex justify-between gap-5 items-center mt-4">
                <p className="text-text-cardMain font-poppins text-[22px] font-[600] leading-[33px]">${Math.ceil(item.price)}</p>
                <button className="dark-button h-[45px] w-full">Buy Now</button>
            </div>
        </div>
    )
}

export { ProductCard };