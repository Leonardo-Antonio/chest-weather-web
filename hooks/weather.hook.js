import { useState } from "react";
import { weatherService } from "../services/weather.service";
import { useHistorySave } from "./history/history.hook";

export const useWeather = () => {
  const { handlerSaveHistory, loadingSaveHistory } = useHistorySave();
  const [loading, setLoading] = useState(false);
  const [weatherPlaceCode, setWeatherPlaceCode] = useState({});
  const [loadingWeatherLonLat, setLoadingWeatherLonLat] = useState(false);
  const [dataForm, setDataForm] = useState({
    place: "",
    code: "",
  });

  const getTempWeather = async () => {
    setLoading(true);
    const { data, isErr } = await weatherService.getWeatherByPlaceAndCode({
      code: dataForm.code,
      place: dataForm.place,
    });

    if (!isErr) {
      setWeatherPlaceCode(data);
      await handlerSaveHistory({
        keywordPlaceSearch: dataForm.place,
        keywordCodeCountry: dataForm.code,
        temp: data.main.temp,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        humidity: data.main.humidity,
        country: data.sys.country,
        place: data.name,
        coord: `${data.coord.lon} / ${data.coord.lat}`,
      });
    }
    setLoading(false);
  };

  const getTempWeatherByLonLat = async ({ lon, lat }) => {
    setLoadingWeatherLonLat(true);
    const { data, isErr } = await weatherService.getWeatherByLonAndLat({
      lon,
      lat,
    });

    if (!isErr) {
      setWeatherPlaceCode(data);
      await handlerSaveHistory({
        keywordPlaceSearch: "current",
        keywordCodeCountry: "current",
        temp: data.main.temp,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        humidity: data.main.humidity,
        country: data.sys.country,
        place: data.name,
        coord: `${data.coord.lon} / ${data.coord.lat}`,
      });
    }

    setLoadingWeatherLonLat(false);
    console.log(data, isErr);
  };

  return {
    loading,
    weatherPlaceCode,
    dataForm,
    setDataForm,
    getTempWeather,
    getTempWeatherByLonLat,
    loadingWeatherLonLat,
  };
};
