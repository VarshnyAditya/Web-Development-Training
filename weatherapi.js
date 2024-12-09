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
			weatherimg.src = "https://media.istockphoto.com/id/1354219060/vector/sun-vector-cartoon-vector-logo-for-web-design-vector-illustration.jpg?s=612x612&w=0&k=20&c=nBAAzTT-al6gqBfdQi4E3l6AUK1g_b0LG0rBo0QlGDU=";
			break;
		case 'Rain':
			weatherimg.src = "https://www.drawing123.com/wp-content/uploads/2024/10/Cloud-and-Rain-4-10.jpg";
			break;
		case 'Mist':
			weatherimg.src = "https://img.freepik.com/premium-photo/white-smoke-texture-background_707519-28191.jpg?semt=ais_hybrid";
			break;
		case 'Snow':
			weatherimg.src = "https://static.vecteezy.com/system/resources/previews/004/274/846/non_2x/snowman-color-icon-isolated-illustration-vector.jpg";
			break;
	}
	console.log(weather_data);
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputbox.value);
});