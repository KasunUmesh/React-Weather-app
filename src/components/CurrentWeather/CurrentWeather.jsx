import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function CurrentWeather() {
  return (
    <div className="bg-[#FFFFFF] shadow rounded-md p-2 flex flex-col w-96">
        <div className="flex justify-between">
            <p className="font-medium text-[1.125rem] text-[#727E8E]">Current Weather</p>
            <div>
                <ToggleSwitch/>
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather