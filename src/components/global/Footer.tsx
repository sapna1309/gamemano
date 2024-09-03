import { footerItems } from "@/constants";
import Link from "next/link";
import { TwitterIcon } from "../icon/TwitterIcon";
import { FaceBookIcon } from "../icon/FaceBookIcon";
import { InstagremIcon } from "../icon/InstagramIcon";

const Footer = () => {
    return (
        <footer className="w-full pb-7 bg-black mt-14">
            <div className="w-full py-7 flex gap-10 justify-center items-center border-b-2 border-white border-opacity-30">
                {footerItems.map((item) => <Link href={item.path} key={item.id}>
                    <p className="text-white hover:text-accent-300 text-opacity-80 text-[18px] font-[500] leading-[27px] font-poppins">{item.name}</p>
                </Link>)}
            </div>
            <p className="text-white text-opacity-70 text-[16px] font-[300] leading-[23px] font-poppins text-center my-7">Copyright © GameQuest, Inc.  All rights reserved</p>
            <div className="flex gap-5 items-center justify-center">
                <TwitterIcon />
                <FaceBookIcon />
                <InstagremIcon />
            </div>
        </footer>
    )
}

export { Footer };