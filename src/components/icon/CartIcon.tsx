import Link from "next/link";

const CartIcon = () => {
    return (
        <Link href={"/cart"}>
            <div className="size-10 cursor-pointer border-2 border-white hover:border-accent-300 border-opacity-60 rounded-full flex items-center justify-center group">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2024_868)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.68771 4.33345V3.45296C6.68771 2.59021 7.03044 1.76279 7.6405 1.15274C8.25056 0.542678 9.07797 0.199951 9.94072 0.199951C10.8035 0.199951 11.6309 0.542678 12.241 1.15274C12.851 1.76279 13.1937 2.59021 13.1937 3.45296V4.33345C14.3102 4.36728 14.9937 4.48699 15.5151 4.91986C16.2377 5.52014 16.4285 6.53508 16.8093 8.56583L17.46 12.0357C17.9952 14.8914 18.2624 16.3193 17.4825 17.2596C16.7018 18.2 15.2488 18.2 12.3436 18.2H7.53783C4.63181 18.2 3.17966 18.2 2.39894 17.2596C1.61822 16.3193 1.88713 14.8914 2.4215 12.0357L3.0721 8.56583C3.45378 6.53595 3.64376 5.52014 4.36636 4.91986C4.88771 4.48699 5.57128 4.36728 6.68771 4.33345ZM7.98892 3.45296C7.98892 2.93531 8.19455 2.43886 8.56059 2.07283C8.92662 1.70679 9.42307 1.50116 9.94072 1.50116C10.4584 1.50116 10.9548 1.70679 11.3209 2.07283C11.6869 2.43886 11.8925 2.93531 11.8925 3.45296V4.32043H7.98892V3.45296Z" className="fill-white fill-opacity-80 group-hover:fill-accent-300" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2024_868">
                            <rect width="20.5333" height="20.5333" fill="white" transform="translate(0.199951 0.199951)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </Link>
    )
}

export { CartIcon };