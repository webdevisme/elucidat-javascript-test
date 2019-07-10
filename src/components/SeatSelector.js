import React, {
    useState
} from "react";
import './SeatSelector.css';
import Seat from './Seat.js';

function SeatSelector(props) {
    const [data] = useState({selectedSeat: null, seats: props.seats});
    
    return ( 
    <div>
        <div className="legend"><span className="available">Seat Available</span><span className="taken">Seat Taken</span></div>
        <ul className = "SeatSelector" >
            { data.seats.map(item => ( <li  key={ item.seatNumber }>
                <Seat data={item} ></Seat>
            </li>))
                }
        </ul >
    {data.selectedSeat ? <div className="Ticket"></div> : null}
    </div>
    );

}

export default SeatSelector;