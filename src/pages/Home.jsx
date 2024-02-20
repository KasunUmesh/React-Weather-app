/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import CurrentWeather from "../components/CurrentWeather/CurrentWeather"
import Forecast from "../components/Forecast/Forecast"
import Header from "../components/Header/Header"
import Search from "../components/Search/Search"
import { WEATHER_API_KEY, WEATHER_API_URL } from "../API/api"

function Home() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    console.log(currentWeather);

    const searchChangeHandler = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const forecastFetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        Promise.all([currentWeatherFetch, forecastFetch])
         .then(async (Response) => {
            const weatherResponse = await Response[0].json();
            const forcastResponse = await Response[1].json();

            setCurrentWeather({city: searchData.lable, ...weatherResponse})
            setForecast({city: searchData.lable, ...forcastResponse})
         })
         .catch(console.log);
    }
    

  return (
    <div className="flex relative justify-center  bg-gradient-to-b from-gray-50 to-cyan-300 flex-wrap h-[100%] md:h-screen">
        <img src="src/assets/bg.svg" alt="backgroundImage" className="absolute h-screen object-cover mix-blend-overlay opacity-80"/>
        <Header/>
        <Search onSearchChange={searchChangeHandler} />
        <CurrentWeather data={currentWeather}/>
        <Forecast/>
    </div>
   
  )
}

export default Home