import Link from "next/link";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useAuth } from "../hooks/user/user.hook";
import { userService } from "../services/user/user.service";
import { ErrorModal } from "./Modal/Error";
import { useRouter } from "next/router";

export const SignUp = () => {
  const { loadingSignUp, handlerSignUp } = useAuth();
  const { push } = useRouter();

  const [isErr, setIsErr] = useState(false);
  const [msgErr, setMsgErr] = useState([]);
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const getData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      data.email.length == 0 ||
      data.password.length == 0 ||
      data.name.length == 0 ||
      data.lastname.length == 0
    ) {
      setIsErr(true);
      if (msgErr.includes("All fields are required")) return;
      setMsgErr([...msgErr, "All fields are required"]);
    }

    if (data.password.length < 6) {
      setIsErr(true);
      if (msgErr.includes("password must be greater than 6 characters")) return;
      setMsgErr([...msgErr, "password must be greater than 6 characters"]);
    }

    if (data.email.includes("@") == false) {
      setIsErr(true);
      if (msgErr.includes("email must be valid")) return;
      setMsgErr([...msgErr, "email must be valid"]);
    }

    if (
      data.name.length != 0 &&
      data.lastname.length != 0 &&
      data.email.includes("@") &&
      data.password.length >= 6
    ) {
      const res = await handlerSignUp(data);
      if (!res.isErr) {
        push("/login");
      }
    }
  };

  return (
    <div className={styles.container_login}>
      <ErrorModal isErr={isErr} arrErr={msgErr} />
      <div className={styles.card}>
        <div>
          <div>
            <input
              className={styles.input}
              placeholder="Ingrese su nombre"
              type="text"
              name="name"
              onChange={getData}
            />
          </div>
          <div>
            <input
              className={styles.input}
              type="text"
              placeholder="Ingrese sus apellidos"
              name="lastname"
              onChange={getData}
            />
          </div>
          <div>
            <input
              className={styles.input}
              type="email"
              placeholder="Ingrese su email"
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
              onClick={() => handleSubmit()}
              className="w-full rounded-full bg-red-800 text-white text-lg p-2 mt-2 mb-2"
            >
              {loadingSignUp ? "Loading..." : "Sign Up"}
            </button>
          </div>
          <div className="flex justify-center">
            <Link href="/login">
              <a className="text-white hover:underline transition-">
                Ya tengo una cuenta.
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
