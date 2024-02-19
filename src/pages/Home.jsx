import CurrentWeather from "../components/CurrentWeather/CurrentWeather"
import Forecast from "../components/Forecast/Forecast"
import Header from "../components/Header/Header"

import Search from "../components/Search/Search"

function Home() {

  return (
    <div className="flex relative justify-center  bg-gradient-to-b from-gray-50 to-cyan-300 flex-wrap h-[100%] md:h-screen">
        <img src="src/assets/bg.svg" alt="backgroundImage" className="absolute h-screen object-cover mix-blend-overlay opacity-80"/>
        <Header/>
        <Search/>
        <CurrentWeather/>
        <Forecast/>
    </div>
  )
}

export default Home