"use client";

import { usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleSearch = async (value: any) => {
        const searchParam = new URLSearchParams(location.search);

        searchParam.set('q', value);

        router.push(`${pathname}?${searchParam.toString()}`);

        if (value === "") {
            router.push(`${pathname}`);
            searchParam.delete("q");
        }

    }

    return (
        <div className="w-80 rounded-full h-10 bg-transparent border-2 border-white border-opacity-60 overflow-hidden relative flex items-center">
            <img src="/icons/search.png" className="size-4 absolute left-3" alt="search icon in input box for search" />
            <input
                onChange={({ target: { value } }) => handleSearch(value)}
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent pl-10 pr-2 w-full h-full text-white text-opacity-80 placeholder-white placeholder-opacity-60 focus:placeholder-transparent"
            />
        </div>


    )
}

export { SearchBar };