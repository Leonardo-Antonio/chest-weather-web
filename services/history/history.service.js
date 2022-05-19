import { api } from "../../plugins/api";

export const historyService = {
  saveHistory: async (info) => {
    try {
      const { status, data } = await api({
        url: "/history/save",
        method: "POST",
        data: info,
        headers: { authorization: localStorage.getItem("token") },
      });

      if (status != 200) {
        return {
          isErr: true,
          data,
        };
      }

      return {
        isErr: false,
        data,
      };
    } catch (error) {
      return {
        isErr: true,
        data: error.message,
      };
    }
  },

  getById: async () => {
    try {
      const { data, status } = await api({
        url: "/history",
        method: "GET",
        headers: { authorization: localStorage.getItem("token") },
      });

      if (status != 200) {
        return {
          isErr: true,
          data,
        };
      }

      return {
        isErr: false,
        data,
      };
    } catch (error) {
      return {
        isErr: true,
        data: error.message,
      };
    }
  },
};
