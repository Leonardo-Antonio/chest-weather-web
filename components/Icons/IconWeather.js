import Image from "next/image";
import { useState, useEffect } from "react";
import {} from "react";

export const IconWeather = ({ data }) => {
  if (Object.keys(data).length === 0) return <></>;

  return (
    <div>
      <div>
        <Image
          src={
            data.main.temp <= 15
              ? "/icon_muy_frio.png"
              : data.main.temp <= 20
              ? "/icon_nublado.png"
              : "/icon_calor.png"
          }
          alt="weather"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};
