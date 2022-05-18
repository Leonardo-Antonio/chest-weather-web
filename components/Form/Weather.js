import { useWeather } from "../../hooks/weather.hook";
import { WeatherCard } from "../Card/WeatherCard";
import styles from "../../styles/Weather.module.css";
import { useState } from "react";
import { IconWeather } from "../Icons/IconWeather";
import { Loading } from "../Icons/Loading";

export const WeatherForm = () => {
  const {
    setDataForm,
    dataForm,
    getTempWeather,
    weatherPlaceCode,
    loading,
    getTempWeatherByLonLat,
    loadingWeatherLonLat,
    weatherLonLat,
  } = useWeather();

  const getData = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  const handlerSubmit = async () => {
    await getTempWeather();
  };

  const currentLocation = () => {
    if (!"geolocation" in navigator) {
      return alert(
        "Tu navegador no soporta el acceso a la ubicación. Intenta con otro"
      );
    }

    const onUbicacionConcedida = async (ubicacion) => {
      console.log("Tengo la ubicación: ", ubicacion);
      const { latitude, longitude } = ubicacion.coords;
      await getTempWeatherByLonLat({ lon: longitude, lat: latitude });
    };
    const onErrorDeUbicacion = (err) => {
      console.log("Error obteniendo ubicación: ", err);
    };

    const opcionesDeSolicitud = {
      enableHighAccuracy: true, // Alta precisión
      maximumAge: 0, // No queremos caché
      timeout: 5000, // Esperar solo 5 segundos
    };

    navigator.geolocation.getCurrentPosition(
      onUbicacionConcedida,
      onErrorDeUbicacion,
      opcionesDeSolicitud
    );
  };

  return (
    <div className={`${styles.container_weather}`}>
      <section>
        <div>
          <h1 className="text-5xl text-center p-4">Welcome to ChestWeather</h1>
        </div>
      </section>
      <section className={`flex-row gap-5 flex justify-center`}>
        <div className={`pt-4 pb-4 ${styles.card_info}`}>
          <div>
            <input
              className={styles.input}
              type="text"
              placeholder="Ingrese el nombre del lugar"
              name="place"
              onChange={getData}
            />
          </div>

          <div>
            <input
              className={styles.input}
              type="text"
              placeholder="Ingrese el código de su pais"
              name="code"
              onChange={getData}
            />
          </div>

          <div>
            <button onClick={handlerSubmit} className={styles.btn}>
              {loading ? "Loading..." : "Buscar"}
            </button>
            <button onClick={currentLocation} className={styles.btn}>
              {loadingWeatherLonLat ? "Loading..." : "Ubicación actual"}
            </button>
          </div>
        </div>
      </section>

      <section className="flex justify-center">
        <WeatherCard data={weatherPlaceCode} />
      </section>

      <section className={styles.icon_floting}>
        {loading ? <Loading /> : <IconWeather data={weatherPlaceCode} />}
      </section>
    </div>
  );
};

/*
 ** >27 = calor
 ** <20=15 = frio
 ** <15 = muy frio
 */
