"use client";
interface Props {
    [key: string]: any
}
const Logo = ({ type = "icon", className }: Props) => {

    if (type === 'full') {
        return <div className={`${className}`}><h1 className="font-press_start_2p text-accent-300 text-2xl leading-6">GameQuest</h1></div>
    }
    return <div className={`w-28 flex justify-center items-center ${className}`}><h1 className="font-press_start_2p text-accent-300 text-4xl leading-9">GQ</h1></div>
}

export { Logo };