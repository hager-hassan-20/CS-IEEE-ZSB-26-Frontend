export default function CurrentWeather({ city, current }: any) {
  if (!current || !city) return null;

  return (
    <div className="space-y-4">
      <div className="bg-blue-600 p-8 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center text-white relative overflow-hidden">
        
        <div className="space-y-1 z-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            {city.name}, {city.country}
          </h2>
          <p className="text-blue-100 text-sm font-medium">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-6 md:mt-0 z-10">
          <span className="text-6xl md:text-7xl font-extrabold tracking-tight">
            {Math.round(current.temperature_2m)}°
          </span>
        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Feels Like */}
        <div className="bg-gray-900/80 border border-gray-800 p-5 rounded-2xl space-y-2">
          <p className="text-gray-400 text-sm">Feels Like</p>
          <p className="text-2xl font-bold text-white">{Math.round(current.apparent_temperature)}°</p>
        </div>

        {/* Humidity */}
        <div className="bg-gray-900/80 border border-gray-800 p-5 rounded-2xl space-y-2">
          <p className="text-gray-400 text-sm">Humidity</p>
          <p className="text-2xl font-bold text-white">{current.relative_humidity_2m}%</p>
        </div>

        {/* Wind */}
        <div className="bg-gray-900/80 border border-gray-800 p-5 rounded-2xl space-y-2">
          <p className="text-gray-400 text-sm">Wind</p>
          <p className="text-2xl font-bold text-white">{current.wind_speed_10m} km/h</p>
        </div>

        {/* Precipitation */}
        <div className="bg-gray-900/80 border border-gray-800 p-5 rounded-2xl space-y-2">
          <p className="text-gray-400 text-sm">Precipitation</p>
          <p className="text-2xl font-bold text-white">{current.precipitation} mm</p>
        </div>

      </div>
    </div>
  );
}