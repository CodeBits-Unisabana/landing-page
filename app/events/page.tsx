import ButtonPurpleLink from "../components/atoms/ButtonPurple/ButtonPurpleLink";

import DateCard from "../components/molecules/DateCard/DateCard";

import styles from "./page.module.scss";

interface IEvents {}

const Events = ({}: IEvents) => {
  return (
    <div className={styles.events}>
      <h1 className={styles.title}>Próximos talleres</h1>
      <div className={styles.date}>
        <h2>2023</h2>
      </div>
      <div className={styles.list}>
        <DateCard
          day={"14"}
          month={"Mar"}
          title={"Mi primer página web con React"}
          tutor={"Jonathan Buitrago"}
        />
        <div className={styles.divisor}></div>
        <DateCard
          day={"15"}
          month={"Mar"}
          title={"Crea una api rest con Node.Js y Express"}
          tutor={"Richard Guevara"}
        />
      </div>
      <ButtonPurpleLink text={"Inscribirse"} link={"/#contactUs"} />
    </div>
  );
};

export default Events;
