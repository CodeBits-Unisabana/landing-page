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
              <a href="#aboutUs">NOSOTROS</a>
            </li>
            <li>
              <a href="#members">EQUIPO</a>
            </li>
            <li>
              <a href="#portfolio">PROYECTOS</a>
            </li>
            <li>
              <a href="#activities">EVENTOS</a>
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
          <a href="https://docs.google.com/document/d/e/2PACX-1vT9Rp34dr8PWHgqxXskuu_TJ8D_Id3iFsnHAK9ypbBo3R1uqxkuBX1FkGmbw_s-KwYV3weNawWiGW3q/pub">
            Términos y Condiciones
          </a>
          <a href="https://docs.google.com/document/d/e/2PACX-1vQx8ZI7gYjcY3Le6v_gZ7_vH8QscXl_LJRWYzQwwbRiL6ARsXP4rJOdjNnSULbUJaSatD3j4xLNhU3x/pub">
            Política de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
