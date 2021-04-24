import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {apiKey} from "../api";
import Form from "./Form";
import WeatherInfo from "./WeatherInfo";

let Weather =()=>{

    let [weatherInfo,setWeatherInfo]=useState({
        city: undefined,
        country: undefined,
        temp: undefined,
        descW: undefined,
        wind: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        error:undefined
    })

        let onWeatherHandle = async (e) => {
            e.preventDefault()
            let city = e.target.elements.city.value;
            if(city) {
                const weatherUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
                const weatherData = await weatherUrl.json();
                console.log(weatherData.sys.sunset,weatherData.sys.sunrise)

                let sunset=weatherData.sys.sunset;
                let date=new Date();
                date.setTime(sunset);
                let sunset_date=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

                let str= weatherData.weather[0].description;
                let wStr=str[0].toUpperCase()+str.slice(1);


                setWeatherInfo({
                    city: weatherData.name,
                    country: weatherData.sys.country,
                    temp: weatherData.main.temp,
                    descW: wStr,
                    wind: weatherData.wind.speed,
                    pressure: weatherData.main.pressure,
                    sunset:sunset_date,
                    error:undefined
                })
            }

            else {
                setWeatherInfo({
                    error:'Enter city'
                })
            }


        }


        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 info">
                            <h1>Get your city weather</h1>
                        </div>
                        <div className="col-sm-7 form">
                            <Form getWeather={onWeatherHandle}/>
                            <WeatherInfo
                                city={weatherInfo.city}
                                country={weatherInfo.country}
                                temp={weatherInfo.temp}
                                descW={weatherInfo.descW}
                                wind={weatherInfo.wind}
                                pressure={weatherInfo.pressure}
                                sunrise={weatherInfo.sunrise}
                                sunset={weatherInfo.sunset}
                            />
                        </div>
                    </div>
                </div>


                <div className="error">
                    {weatherInfo.error}
                </div>

            </div>
        )

}

export default Weather;