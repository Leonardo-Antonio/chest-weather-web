import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const RouteGuard = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token == null) {
      push("/login");
    }
  }, [isLoggedIn]);

  return <div>{children}</div>;
};
