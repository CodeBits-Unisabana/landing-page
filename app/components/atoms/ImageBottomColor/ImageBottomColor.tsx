import styles from "./ImageBottomColor.module.scss";

interface IImageBottomColor {
  image: string;
  color: "cyan" | "purple";
}

const ImageBottomColor = ({ image, color }: IImageBottomColor) => {
  return (
    <img
      src={image}
      alt=""
      className={styles.imageBottomColor}
      style={{ borderBottom: `15px solid var(--${color}-color);` }}
    />
  );
};

export default ImageBottomColor;
