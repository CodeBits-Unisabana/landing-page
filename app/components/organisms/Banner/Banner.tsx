import CodeBitsLogo_Big from "../../../../public/assets/CodeBitsLogo_Big.webp";
import Illustration from "../../../../public/assets/Illustration.svg";

import ButtonCyan from "../../atoms/ButtonCyan/ButtonCyan";

import styles from "./Banner.module.scss";

interface IBanner {}

const Banner = ({}: IBanner) => {
  return (
    <div className={styles.banner}>
      <img src={CodeBitsLogo_Big.src} alt="" className={styles.logo} />
      <h1 className={styles.title}>Apasionados por la tecnología</h1>
      <h3 className={styles.subtitle}>
        Nos mueve la innovación, el desarrollo Web y el diseño. Amamos enseñar,
        ayudar y trabajar
      </h3>
      <ButtonCyan text={"CONÓCENOS"} link={"#contactUs"} />
      <img src={Illustration.src} alt="" className={styles.illustration} />
    </div>
  );
};

export default Banner;
