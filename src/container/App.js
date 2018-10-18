import React from "react";
import Titles from "../components/Titles";
import Form from "../components/Form";
import Weather from "../components/Weather";

const API_KEY = "28b2c13348267d3b3a8cbfe9a1905dbd";

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(
      `https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
