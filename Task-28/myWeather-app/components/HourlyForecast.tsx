export default function HourlyForecast({ hourly }: { hourly: any }) {
  if (!hourly || !hourly.time) return null;

  const hours = hourly.time;

  return (
    <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800 space-y-4">
      <h3 className="text-lg font-bold text-white">Hourly forecast</h3>
      <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
        {hours.map((timeStr: string, index: number) => {
          const date = new Date(timeStr);
          const timeLabel = date.toLocaleTimeString([], { hour: 'numeric', hour12: true });
          const temp = Math.round(hourly.temperature_2m[index]);

          return (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-800/40 rounded-2xl">
              <span className="text-sm text-gray-300 w-16">{timeLabel}</span>
              <img src="../images/icon-sunny.webp" className="w-8 h-8 object-contain" />
              <span className="text-md font-bold text-white">{temp}°</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}