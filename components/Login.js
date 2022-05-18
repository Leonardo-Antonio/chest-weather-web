import Link from "next/link";
import styles from "../styles/Login.module.css";
import { useState } from "react";

export const Login = () => {
  const [data, setData] = useState({
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
              Login
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
