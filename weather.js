
// a24069c52d92791ddf85eb59dfd4621d
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
class Weather{
constructor(){
this.appKey = '2546943270e652d4d75fa055ba308af1';
}

async getWeather(city){

const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appKey}`)


const weatherInfo = await response.json();


return{
weatherInfo
}


}


};