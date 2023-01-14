import styles from "./Error.module.scss";

const Error = ({ children }) => {
  return (
    <div className={styles.error} style={{ color: "red" }}>
      {children}
    </div>
  );
};

export default Error;
