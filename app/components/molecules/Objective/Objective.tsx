import styles from "./Objective.module.scss";

interface IObjective {
  number: string;
  description: string;
}

const Objective = ({ number, description }: IObjective) => {
  return (
    <div className={styles.objective}>
      <h3 className={styles.title}>{number}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Objective;
