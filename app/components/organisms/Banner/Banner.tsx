import styles from "./Banner.module.scss";
import CodeBitsLogo_Big from "../../../../public/assets/CodeBitsLogo_Big.webp";
import Illustration from "../../../../public/assets/Illustration.svg";
import ButtonCyan from "../../atoms/ButtonCyan/ButtonCyan";

interface IBanner {}

const Banner = ({}: IBanner) => {
  return (
    <div className={styles.banner}>
      <img src={CodeBitsLogo_Big.src} alt="" className={styles.logo} />
      <h1 className={styles.title}>Lorem Ipsum</h1>
      <h3 className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h3>
      <ButtonCyan text={"CONÓCENOS"} />
      <img src={Illustration.src} alt="" className={styles.illustration} />
    </div>
  );
};

export default Banner;
