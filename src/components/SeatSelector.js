import React, {
    useState
} from "react";
import './SeatSelector.css';
import Seat from './Seat.js';
import SeatTicket from './SeatTicket.js';

function SeatSelector(props) {
    const [data, setData] = useState({selectedSeat: null, seats: props.seats});

    const seatSelected = (seatNumber) => {
        debugger
        setData({...data , selectedSeat: data.seats.find( seat => seat.seatNumber === seatNumber)})
    }
    
    return ( 
    <div>
        <div className="legend"><span className="available">Seat Available</span><span className="taken">Seat Taken</span></div>
        <ul className = "SeatSelector" >
            { data.seats.map(item => ( <li  key={ item.seatNumber }>
                <Seat seatSelected={seatSelected} data={item} ></Seat>
            </li>))
                }
        </ul >
        {data.selectedSeat ? <SeatTicket seat={data.selectedSeat}></SeatTicket> : null}
    </div>
    );

}

export default SeatSelector;