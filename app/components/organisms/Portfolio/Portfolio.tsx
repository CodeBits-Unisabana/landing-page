import Project1 from "../../../../public/assets/Projects/Project1.webp";

import ButtonPurple from "../../atoms/ButtonPurple/ButtonPurple";

import styles from "./Portfolio.module.scss";

interface IPortfolio {}

const Portfolio = ({}: IPortfolio) => {
  return (
    <div className={styles.portfolio} id="portfolio">
      <h2 className={styles.title}>
        ¡Nuestro Portafolio de Proyectos no para de crecer!
      </h2>
      <div className={styles.projects}>
        <img src={Project1.src} alt="" className={styles.image} />
        <p className={styles.description}>
          Con objeto de reforzar nuestras habilidades en diseño y desarrollo
          web, buscamos proponer soluciones tecnológicas e innovadoras a
          nuestros clientes. ¡Consideramos indispensable priorizar nuestra
          mejora contínua!
        </p>
      </div>
      <ButtonPurple text={"VER MÁS"} link={"#contactUs"} />
    </div>
  );
};

export default Portfolio;
