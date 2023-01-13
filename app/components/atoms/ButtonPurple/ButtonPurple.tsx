import styles from "./ButtonPurple.module.scss";

interface IButtonPurple {
  text: string;
}

const ButtonPurple = ({ text }: IButtonPurple) => {
  return <button className={styles.button}>{text}</button>;
};

export default ButtonPurple;
