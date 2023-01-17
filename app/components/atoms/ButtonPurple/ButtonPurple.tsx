import styles from "./ButtonPurple.module.scss";

interface IButtonPurple {
  text: string;
  link: string;
}

const ButtonPurple = ({ text, link }: IButtonPurple) => {
  return (
    <a href={link} className={styles.button}>
      {text}
    </a>
  );
};

export default ButtonPurple;
