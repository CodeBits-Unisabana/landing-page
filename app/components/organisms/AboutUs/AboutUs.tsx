import Objective from "../../molecules/Objective/Objective";
import Statistic from "../../molecules/Statistic/Statistic";

import styles from "./AboutUs.module.scss";

interface IAboutUs {}

const AboutUs = ({}: IAboutUs) => {
  return (
    <div className={styles.aboutUs} id="aboutUs">
      <div className={styles.header}>
        <h2 className={styles.title}>SOBRE NOSOTROS</h2>
        <p className={styles.description}>
          ¡Hola! Somos &lt;Code/Bits&gt;, y estamos felices de tenerte aquí
          Somos un equipo de estudiantes de Ingeniería Informática de séptimo
          semestre apasionados por la tecnología y el desarrollo de soluciones
          innovadoras que involucren el diseño y desarrollo web. Buscamos a
          través del trabajo en equipo la potencialización del talento; por esta
          razón, brindamos clases y talleres teórico-prácticos para difundir
          nuestro conocimiento.
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
              "Crecer como profesionales buscando oportunidades de mejora, reforzando además nuestras habilidades blandas y entendiendo la forma en que funciona el mundo laboral."
            }
          />
        </div>
      </div>
      <div className={styles.statisticsContainer}>
        <h2 className={styles.subTitle}>
          <span>CodeBits</span> en <span>números</span>
        </h2>
        <div className={styles.statistics}>
          <Statistic description={"Estudiantes impactados"} data={80} />
          <Statistic
            description={"Sesiones realizadas el año pasado"}
            data={12}
          />
          <Statistic description={"Integrantes del equipo"} data={6} />
          <Statistic description={"Talleres completados"} data={3} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
