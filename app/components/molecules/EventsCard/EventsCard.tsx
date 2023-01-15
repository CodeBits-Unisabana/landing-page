import styles from "./EventsCard.module.scss";

interface IEventsCard {
  image: string;
  title: string;
  days: string;
  hours: string;
  color: "cyan" | "purple";
}

const EventsCard = ({ image, title, days, hours, color }: IEventsCard) => {
  return (
    <div
      className={styles.eventsCard}
      style={{ borderBottom: `12px solid var(--${color}-color)` }}
    >
      <img src={image} alt="" className={styles.image} />
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.days}>{days}</span>
        <span className={styles.hours}>{hours}</span>
      </div>
    </div>
  );
};

export default EventsCard;
