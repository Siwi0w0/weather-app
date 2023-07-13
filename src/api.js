export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '823f65726dmshf749406b8f22561p1b7c88jsne202c7e9d299',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "b7a2f065290ecc6df97c8e1b8c9b8ea5";

/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
*/
