
function Forecastitem() {
  return (
    <div className="flex flex-col items-center mt-4 mr-6 z-50 ">
        <p className="font-semibold text-[1.125rem] text-[#4581c5]">wed</p>
        <img src="src/assets/weather/sunny.svg" alt="" className="w-[4rem] h-[4rem] m-[0.7rem]"/>
        <p className="font-semibold text-[1.125rem] text-[#4a6fa1]">Clear</p>
        <span className="flex text-[1.125rem] text-[#4a6fa1] text-center ">
            <p className="">
                81
                <sup>&deg;</sup>
            </p>
            <small>/</small>
            <p className="">
                81
                <sup>&deg;</sup>
            </p>
        </span>
    </div>
  )
}

export default Forecastitem