import { useEffect, useState } from "react";
import Cards from "./Cards";
import Chart from "./Chart";
import Pagination from 'react-bootstrap/Pagination';
import ReactWeather, { useWeatherBit } from 'react-open-weather';

function Formula() {
    const [paraText, setParaText] = useState('');
    const [pageText, setPageText] = useState('');
    const [activePage, setActivePage] = useState(1);

    function handlePageChange(pageNumber) {
        setActivePage(pageNumber);
        setPageText(pageNumber);
    }

    const { data, isLoading, errorMessage } = useWeatherBit({
        key: '587190a81601404d88d200dd8ec3f9ec',
        lat: '23.0225',
        lon: '72.5714',
        lang: 'en',
        city_name: "Ahmedabad",
        unit: 'M', // values are (metric, standard, imperial)
    });


    const values = [null, 1, 2, 3, 4, 5];
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === activePage} onClick={() => handlePageChange(number)}>
                {2018 + number}
            </Pagination.Item>,
        );
    }

    // const link = "https://www.google.com";
    return (
        <div className="Formula">
            <div className="border-top border-secandory">
                {/* <a href={link}>hit google</a> */}
                <label className="mt-5" htmlFor="select"><h4>Select Page</h4></label>
                <select className="form-select" onChange={(e) => setParaText(e.target.value)}>
                    {values.map(val => <option value={val} key={val}>{val}</option>)}
                </select>

            </div>

            <div className="my-5">
                <Cards
                    paraText={paraText}
                />
            </div>

            <div className="my-5 justify-content-center">
                <Pagination>{items}</Pagination>
                <Chart activePage={activePage} weatherTemp={data} />
            </div>

            <div className="my-5">
                <ReactWeather
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    data={data}
                    lang="en"
                    locationLabel={data?.location}
                    unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
                    showForecast
                />
            </div>
        </div>
    );
}

export default Formula;