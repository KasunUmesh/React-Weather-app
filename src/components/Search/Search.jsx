import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Search({location, setLocation}) {

  const [tempLocation, setTempLocation] = useState(location)
  const handleSubmit = (e) => {
    e.preventDefault()
    setLocation(tempLocation)
  }

  return (
    <form onSubmit={handleSubmit} className="relative h-[3.25rem] rounded-[26px] bg-[#FFFFFF] shadow items-center m-3 w-[960px] flex z-60" >
        <input value={tempLocation} onChange={ (e) => {setTempLocation(e.target.value)}} type="text" className=" flex-1 ml-1 mr-1 h-[3rem] rounded-[26px] border-none bg-[#FFFFFF] text-[1.125rem] text-[#727E8E] focus:outline-none placeholder:text-[#6898d5] p-5 " placeholder="Search for location"/>
        <IoSearch color="#4a6fa1" size={27} className="flex items-center me-5 cursor-pointer"/>
    </form>

  )
}
