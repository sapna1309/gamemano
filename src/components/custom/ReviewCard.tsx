interface Props {
    data: { [key: string]: any }
}

const ReviewCard = ({ data }: Props) => {
    return (
        <div className="p-5 rounded-[10px] bg-accent-300 mr-5 shadow-lg flex flex-col gap-4 h-[205px]">
            <div className="flex items-center gap-4">
                {/* avatar */}
                <div className="size-[50px] rounded-full border-2 border-bg border-opacity-80 overflow-hidden">
                    <img src={data.avatar} alt={`Avatar of preson who gave review whose name is ${data.name}`} className="w-full h-full object-contain" />
                </div>
                {/* name & rating */}
                <div>
                    <p className="font-poppins font-[600] text-[16px] leading-[24px] text-bg">{data.name}</p>
                    {/* rating stars */}
                    <div className="flex items-center">
                        {/* fill star */}
                        {new Array(data.rating).fill(0).map((item, i) => <img key={item + i} src={'/icons/star-fill.png'} alt="fill star icon" />)}
                        {/* empty star */}
                        {5 - data.rating ? new Array(5 - data.rating).fill(0).map((item, i) => <img key={item + i} src={'/icons/star.png'} alt="empty star icon" />) : null}
                    </div>
                </div>
            </div>
            {/* divider */}
            <div className="w-full border-t-2 border-bg border-opacity-20"></div>
            {/* comment */}
            <p className="font-poppins font-[500] text-[14px] leading-[21px] text-bg line-clamp-4">
                {data.comment}
            </p>
        </div>
    )
}

export { ReviewCard };