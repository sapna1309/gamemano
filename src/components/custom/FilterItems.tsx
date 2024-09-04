interface Props {
    name: string,
    data: any[],
    children: any
}
const FilterItems = ({ name, data, children }: Props) => {
    return (
        <div className="w-full">
            <p className="text-white text-[16px] leading-[24px] font-[500] font-poppins">{name}</p>

            {/* children */}
            {children && children}

            {/* items */}
            {data.length ? <div className="flex flex-col gap-4 mt-4">
                {data?.map((item) =>
                    <div key={item.slug} className="flex items-center justify-start gap-2">
                        <input className="appearance-none checked:border-accent-900 size-[18px] rounded-[5px] border border-white border-opacity-30 cursor-pointer text-white bg-bg checked:bg-accent-900 checked:bg-[url('/icons/check.png')] bg-center bg-no-repeat" type="checkbox" id={item.slug} name={item.slug} />
                        <label htmlFor={item.slug} className="text-white text-[15px] leading-[22.5px] font-[400] text-opacity-80 font-poppins">{item.name}</label>
                    </div>)}
            </div> : null}

        </div>
    )
}

export { FilterItems };