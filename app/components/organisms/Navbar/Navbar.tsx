import Link from "next/link";

import CodeBitsLogo from "../../../../public/assets/CodeBitsLogo.webp";

import styles from "./Navbar.module.scss";

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
          <a href={"#aboutUs"} className={styles.link}>
            NOSOTROS
          </a>
          <div className={styles.linkBar}></div>
        </li>
        <li className={styles.listItem}>
          <a href="#members" className={styles.link}>
            EQUIPO
          </a>
          <div className={styles.linkBar}></div>
        </li>
        <li className={styles.listItem}>
          <a href="#portfolio" className={styles.link}>
            PORTAFOLIO
          </a>
          <div className={styles.linkBar}></div>
        </li>
        <li className={styles.listItem}>
          <a href="#activities" className={styles.link}>
            EVENTOS
          </a>
          <div className={styles.linkBar}></div>
        </li>
        <li className={styles.listItem}>
          <a href="#contactUs" className={styles.link}>
            ÚNETE
          </a>
          <div className={styles.linkBar}></div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
