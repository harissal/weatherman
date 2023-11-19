export const fetchWeather = async () => {
  const url =
    "https://api.openweathermap.org/data/3.0/onecall?lat={40.78}&lon={-73.96}&appid={7c51fe4450de2776410ba2027d961505}";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchWeather;
