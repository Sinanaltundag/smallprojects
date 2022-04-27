const weatherCardList = document.querySelector(".cities");
const submitBtn = document.querySelector("button")
const inputBox = document.querySelector("input")
let searched = []

localStorage.setItem("apiKey", EncryptStringAES("5bebff646b1b4adcb3b58ff377ff52ab"));

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    fetchWeather(inputBox.value)
    inputBox.value=""
})


let fetchWeather= (city) => {
if (!city) {
    return alert("Please enter a city name")
}
    const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)

    .then(response=> {
        if (response.status!=200){
            throw new Error('Can not find this city!');
        }
        return response.json()
    })
    .then(myData=>{
        let weather = (myData.weather[0].description).toUpperCase();
        let icon = myData.weather[0].icon;
        let country = myData.sys.country;
        let cityName = (myData.name).split(" ")[0];
        if (searched.includes(cityName)) {
            throw new Error('You search this city before!');
        }
        searched.push(cityName)
        let tempC=Math.round(myData.main.temp-273.15);
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        let card = document.createElement("li")
        card.classList.add("city")
        card.innerHTML=`<h2 class="city-name">${cityName} <sup>${country}</sup></h2>
        <p class="city-temp">${tempC}<sup>℃</sup></p>
        <figure>
<img class="city-icon" src="${iconUrl}">
<figcaption>${weather}</figcaption>
</figure>`;
         
        weatherCardList.prepend(card) 
    })
    .catch(err=>alert(err.message))
}



