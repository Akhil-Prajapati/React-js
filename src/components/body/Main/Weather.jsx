import axios from "axios";
import { useEffect, useState } from "react";


function Weather() {

    const [cityName, setcityName] = useState('Ahmedabad');
    const [weatherData, setWeatherData] = useState({});
    const [forecast, setForecase] = useState({});

    let API_KEY = "587190a81601404d88d200dd8ec3f9ec";

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // let Forcast = [];

    function handleCityChange(e) {
        setcityName(e.target.value)
        axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${e.target.value}&key=${API_KEY}`).
            then((res) => {
                setWeatherData(res.data);

            }).
            catch((error) => { console.log("ee", error); });

        axios.get(`https://api.weatherbit.io/v2.0/current?city=${e.target.value}&key=${API_KEY}`).
            then((res) => {
                setForecase(res.data);
                console.log(res.data);

            }).
            catch((error) => { console.log("ee", error); });
    }

    return (
        <div className="Weather">
            <div id="searchWeather">
                <h5 className="fs-3 text-light"><i className="bi bi-search"></i></h5>
                <h3 className="fs-3 text-light">City Weather</h3>

                <span>
                    <input className="balloon my-5" id="state" type="text" onChange={handleCityChange} /><label for="state" >CITY NAME </label>
                </span>
            </div>

            <div className="card my-5">
                <img src={`icons/${weatherData?.data?.[0].weather.icon}.png`} className="w-25 mx-auto d-block" alt="..." />
                <h2>{forecast?.data?.[0].app_temp}</h2>
                <h4>TODAY</h4>
                <h5>{forecast?.data?.[0].wind_spd}<i className="bi bi-wind" style={{ paddingLeft: "5px" }} /></h5>
                <div className="card-body">
                    <h5 className="card-title fs-4">{weatherData.city_name}</h5>
                    <p className="card-text">{weatherData.country_code}</p>
                    <h6 style={{ float: "left" }}> <span style={{ color: "#e0aa36" }}>High</span>: {weatherData?.data?.[0].high_temp}°C</h6>
                    <h6 style={{ float: "right" }}> <span style={{ color: "#3da7e0" }}>Low</span>: {weatherData?.data?.[0].low_temp}°C</h6>
                </div>
                <ul className="list-group list-group-flush">
                    {weatherData?.data?.map(val => <li className="list-group-item fs-5">
                        <img src={`icons/${val.weather.icon}.png`} style={{ width: "30px", float: "left" }} alt="..." />

                        <span style={{ paddingRight: "5px", fontSize: "15px" }}>{val.high_temp} °C</span>
                        <span style={{ paddingLeft: "5px", fontSize: "15px", borderLeft: "1px solid black" }}>{weekday[new Date(val.datetime).getUTCDay()]}</span>

                        <span style={{ float: "right", fontSize: "15px" }}>
                            {val.wind_spd}
                            <i className="bi bi-wind" style={{ paddingLeft: "5px", width: "5px", fontSize: "15px" }} />
                        </span>
                        {/* <span>{val.app_max_temp < 40 ? 'less than 40' : 'greater'}</span> */}
                    </li>)}
                </ul>
            </div>
        </div>
    );
}

export default Weather;