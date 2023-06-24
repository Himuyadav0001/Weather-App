const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6956a0a13emshc6287fdb9ba920fp10767ajsn5f0c70115a66',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city)=>{
   cityName.innerHTML= city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {

		console.log(response)
        wind_degrees.innerHTML=response.wind_degrees
		sunrise.innerHTML=response.sunrise
		cloud_pct.innerHTML=response.cloud_pct
		temp.innerHTML=response.temp
		temp2.innerHTML=response.temp
		feels_like.innerHTML=response.feels_like
	    humidity.innerHTML=response.humidity
		humidity2.innerHTML=response.humidity	
		max_temp.innerHTML=response.max_temp	
		min_temp.innerHTML=response.min_temp	
		wind_speed.innerHTML=response.wind_speed
		wind_speed2.innerHTML=response.wind_speed


	})
	.catch(err => console.error(err));
}
  submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getweather(city.value)
  })
getweather("Delhi")