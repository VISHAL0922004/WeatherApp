import { useState } from 'react'
import SearchBox from './SearchBox.jsx'
import './App.css'  
import InfoBox from './InfoBox.jsx'

export default function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        humidity:50,
        pressure:1013,
        temp:25,
        temp_min:20,
        temp_max:30,
        windSpeed:5,
        weatherType:"Clear",
        weather:"Clear sky"
   

    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <>
        <div>
            <h3>Weather Component</h3>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
        </>
    )
}