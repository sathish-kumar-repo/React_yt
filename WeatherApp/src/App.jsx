import { useEffect, useState } from "react";
import "./App.css";

// Img
import clearIcon from "/img/clear.png";
import cloudIcon from "/img/cloud.png";
import drizzleIcon from "/img/drizzle.png";
import rainIcon from "/img/rain.png";
import snowIcon from "/img/snow.png";
import searchIcon from "/img/search.png";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const api_key = `28efa51a588535b0f43d8a952f4527f3`;
  const [text, setText] = useState("London");

  const [icon, setIcon] = useState(snowIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [lag, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);

  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const weatherIconMap = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  const search = async () => {
    setError(null);
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();

      if (data.cod === "404") {
        console.error("City Not Found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      // To set value
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLog(data.coord.lon);
      setLat(data.coord.lat);

      //? https://openweathermap.org/weather-conditions

      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || clearIcon);

      setCityNotFound(false);
    } catch (error) {
      console.error(`An error occured: ${error.message}`);
      setError("An error occured while fetching weather data.");
    } finally {
      setLoading(false);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  useEffect(function () {
    search();
  }, []);

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            className="cityInput"
            placeholder="Search City"
            onChange={handleCity}
            value={text}
            onKeyDown={handleKeydown}
          />

          <div className="search-icon" onClick={() => search()}>
            <img src={searchIcon} alt="Search Icon" />
          </div>
        </div>

        {loading && <div className="loading-message">Loading...</div>}

        {error && <div className="error-message">{error}</div>}

        {cityNotFound && <div className="city-not-found">City not found</div>}

        {!loading && !cityNotFound && (
          <WeatherDetails
            icon={icon}
            temp={temp}
            city={city}
            country={country}
            lat={lat}
            log={lag}
            humidity={humidity}
            wind={wind}
          />
        )}

        <p className="copyright">
          Designed by <span>Sathish Kumar</span>
        </p>
      </div>
    </>
  );
}

export default App;
