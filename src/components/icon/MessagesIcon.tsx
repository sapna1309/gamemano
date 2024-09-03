import Link from "next/link";

interface Prop {
    [key: string]: any
}
const MessagesIcon = ({ name, path = "/" }: Prop) => {
    return (
        <Link href={path}>
            <div className="group flex items-center gap-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.8041 8.35296C2.5241 10.956 2.5361 13.958 2.9261 16.55C3.03079 17.2468 3.36698 17.8882 3.88052 18.3707C4.39407 18.8532 5.05508 19.1488 5.7571 19.21L7.2671 19.341C10.4171 19.615 13.5831 19.615 16.7331 19.341L18.2431 19.211C18.9451 19.1498 19.6061 18.8542 20.1197 18.3717C20.6332 17.8892 20.9694 17.2478 21.0741 16.551C21.4641 13.958 21.4761 10.956 21.1961 8.35296C21.16 8.05103 21.1193 7.74967 21.0741 7.44896C20.9694 6.75211 20.6332 6.11077 20.1197 5.62824C19.6061 5.14572 18.9451 4.85008 18.2431 4.78896L16.7331 4.65896C13.5837 4.38516 10.4165 4.38516 7.2671 4.65896L5.7571 4.78896C5.05508 4.85008 4.39407 5.14572 3.88052 5.62824C3.36698 6.11077 3.03079 6.75211 2.9261 7.44896C2.88102 7.74968 2.84035 8.05105 2.8041 8.35296ZM7.3971 6.15296C10.4597 5.88674 13.5395 5.88674 16.6021 6.15296L18.1121 6.28396C18.4787 6.31597 18.8239 6.47036 19.0922 6.72229C19.3604 6.97423 19.5362 7.30907 19.5911 7.67296L19.6251 7.90596L14.0641 10.996C13.4327 11.3467 12.7224 11.5308 12.0001 11.5308C11.2778 11.5308 10.5675 11.3467 9.9361 10.996L4.3751 7.90596L4.4091 7.67296C4.46365 7.30908 4.63913 6.97416 4.90725 6.72218C5.17538 6.4702 5.52054 6.31584 5.8871 6.28396L7.3971 6.15296ZM19.8081 9.51996C20.0025 11.7896 19.9296 14.0743 19.5911 16.327C19.5366 16.6908 19.3611 17.0258 19.0929 17.2777C18.8248 17.5297 18.4797 17.6841 18.1131 17.716L16.6031 17.847C13.5402 18.1132 10.46 18.1132 7.3971 17.847L5.8871 17.716C5.52054 17.6841 5.17538 17.5297 4.90725 17.2777C4.63913 17.0258 4.46365 16.6908 4.4091 16.327C4.07025 14.0743 3.99709 11.7897 4.1911 9.51996L9.2071 12.307C10.0613 12.7815 11.0224 13.0306 11.9996 13.0306C12.9768 13.0306 13.9379 12.7815 14.7921 12.307L19.8081 9.51996Z" className="fill-white fill-opacity-80 group-hover:fill-accent-300" fillOpacity="0.8" />
                    <circle cx="20" cy="6" r="4" fill="#FF1C1C" />
                </svg>
                {name && <p className="group-hover:text-accent-300" >{name}</p>}
            </div>
        </Link>
    )
}

export { MessagesIcon };