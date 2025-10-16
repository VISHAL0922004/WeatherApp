import * as React from 'react';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import Card from '@mui/material/Card';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function InfoBox({info}) {
  const INIT_URL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwindy.app%2Ftextbook%2Fwhat-is-the-dust-storm-and-how-does-it-work.html&psig=AOvVaw2m3KmMhR4Vz8_RBmBFZ1AX&ust=1760509856298000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPDsw7aIo5ADFQAAAAAdAAAAABAE"
  
   const COLD_URL ="https://www.rush.edu/sites/default/files/styles/771x434/public/media-images/boy-freezing-weather-feature.webp?itok=lbmrhyiq"
    const HOT_URL ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Bc7MAcPA3yizwghgBWGGb1IyNC3xijIA-w&s"
    const MODERATE_URL ="https://www.istockphoto.com/photo/the-evening-sky-is-filled-with-the-creative-and-dusky-cirrus-clouds-gm1501165712-522383655"
    const RAIN_URL = "https://www.livemint.com/lm-img/img/2024/08/18/600x338/Delhi-Rain-Weather--19_1723208701944_1723976115718.jpg"


   
    return (
        <>
        <br></br>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={info.humidity >59 ? RAIN_URL : info.temp >15 ? HOT_URL : COLD_URL}
          title="weather Image"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {info.city} {info.humidity >59 ? <ThunderstormOutlinedIcon /> : info.temp >15 ? <SunnyIcon /> : <AcUnitOutlinedIcon />}
         
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <div>Humidity: {info.humidity}%</div>
            <div>Pressure: {info.pressure} hPa</div>
            <div>Temperature: {info.temp}°C</div>
            <div>Min Temperature: {info.temp_min}°C</div>
            <div>Max Temperature: {info.temp_max}°C</div>
            <div>Wind Speed: {info.windSpeed} m/s</div>
            <div>Weather: {info.weather}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </>
    )

}