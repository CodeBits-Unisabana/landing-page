"use client";

import { useEffect, useState } from "react";

import Event1 from "../../../../public/assets/Events/Event1.webp";
import Event2 from "../../../../public/assets/Events/Event2.webp";

import ButtonPurple from "../../atoms/ButtonPurple/ButtonPurple";

import EventsCard from "../../molecules/EventsCard/EventsCard";

import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import styles from "./Activities.module.scss";

interface IActivities {}

const Activities = ({}: IActivities) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className={styles.activities} id="activities">
      {domLoaded && (
        <>
          <div className={styles.events}>
            {width <= 700 ? (
              <>
                <h2 className={styles.title}>
                  Asiste a nuestros próximos eventos
                </h2>
              </>
            ) : (
              <></>
            )}
            <EventsCard
              image={Event1.src}
              title={"Taller de FrontEnd 2023"}
              upperInfo={"Sesión de 3 horas"}
              lowerInfo={"Octubre de 2022"}
              color={"cyan"}
            />
            <EventsCard
              image={Event2.src}
              title={"Taller de BackEnd 2023"}
              upperInfo={"Sesión de 3 horas"}
              lowerInfo={"Noviembre de 2022"}
              color={"purple"}
            />
          </div>
          <div className={styles.callToAction}>
            {width > 700 ? (
              <>
                <h2 className={styles.title}>
                  Asiste a nuestros próximos eventos
                </h2>
              </>
            ) : (
              <></>
            )}

            <ButtonPurple text={"VER PRÓXIMOS"} link={"#contactUs"} />
          </div>
        </>
      )}
    </div>
  );
};

export default Activities;
