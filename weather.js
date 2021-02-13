
const weatherInfo = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY = "07ecb621abe0a621b301194302168451";


function getWeather(lat,lng){
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric
		`).then(function(response){
	return response.json();
})
	.then(function(json){
		const temperature = Math.round(json.main.temp);
		const weatherIcon = json.weather[0].icon;
		const place = json.name;
		weatherInfo.innerText = `${place}\n${temperature}℃`;

		const body = document.querySelector('body');
		const image = new Image();
		image.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
		image.classList.add("weatherImage");
		body.appendChild(image);

	})
}

function saveCoords(coordsObj){
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude,longitude);
}
function handleGeoError(){
	document.write("can't access geoInfo");
}
function askForCoords(){
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
	const loadedCoords = localStorage.getItem(COORDS);
	if(loadedCoords === null){
		askForCoords();
	} else{
		const parsedCoords = JSON.parse(loadedCoords);
		getWeather(parsedCoords.latitude, parsedCoords.longitude);

	}
}

function init(){
	loadCoords();
}
init();