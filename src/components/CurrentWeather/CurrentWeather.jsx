import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function CurrentWeather() {
  return (
    <div className="bg-[#FFFFFF] shadow rounded-md p-2 flex flex-col w-[960px] m-3 z-50">
        <div className="flex justify-between">
            <p className="font-medium text-[1.125rem] text-[#727E8E]">Current Weather</p>
            <div>
                <ToggleSwitch/>
            </div>
        </div>
        <div className="flex flex-wrap">
            <div className="flex flex-col m-3 w-[25rem]">
                <p className="font-semibold text-[1.25rem] text-[#396bae] mb-2">Colombo</p>
                <div className="flex">
                    <img src="src/assets/weather/sunny.svg" alt="" className="w-[100px] h-[100px]"/>
                    <span className="font-extralight text-[7rem] text-[#4a6fa1] ml-5 leading-none">
                        81
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
                <div className="flex">
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather