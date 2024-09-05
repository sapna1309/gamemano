"use client";
import { sideBarItems } from "@/constants";
import { SettingsIcon } from "../icon/SettingsIcon";
import { LogoutIcon } from "../icon/LogoutIcon";
import { useState } from "react";
import { Logo } from "../global";

const SideBar = () => {
    const [isOpen, setIsOpen]: any = useState('')


    return (
        <aside onMouseEnter={() => setIsOpen('open')} onMouseLeave={() => setIsOpen('close')} className="w-[112px] border-r border-r-white border-opacity-30 bg-transparent text-white -mt-[6px] cursor-pointer relative">

            <NavItemsWithName isOpen={isOpen} />

            <NavItems />

            {isOpen === 'open' && <div onMouseEnter={() => setIsOpen('close')} className="w-full fixed top-0 left-[112px] right-0 bottom-0 z-[9] bg-black bg-opacity-45"></div>}
        </aside>
    )
}

const NavItems = () => {
    return (
        <div className={`flex w-full flex-col gap-10 items-center pt-8 pb-16`}>
            {sideBarItems.map(({ name, path, Icon }) => <Icon key={name} path={path} />)}
            {/* ***** Settings & Logout icon ***** */}
            <div className={`flex w-full flex-col gap-10 items-center py-14 border-t border-t-white border-opacity-30`}>
                <SettingsIcon />
                <LogoutIcon />
            </div>
        </div>
    )

};

const NavItemsWithName = ({ isOpen }: { isOpen: string }) => {
    return (
        <div className={`fixed bottom-0 top-0 left-0 bg-bg-brown bg-opacity-80 py-10 z-10 ${isOpen === 'open' ? 'backdrop-blur-md transition-all duration-400 ease-in slide-right' : isOpen === 'close' ? 'backdrop-blur-none transition-all duration-[3000ms] ease-in slide-left' : 'backdrop-blur-none -left-[300px]'}`}>
            <div className="pl-5 pr-4">
                <Logo type={'full'} />
            </div>
            <div className="flex w-full flex-col gap-10 items-start pl-5 pt-8 pb-16">
                {sideBarItems.map(({ name, path, Icon }) => <Icon key={name} path={path} name={name} />)}
            </div>
            {/* ***** Settings & Logout icon ***** */}
            <div className="flex w-full flex-col pl-5 gap-10 items-start py-14 border-t border-t-white border-opacity-30">
                <SettingsIcon name={'Settings'} />
                <LogoutIcon name={'Logout'} />
            </div>
        </div>
    )
}

export { SideBar };