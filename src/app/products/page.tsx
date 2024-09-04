import { Category, Product } from "@/apis/models";
import { Controller } from "@/components/custom/Controller";
import { FilterBar } from "@/components/custom/FilterBar";
import { ProductCard } from "@/components/custom/ProductCard";
import { RelatedGames } from "@/components/custom/RelatedGames";
import Link from "next/link";

interface Props {
    searchParams: { [key: string]: any }
}

const products = async ({ searchParams }: Props) => {
    const { data: { products } } = await Product.get({ ...searchParams, limit: 12 });
    const { data } = await Category.get();

    return (
        <div className="flex flex-col w-full gap-14 p-12 bg-bg">
            <div className="flex w-full gap-8">
                <FilterBar categoryData={data} />
                {/* right section */}
                <div className="w-[80%] flex flex-col gap-10">
                    <Controller />

                    {/* Main products */}
                    <div className="w-full grid grid-cols-3 gap-x-[16px] gap-y-10">
                        {products.map((item: any) => <ProductCard key={item.id} item={item} href={`/products/${item.id}`} mr={0} />)}
                    </div>
                </div>
            </div>

            {/* similar results section */}

            <div className="w-full">
                {/* heading and arrow */}
                <div className="w-full flex justify-between items-center ">
                    {/* heading */}
                    <h2 className="font-poppins text-white text-[30px] leading-[45px] font-[400]">Checkout games similar to “Valorant”</h2>
                    {/* text and arrow */}
                    <Link href={'/products'}>
                        <div className="flex gap-3 group cursor-pointer border-b border-transparent hover:border-accent-900 transition-all duration-700 ease-in">
                            <p className="text-[18px] font-[500] leading-[27px] text-white text-opacity-80 group-hover:text-accent-900 transition-all duration-700 ease-in">VIEW ALL</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12H6.5M20 12L14 6M20 12L14 18M20 12H9.5" className="stroke-white group-hover:stroke-accent-900 transition-all duration-700 ease-in" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                    </Link>
                </div>

                {/* game cards */}
                <RelatedGames />
            </div>
        </div>
    )
}

export default products;