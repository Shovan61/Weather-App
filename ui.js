class UI {
    constructor(){
        this.info = document.getElementById('weather-info');
        this.alert = document.querySelector('.alert');
    }


showInfo(data){

this.info.innerHTML = `
              <h3>Location: ${data['name']}</h3>
              <div id="temp">
                <div id="temp-info">
                  <p>Temp: &nbsp  ${(data['main']['temp'] - 273).toFixed(0)}°C</p>
                </div>
                <div id="temp-img">
                  <img src="./img/temp.png" height="45px" width="25px" alt="temp">
                </div>
              </div>

              <div id="humidity">
                <div id="hum-info">
                  <p>Humidity: &nbsp ${data['main']['humidity']}  g.m-3</p>
                </div>
                <div id="hum-img">
                  <img src="./img/humidity.png" height="45px" width="25px" alt="temp">
                </div>
              </div>

              <div id="pressure">
                <div id="pre-info">
                  <p>Pressure: &nbsp ${data['main']['pressure']} pa</p>
                </div>
                <div id="pre-img">
                  <img src="./img/pressure.png" height="45px" width="25px" alt="temp">
                </div>
              </div>
`;    

}

showAlert(){
  this.alert.style.display = 'block';

  setTimeout(() => {
    this.alert.style.display = 'none';
  }, 3000);
}


clearUI(){
  this.info.innerHTML = '';
}

}