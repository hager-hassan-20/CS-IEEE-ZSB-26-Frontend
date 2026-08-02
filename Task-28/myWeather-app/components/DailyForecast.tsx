export default function DailyForecast({ daily }: { daily: any }) {
  if (!daily || !daily.time) return null;

  return (
    <div className="bg-[#03012d] p-6 rounded-3xl space-y-4">
      <h3 className="text-lg font-bold text-white">Daily forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {daily.time.slice(0, 7).map((timeStr: string, index: number) => {
          const date = new Date(timeStr);
          const dayLabel = date.toLocaleDateString([], { weekday: 'short' });
          const maxTemp = Math.round(daily.temperature_2m_max[index]);
          const minTemp = Math.round(daily.temperature_2m_min[index]);

          return (
            <div key={index} className="bg-gray-800/40 p-4 rounded-2xl flex flex-col items-center justify-center space-y-2 text-center">
              <span className="text-sm font-semibold text-gray-300">{dayLabel}</span>
              <img src="/images/icon-sunny.svg" className="w-10 h-10 object-contain" />
              <div className="text-xs text-white font-bold">
                {maxTemp}° <span className="text-gray-400 font-normal">{minTemp}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}