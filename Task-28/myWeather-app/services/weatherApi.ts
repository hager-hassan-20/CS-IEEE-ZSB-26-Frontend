export  async function searchLocation(params:string) {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${params}&count=5&language=en&format=json`)
    const data = await response.json()
    return data;
}

export async function getWeatherData(lat: number, lon: number) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`)
    const data = await response.json()
    return data;
}