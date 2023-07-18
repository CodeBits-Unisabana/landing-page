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
              title={"Taller - Mi primer página web con React"}
              upperInfo={"Marzo de 2023"}
              lowerInfo={"Jonathan Buitrago"}
              color={"cyan"}
            />
            <EventsCard
              image={Event2.src}
              title={"Taller - Crea una api rest con Node.Js y Express"}
              upperInfo={"Febrero de 2023"}
              lowerInfo={"Richard Guevara"}
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

            <ButtonPurple text={"VER PRÓXIMOS"} link={"/events"} />
          </div>
        </>
      )}
    </div>
  );
};

export default Activities;
