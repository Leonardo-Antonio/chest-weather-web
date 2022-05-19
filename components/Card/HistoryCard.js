import styles from "../../styles/History.module.css";

export const HistoryCard = ({ history }) => {
  return (
    <div className={styles.card}>
      <ul>
        <li>
          <strong>keywordPlaceSearch: </strong>
          {history.keywordPlaceSearch}
        </li>
        <li>
          <strong>keywordCodeCountry: </strong>
          {history.keywordCodeCountry}
        </li>
        <li>
          <strong>Temp: </strong>
          {history.temp}°C
        </li>
        <li>
          <strong>TempMax: </strong>
          {history.tempMax}°C
        </li>
        <li>
          <strong>TempMin: </strong>
          {history.tempMin}
        </li>
        <li>
          <strong>Humidity: </strong>
          {history.humidity}
        </li>
        <li>
          <strong>Country: </strong>
          {history.country}
        </li>
        <li>
          <strong>Place: </strong>
          {history.place}
        </li>
        <li>
          <strong>Coord: </strong>
          {history.coord}
        </li>
      </ul>
    </div>
  );
};
