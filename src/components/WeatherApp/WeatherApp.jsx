import React, { useState } from 'react';
import './WeatherApp.css';

import night from '../assets/night.png';
import overcast from '../assets/overcast.png';
import partly_cloudy_night from '../assets/partly-cloudy-night.png';
import partly_cloudy from '../assets/partly-cloudy.png';
import rain_night from '../assets/rain-night.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import sunny from '../assets/sunny.png';
import thunderstorm_night from '../assets/thunderstorm-night.png';
import thunderstorm from '../assets/thunderstorm.png';
import windy_night from '../assets/windy-night.png';
import windy from '../assets/windy.png';
import search_icon from '../assets/search.png';
import wind from '../assets/wind.png';
import humidity from '../assets/humidity.png';
import feelsLike from '../assets/feels-like.png';
import arrow_up from '../assets/arrow-up.png';
import arrow_down from '../assets/arrow-down.png';


const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState({
        humidity: '',
        windSpeed: '',
        temperature: '',
        location: '',
        feelsLike: '',
        temp_min: '',
        temp_max: '',
    });

    let api_key="7c51fe4450de2776410ba2027d961505";

    const [wicon, setWicon] = useState(overcast);
    const [backgroundColor, setBackgroundColor] = useState("linear-gradient(180deg, #9a9a9a 0%, #e9e9e9 100%)");

    const search = async () => {
        try {
        const cityInput = document.getElementsByClassName("cityInput")[0];
        if(cityInput.value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=Imperial&appid=${api_key}`;
        
        let response = await fetch(url);

        if(!response.ok) {
            throw new Error("City not found, try again");
        }

        let data = await response.json();

        setWeatherData({
            humidity: `${data.main.humidity}%`,
            windSpeed: `${Math.floor(data.wind.speed)} mph`,
            temperature: `${Math.floor(data.main.temp)}°F`,
            location: data.name,
            feelsLike: `${Math.floor(data.main.feels_like)}°F`,
            temp_min: `${Math.floor(data.main.temp_min)}°F`,
            temp_max: `${Math.floor(data.main.temp_max)}°F`,
        });

        if (data.weather[0].icon === "01d" && data.wind.speed <= 20 ) {
            setWicon(sunny);
            setBackgroundColor("linear-gradient(180deg, #62cff4, #2c67f2)");
        }
        else if (data.weather[0].icon === "01d" && data.wind.speed > 20 ) {
            setWicon(windy);
            setBackgroundColor("linear-gradient(180deg, #62cff4, #2c67f2)");
        }
        else if (data.weather[0].icon === "01n" && data.wind.speed <= 20 ) {
            setWicon(night);
            setBackgroundColor("linear-gradient(180deg, #130754, #3b2f80");
        }
        else if (data.weather[0].icon === "01n" && data.wind.speed > 20 ) {
            setWicon(windy_night);
            setBackgroundColor("linear-gradient(180deg, #130754, #3b2f80");
        }
        else if (data.weather[0].icon === "02d" && data.wind.speed <= 20 ) {
            setWicon(partly_cloudy);
            setBackgroundColor("linear-gradient(180deg, #62cff4, #2c67f2)");
        }
        else if (data.weather[0].icon === "02d" && data.wind.speed > 20 ) {
            setWicon(windy);
            setBackgroundColor("linear-gradient(180deg, #62cff4, #2c67f2)");
        }
        else if (data.weather[0].icon === "02n" && data.wind.speed <= 20 ) {
            setWicon(partly_cloudy_night);
            setBackgroundColor("linear-gradient(180deg, #130754, #3b2f80");
        }
        else if (data.weather[0].icon === "02n" && data.wind.speed > 20 ) {
            setWicon(windy_night);
            setBackgroundColor("linear-gradient(180deg, #130754, #3b2f80");
        }
        else if (data.weather[0].icon === "03d" && data.wind.speed <= 20 ) {
            setWicon(overcast);
            setBackgroundColor("linear-gradient(180deg, #e9e9e9, #9a9a9a");
        }
        else if (data.weather[0].icon === "03d" && data.wind.speed > 20 ) {
            setWicon(windy);
            setBackgroundColor("linear-gradient(180deg, #e9e9e9, #9a9a9a");
        }
        else if (data.weather[0].icon === "03n" && data.wind.speed <= 20 ) {
            setWicon(overcast);
            setBackgroundColor("linear-gradient(180deg, #454545, #707070");
        }
        else if (data.weather[0].icon === "03n" && data.wind.speed > 20 ) {
            setWicon(windy_night);
            setBackgroundColor("linear-gradient(180deg, #454545, #707070");
        }
        else if (data.weather[0].icon === "04d" && data.wind.speed <= 20 ) {
            setWicon(overcast);
            setBackgroundColor("linear-gradient(180deg, #e9e9e9, #9a9a9a");
        }
        else if (data.weather[0].icon === "04d" && data.wind.speed > 20 ) {
            setWicon(windy);
            setBackgroundColor("linear-gradient(180deg, #e9e9e9, #9a9a9a");
        }
        else if (data.weather[0].icon === "04n" && data.wind.speed <= 20 ) {
            setWicon(overcast);
            setBackgroundColor("linear-gradient(180deg, #454545, #707070");
        }
        else if (data.weather[0].icon === "04n" && data.wind.speed > 20 ) {
            setWicon(windy_night);
            setBackgroundColor("linear-gradient(180deg, #454545, #707070");
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "10d") {
            setWicon(rain);
            setBackgroundColor("linear-gradient(180deg, #e9e9e9, #9a9a9a");
        }
        else if (data.weather[0].icon === "09n" || data.weather[0].icon === "10n") {
            setWicon(rain_night);
            setBackgroundColor("linear-gradient(180deg, #454545, #707070");
        }
        else if (data.weather[0].icon === "11d") {
            setWicon(thunderstorm);
            setBackgroundColor("linear-gradient(180deg, #454545, #454545");
        }
        else if (data.weather[0].icon === "11n") {
            setWicon(thunderstorm_night);
            setBackgroundColor("linear-gradient(180deg, #170E13, #7a7aDB");
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setWicon(snow);
            setBackgroundColor("linear-gradient(180deg, #d4f1f8, #71a6d1");
        }
    } catch (error) {
        console.error("Error fetching weather data", error);
    }
}   

    return (
        <div className="container" style={{ background: backgroundColor }}>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="City" />
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="weather-temp">
                {weatherData.temperature}
            </div>
            <div className="weather-location">{weatherData.location}</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity} alt="humidity" className="icon" />
                    <div className="data">
                        <div className="humidity=percent">{weatherData.humidity}</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind} alt="wind" className="icon" />
                    <div className="data">
                        <div className="wind-speed">{weatherData.windSpeed}</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
                <div className="element">
                    <img src={feelsLike} alt="feels-like" className="icon" />
                    <div className="data">
                    <div className="text">Feels Like</div>
                        <div className="feels-like">{weatherData.feelsLike}</div>
                        </div>
                        </div>
            </div>
            <div className="data-container">
            <div className="element">
                    <img src={arrow_down} alt="arrow-down" className="icon" />
                    <div className="data">
                        <div className="temp-max">{weatherData.temp_min}</div>
                        <div className="text">Low</div>
                    </div>
                </div>
                <div className="element">
                    <img src={arrow_up} alt="arrow-up" className="icon" />
                    <div className="data">
                        <div className="temp-min">{weatherData.temp_max}</div>
                        <div className="text">High</div>
                    </div>
                </div>
                </div>
        </div>
    )
} 

export default WeatherApp;