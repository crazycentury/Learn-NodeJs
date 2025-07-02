const API_KEY = "f3031a07fe68356926260258f6076a55"; // Ganti dengan API key gratis dari OpenWeatherMap
const CITY = "Jakarta";

async function getWeatherForecast() {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`);
  const data = await res.json();

  if (data.cod !== "200") {
    console.error("Gagal mengambil data:", data.message);
    return;
  }

  const dailyTemps = {};
  for (let item of data.list) {
    const date = item.dt_txt.split(" ")[0];
    if (!dailyTemps[date]) {
      dailyTemps[date] = item.main.temp;
    }
  }

  console.log(`Weather Forecast for ${CITY} (next 5 days):`);
  Object.entries(dailyTemps).slice(0, 5).forEach(([date, temp]) => {
    console.log(`${date}: ${temp} °C`);
  });
}

getWeatherForecast();
