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
          day={"08"}
          month={"Agosto"}
          title={
            "Desafío de diseño: Competición para medir la resolución de problemas en el mundo UX/UI"
          }
          tutor={"Miguel Timoté"}
        />
        <div className={styles.divisor}></div>
        <DateCard
          day={"15"}
          month={"Agosto"}
          title={
            "Charla: El mundo del Open-source, inicia en el mundo del código abierto y encuentra oportunidades de empleo"
          }
          tutor={"Richard Guevara, Daniel Saavedra"}
        />
        <div className={styles.divisor}></div>

        <DateCard
          day={"10"}
          month={"Septiembre"}
          title={
            "Proyecto: Inicia un desarrollo Open-source, define el alcance, establece canales de colaboración y anima a la comunidad a participar"
          }
          tutor={"Richard Guevara, Daniel Saavedra"}
        />
        <div className={styles.divisor}></div>
        <DateCard
          day={"25"}
          month={"Septiembre"}
          title={
            "Taller: Tus primeros pasos como desarrollador Junior, retos y estrategias para tu primer trabajo"
          }
          tutor={"Jonathan Buitrago, Richard Guevara"}
        />
      </div>
      <div className={styles.redirectButton}>
        <ButtonPurpleLink text={"Inscribirse"} link={"/#contactUs"} />
      </div>
    </div>
  );
};

export default Events;
