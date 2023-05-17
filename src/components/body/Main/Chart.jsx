import React, { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

function Chart(props) {

    const { activePage, weatherTemp } = props;



    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Temperature Chart ' + activePage,
            },
        },
    };

    const data = [

        {
            labels: weatherTemp?.forecast.map(data => (data.date)),
            datasets: [
                {
                    label: 'Highest-Temperature',
                    data: weatherTemp?.forecast.map(data => (data.temperature.max)),
                    backgroundColor: 'rgba(145, 97, 954, 0.5)',
                },
                {
                    label: 'Lowest-Temperature',
                    data: weatherTemp?.forecast.map(data => (data.temperature.min)),
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
        },

    ]

    return (
        <div className="Chart">
            {!!activePage && activePage > 0 && <Bar options={options} data={data[activePage - 1]} />}
        </div>
    );
}

export default Chart;