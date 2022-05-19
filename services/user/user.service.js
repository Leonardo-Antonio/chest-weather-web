import { api } from "../../plugins/api";

export const userService = {
  async logIn(dataAuth) {
    try {
      const { status, data } = await api({
        url: "/users/log-in",
        method: "POST",
        data: dataAuth,
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

  async signUp(dataUser) {
    try {
      const { status, data } = await api({
        url: "/users/sign-up",
        method: "post",
        data: dataUser,
      });

      if (status != 200) {
        return {
          isErr: true,
          data: "the account ay exists",
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
