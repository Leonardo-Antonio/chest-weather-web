export const WeatherCard = ({ data }) => {
  if (Object.keys(data).length == 0) {
    return <div>No data</div>;
  }

  return (
    <div className="w-96">
      <ul>
        <li>
          <strong>Temp: </strong> {data.main.temp} °C
        </li>
        <li>
          <strong>TempMax: </strong> {data.main.temp_max} °C
        </li>
        <li>
          <strong>TempMin: </strong> {data.main.temp_min} °C
        </li>
        <li>
          <strong>Humidity: </strong> {data.main.humidity}%
        </li>

        <li>
          <strong>Country: </strong> {data.sys.country}
        </li>
        <li>
          <strong>Place: </strong> {data.name}
        </li>
        <li>
          <strong>coord (Log - Lat): </strong> {data.coord.lon}/{data.coord.lat}
        </li>
      </ul>
    </div>
  );
};
