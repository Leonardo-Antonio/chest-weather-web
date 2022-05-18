import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export const IconWeather = ({ data }) => {
  if (Object.keys(data).length === 0) return <></>;

  const [sourceIcon, setSourceIcon] = useState("/");

  useEffect(() => {
    setSourceIcon(
      data.main.temp <= 15
        ? "/icon_muy_frio.png"
        : data.main.temp <= 20
        ? "/icon_nublado.png"
        : "/icon_calor.png"
    );
  }, [data]);

  return (
    <div>
      <div>
        <Image src={sourceIcon} alt="weather" width={50} height={50} />
      </div>
    </div>
  );
};
