import { useEffect, useState } from "react";
import "./App.css";
import { WeatherInfo } from "./WeatherInfo";

function App() {
    const [weather, setWeather] = useState<WeatherInfo[]>();

    useEffect(() => {
        fetch("http://localhost:5071/weatherforecast")
            .then(resp => resp.json())
            .then(data => setWeather(data));
    }, []);

    return (
        <div data-testId="bob">
            {weather?.map(w => (
                <div>
                    <div>{w.date}</div>
                    <div>{w.summary}</div>
                    <div>{w.temperatureC}</div>
                    <div>{w.temperatureF}</div>
                </div>
            ))}
        </div>
    );
}

export default App;
