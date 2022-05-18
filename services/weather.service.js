import { weather } from "../plugins/weather";

export const weatherService = {
  async getWeatherByPlaceAndCode({ code, place }) {
    try {
      const { status, data } = await weather({
        method: "get",
        url: `/weather?q=${place},${code}&appid=20da8ee17d6c411a42027852d131e7b3&units=metric`,
      });

      if (status === 200) {
        return {
          isErr: false,
          data,
        };
      }

      return {
        isErr: true,
        data,
      };
    } catch (error) {
      return {
        isErr: true,
        data: error,
      };
    }
  },

  async getWeatherByLonAndLat({ lon, lat }) {
    try {
      const { status, data } = await weather({
        method: "get",
        url: `/weather?lat=${lat}&lon=${lon}&appid=20da8ee17d6c411a42027852d131e7b3&units=metric`,
      });

      if (status === 200) {
        return {
          isErr: false,
          data,
        };
      }

      return {
        isErr: true,
        data,
      };
    } catch (error) {
      return {
        isErr: true,
        data: error,
      };
    }
  },
};
