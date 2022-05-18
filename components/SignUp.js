import Link from "next/link";
import styles from "../styles/Login.module.css";
import { useState } from "react";

export const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const getData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <div className={styles.container_login}>
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
              onClick={handleSubmit}
              className="w-full rounded-full bg-red-800 text-white text-lg p-2 mt-2 mb-2"
            >
              Sign up
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
