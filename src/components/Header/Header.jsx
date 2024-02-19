import { HiMenuAlt3 } from "react-icons/hi";
import { MdMyLocation } from "react-icons/md";

function Header() {
  return (
    <nav className="flex justify-between items-center h-[8rem] border border-red-700 z-50 w-[960px] p-4">
      <p className="shrink text-[2.2rem] capitalize text-[#2F5D8A]">
        <a href="#" className="font-bold capitalize">
          Weather App
        </a>
      </p>
      <div className="flex">
        <button
          type="button"
          className="text-[#2F5D8A] hover:text-white border border-[#2F5D8A] hover:bg-[#2F5D8A] focus:ring-4 focus:outline-none focus:ring-[#20546a] font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-6"
        >
          
          Current Location
          <MdMyLocation className="ml-4"/>
        </button>
        
        <HiMenuAlt3   size={36} className="text-[#2F5D8A] hover:text-[#20546a] cursor-pointer transform transition duration-500 hover:scale-125"/>
      </div>
    </nav>
  );
}

export default Header;
