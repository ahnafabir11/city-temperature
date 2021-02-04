const mainFunc = (city)=> {
  const apiKey = "9e7a45a7a24f3d8e44345267b37a0505";
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      const tempKelvin = data.main.temp;
      const currentTemp = (tempKelvin - 273.15).toFixed(2);
      const weatherInfo = data.weather[0].main;
      const weatherIcon = data.weather[0].icon;
      const cityName = data.name;
      document.getElementById('currentTemp').innerText = currentTemp;
      document.getElementById('weatherInfo').innerText = weatherInfo;
      document.getElementById('cityName').innerText = cityName;
      document.getElementById('weatherImg').src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    });
}
mainFunc('dhaka');
const getTempInfo = () => {
  const cityName = document.getElementById('cityInput').value;
  mainFunc(cityName);
}