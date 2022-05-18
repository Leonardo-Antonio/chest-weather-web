import { useState } from "react";
import { weatherService } from "../services/weather.service";

export const useWeather = () => {
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
    }

    setLoading(false);
    console.log(data, isErr);
  };

  const getTempWeatherByLonLat = async ({ lon, lat }) => {
    setLoadingWeatherLonLat(true);
    const { data, isErr } = await weatherService.getWeatherByLonAndLat({
      lon,
      lat,
    });

    if (!isErr) {
      setWeatherPlaceCode(data);
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
