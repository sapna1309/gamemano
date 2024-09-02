import { Carousel } from "@/components/custom/Carousel";
import { SideBar } from "@/components/custom/SideBar";

export default function Home() {
  return (
    <main className="flex relative">
      <SideBar />
      {/* **** Main Content **** */}
      <div className="bg-black w-full">
        <div className="ml-40">
          {/* **** Header Section **** */}
          <Carousel />
        </div>
      </div>
    </main>
  );
}
