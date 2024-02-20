/* eslint-disable react/prop-types */
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { FaLongArrowAltUp, FaLongArrowAltDown  } from "react-icons/fa";
import { WiHumidity, WiCloudyWindy  } from "react-icons/wi";
import { TiWeatherSnow } from "react-icons/ti";

function CurrentWeather({data}) {
  return (
    <div className="bg-[#FFFFFF] shadow rounded-md p-2 flex flex-col w-[960px] m-3 z-30">
        <div className="flex justify-between">
            <p className="font-medium text-[1.125rem] text-[#727E8E]">Current Weather</p>
            <div>
                <ToggleSwitch/>
            </div>
        </div>
        <div className="flex flex-wrap">
            <div className="flex flex-col m-10 w-[25rem]">
                <p className="font-semibold text-[1.25rem] text-[#396bae] mb-2">{data.name}</p>
                <div className="flex">
                    <img src="src/assets/weather/sunny.svg" alt="" className="w-[100px] h-[100px]"/>
                    <span className="font-extralight text-[7rem] text-[#4a6fa1] ml-5 leading-none">
                        {data === null ? <p>error</p> : <p>work</p>}
                        <sub className="bottom-8 text-[6rem]">&deg;</sub>
                    </span>
                </div>
                <p className="text-[1.375rem] text-left text-[#7b98b2] font-medium">few clouds</p>
            </div>

            <div className="flex flex-col m-8 ml-8">
                <p className="text-[1.25rem] text-[#4a6fa1]">
                    Feels like 81
                    <sup>&deg;</sup>
                </p>
                <div className="flex mb-8 w-8">
                    <div className="flex items-center font-medium text-[1.25rem] text-[#3a86ca] mt-[0.8rem] mr-[2.5rem]">
                        <FaLongArrowAltUp color="#153C5E" className="mr-4"/>
                        <p className="text-[1.25rem] text-[#4a6fa1]">
                            81
                            <sup>&deg;</sup>
                        </p>
                        
                    </div>
                    <div className="flex items-center font-medium text-[1.25rem] text-[#3a86ca] mt-[0.8rem] mr-[2.5rem]">
                        <FaLongArrowAltDown color="#153C5E" className="mr-4"/>
                        <p className="text-[1.25rem] text-[#4a6fa1]">
                            81
                            <sup>&deg;</sup>
                        </p>
                        
                    </div>
                </div>
                <div className="flex items-center justify-start mb-[0.8rem]">
                    <div className="flex text-[#7B98B2] items-center text-[1.25rem] w-32">
                       <WiHumidity className="mr-4 w-[1.6rem] ml-[-0.3rem]" /> Humidity
                    </div>
                    <span className="text-[#3080c8] font-medium text-[1.25rem]">87%</span>
                </div>
                <div className="flex items-center justify-start mb-[0.8rem]">
                    <div className="flex text-[#7B98B2] items-center text-[1.25rem] w-32">
                       <WiCloudyWindy className="mr-4 w-[1.6rem] ml-[-0.3rem]" /> Wind
                    </div>
                    <span className="text-[#3080c8] font-medium text-[1.25rem]">11kph</span>
                </div>
                <div className="flex items-center justify-start mb-[0.8rem]">
                    <div className="flex text-[#7B98B2] items-center text-[1.25rem] w-32">
                       <TiWeatherSnow className="mr-4 w-[1.6rem] ml-[-0.3rem]" /> Pressure
                    </div>
                    <span className="text-[#3080c8] font-medium text-[1.25rem]">1010hpa</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather