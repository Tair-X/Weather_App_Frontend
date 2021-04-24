import React from 'react';
import {Button} from "react-bootstrap";
import {apiKey} from "../api";

const Form = (props) => {




    return (
        <form onSubmit={props.getWeather}>

            <input type text name="city" placeholder={"Enter city"} style={{marginRight:10}}/>
            <button >Get weather</button>

        </form>
    )
}

export default Form;