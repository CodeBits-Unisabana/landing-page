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
          Desarrollamos un sistema contable para la gestión de documentos de los
          clientes de GlobalAccounters, contamos con más de 300 usuarios
          activos.
        </p>
      </div>
      {/* <ButtonPurple text={"VER MÁS"} link={"#contactUs"} /> */}
    </div>
  );
};

export default Portfolio;
