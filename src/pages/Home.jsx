/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import CurrentWeather from "../components/CurrentWeather/CurrentWeather"
import Forecast from "../components/Forecast/Forecast"
import Header from "../components/Header/Header"

import Search from "../components/Search/Search"
import { WEATHER_API_KEY} from "../API/api"

function Home() {

    const [location, setLocation] = useState("");
    const [data, setData] = useState([]);
    let componentMounted = true;

    

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}`);
            if(componentMounted) {
                setData(await response.json());
                console.log(data);
            }
            return () => {
                componentMounted = false;
            }
        }
        fetchWeather();
    }, [location]);

   

    

  return (
    <div className="flex relative justify-center  bg-gradient-to-b from-gray-50 to-cyan-300 flex-wrap h-[100%] md:h-screen">
        <img src="src/assets/bg.svg" alt="backgroundImage" className="absolute h-screen object-cover mix-blend-overlay opacity-80"/>
        <Header/>
        <Search location={location} setLocation={setLocation} />
        <CurrentWeather data={data}/>
        <Forecast/>
    </div>
   
  )
}

export default Home