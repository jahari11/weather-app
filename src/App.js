import React, {useState} from "react";
import axios from 'axios'
function App() {

  const[data, setData] = useState({})
  const [location, setLocation] = useState('')
const url = `https://api.weatherapi.com/v1/current.json?key=3785237822964933952220428231701&q=${location}`


  const searchLoaction = (event)=> {
    if (event.key === 'Enter') {
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }



  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLoaction}
        placeholder = 'Enter Location'
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
           {data.location ? <p>{data.location.name}</p> : null}
          </div>
          <div className="temp">
            {data.current ? <h1>{data.current.temp_f}°F</h1> : null}
          </div>
          <div className="description">
          {data.current ? <p>{data.current.condition.text}</p> : null}
          </div>
          </div>
          <div className="bottom">
            <div className="feels">
              {data.current ? <p className="bold">{data.current.feelslike_f}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.current ? <p className="bold">{data.current.humidity}%</p> : null}
              <p>Humiduty</p>
              <p></p>
            </div>
            <div className="wind">
              {data.current ? <p className="bold">{data.current.gust_mph}mph</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default App;
