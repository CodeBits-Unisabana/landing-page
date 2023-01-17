import CodeBitsLogo_Big from "../../../../public/assets/CodeBitsLogo_Big.webp";

import styles from "./Footer.module.scss";

interface IFooter {}

const Footer = ({}: IFooter) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topContent}>
        <div className={styles.links}>
          <img src={CodeBitsLogo_Big.src} alt="" className={styles.logo} />
          <ul className={styles.menu}>
            <li>
              <a href="#">NOSOTROS</a>
            </li>
            <li>
              <a href="#">EQUIPO</a>
            </li>
            <li>
              <a href="#">PROYECTOS</a>
            </li>
            <li>
              <a href="#">EVENTOS</a>
            </li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <a href="https://www.instagram.com/codebits_unisabana/">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://github.com/CodeBits-Unisabana">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://discord.gg/qbRzXM2p5B">
            <i className="bi bi-discord"></i>
          </a>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.legal}>
          <a href="#">Términos y Condiciones</a>
          <a href="#">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
