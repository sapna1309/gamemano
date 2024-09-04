import { platformsFilter } from "@/constants";
import { FilterItems } from "./FilterItems";
interface Props {
    categoryData: any[]
}
const FilterBar = ({ categoryData }: Props) => {
    return (
        <aside style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} className="w-[18%] flex flex-col gap-8 h-full max-h-max rounded-xl px-5 py-8 bg-bg-brown bg-opacity-50">
            <FilterItems name={'Categories'} data={categoryData}>
                <div className="flex items-center justify-start gap-2 mt-4">
                    <input className="appearance-none checked:border-accent-900 size-[18px] rounded-[5px] border border-white border-opacity-30 cursor-pointer text-white bg-bg checked:bg-accent-900 checked:bg-[url('/icons/check.png')] bg-center bg-no-repeat" type="checkbox" id={'all'} name={'all'} />
                    <label htmlFor={'all'} className="text-white text-[15px] leading-[22.5px] font-[400] text-opacity-80 font-poppins">{'All'}</label>
                </div>
            </FilterItems>
            <FilterItems name={'Platforms'} data={platformsFilter} children={undefined} />
            <FilterItems name={'Type'} data={[{ name: 'Paid', slug: "paid" }, { name: 'Free', slug: "free" }]} children={undefined} />
            <FilterItems name="Price" data={[]} >
                <div className="w-full flex justify-between items-center mt-4">
                    <input type="number" placeholder="$40" min={1} className="bg-bg border border-white border-opacity-30 rounded-[10px] h-[40px] w-20 pl-5 focus:outline-none text-white text-[15px] leading-[22.5px] font-[400] text-opacity-80 font-poppins placeholder-white placeholder:font-[400] focus:placeholder-transparent" />
                    <span className="text-white font-bold">&#8208;</span>
                    <input type="number" placeholder="$55" min={55} className="bg-bg border border-white border-opacity-30 rounded-[10px] h-[40px] w-20 pl-5 focus:outline-none text-white text-[15px] leading-[22.5px] font-[400] text-opacity-80 font-poppins placeholder-white placeholder:font-[400] focus:placeholder-transparent" />
                </div>
            </FilterItems>
            <FilterItems name="Ratings" data={[]}>
                <div className="flex flex-col gap-1 mt-4">
                    <div className="flex gap-[2px] items-center">
                        <img src="/icons/star-fill.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star-fill.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star-fill.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star-fill.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <p className="text-white text-[15px] leading-[22.5px] font-[400] text-opacity-80 font-poppins">& Up</p>
                    </div>
                    <div className="flex gap-[2px] items-center">
                        <img src="/icons/star-fill.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star-fill.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star-fill.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <p className="text-white text-[15px] leading-[22.5px] font-[400] text-opacity-80 font-poppins">& Up</p>
                    </div>
                    <div className="flex gap-[2px] items-center">
                        <img src="/icons/star-fill.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star-fill.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <p className="text-white text-[15px] leading-[22.5px] font-[400] text-opacity-80 font-poppins">& Up</p>
                    </div>
                    <div className="flex gap-[2px] items-center">
                        <img src="/icons/star-fill.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <img src="/icons/star.png" alt="fill star for rating" className="h-[18px] w-[18px]" />
                        <p className="text-white text-[15px] leading-[22.5px] font-[400] text-opacity-80 font-poppins"> & Up</p>
                    </div>
                </div>
            </FilterItems>
            <button className="light-button h-[45px] mt-1">Apply Filters</button>
        </aside>
    )
}

export { FilterBar };