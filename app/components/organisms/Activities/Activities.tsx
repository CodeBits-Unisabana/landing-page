import Event1 from "../../../../public/assets/Events/Event1.webp";
import Event2 from "../../../../public/assets/Events/Event2.webp";

import ButtonPurple from "../../atoms/ButtonPurple/ButtonPurple";

import EventsCard from "../../molecules/EventsCard/EventsCard";

import styles from "./Activities.module.scss";

interface IActivities {}

const Activities = ({}: IActivities) => {
  return (
    <div className={styles.activities} id="activities">
      <div className={styles.events}>
        <EventsCard
          image={Event1.src}
          title={"Taller de Ideación"}
          days={"Lunes y Martes"}
          hours={"12:00pm - 2:00pm"}
          color={"cyan"}
        />
        <EventsCard
          image={Event2.src}
          title={"Participación Open Campus 2023"}
          days={"Martes"}
          hours={"9:00am - 5:00pm"}
          color={"purple"}
        />
      </div>
      <div className={styles.callToAction}>
        <h2 className={styles.title}>
          Asiste a nuestros <br /> próximos <br /> eventos
        </h2>
        <ButtonPurple text={"VER ANTERIORES"} />
      </div>
    </div>
  );
};

export default Activities;
