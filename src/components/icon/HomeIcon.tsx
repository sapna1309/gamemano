import Link from "next/link";

interface Prop {
    [key: string]: any
}
const HomeIcon = ({ name, path = "/" }: Prop) => {
    return (
        <Link href={path}>
            <div className="group flex items-center gap-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 19V12.267C21 11.7245 20.8896 11.1876 20.6756 10.689C20.4616 10.1905 20.1483 9.74069 19.755 9.36701L13.378 3.31001C13.0063 2.9569 12.5132 2.76001 12.0005 2.76001C11.4878 2.76001 10.9947 2.9569 10.623 3.31001L4.245 9.36701C3.85165 9.74069 3.53844 10.1905 3.3244 10.689C3.11037 11.1876 3 11.7245 3 12.267V19C3 19.5304 3.21071 20.0392 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0392 21 19.5304 21 19Z" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-white group-hover:stroke-accent-300" />
                </svg>
                {name && <p className="group-hover:text-accent-300 text-[18px] font-[400] leading-[27px]" >{name}</p>}
            </div>
        </Link>
    )
}

export { HomeIcon };