import { sideBarItems } from "@/constants";
import { Logo } from "../global";
import { SettingsIcon } from "../icon/SettingsIcon";
import { LogoutIcon } from "../icon/LogoutIcon";

const SideBar = () => {
    return (
        <aside className="w-28 border-r border-r-white border-opacity-30 bg-black text-white fixed top-0">
            <Logo className={"py-10"} />
            <NavItems />
            {/* ***** Settings & Logout icon ***** */}
            <div className="flex flex-col gap-10 items-center py-14 border-t border-t-white border-opacity-30">
                <SettingsIcon />
                <LogoutIcon />
            </div>
        </aside>
    )
}

const NavItems = () => {
    return (
        <div className="flex flex-col gap-10 items-center pt-3 pb-16">
            {sideBarItems.map(({ name, path, Icon }) => <Icon key={name} path={path} />)}
        </div>
    )

}

export { SideBar };