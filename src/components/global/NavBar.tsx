import { topNavItems } from "@/constants";
import { Logo } from "./Logo";
import { SearchBar } from "../custom/SearchBar";
import { Notification } from "../custom/Notification";
import { CartIcon } from "../icon/CartIcon";
import { ProfileIcon } from "../icon/ProfileIcon";

const NavBar = () => {
  return (
    <nav className="flex border z-10 border-black w-full py-8 pr-6 bg-black justify-between top-0 sticky">
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
    <div className="flex gap-5">
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
    <ul className="flex ml-10">
      {topNavItems.map((item, i) => <li className={`${i === topNavItems.length - 1 ? "border-r-0" : "border-r-2"} border-white px-5 flex items-center border-opacity-30 font-poppins text-white text-opacity-80 text-lg hover:text-accent-300 cursor-pointer`} key={item.name}>{item.name}</li>)}
    </ul>
  )
}

export { NavBar };