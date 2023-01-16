import Objective from "../../molecules/Objective/Objective";
import styles from "./AboutUs.module.scss";

interface IAboutUs {}

const AboutUs = ({}: IAboutUs) => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.header}>
        <h2 className={styles.title}>SOBRE NOSOTROS</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          volutpat consequat mauris. Massa sed elementum tempus egestas sed sed.
          Vitae tortor condimentum lacinia quis vel eros donec ac odio. Sem
          integer vitae justo eget magna fermentum iaculis.
        </p>
      </div>
      <div className={styles.objectivesContainer}>
        <h2 className={styles.subTitle}>
          <span>Objetivos</span> de <span>CodeBits</span>
        </h2>
        <div className={styles.objectives}>
          <Objective
            number={"01"}
            description={
              "Enseñar lo que sabemos sobre desarrollo frontend, backend y diseño ux/ui por medio de talleres, cursos y otras actividades."
            }
          />
          <Objective
            number={"02"}
            description={
              "Aplicar dichos conocimientos en proyectos reales, ganar experiencias a la par de aprender nuevas cosas."
            }
          />
          <Objective
            number={"03"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
