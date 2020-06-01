import React from 'react';

function CityResponse(props) {

    if(props.responseData === null || props.responseData === '') {
        return null;
    }

    if(props.responseData.cod === '400' || props.responseData.cod === '404') {
        setTimeout(function() { props.clearResponse();}, 20000);
        return (
            <div className="col-sm-8">
                <div className="text-danger">{ props.responseData.message }</div>
            </div>
        );
    }

    if(props.responseData.cod === 200) {
        return (
            <div className="col-sm-8">
                <table className="table table-info table-hover">
                    <tbody>
                        <tr>
                            <td>City</td>
                            <td>{props.responseData.name}, {props.responseData.sys.country}</td>
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td>{props.responseData.main.temp} °C</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{props.responseData.main.pressure} hPa</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{props.responseData.main.humidity} %</td>
                        </tr>
                        <tr>
                            <td>Temperature (Min)</td>
                            <td>{props.responseData.main.temp_min} °C</td>
                        </tr>
                        <tr>
                            <td>Temperature (Max)</td>
                            <td>{props.responseData.main.temp_max} °C</td>
                        </tr>
                        <tr>
                            <td>Conditions</td>
                            <td>{props.responseData.weather[0].description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    return null
}
  
export default CityResponse