import { useEffect, useState } from "react"

const Nav = () => {

    const [currentTemp, setCurrentTemp] = useState(0);
    const [cloudPercent, setCloudPercent] = useState("");
    const [windSpeed, setWindSpeed] = useState("");
    // const [iconPath, setIconPath] = useState("");

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=austin&units=imperial&appid=971117009b27e27ca3936b93aee27d17')
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            const currentTemp = res.main.temp;
            setCurrentTemp(currentTemp);
            const cloudiness = res.clouds.all.toString();
            setCloudPercent(cloudiness);
            const wind = res.wind.speed;
            setWindSpeed(wind)
            // const icon = res.weather[0].icon;
            // console.log(icon)
        })
    }, [])    

  return (
    <header>
        <div className="container">
        <div id="headerTitle">
            <h1> ATXwaterlevels.com </h1>
        </div>
        <div id="headerWeather">
            <h2>Current Conditions:</h2>
            <p>Temp {currentTemp}°</p>
            <p>Cloudiness: {cloudPercent}%</p>
            <p>Windspeed: {windSpeed} mph</p>
        </div>
        </div>

    </header>
  )
}

export default Nav

