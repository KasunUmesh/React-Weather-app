/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { AsyncPaginate } from 'react-select-async-paginate';
import { fetchCities } from '../../API/api';

export default function Search({onSearchChange }) {

  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = async (inputValue) => {
    const citiesList = await fetchCities(inputValue);

    return {
      options: citiesList.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  };

  

  const onChangeHandler = (enteredData) => {
    setSearchValue(enteredData);
    onSearchChange(enteredData);
  };

  const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: '26px',
        border: 'none',
        boxShadow: state.isFocused ? 'none' : null,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#3699FF' : null,
        color: state.isFocused ? 'white' : null,
    }),
}

  return (
    <div className="relative h-[3.25rem] rounded-[26px] bg-[#FFFFFF] shadow items-center m-3 w-[960px] flex z-50" >
      <IoSearch color="#4a6fa1" size={27} className="flex items-center ml-4 cursor-pointer"/>
        {/* <input name="search" value={location} onChange={ (e) => {setLocation(e.target.value)}} required onKeyDownCapture={handleSubmit} type="text" className=" flex-1 ml-1 mr-1 h-[3rem] rounded-[26px] border-none bg-[#FFFFFF] text-[1.125rem] text-[#727E8E] focus:outline-none placeholder:text-[#6898d5] p-5 " placeholder="Search for location"/> */}

        <AsyncPaginate className=" flex-1 p-5 z-50" placeholder="Search for location" debounceTimeout={600} styles={customStyles} value={searchValue} onChange={onChangeHandler} loadOptions={loadOptions}/>
        
    </div>

  )
}
