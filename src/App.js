import React, {
  useEffect,
  useState
} from "react";
import SeatSelector from './components/SeatSelector.js';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch("http://localhost:8080/seatData")
      .then( response => response.json())
      .then( data => {
          setData(data.seats);
      })
  }, []);

  return (
    <div className="App">
      {data.length === 0 ?
        <div className="spinner">Loading</div>
      : <SeatSelector seats={data}></SeatSelector>
      }
    </div>
  );
}

export default App;
