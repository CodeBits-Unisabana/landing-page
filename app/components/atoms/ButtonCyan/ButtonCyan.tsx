import styles from "./ButtonCyan.module.scss";

interface IButtonCyan {
  text: string;
  link: string;
}

const ButtonCyan = ({ text, link }: IButtonCyan) => {
  return (
    <a href={link} className={styles.button}>
      {text}
    </a>
  );
};

export default ButtonCyan;
