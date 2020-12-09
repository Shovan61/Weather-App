// get button
const input = document.getElementById('input');
const wBtn = document.querySelector('#get-weather');
const reset = document.getElementById('reset');
////////////////////////////////////



// Init classes
const weather = new Weather();
const ui = new UI();
//////////////////////////////





// functions
const updateWeather = e => {
e.preventDefault();
const city = input.value;



weather.getWeather(city)
.then(data => {

    if(data.weatherInfo.message === 'city not found' || city === ''){
        ui.showAlert();
    } else {
        // show in UI   
        
        ui.showInfo(data.weatherInfo);
    }    

});

};


const clearAll = e => {
e.preventDefault();

if(input.value === '') {
    ui.showAlert();
}
// clear from storage

// clear from UI
ui.clearUI();
input.value = '';

};


// Event Listners
wBtn.addEventListener('click', updateWeather);
reset.addEventListener('click', clearAll);