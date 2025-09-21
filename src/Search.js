import React, { useState } from "react";

export default function Search() {
  let [temperature, setTemperature] = useState(null);

  let handleSubmit = async (event) => {
    event.preventDefault();
    let city = event.target.elements[0].value;
    let apiKey = "5da7b2dc058f07286fea39c4cee516a3";
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    if (data.main) {
      setTemperature(data.main.temp);
    } else {
      alert("City not found");
    }
  };

  return (
    <div className="Search">
      <header>
        <form className="search-form" id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-bar"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      {temperature && <div>Temperature: {temperature}°C</div>}
    </div>
  );
}
