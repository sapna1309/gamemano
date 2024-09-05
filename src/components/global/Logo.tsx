"use client";

import { usePathname } from "next/navigation";

interface Props {
    [key: string]: any
}
const Logo = ({ type = "icon", className }: Props) => {
    const pathname = usePathname();
    if (type === 'full') {
        return <div className={`${className}`}><h1 className="font-press_start_2p text-accent-300 text-2xl leading-6">GameQuest</h1></div>
    }
    return <div className={`w-[112px] flex justify-center items-center ${className} ${pathname === "/" ? 'border-r border-r-white border-opacity-30' : 'none'} py-8`}><h1 className="font-press_start_2p text-accent-300 text-4xl leading-9">GQ</h1></div>
}

export { Logo };