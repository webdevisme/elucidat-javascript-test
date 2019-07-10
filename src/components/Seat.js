import React from "react";
import seatIcon from './Seat.svg';
import './Seat.css';

function Seat(props) {
    const handleClick = (event) => {
        event.preventDefault();
        if (props.available) {
            props.seatSelected(props.seatNumber);
        } else {
            props.seatSelected(null);
        }
    }
  return ( props.data ?
    <div className="Seat" available={props.data.available ? 'true' : 'false'}
        onClick={handleClick}>
        <img src={seatIcon}  alt="Seat Icon"/>
        <div className="tooltip">{props.data.seatNumber} : {props.data.available ? 'Available' : ' Taken'}</div>
    </div> 
    : <div className="error">Component Data Error</div>
  );
}

export default Seat;
