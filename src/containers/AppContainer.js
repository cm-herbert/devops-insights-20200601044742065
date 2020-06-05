import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import CityResponse from '../components/CityResponse';
import City from '../components/City';
import Map from '../components/Map';
import '../App.js';
import '../App.css';

function AppContainer(props) {

    const [responseData, setResponseData] = useState(''); 
   
    
    const handleTownChange = async (cityNZValue) => {
        //console.log(`--------- fetchData called zip:${zipValue}`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${cityNZValue},nz`)
        const json = await res.json()
        //console.log(json);
        setResponseData(json);
        if(json.cod == 200)
            global.session.addLocation(json.name,'s', json.coord);
    }

    const handleMapMarker = async (longlat) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&lat=${longlat.lat}&lon=${longlat.lng}&cnt=1`)
        const json = await res.json()
        console.log(json.cod);
        if(json.cod != 200)
            return false;
        //console.log(json);
        setResponseData(json);
        global.session.addLocation(json.name,'m');
        document.getElementById("usr").value = json.name;
        return true;
    }

    const clearResponse = () => {
        setResponseData('');
    }

    return (
        <div className="HzFlex">
            <div className="HzFlexChild">
            <Map onHandleMarker={handleMapMarker}  clearResponse={clearResponse}/>
            </div>
            <div className="HzFlexChild">
                <div className="CenterPaddedContainer">
                    <div className="CenterPaddedContainerChild">
                        <div>
                            <City onCityChange={handleTownChange} clearResponse={clearResponse}/>
                        </div>
                        <div>
                            <CityResponse responseData={responseData} clearResponse={clearResponse}/>
                        </div>  
                    </div>  
                </div>
            </div>
        </div>
    );
}
  
export default AppContainer
