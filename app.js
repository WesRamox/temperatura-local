async function getWeather() {
    let stateSelected = document.getElementById("stateSelected").value

    if (stateSelected != "") {
        const requestApp = await fetch(`https://api.weatherapi.com/v1/current.json?key=1d34254f1395482192e124938240205&q=${stateSelected}&aqi=no`)
        const data = await requestApp.json()
        
        let listDetails = document.getElementById("list-details")
        listDetails.innerHTML =
            `
    <div id="details-response">
        <h2 class="state-name">${data.location.name}</h2>
        <img src="${data.current.condition.icon}" alt="clima" id="img-temp">
        <h1>${data.current.temp_c}°C</h1>
        <div class="details">
            <div id="humidityBox">
                <p>Humidity</p>
                <p class="subtitle">${data.current.humidity}%</p>
            </div>
            <div id="windBox">
                <p>Wind speed</p>
                <p class="subtitle">${data.current.wind_kph}km/h</p>
            </div>
        </div>
    </div>`

        stateSelected = ""
    } else {
        alert("Por favor, adicione uma região")
    }
}

document.getElementById("sendButton").addEventListener("click", getWeather)
document.getElementById("stateSelected").addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        getWeather();
    }
});