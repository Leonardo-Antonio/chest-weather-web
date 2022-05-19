import Link from "next/link";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useAuth } from "../hooks/user/user.hook";
import { ErrorModal } from "./Modal/Error";
import { useRouter } from "next/router";

export const Login = () => {
  const { push } = useRouter();
  const { loadingLogIn, handlerLogIn } = useAuth();
  const [isErr, setIsErr] = useState(false);
  const [msgErr, setMsgErr] = useState([]);
  const [logInErr, setLogInErr] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const getData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (data.email.length == 0 || data.password.length == 0) {
      setIsErr(true);
      if (msgErr.includes("All fields are required")) return;
      setMsgErr([...msgErr, "All fields are required"]);
      return;
    }

    if (data.password.length < 6) {
      setIsErr(true);
      if (msgErr.includes("password must be greater than 6 characters")) return;
      setMsgErr([...msgErr, "password must be greater than 6 characters"]);
      return;
    }

    if (data.email.includes("@") == false) {
      setIsErr(true);
      if (msgErr.includes("email must be valid")) return;
      setMsgErr([...msgErr, "email must be valid"]);
      return;
    }

    const res = await handlerLogIn(data);
    if (!res.isErr) {
      push("/");
    } else {
      setLogInErr(true);
    }
  };

  return (
    <div className={styles.container_login}>
      <ErrorModal isErr={isErr} arrErr={msgErr} />
      <div className={styles.card}>
        <div>
          <div className="flex justify-center">
            <strong className="text-red-900">{logInErr && "Invalid email or password"}</strong>
          </div>
          <div>
            <input
              className={styles.input}
              placeholder="Ingrese su email"
              type="email"
              name="email"
              onChange={getData}
            />
          </div>
          <div>
            <input
              className={styles.input}
              type="password"
              placeholder="Ingrese su password"
              name="password"
              onChange={getData}
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="w-full rounded-full bg-red-800 text-white text-lg p-2 mt-2 mb-2"
            >
              {loadingLogIn ? "Loading..." : "Login"}
            </button>
          </div>
          <div className="flex justify-center">
            <Link href="/sign-up">
              <a className="text-white hover:underline transition-">
                No tengo una cuenta
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
