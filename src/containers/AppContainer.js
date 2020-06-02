import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import CityResponse from '../components/CityResponse';
import City from '../components/City';
import Map from '../components/Map';
import '../App.js';

function AppContainer(props) {

    const [responseData, setResponseData] = useState(''); 
   
   /*const handleZipChange = async (zipValue) => {
        //console.log(`--------- fetchData called zip:${zipValue}`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=imperial&zip=${zipValue},us`)
        const json = await res.json()
        //console.log(json);
        setResponseData(json);
    }
    */
    
    const handleTownChange = async (cityNZValue) => {
        //console.log(`--------- fetchData called zip:${zipValue}`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${cityNZValue},nz`)
        const json = await res.json()
        //console.log(json);
        setResponseData(json);
    }

    const handleMapMarker = async (longlat) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&lat=${longlat.lat}&lon=${longlat.lng}&cnt=1`)
        const json = await res.json()
        console.log(json.cod);
        if(json.cod != 200)
            return false;
        //console.log(json);
        setResponseData(json);
        return true;
    }

    const clearResponse = () => {
        setResponseData('');
    }

    return (
        <div className="HzFlex">
            <div className="HzFlexChild">
            <Map onHandleMarker={handleMapMarker} clearResponse={clearResponse}/>
            </div>
            <div className="HzFlexChild">
                <div>
                    <div className="row mt-4">
                        <div className="col-sm-4"></div>
                        <City onCityChange={handleTownChange} clearResponse={clearResponse}/>
                        <div className="col-sm-4"></div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-2"></div>
                        <CityResponse responseData={responseData} clearResponse={clearResponse}/>
                        <div className="col-sm-2"></div>
                    </div>    
                </div>
            </div>
        </div>
    );
}
  
export default AppContainer
