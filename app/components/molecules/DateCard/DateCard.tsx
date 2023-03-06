import styles from "./DateCard.module.scss";

interface IDateCard {
  day: string;
  month: string;
  title: string;
  tutor: string;
}

const DateCard = ({ day, month, title, tutor }: IDateCard) => {
  return (
    <>
      <div className={styles.dateCard}>
        <div className={styles.date}>
          <span>{day}</span>
          <span>{month}</span>
        </div>
        <div className={styles.description}>
          <h3>{title}</h3>
          <span>{tutor}</span>
        </div>
      </div>
    </>
  );
};

export default DateCard;
