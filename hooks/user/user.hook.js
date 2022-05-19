import { userService } from "../../services/user/user.service";
import { useState } from "react";

export const useAuth = () => {
  const [loadingSignUp, setLoadingSignUp] = useState(false);
  const [loadingLogIn, setLoadingLogIn] = useState(false);
  const [user, setUser] = useState({});

  const handlerSignUp = async ({ name, lastname, email, password }) => {
    setLoadingSignUp(true);
    const { data, isErr } = await userService.signUp({
      name,
      lastname,
      email,
      password,
    });
    console.log(data);
    setLoadingSignUp(false);
    console.log(data);
    if (isErr) return { isErr: true, data };
    return { isErr: false, data: "created account" };
  };

  const handlerLogIn = async ({ email, password }) => {
    setLoadingLogIn(true);
    const { data, isErr } = await userService.logIn({ email, password });

    setLoadingLogIn(false);
    if (isErr) return { isErr: true, data: data };
    if (data.data.isValid) setUser(data);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.data.user));
    return { isErr: false, data: data };
  };

  return {
    loadingSignUp,
    handlerSignUp,
    loadingLogIn,
    handlerLogIn,
    user,
  };
};
