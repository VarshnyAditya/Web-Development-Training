const inputbox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherimg = document.querySelector('.cloud-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind-speed');


const location_n_found =  document.querySelector('.location_not_found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
	const api_key = "0e3697a873342a6cd2dd2f506b201887";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

	const weather_data = await fetch(`${url}`).then(response => response.json());

	if(weather_data.cod === `404`){
		location_n_found.style.display = "flex";
		weather_body.style.display = "none";
		console.log("error");
		return;
	}
	location_n_found.style.display = "none";
	weather_body.style.display = "flex";
	
	temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}&degC`;
	description.innerHTML = `${weather_data.weather[0].description}`;
	humidity.innerHTML = `${weather_data.main.humidity}%`;
	windspeed.innerHTML = `${weather_data.wind.speed}Km/H`;

	switch(weather_data.weather[0].main){
		case 'Clouds':
			weatherimg.src = "https://img.freepik.com/premium-vector/overcast-rain-clouds-cutout-vector-illustration_674398-2949.jpg?semt=ais_hybrid";
			break;
		case 'Clear':
			weatherimg.src = "https://windybot.com/img/-OpD9u9dF_lcPMu7geLh.jpg";
			break;
		case 'Rain':
			weatherimg.src = "https://www.drawing123.com/wp-content/uploads/2024/10/Cloud-and-Rain-4-10.jpg";
			break;
		case 'Mist':
			weatherimg.src = "https://static-cse.canva.com/blob/1628036/bruneljohnson368289unsplash.jpg";
			break;
		case 'Snow':
			weatherimg.src = "https://c02.purpledshub.com/uploads/sites/77/2024/07/1ef49110-fbca-637c-a4d8-81a2ebe9b37b.jpeg";
			break;
	}
	console.log(weather_data);
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputbox.value);
});