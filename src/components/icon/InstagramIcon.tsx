import Link from "next/link";

interface Prop {
    [key: string]: any
}
const InstagremIcon = ({ name, path = "/" }: Prop) => {
    return (
        <Link href={path}>
            <div className="group flex items-center gap-5">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" className="stroke-white group-hover:stroke-accent-300" />
                    <g clipPath="url(#clip0_2148_810)">
                        <path d="M19.5684 23.5C20.6292 23.5 21.6466 23.0786 22.3968 22.3284C23.1469 21.5783 23.5684 20.5609 23.5684 19.5C23.5684 18.4391 23.1469 17.4217 22.3968 16.6716C21.6466 15.9214 20.6292 15.5 19.5684 15.5C18.5075 15.5 17.4901 15.9214 16.7399 16.6716C15.9898 17.4217 15.5684 18.4391 15.5684 19.5C15.5684 20.5609 15.9898 21.5783 16.7399 22.3284C17.4901 23.0786 18.5075 23.5 19.5684 23.5Z" className="stroke-white group-hover:stroke-accent-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.5684 23.5V15.5C10.5684 14.1739 11.0951 12.9021 12.0328 11.9645C12.9705 11.0268 14.2423 10.5 15.5684 10.5H23.5684C24.8944 10.5 26.1662 11.0268 27.1039 11.9645C28.0416 12.9021 28.5684 14.1739 28.5684 15.5V23.5C28.5684 24.8261 28.0416 26.0979 27.1039 27.0355C26.1662 27.9732 24.8944 28.5 23.5684 28.5H15.5684C14.2423 28.5 12.9705 27.9732 12.0328 27.0355C11.0951 26.0979 10.5684 24.8261 10.5684 23.5Z" className="stroke-white group-hover:stroke-accent-300" strokeWidth="1.5" />
                        <path d="M25.0684 14.01L25.0784 13.999" className="stroke-white group-hover:stroke-accent-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2148_810">
                            <rect width="24" height="24" className="fill-white group-hover:fill-accent-300" transform="translate(8 8)" />
                        </clipPath>
                    </defs>
                </svg>

                {name && <p className="group-hover:text-accent-300" >{name}</p>}
            </div>
        </Link>
    )
}

export { InstagremIcon };