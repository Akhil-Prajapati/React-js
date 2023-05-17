import axios from "axios";
import { useEffect, useState } from "react";


function Weather() {

    const [cityName, setcityName] = useState('Ahmedabad');
    const [weatherData, setWeatherData] = useState({});

    let API_KEY = "587190a81601404d88d200dd8ec3f9ec";

    // let WetherData = null;


    axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&key=${API_KEY}`).
        then((res) => {
            setWeatherData(res.data);
        }).
        catch((error) => { console.log("ee", error); });

    return (
        <div className="Weather">
            <div id="searchWeather">
                <h5 className="fs-3 text-light"><i className="bi bi-search"></i></h5>
                <h3 className="fs-3 text-light">City Weather</h3>
                <span>
                    <input className="balloon my-5" id="state" type="text" onChange={(e) => { setcityName(e.target.value) }} /><label for="state">CITY NAME</label>
                </span>
            </div>

            <div className="card my-5" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{weatherData.city_name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    );
}

export default Weather;