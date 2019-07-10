import React, {
  useEffect,
  useState
} from "react";
import SeatSelector from './components/SeatSelector.js';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch("/seats.json")
      .then( response => response.text())
      .then( text => {
        console.log(text);
          setData(JSON.parse(text));
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
