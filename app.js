function createRightBox(location) {
    const detailsSelected = document.querySelector(".right")

    const text = document.createElement('h1')
    text.textContent = location.location.name

    const temp = document.createElement('h2')
    temp.textContent = `${location.current.temp_c}°C / ${location.current.temp_f}°F `

    const img = document.createElement('img')
    img.src = location.current.condition.icon
    img.alt = location.location.name
    img.classList.add("img-temp")


    detailsSelected.innerHTML = ""
    detailsSelected.append(img, text, temp)
}

async function getWeather() {
    let stateSelected = document.getElementById("stateSelected").value

    if (stateSelected != "") {
        const requestApp = await fetch(`https://api.weatherapi.com/v1/current.json?key=1d34254f1395482192e124938240205&q=${stateSelected}&aqi=no`)
        const data = await requestApp.json()
        await createRightBox(data)
        
        let listDetails = document.getElementById("list-details")
        listDetails.innerHTML =
            `
    <div id="details-response">
        <h2 class="state-name">${data.location.name}</h2>
        <img src="${data.current.condition.icon}" alt="clima" class="img-temp">
        <h1 title="${data.current.temp_f}°F">${data.current.temp_c}°C</h1>
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