"use client";
import { topNavItems } from "@/constants";
import { Logo } from "./Logo";
import { SearchBar } from "../custom/SearchBar";
import { Notification } from "../custom/Notification";
import { CartIcon } from "../icon/CartIcon";
import { ProfileIcon } from "../icon/ProfileIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className={`flex z-10 w-full ${pathname !== "/" ? "pl-5 pr-10" : "pr-8"} bg-bg justify-between top-0 sticky`}>
      <LeftSide />
      <RightSide />
    </nav>
  )
};

const LeftSide = () => {
  return (
    <div className="flex">
      <Logo />
      <NavItems />
    </div>
  )
}

const RightSide = () => {
  return (
    <div className="flex gap-5 py-8">
      <SearchBar />
      <div className="border-r-2 border-white border-opacity-30"></div>
      <Notification />
      {/* verticle devider */}
      <div className="border-r-2 border-white border-opacity-30"></div>
      {/* cart icon */}
      <CartIcon />
      {/* verticle devider */}
      <div className="border-r-2 border-white border-opacity-30"></div>
      {/* profile icon */}
      <ProfileIcon />
    </div>
  )
}

const NavItems = () => {
  return (
    <ul className="flex ml-10 py-8">
      {topNavItems.map((item, i) => <Link href={item.path} key={item.name}>
        <li className={`${i === topNavItems.length - 1 ? "border-r-0" : "border-r-2"} border-white px-5 flex items-center border-opacity-30 font-poppins text-white text-opacity-80 text-lg hover:text-accent-300 cursor-pointer py-1`}>{item.name}</li></Link>)}
    </ul>
  )
}

export { NavBar };