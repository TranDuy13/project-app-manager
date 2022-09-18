import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { alertClasses } from "@mui/material";
import "./weather.scss";
const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

function Weather() {
  const [WeatherToDay, setWeather] = useState({
    temperature: "",
    wind: "",
    humidity: "",
    cloud: "",
    weather:""
  });
  const { temperature, wind, cloud, humidity ,weather} = WeatherToDay;
  const getIp =async(e)=>{
    e.getpreventDefaukt();
    const ip= await axios.get(
      `http://ip-api.com/json`
    );
    console.log(ip);
  }
  const getWeather = async (e) => {
    e.preventDefault();
    const city = "Ho Chi Minh";
    const country = "Viet Nam";
    const weather_api = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
    );
    const response = await weather_api.data;
    const ip= await axios.get(
      `http://ip-api.com/json`
    );
    console.log(ip.data);
    if (city && country) {
      setWeather({
        temperature: parseInt(response.main.temp - 273),
        wind: response.wind.speed,
        humidity: response.main.humidity,
        cloud: response.weather[0].description,
      });
    }
  };
  return (
    <>
      <form onSubmit={getWeather}>
        <div style={{background: "linear-gradient(to right bottom, rgb(0, 127, 255), rgb(178 0 136) 120%)" }} className="app-container">
          <div className="app-top-bar">
            <button className="button button-small">
              <i className="fas fa-chevron-left"></i>
            </button>
            <h1 className="app-heading">Weather Stats</h1>
          </div>
          <div className="app-content">
            <button className="button button-block">
              <span>Weather</span>{" "}
              <div className="button button-small">
                <i className="fas fa-chevron-right"></i>
              </div>
            </button>
            <div className="button button-dial">
              <span className="button-dial-spoke"></span>
              <span className="button-dial-spoke"></span>
              <span className="button-dial-spoke"></span>
              <span className="button-dial-spoke"></span>
              <span className="button-dial-spoke"></span>
              <span className="button-dial-spoke"></span>

              <div className="button-dial-top"></div>
              <div className="button-dial-label">{temperature}&deg;C</div>
            </div>
            <div className="flex-button-container">
              <button className="button button-large">
                Wind Speed: {wind} m/s
              </button>
              <button className="button button-large">
                Humidity: {humidity} %
              </button>
              <button className="button button-large">
                Weather: {cloud}
              </button>
            </div>
            <button className="button button-link">Update Weather</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Weather;
