async function getWeather() {
    let stateSelected = document.getElementById("stateSelected")
    const requestApp = await fetch(`http://api.weatherapi.com/v1/current.json?key=1d34254f1395482192e124938240205&q=${stateSelected.value}&aqi=no`)
    requestApp.json().then((res) => {
        return res
    }).then((data) => {
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
    }).catch((err) => {
        return err
    })
}