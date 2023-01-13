import ButtonPurple from "../../atoms/ButtonPurple/ButtonPurple";
import EventsCard from "../../molecules/EventsCard/EventsCard";
import styles from "./Activities.module.scss";

interface IActivities {}

const Activities = ({}: IActivities) => {
  return (
    <div className={styles.activities}>
      <div className={styles.events}>
        <EventsCard />
        <EventsCard />
      </div>
      <div className={styles.callToAction}>
        <h3 className={styles.title}>
          Asiste a nuestros <br /> próximos <br /> eventos
        </h3>
        <ButtonPurple text={"VER ANTERIORES"} />
      </div>
    </div>
  );
};

export default Activities;
