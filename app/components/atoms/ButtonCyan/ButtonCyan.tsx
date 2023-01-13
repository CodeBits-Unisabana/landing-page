import styles from "./ButtonCyan.module.scss";

interface IButtonCyan {
  text: string;
}

const ButtonCyan = ({ text }: IButtonCyan) => {
  return <button className={styles.button}>{text}</button>;
};

export default ButtonCyan;
