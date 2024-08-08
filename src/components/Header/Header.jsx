import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdMyLocation } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {

  const [open, setOpen] = useState(false);
  

  return (
    <nav className="flex justify-between items-center h-[8rem] z-[60] w-[960px] p-4">
      <p className="shrink text-[1.5rem] capitalize text-[#2F5D8A] md:text-[2.2rem]">
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

        <div className="relative">

          <HiMenuAlt3 onClick={() => setOpen(!open)}   size={36} className="text-[#2F5D8A] hover:text-[#20546a] cursor-pointer transform transition duration-500 hover:scale-125"/>

          {
            open && (
            <div className="bg-white p-4 w-48 shadow-lg absolute right-1 top-12">
              <ul >
                <li onClick={() => setOpen(false)} className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100" ><Link to={'/'}>Home</Link></li>
                <li onClick={() => setOpen(false)} className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100" ><Link to={'/more-details'}>More Details</Link></li>
              </ul>
            </div>
          )}

        </div>
        
        
        
      </div>
    </nav>
  );
}

export default Header;
