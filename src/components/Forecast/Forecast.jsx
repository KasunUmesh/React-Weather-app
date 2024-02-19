import Forecastitem from "./forecastitem"


function Forecast() {
  return (
    <div className="mt-4 bg-[#ffffffbf] shadow rounded-md p-4 overflow-hidden mb-6 w-[960px] m-3">
        <p className="font-medium text-[1.125rem] text-[#727E8E]">Extended Forecast</p>
        <div className="flex justify-between overflow-x-auto last:mr-0 ">
            <Forecastitem/>
            <Forecastitem/>
            <Forecastitem/>
            <Forecastitem/>
            <Forecastitem/>
            <Forecastitem/>
            <Forecastitem/>
        </div>
    </div>
  )
}

export default Forecast