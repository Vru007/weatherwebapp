const app=document.querySelector('.weather-app');
const temp=document.querySelector('.temp');
const cityname=document.querySelector('.cityname');
const time=document.querySelector('.time');
const condition=document.querySelector('.condition');
const nameOutput=document.querySelector('.name');
const icon=document.querySelector('.icon');
const form=document.getElementById('locationsearch');
const cloud=document.querySelector('.cloudy');
const humidity=document.querySelector('.humidity');
const wind=document.querySelector('.wind');
const search=document.querySelector('.search');
const btn=document.querySelector('.submit');

let cities = document.getElementsByClassName('city');



let cityInput="Ahmedabad";


let btns = document.querySelectorAll('button');


btns.forEach(function (i) {
  i.addEventListener('click', function() {
    cityInput = i.innerHTML;
    fetchWeatherData();

    app.style.opacity="0";
  });
});





form.addEventListener('submit',(e)=>{

    if(search.value.lenght==0){

        alert("please type in a city name");
    }
    else{

        cityInput=search.value;

        fetchWeatherData();
        search.value="";
        app.style.opacity="0";
    }

    e.preventDefault();
})

function dayofTheWeek(day, month, year){

    const weekday=[
        "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
    ];

    return weekday[new Data('${day}/${month}/${year}').getDay()];
};



function fetchWeatherData(){

    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput+'&units=metric&appid=1ecfe26938aa178c7a7a19dfe21d8cc3')
    .then(response=>response.json())
    .then(data =>{
               
       var error=data.cod;  
       if(error=="404"){
        alert("city not found");
        app.style.opacity="1";
    }
    else{
        temp.innerHTML=data.main.temp+"&#176"+"C";
        condition.innerHTML=data.weather[0].description;
        cityname.innerHTML=data.name;
        cloud.innerHTML=data.clouds.all+"%";
        wind.innerHTML=data.wind.speed+"m/s";
        humidity.innerHTML=data.main.humidity+"%";

        const iconid=data.weather[0].icon;

        icon.src="https://openweathermap.org/img/wn/"+iconid+"@2x.png";

        app.style.opacity="1";
    }
    })
    
}
fetchWeatherData();
app.style.opacity="1";
