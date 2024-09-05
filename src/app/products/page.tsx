import { Category, Product } from "@/apis/models";
import { Controller } from "@/components/custom/Controller";
import { FilterBar } from "@/components/custom/FilterBar";
import { ProductCard } from "@/components/custom/ProductCard";
import { SimilarResultForSearch } from "@/components/custom/SimilarResultForSearch";

interface Props {
    searchParams: { [key: string]: any }
}

const products = async ({ searchParams }: Props) => {
    const { data: { products } } = await Product.get({ ...searchParams, limit: 12 });
    const { data } = await Category.get();

    return (
        <div className="flex flex-col w-full gap-14 pb-12 pt-32 bg-bg bg-opacity-30 relative">
            {/* left */}
            <div className="absolute -left-10 top-0 w-[300px] h-20 bg-black bg-opacity-90 blur-[80px]"></div>
            {/* middle */}
            <div className="absolute left-[35%] top-0 w-[600px] h-52 rounded-full bg-black bg-opacity-70 blur-[150px]"></div>
            {/* right */}
            <div className="absolute -right-10 top-0 w-[300px] h-28 bg-black bg-opacity-90 blur-[80px]"></div>

            <div className="flex w-full gap-8 px-12">

                <FilterBar categoryData={data} />
                {/* right section */}
                <div className="w-[80%] flex flex-col gap-10">
                    <Controller />

                    {/* Main products */}
                    <div className="w-full grid grid-cols-3 gap-x-[16px] gap-y-10 relative">
                        <div className="w-[600px] h-[900px] bg-black opacity-65 absolute top-[65%] -left-96 blur-[250px]"></div>
                        <div className="w-[500px] h-[500px] bg-black opacity-75 absolute top-[75%] -right-96 blur-[250px]"></div>
                        {products.map((item: any) => <ProductCard key={item.id} item={item} href={`/products/${item.id}`} mr={0} />)}
                    </div>
                </div>
            </div>

            {/* similar results section */}

            <SimilarResultForSearch />
        </div>
    )
}

export default products;