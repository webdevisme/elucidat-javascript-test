import React from "react";
import './SeatTicket.css';

function SeatTicket(props) {

  return (
    <div className="Ticket">
        <button className="close">Close</button>
        <table className="details">
            <tbody>
                <tr><td>Seat</td><td>{props.seat.seatNumber}</td></tr>
                <tr><td>Available</td><td>{props.seat.available ? 'Yes' : 'No'}</td></tr>
                <tr><td>Disability Access</td><td>{props.seat.disabilityAccessible ? 'Yes' : 'No'}</td></tr>
                <tr><td>Price</td><td>{props.seat.price}</td></tr>
                <tr><td colSpan="2">        <button >Book Seat</button></td></tr>
            </tbody>
        </table>
    </div>
  );
}

export default SeatTicket;
