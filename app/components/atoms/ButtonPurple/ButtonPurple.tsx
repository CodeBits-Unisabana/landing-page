import Link from "next/link";

import styles from "./ButtonPurple.module.scss";

interface IButtonPurple {
  text: string;
  link: string;
}

const ButtonPurple = ({ text, link }: IButtonPurple) => {
  return (
    <Link href={link} className={styles.button}>
      {text}
    </Link>
  );
};

export default ButtonPurple;
