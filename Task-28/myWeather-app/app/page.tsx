"use client";

import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import CurrentWeather from "@/components/CurrentWeather";
import HourlyForecast from "@/components/HourlyForecast";
import DailyForecast from "@/components/DailyForecast";
import { getWeatherData } from "@/services/weatherApi";

export default function Home() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [selectedCity, setSelectedCity] = useState<any>(null);

  const handleSelectLocation = async (loc: any) => {
    setSelectedCity(loc);
    const data = await getWeatherData(loc.latitude, loc.longitude);
    setWeatherData(data);
  };

  useEffect(() => {
    const defaultWeather = async () => {
      const data = await getWeatherData(30.0444, 31.2357);
      setWeatherData(data);
      setSelectedCity({ name: 'Cairo', country: 'Egypt' });
    };
    defaultWeather();
  }, []);

  const currentDetails = weatherData?.current ? {
    temperature_2m: weatherData.current.temperature_2m,
    apparent_temperature: weatherData.current.apparent_temperature,
    relative_humidity_2m: weatherData.current.relative_humidity_2m,
    wind_speed_10m: weatherData.current.wind_speed_10m,
    precipitation: weatherData.current.precipitation,
    weather_code: weatherData.current.weather_code,
    unitSymbol: '°C',
    windSymbol: 'km/h',
  } : null;

  return (
    <main className="min-h-screen bg-[#03012d] text-white p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        
          <img src="../images/logo.svg"  className="items-center"/> 
  
        <div className="text-center space-y-4 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            How's the sky looking today?
          </h2>
          <SearchBar onSelectLocation={handleSelectLocation} />
        </div>

        {selectedCity && weatherData ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
            
            <div className="lg:col-span-2 space-y-6">
              {currentDetails && <CurrentWeather city={selectedCity} current={currentDetails} />}
              <DailyForecast daily={weatherData.daily} />
            </div>

            <div className="lg:col-span-1">
              <HourlyForecast hourly={weatherData.hourly} />
            </div>

          </div>
        ) : (
          <div className="p-16 text-center bg-gray-900/50 rounded-3xl border border-gray-800">
            <p className="text-gray-400 text-lg animate-pulse">Loading weather data...</p>
          </div>
        )}

      </div>
    </main>
  );
}