import Link from "next/link";

import styles from "./ButtonPurple.module.scss";

interface IButtonPurple {
  text: string;
  link: string;
}

const ButtonPurpleLink = ({ text, link }: IButtonPurple) => {
  return (
    <a href={link} className={styles.button}>
      {text}
    </a>
  );
};

export default ButtonPurpleLink;
