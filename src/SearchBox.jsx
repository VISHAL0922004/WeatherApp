import { useState } from "react"
import  TextField  from "@mui/material/TextField"
import Button  from "@mui/material/Button"
import { Update } from "@mui/icons-material";
export default function SearchBox({updateInfo}) {

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "63f24dea15a75d911fd02b831383b0c1";
    let getWeatherInfo = async () =>{
        try{
              let response= await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
            let jsonResponse = await response.json();
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                humidity:jsonResponse.main.humidity,
                pressure:jsonResponse.main.pressure,
                weatherType:jsonResponse.weather[0].main,
                temp_min:jsonResponse.main.temp_min,
                temp_max:jsonResponse.main.temp_max,
                windSpeed:jsonResponse.wind.speed,
                weather:jsonResponse.weather[0].description,
            };
            console.log(result);
            return (result);

        }catch(error){
            throw error;
           
        }

       

    }
    let [city, setCity] = useState("")
    let [error, setError] = useState(false)
    let handleChange = (e) => {
        setCity(e.target.value)
    }
    let handleSubmit =async (e) => {
        try{
                e.preventDefault()
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);

        }catch(error){
            setError(true);

        }
    
    }
    return (
        <>
        <div className="Search" >
            
            <form onSubmit={handleSubmit} >
                 <TextField id="city" label="City Name" variant="outlined"  required value={city} onChange={handleChange} /> 
                 <br></br><br></br>
                 <Button variant="contained" type="submit">Search</Button>
                    {error && <p style={{color:"red"}}>Please enter a valid city name</p>}
            </form>
        </div>
        </>
    )

}