//@flow 
'use strict'

import axios from 'axios';

const apiKey = 'e1a93138d9f69da2b14fec4cd4b09e13';

export type weatherInfo ={
    feelsLike: string,
    maxTemp: number,
    minTemp: number,
    currTemp:Number,
    location: string
};

export async function getWeatherByLocation(cityName: string): weatherInfo{
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
               
        const completeUrl = url + cityName +'&appid=' + apiKey;

        const {data} = await axios.get(completeUrl);

        let res = data;
        
        const wthr: weatherInfo ={
        
            location: res.name,
            currTemp: res.main.temp,
            minTemp: res.main.temp_min,
            maxTemp: res.main.maxTemp,
            feelsLike: res.main.feelsLike
        };
        
        return wthr;
}