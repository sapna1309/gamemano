import { sideBarItems } from "@/constants";
import { SettingsIcon } from "../icon/SettingsIcon";
import { LogoutIcon } from "../icon/LogoutIcon";

const SideBar = () => {
    return (
        <aside className="w-28 border-r border-r-white border-opacity-30 bg-black text-white absolute bottom-0 top-0">
            <NavItems />
            {/* ***** Settings & Logout icon ***** */}
            <div className="flex w-28 flex-col gap-10 items-center py-14 border-t border-t-white border-opacity-30">
                <SettingsIcon />
                <LogoutIcon />
            </div>
        </aside>
    )
}

const NavItems = () => {
    return (
        <div className="flex w-28 flex-col gap-10 items-center pt-5 pb-16">
            {sideBarItems.map(({ name, path, Icon }) => <Icon key={name} path={path} />)}
        </div>
    )

}

export { SideBar };