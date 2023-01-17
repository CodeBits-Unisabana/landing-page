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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          consectetur adipiscing elit ut aliquam purus sit amet. Et malesuada
          fames ac turpis egestas. Lectus vestibulum mattis ullamcorper velit
          sed ullamcorper morbi tincidunt.
        </p>
      </div>
      <ButtonPurple text={"VER MÁS"} link={"#contactUs"} />
    </div>
  );
};

export default Portfolio;
