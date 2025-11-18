

async function getWeather(){

    let city = document.getElementById("cityInput").value;
    let country = document.getElementById("countryInput").value;


    if(city.length === 0 || country.length === 0){
        alert("Please enter both city and country");
        return;
    }
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=331ca92302e15a439c9d10c2f72bc394&units=metric`)

        data = await response.json();

        if(data.cod === 200){
            document.getElementById("weatherResult").innerHTML = `<div>
            <p>Weather : ${data.main.temp}°C</p>
            <p>Humidity : ${data.main.humidity}%</p>
            <p>Pressure : ${data.main.pressure} hPa</p>
            <p>Wind Speed : ${data.wind.speed} m/s</p>
            <p>Weather Condition : ${data.weather[0].main}</p>
            <p>Description : ${data.weather[0].description}</p>
            </div>`;
            document.getElementById("weatherResult").style.color = "black";

            if(data.weather[0].main === "Clouds"){
                document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')";
            }
        }
    }
    catch(error){
        document.getElementById("weatherResult").innerHTML = `<p>Error fetching weather data. Please check the city and country names.</p>`;
        document.getElementById("weatherResult").style.color = "red";
    }

}