//import React from 'react'
import './weatherApp.css'

import clear_icon from '../assets/clear.png'
import cloudy_icon from '../assets/cloudy.png'
import drizzle_icon from '../assets/drizzle.png'
import humid_icon from '../assets/humid.png'
import rain_icon from '../assets/rain.png'
import search_icon from '../assets/search.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/windy.png'
import { useState } from 'react'



export const WeatherApp = () => {


 let apiKey = "c541780f2530dd152746c214a998cfb0";

 const [wIcon, setIcon] = useState(); 


  const search = async () => {
      const element = document.getElementsByClassName("cityInput")
      if(element[0].value === ""){
        return 0;
      }
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

      let response = await fetch(apiUrl);
      let weatherData = await response.json();
      
      const humidity = document.getElementsByClassName("humidityPercentage");
      const wind = document.getElementsByClassName("windSpeed");
      const tempareTure = document.getElementsByClassName("weatherTemp");
      const location = document.getElementsByClassName("weatherLocation");
    
      humidity[0].innerHTML = weatherData.main.humidity+" %";
      wind[0].innerHTML = Math.floor(weatherData.wind.speed)+ " km/h";
      tempareTure[0].innerHTML = Math.floor(weatherData.main.temp)+" °C";
      location[0].innerHTML = weatherData.name;
      
      if(weatherData.weather[0].icon==="01d" || weatherData.weather[0].icon==="01n"){
        setIcon(clear_icon);
      }

      else if(weatherData.weather[0].icon==="02d" || weatherData.weather[0].icon==="02n"){
        setIcon(cloudy_icon);
      }
      else if(weatherData.weather[0].icon==="03d" || weatherData.weather[0].icon==="03n"){
        setIcon(drizzle_icon);
      }

      else if(weatherData.weather[0].icon==="13d" || weatherData.weather[0].icon==="13n"){
        setIcon(rain_icon);
      }

      else if(weatherData.weather[0].icon==="04d" || weatherData.weather[0].icon==="04n"){
        setIcon(snow_icon);
      }

      else{
        setIcon(clear_icon)
      }

    }






  return (
    <div className='container'>
        <div className='topBar'>
            <input type='text' className='cityInput' placeholder='City Name' />
                    <div className='searchIcon' onClick={() => {search()}} >
                        <img src={search_icon} alt='' className='search' />
                    </div>
        </div>

        <div className='weatherImage'>
          <img src={wIcon} alt='' className='cloudIcon'/>
        </div>

        <div className="weatherTemp">
            24 C
        </div>

        <div className="weatherLocation">
          Durgapur
        </div>

        <div className="dataContainer">
          
          <div className="element">
            <img src={humid_icon} alt="" className="icon" />
              <div className="data">
                <div className="humidityPercentage">
                  95%
                </div>
                  <div className="text">
                    Humidity
                  </div>
              </div>
          </div>
          
          <div className="element">
            <img src={wind_icon} alt="" className="icon" />
              <div className="data">
                <div className="windSpeed">
                  100 kmph
                </div>
                  <div className="text">
                    Wind Speed
                  </div>

              </div>
          </div>

        </div>


    </div>
  )
}

