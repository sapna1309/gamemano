"use client";
import { useState } from "react";
import { NotificationIcon } from "../icon/NotificationIcon";

const Notification = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <NotificationIcon setIsOpen={setIsOpen} isOpen={isOpen} />

            {/* notification container */}
            {isOpen && <div className="w-[380px] p-4 bg-bg-brown bg-opacity-70 fixed right-5 top-[90px] rounded-lg shadow-md flex flex-col gap-4 backdrop-blur-2xl z-10">
                {/* item 1 */}
                <div onClick={() => setIsOpen(false)} className="group w-full p-2 border-y rounded-md border-y-white border-opacity-30 cursor-pointer">
                    <p className="text-[14px] text-white text-opacity-80 font-poppins font-[300] group-hover:text-accent-900 transition-all duration-500 ease-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque ducimus.</p>
                </div>

                {/* item 2 */}
                <div onClick={() => setIsOpen(false)} className="group w-full p-2 border-y rounded-md border-y-white border-opacity-30 cursor-pointer">
                    <p className="text-[14px] text-white text-opacity-80 font-poppins font-[300] group-hover:text-accent-900 transition-all duration-500 ease-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque ducimus.</p>
                </div>

                {/* item 3 */}
                <div onClick={() => setIsOpen(false)} className="group w-full p-2 border-y rounded-md border-y-white border-opacity-30 cursor-pointer">
                    <p className="text-[14px] text-white text-opacity-80 font-poppins font-[300] group-hover:text-accent-900 transition-all duration-500 ease-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque ducimus.</p>
                </div>
                {/* item 4 */}
                <div onClick={() => setIsOpen(false)} className="group w-full p-2 border-y rounded-md border-y-white border-opacity-30 cursor-pointer">
                    <p className="text-[14px] text-white text-opacity-80 font-poppins font-[300] group-hover:text-accent-900 transition-all duration-500 ease-in">Lorem ipsum dolor adipisicing elit. Consequuntur cumque ducimus.</p>
                </div>
            </div>}

            {/* overlay */}
            {isOpen && <div onClick={() => setIsOpen(false)} className="w-full fixed top-0 left-0 right-0 bottom-0 z-[9] bg-black bg-opacity-45"></div>}
        </div>

    )
}

export { Notification };