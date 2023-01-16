import styles from "./Navbar.module.scss";
import CodeBitsLogo from "../../../../public/assets/CodeBitsLogo.webp";
import Link from "next/link";

interface INavbar {}

const Navbar = ({}: INavbar) => {
  return (
    <div className={styles.navbar}>
      <img src={CodeBitsLogo.src} alt="" className={styles.logo} />
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href={"/"} className={styles.link}>
            INICIO
          </Link>
          <div className={styles.linkBar}></div>
        </li>
        <li className={styles.listItem}>
          <Link href={"/aboutus"} className={styles.link}>
            NOSOTROS
          </Link>
          <div className={styles.linkBar}></div>
        </li>
        <li className={styles.listItem}>
          <a href="" className={styles.link}>
            EQUIPO
          </a>
          <div className={styles.linkBar}></div>
        </li>
        <li className={styles.listItem}>
          <a href="" className={styles.link}>
            PORTAFOLIO
          </a>
          <div className={styles.linkBar}></div>
        </li>
        <li className={styles.listItem}>
          <a href="" className={styles.link}>
            EVENTOS
          </a>
          <div className={styles.linkBar}></div>
        </li>
        <li className={styles.listItem}>
          <a href="" className={styles.link}>
            ÚNETE
          </a>
          <div className={styles.linkBar}></div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
