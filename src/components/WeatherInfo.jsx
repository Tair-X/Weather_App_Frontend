import React from 'react';
import {Button} from "react-bootstrap";
import {apiKey} from "../api";
import Form from "./Form";

const WeatherInfo = (props) => {

    return (<div className="infoWeath">

        {props.city && <div>
            <p>City:{props.city}</p>
            <p>Country:{props.country}</p>
            <p>Temperature:{props.temp + " °F  "},{" " + props.descW}</p>
            <p>Wind speed:{props.wind + " mph"}</p>
            <p>Pressure:{props.pressure + " P"}</p>
            <p>Sunset:{props.sunset}</p>
        </div>
        }


    </div>)
}

export default WeatherInfo;